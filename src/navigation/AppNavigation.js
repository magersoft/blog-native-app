import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { Platform } from 'react-native';
import { MainScreen } from '../screens/MainScreen';
import { PostScreen } from '../screens/PostScreen';
import { THEME } from '../theme';
import { BookedScreen } from '../screens/BookedScreen';
import { Ionicons } from '@expo/vector-icons';
import { AboutScreen } from '../screens/AboutScreen';
import { CreateScreen } from '../screens/CreateScreen';

const stackConfig = {
  defaultNavigationOptions: {
    headerStyle: {
      backgroundColor: Platform.OS === 'android' ? THEME.MAIN_COLOR : 'white'
    },
    headerTintColor: Platform.OS === 'android' ? 'white' : THEME.MAIN_COLOR
  }
};

const PostNavigator = createStackNavigator({
  Main: MainScreen,
  Post: PostScreen
}, stackConfig);

const BookedNavigator = createStackNavigator({
  Booked: BookedScreen,
  Post: PostScreen
}, stackConfig);

const bottomTabConfig = {
  Post: {
    screen: PostNavigator,
    navigationOptions: {
      tabBarLabel: 'Posts',
      tabBarIcon: info => <Ionicons name='ios-albums' size={25} color={info.tintColor} />
    }
  },
  Booked: {
    screen: BookedNavigator,
    navigationOptions: {
      tabBarLabel: 'Favorite',
      tabBarIcon: info => <Ionicons name='ios-star' size={25} color={info.tintColor} />
    }
  }
};

const BottomNavigator =
  Platform.OS === 'android'
    ?
  createMaterialBottomTabNavigator(bottomTabConfig, {
    activeTintColor: 'white',
    shifting: true,
    barStyle: {
      backgroundColor: THEME.MAIN_COLOR
    }
  })
    :
  createBottomTabNavigator(bottomTabConfig, {
      tabBarOptions: {
      activeTintColor: THEME.MAIN_COLOR
    }
  });

const AboutNavigator = createStackNavigator({
  About: AboutScreen
}, stackConfig);

const CreateNavigator = createStackNavigator({
  Create: CreateScreen
}, stackConfig);

const MainNavigator = createDrawerNavigator({
  PostTabs: {
    screen: BottomNavigator,
    navigationOptions: {
      drawerLabel: 'Home'
    }
  },
  About: {
    screen: AboutNavigator
  },
  Create: {
    screen: CreateNavigator
  }
}, {
  contentOptions: {
    activeTintColor: THEME.MAIN_COLOR,
    labelStyle: {
      fontFamily: 'open-sans-bold'
    }
  }
});

export const AppNavigation = createAppContainer(MainNavigator);
