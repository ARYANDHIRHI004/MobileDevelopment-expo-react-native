import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStaticNavigation } from "@react-navigation/native";
import home from "../../screens/home";
import profiles from "../../screens/profiles";
import about from "../../screens/about";
import { createNativeStackNavigator } from "@react-navigation/native-stack";


const MyStack = createNativeStackNavigator({
  screens: {
    Home: home,
    Profile: profiles,
  },
});

export const StackNavigation = createStaticNavigation(MyStack);