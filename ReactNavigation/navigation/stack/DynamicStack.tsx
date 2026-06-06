import * as React from 'react';
import { View, Text } from 'react-native';
import { createStaticNavigation, NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import home from '../../screens/home';
import about from '../../screens/about';
import profiles from '../../screens/profiles';

const Stack= createNativeStackNavigator();
function MyStack(){
    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={home} options={{
                title:"Dashboard",
                headerStyle:{
                    backgroundColor:"#000000"
                },
                headerTintColor:"#fff",
                headerTitleStyle:{
                    color:"#fff",
                    fontWeight:"bold",
                    fontFamily:"monospace"
                },
                headerTitleAlign:"center"
            }}/>
            <Stack.Screen name="About" component={about} />
            <Stack.Screen name="Profile" component={profiles} />
        </Stack.Navigator>
    )
}


export default function DynamicStack() {
  return (
    <NavigationContainer>
        <MyStack />
    </NavigationContainer>
  )
}


