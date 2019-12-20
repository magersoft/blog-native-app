import { createStackNavigator } from 'react-navigation-stack';
import { BookedScreen } from '../../screens/BookedScreen';
import { PostScreen } from '../../screens/PostScreen';
import { stackConfig } from '../stackConfig';

export const BookedNavigator = createStackNavigator({
  Booked: BookedScreen,
  Post: PostScreen
}, stackConfig);
