import React from "react";
import { View, StyleSheet, Text, Button } from "react-native";

const NodeContainer = ({ notes, DeleteNote }) => {
  return (
    <View>
      {notes.map((n) => {
        return (
          <View key={n.id} style={styles.container}>
            <View style={styles.navbar}>
              <Text style={styles.text}>{n.text}</Text>
            </View>
            <View style={styles.button}>
              <Button
                title="&#10006;"
                onPress={() => DeleteNote(n.id)}
                color="pink"
              />
            </View>
          </View>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
  },
  navbar: {
    backgroundColor: "white",
    height: 100,
    width: 320,
    position: "absolute",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
  },
  text: {
    color: "black",
    fontSize: 20,
  },
  button: {
    width: 50,
    height: 100,
    marginLeft: 250,
    marginTop: 10,
    borderRadius: 100,
  },
});

export default NodeContainer;
