import { Platform } from 'react-native';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { bottomTabConfig } from '../bottomTabConfig';
import { THEME } from '../../theme';

export const BottomNavigator =
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
