import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import home from '../../screens/home';
import profiles from '../../screens/profiles';
import { createStaticNavigation } from '@react-navigation/native';
import about from '../../screens/about';


const MyTabs = createMaterialTopTabNavigator({
  screens: {
    Home: home,
    Profile: profiles,
    About: about,
  },
});

export const TopTabNavigation = createStaticNavigation(MyTabs, );