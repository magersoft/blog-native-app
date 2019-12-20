import React from 'react';
import { PostNavigator } from './navigators/PostNavigator';
import { BookedNavigator } from './navigators/BookedNavigator';
import { Ionicons } from '@expo/vector-icons';

export const bottomTabConfig = {
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
