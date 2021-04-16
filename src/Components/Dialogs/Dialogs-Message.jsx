import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { connect } from "react-redux";

const Message = (props) => {
  return (
    <View>
      {props.message.map((message) => (
        <View key={message.id}>
          <View>
            <Text style={styles.text}>{message.message}</Text>
          </View>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    color: "white",
  },
});

const mapStateToProps = (state) => {
  return {
    message: state.Dialogs.message,
  };
};

export default connect(mapStateToProps)(Message);
