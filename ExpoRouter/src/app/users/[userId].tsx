import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useLocalSearchParams } from 'expo-router'
import { SafeAreaView } from 'react-native-safe-area-context'

const UserId = () => {

  const {userId} = useLocalSearchParams()
  

  return (
    <SafeAreaView>
      <Text>UserId {userId}</Text>
    </SafeAreaView>
  )
}

export default UserId

const styles = StyleSheet.create({})