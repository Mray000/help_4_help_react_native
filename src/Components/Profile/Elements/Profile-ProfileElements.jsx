import React from "react";
import Contacts from "./Profile-Contacts";
import Job from "./Profile-Job";
import Status from "./Profile-Status";
import Photo from "./Profile-Photo";
import { View, Text, StyleSheet } from "react-native";
import ModalMore from "./Profile-ModalMore";
import Country from "./Profile-Country";

const ProfileElements = (props) => {
  // console.log(props);
  const mine = props.userId === props.myId;
  return (
    <View style={styles.container}>
      <View style={styles.photo}>
        <Photo
          photo={props.profile.photos.large}
          mine={mine}
          UpdatePhoto={props.UpdatePhoto}
        />
      </View>
      <View style={styles.name_status_more}>
        <View style={styles.name_status}>
          <View>
            <Text style={styles.name}>{props.profile.fullName}</Text>
          </View>
          <Status
            UpdateStatus={props.UpdateStatus}
            aboutMe={props.profile.aboutMe}
            userId={props.profile.userId}
          />
        </View>
        <View>
          <Country />
        </View>
        <View>
          <ModalMore
            lookingForAJob={props.profile.lookingForAJob}
            lookingForAJobDescription={props.profile.lookingForAJobDescription}
            contacts={props.profile.contacts}
            status={props.profile.aboutMe}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginTop: 10,
    marginLeft: 15,
    marginRight: 15,
    width: 400,
    justifyContent: "space-around",
  },
  name_status_more: {
    marginLeft: 8,
    // justifyContent: "space-around",
    // color: "white",
    height: 170,
  },
  name_status: {
    backgroundColor: "#D04B38",
    width: 225,
    paddingLeft: 8,
    borderRadius: 10,
  },
  contacts: {
    // backgroundColor: "red",
  },
  photo: {
    // marginLeft: 10,
  },
  name: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
  },
});

export default ProfileElements;
