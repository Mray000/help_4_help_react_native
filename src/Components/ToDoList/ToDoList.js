import React, { useState } from "react";
import Navbar from "./Navbar";
import AddNote from "./AddNote";
import NodeContainer from "./NodeContainer";
import { StyleSheet, View, ScrollView } from "react-native";

const ToDoList = () => {
  const [notes, SetNotes] = useState([]);
  const AddNoteFunc = (text) => {
    SetNotes((prevNotes) => {
      let newNote = { id: Date.now().toString(), text: text };
      return [...prevNotes, newNote];
    });
  };
  const DeleteNoteFunc = (id) => {
    SetNotes((prevNotes) => {
      return prevNotes.filter((n) => n.id !== id);
    });
  };
  return (
    <View style={styles.container}>
      <Navbar />
      <AddNote AddNote={(text) => AddNoteFunc(text)} />
      <ScrollView>
        <NodeContainer notes={notes} DeleteNote={(id) => DeleteNoteFunc(id)} />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
  },
});

export default ToDoList;
