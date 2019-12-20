import { createStackNavigator } from 'react-navigation-stack';
import { MainScreen } from '../../screens/MainScreen';
import { PostScreen } from '../../screens/PostScreen';
import { stackConfig } from '../stackConfig';

export const PostNavigator = createStackNavigator({
  Main: MainScreen,
  Post: PostScreen
}, stackConfig);
