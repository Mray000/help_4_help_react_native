import React, { useState } from "react";
import { Button, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Icon from "react-native-vector-icons/AntDesign";
import Modal from "react-native-modal";
import Job from "./Profile-Job";
import Contacts from "./Profile-Contacts";

const ModalMore = (props) => {
  const [isModalVisible, setModalVisible] = useState(false);
  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={toggleModal} style={styles.moreContainer}>
        <Text style={styles.text}>More Information</Text>
      </TouchableOpacity>
      <Modal
        isVisible={isModalVisible}
        style={styles.modal}
        onSwipeComplete={() => setModalVisible(false)}
        swipeDirection="down"
      >
        <View style={styles.constainer2}>
          <View style={styles.statusContainer}>
            <Icon name="message1" size={24} />
            <Text style={styles.status}>{props.status}</Text>
          </View>
          <View>
            <Text>Job</Text>
            <Job
              lookingForAJob={props.lookingForAJob}
              lookingForAJobDescription={props.lookingForAJobDescription}
            />
          </View>
          <View>
            <Text>Contacts</Text>
            <Contacts {...props.contacts} />
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // justifyContent: "center",
    // alignItems: "center",
  },
  constainer2: {
    backgroundColor: "white",
    width: 410,
    borderRadius: 10,
    marginTop: 500,
    height: 350,
  },
  modal: {
    flex: 1,
    margin: 0,
  },
  text: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
    // textTransform: "uppercase",
  },
  moreContainer: {
    backgroundColor: "#D04B38",
    borderRadius: 6,
    width: 225,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 15,
  },
  statusContainer: {
    flexDirection: "row",
    alignItems: "center",
    width: 400,
    marginLeft: 20,
    marginTop: 20,
  },
  status: {
    fontSize: 20,
    fontWeight: "bold",
  },
  close: {
    marginLeft: 362,
    marginTop: -13,
  },
});

export default ModalMore;
