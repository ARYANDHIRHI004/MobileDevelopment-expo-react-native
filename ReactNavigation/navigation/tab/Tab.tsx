import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import home from '../../screens/home';
import profiles from '../../screens/profiles';
import { createStaticNavigation } from '@react-navigation/native';
import about from '../../screens/about';

const MyTabs = createBottomTabNavigator({
  screens: {
    Home: home,
    Profile: profiles,
    About:about ,
  }
});

export const TabNavigation = createStaticNavigation(MyTabs);
