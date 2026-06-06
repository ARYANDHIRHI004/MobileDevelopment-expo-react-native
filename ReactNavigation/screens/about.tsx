import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Button } from '@react-navigation/elements'
import { useNavigation } from '@react-navigation/native'



const about = ({route}: any) => {
    const navigation = useNavigation<any>();
    // const {username} = route.params;
  return (
    <View>
      <Text>about {"Anonymous"}</Text>
      <Button onPress={()=>navigation.navigate('Profile')}>Go to Profile</Button>
    </View>
  )
}

export default about

const styles = StyleSheet.create({})