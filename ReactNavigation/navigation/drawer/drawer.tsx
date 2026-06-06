import { createDrawerNavigator } from '@react-navigation/drawer';
import home from '../../screens/home';
import profiles from '../../screens/profiles';
import { createStaticNavigation } from '@react-navigation/native';

const MyDrawer = createDrawerNavigator({
  screens: {
    Home: home,
    Profile: profiles,
  },
});

export const DrawerNavigation = createStaticNavigation(MyDrawer);