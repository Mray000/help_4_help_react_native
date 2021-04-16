import React from "react";
import { View, StyleSheet } from "react-native";
import Contact from "../../../mini-components/ContactCreator";

const Contacts = (contacts) => {
  return (
    <View style={styles.container}>
      {Object.entries(contacts).map((c) => {
        return Contact(c[1], c[0]);
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // marginTop: -2,
  },
});

export default Contacts;
