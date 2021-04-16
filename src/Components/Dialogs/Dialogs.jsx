import React from "react";
import People from "./Dialogs-People";
import Message from "./Dialogs-Message";
import AddMessage from "./Dialogs-AddMessage";
import { compose } from "redux";
import { connect } from "react-redux";
import { withAuthRedirect } from "../../utils/AuthRedirect";
import { ImageBackground, ScrollView, StyleSheet, View } from "react-native";
// import { withRouter } from "react-router-native";
import DialogsHeader from "./Dialogs-Header";

const image = {
  uri:
    "https://i.pinimg.com/originals/0e/3e/68/0e3e683a50835eee5c54c48f6c590775.jpg",
};

const Dialogs = (props) => {
  // console.log(props.userId);
  return (
    <View style={styles.container}>
      {!props.userId && <People navigation={props.navigation} />}
      {props.userId && (
        <View>
          <DialogsHeader userId={props.userId} navigation={props.navigation} />
          <ScrollView style={styles.messages}>
            <Message />
          </ScrollView>
          <View>
            <AddMessage />
          </View>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#193248",
  },
  messages: {
    width: 400,
    // backgroundColor: "red",
  },
});

export default Dialogs;
