import React from "react";
import { ActionsContainer, Button } from "react-native-clean-form";
import { AddPostFunction } from "./../../Redux/Reducers/ProfileReducer";
import { reduxForm, Field } from "redux-form";
import { connect } from "react-redux";
import { View, StyleSheet } from "react-native";
import MyTextInput from "../../mini-components/MyInput";
import { required } from "../../utils/Validaters";

const AddPostForm = (props) => {
  return (
    <View style={styles.container}>
      <Field
        component={MyTextInput}
        name="post"
        placeholder="New Post"
        style={styles.input}
        validate={[required]}
      />
      <ActionsContainer style={styles.button}>
        <Button
          icon="md-checkmark"
          iconPlacement="right"
          submitting={props.submitting}
          onPress={props.handleSubmit(props.onSubmit)}
        >
          Save
        </Button>
      </ActionsContainer>
    </View>
  );
};

const AddPostReduxForm = reduxForm({
  form: "post",
})(AddPostForm);

const AddPost = (props) => {
  const onSubmit = (formData) => {
    if (formData.post) {
      props.AddPostFunction(formData.post);
      formData.post = "";
    }
  };
  return <AddPostReduxForm onSubmit={onSubmit} />;
};

const styles = StyleSheet.create({
  button: {
    // backgroundColor: "blue",
    color: "white",
    // textAlign: "center",
    // justifyContent: "center",
    width: "30%",
    // height: 150,
    // marginTop: 30,
  },
  container: {
    // flex: 1,
    flexDirection: "row",
    marginTop: "10%",
    // margin: "6%",
    width: "100%",
    // backgroundColor: "pink",
    // textAlign: "center",
    justifyContent: "space-around",
  },
  input: {
    backgroundColor: "white",
    borderStyle: "solid",
    // borderWidth: 2,
    borderColor: "pink",
    width: 280,
    height: 45,
    // borderRadius: 7,
    paddingLeft: "1%",
    paddingRight: "1%",
  },
});

export default connect(Object, { AddPostFunction })(AddPost);
