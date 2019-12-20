import { createDrawerNavigator } from 'react-navigation-drawer';
import { BottomNavigator } from './BottomNavigator';
import { AboutNavigator } from './AboutNavigator';
import { CreateNavigator } from './CreateNavigator';
import { THEME } from '../../theme';

export const MainNavigator = createDrawerNavigator({
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
