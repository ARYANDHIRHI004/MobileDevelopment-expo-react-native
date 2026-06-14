import { Image } from "expo-image";
import { Link } from "expo-router";
import React from "react";
import { StyleSheet, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Home = () => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: "center",
        padding: 10,
        alignItems: "center",
        backgroundColor: "black",
      }}
    >
      <Image
        style={styles.image}
        source={require("../../assets/images/icon.png")}
      />
      <Text style={styles.welcome}>Welcome To my App</Text>
      <Link style={styles.link} href="/login">
        {" "}
        Go to Login Page
      </Link>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  welcome: {
    fontSize: 30,
    textAlign: "center",
    color: "white",
    backgroundColor: "#f73a00",
    padding: 10,
    borderRadius: 20,
  },

  link: {
    color: "#0e00a6",
    padding: 10,
    textAlign: "center",
    backgroundColor: "#c0e1f0",
    width: "50%",
    marginTop: 5,
    borderRadius: 20,
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 20,
    margin: 10,
  },
});
