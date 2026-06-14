import { Button } from "@react-navigation/elements";
import React from "react";
import { StyleSheet, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const login = () => {
  return (
    <SafeAreaView>
      <Text>login</Text>
      <Button screen="signUp" >Go to Sign Up</Button>
    </SafeAreaView>
  );
};

export default login;

const styles = StyleSheet.create({});
