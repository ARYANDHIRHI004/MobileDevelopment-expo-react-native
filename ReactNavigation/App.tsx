import * as React from 'react';
import { View, Text } from 'react-native';
import { createStaticNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import home from './screens/home';
import about from './screens/about';
import profiles from './screens/profiles';
import DynamicStack from './navigation/stack/DynamicStack';

const RootStack = createNativeStackNavigator({
  screens: {
    Home: home,
    About: about,
    Profile: profiles,
  },
});

const Navigation = createStaticNavigation(RootStack);

export default function App() {
  return <DynamicStack />;
}