import { createStackNavigator } from 'react-navigation-stack';
import { AboutScreen } from '../../screens/AboutScreen';
import { stackConfig } from '../stackConfig';

export const AboutNavigator = createStackNavigator({
  About: AboutScreen
}, stackConfig);
