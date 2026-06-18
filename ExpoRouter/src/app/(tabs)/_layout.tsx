import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'


const TabsComponent = () => {
  return (
    <Tabs screenOptions={{headerShown:false}}>   
      <Tabs.Screen name="home" options={{ title: 'Home' }} /> 
      <Tabs.Screen name="(auth)" options={{ title: 'Cred' }} /> 
      <Tabs.Screen name="(posts)" options={{ title: 'Posts' }} /> 
    </Tabs>
  )
}

export default TabsComponent
