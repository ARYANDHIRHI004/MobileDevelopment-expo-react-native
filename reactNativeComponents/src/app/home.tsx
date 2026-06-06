import { Image, Pressable, StyleSheet, Switch, Text, TextInput, View } from "react-native";
import React from "react";

const home = () => {
  return (
    <View>
      <Text numberOfLines={3} style={{ fontSize: 20, fontWeight: "bold" }}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt error
        dolorum magnam ratione, neque asperiores cupiditate facilis excepturi
        aliquam nam illum iste illo beatae accusamus dolores assumenda iure nemo
        tenetur ea! Autem, quod harum atque consectetur iste possimus quis
        facilis quae eligendi suscipit, aperiam accusantium.
      </Text>
      <Image source={{
        uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTY4hoIaghtOYiuSokk4ql9dMamaN_zk2UqZg&s"
      }}
      width={100}
      height={300}
      blurRadius={5}
      />

      <TextInput
        placeholder="Enter Todo"
        style={{
            borderWidth: 1,
            borderColor: "black",
            margin: 10,
            borderRadius:10,
            padding:5
        }}
      />

      <Pressable onPress={()=>alert("This is Aryan")}>
        <Text>Click Me</Text>
      </Pressable>

      <Switch/>

    </View>
  );
};

export default home;

const styles = StyleSheet.create({});
