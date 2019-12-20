import React from 'react';
import { createAppContainer } from 'react-navigation';
import { MainNavigator } from './navigators/MainNavigator';

export const AppNavigation = createAppContainer(MainNavigator);
