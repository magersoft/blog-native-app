import { createStackNavigator } from 'react-navigation-stack';
import { CreateScreen } from '../../screens/CreateScreen';
import { stackConfig } from '../stackConfig';

export const CreateNavigator = createStackNavigator({
  Create: CreateScreen
}, stackConfig);
