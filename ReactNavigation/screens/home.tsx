import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Button } from '@react-navigation/elements'
import { useNavigation } from '@react-navigation/native'

const home = () => {

    const navigation = useNavigation<any>();

  return (
    <View>
      <Text>home</Text> 
      <Button onPress={()=>navigation.navigate('Profile')}>Go to About</Button>
    </View>
  )
}

export default home

const styles = StyleSheet.create({})