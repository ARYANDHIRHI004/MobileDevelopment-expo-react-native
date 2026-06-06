import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Button } from '@react-navigation/elements';
import { useNavigation } from '@react-navigation/native'

const profiles = () => {
  const navigation = useNavigation<any>();
    return (
      <View>
        <Text>Profile</Text>
        <Button onPress={()=>navigation.popTo("Home")}>Go to Home</Button>
      </View>
    )
}

export default profiles

const styles = StyleSheet.create({})