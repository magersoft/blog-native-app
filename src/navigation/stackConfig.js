import { Platform } from 'react-native';
import { THEME } from '../theme';

export const stackConfig = {
  defaultNavigationOptions: {
    headerStyle: {
      backgroundColor: Platform.OS === 'android' ? THEME.MAIN_COLOR : 'white'
    },
    headerTintColor: Platform.OS === 'android' ? 'white' : THEME.MAIN_COLOR
  }
};
