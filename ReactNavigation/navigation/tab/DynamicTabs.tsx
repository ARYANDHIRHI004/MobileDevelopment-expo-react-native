import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import home from '../../screens/home';
import profiles from '../../screens/profiles';
import { NavigationContainer } from '@react-navigation/native';

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={home} options={{
        title:"Dashboard",
      }} />
      <Tab.Screen name="Profile" component={profiles} />
    </Tab.Navigator>
  );
}

export default function DynamicTab() {
  return (
    <NavigationContainer>
        <MyTabs />
    </NavigationContainer>
  )
}
