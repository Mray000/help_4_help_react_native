import React, { useState } from "react";
import { View, StyleSheet, TextInput, Button } from "react-native";

const AddNote = (props) => {
  const [symbols, SetSymbols] = useState("");

  const onSubmit = () => {
    symbols && props.AddNote(symbols);
    SetSymbols("");
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        onChangeText={(s) => SetSymbols(s)}
        value={symbols}
      />
      <View style={styles.button}>
        <Button
          title="New Node"
          onPress={() => onSubmit(symbols)}
          style={styles.button}
          color="pink"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginTop: "10%",
    margin: "6%",
    justifyContent: "space-around",
  },
  input: {
    backgroundColor: "white",
    borderStyle: "solid",
    borderWidth: 2,
    borderColor: "pink",
    width: "70%",
    borderRadius: 7,
    paddingLeft: "1%",
    paddingRight: "1%",
  },
  button: {
    color: "pink",
  },
  text: {
    color: "pink",
  },
});

export default AddNote;
