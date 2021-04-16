import React from "react";
import { View, StyleSheet, Text } from "react-native";

const Navbar = () => {
  return (
    <View style={styles.navbar}>
      <Text style={styles.text}>ToDo List</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  navbar: {
    backgroundColor: "white",
    height: "8%",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  text: {
    color: "black",
    fontSize: 20,
  },
});

export default Navbar;
