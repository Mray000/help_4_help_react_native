import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Field, reduxForm } from "redux-form";
import MyTextInput from "../../../mini-components/MyInput";
import { required } from "../../../utils/Validaters";

const StatusForm = (props) => {
  return (
    <View style={styles.container}>
      <Field
        validate={[required]}
        multiline={true}
        // numberOfLines={4}
        component={MyTextInput}
        name="status"
        style={styles.input}
        submitting={props.submitting}
        // onBlur={props.handleSubmit(props.onSubmit)}
      />
      <View style={styles.container2}>
        <TouchableOpacity onPress={() => props.close()} style={styles.to}>
          <Text style={styles.text}>Close</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={props.handleSubmit(props.onSubmit)}
          style={styles.to}
        >
          <Text style={styles.text}>Save</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

// const maxLength10 = maxLength(10);

const styles = StyleSheet.create({
  container: {},
  container2: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  input: {
    borderStyle: "solid",
    borderWidth: 1,
    borderRadius: 5,
    borderColor: "#193248",
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
    height: 60,
    width: 200,
    // paddingLeft: 3,
    padding: 3,
    // paddingTop: -5,
    backgroundColor: "#122433",
  },
  text: {
    color: "white",
    fontSize: 16,
  },
  to: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#4169E1",
    marginTop: 20,
    width: 90,
    // margin: 20,
    height: 30,
    borderRadius: 10,
  },
});

export const StatusReduxForm = reduxForm({
  form: "status",
})(StatusForm);
