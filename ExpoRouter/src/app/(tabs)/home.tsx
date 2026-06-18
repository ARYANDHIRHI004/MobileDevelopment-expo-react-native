import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Button } from '@react-navigation/elements'

const home = () => {
  return (
    <View>
      <Text>home</Text>
      <Button screen={"Settings"}>go to Settings</Button>
    </View>
  )
}

export default home

const styles = StyleSheet.create({})