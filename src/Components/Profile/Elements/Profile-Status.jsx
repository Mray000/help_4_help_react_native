import React, { useEffect } from "react";
import { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Modal from "react-native-modal";
import { startSubmit } from "redux-form";
import { StatusReduxForm } from "./Profile-StatusForm";

const Status = (props) => {
  const [isModalVisible, SetModalVisible] = useState(false);
  const [status, SetStatus] = useState(props.aboutMe);
  const toggleModal = () => {
    SetModalVisible(!isModalVisible);
  };
  useEffect(() => {
    SetStatus(props.aboutMe);
  }, [props.aboutMe]);

  const onSubmit = (formData) => {
    SetModalVisible(!isModalVisible);
    SetStatus(formData.status);
    props.UpdateStatus(formData.status);
  };

  let statusr;

  if (status.length > 10) {
    statusr = `${status.substr(0, 10)}...`;
  } else statusr = status;

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={toggleModal} style={styles.status_container}>
        <Text style={styles.text}>{statusr}</Text>
      </TouchableOpacity>
      <Modal
        isVisible={isModalVisible}
        style={styles.modal}
        onSwipeComplete={() => {
          toggleModal(!isModalVisible);
          playSound();
        }}
        swipeDirection="down"
      >
        <View style={styles.container2}>
          <View style={styles.interesting}>
            <Text style={styles.text_interesting}>What about you?</Text>
          </View>
          <StatusReduxForm
            onSubmit={onSubmit}
            status={status}
            close={() => toggleModal(!isModalVisible)}
            initialValues={{ status: status }}
          />
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 110,
    height: 30,
    // marginTop: 10,
  },

  status_container: {
    marginTop: 2,
    marginLeft: 2,
    width: 130,
  },
  text: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  container2: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#193248",
    // backgroundColor: "white",
    width: 270,
    borderRadius: 10,
    marginBottom: 200,
    height: 200,
  },
  interesting: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#4169E1",
    width: 200,
    height: 40,
    borderRadius: 6,
    marginBottom: 20,
  },
  text_interesting: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  modal: {
    flex: 1,
    margin: 0,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Status;
