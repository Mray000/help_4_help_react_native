import React from "react";
// import ava from "./../../../images/ava.png";
import { Image, StyleSheet, Text, View } from "react-native";
// import { Input } from "react-native-clean-form";
// import { TextInput } from "react-native-gesture-handler";
// import { NavLink } from "react-router-dom";
// import AndroidWebView from "react-native-webview-file-upload-android";
// const Photo = ({ photo, mine, UpdatePhoto }) => {

//   return mine ? (
//     <>
//       <View>
//         <label htmlFor="inputPhoto">
//           <img src={photo ? photo : ava} alt="" id="profile-large-ava" />
//         </label>
//         <input
//           id="inputPhoto"
//           style={{ display: "none" }}
//           type="file"
//           onChange={(e) => {
//             e.target.files[0] && UpdatePhoto(e.target.files[0]);
//           }}
//         />
//       </View>
//       {/* <NavLink to="/edit" className="edit-profile-navlink">
//         Edit profile
//       </NavLink> */}
//     </>
//   ) : (
//     <img src={photo ? photo : ava} alt="" id="profile-large-ava" />
//   );
// };

const Photo = ({ photo, navigation }) => {
  const image = {
    uri: photo,
  };
  return (
    <View style={styles.container}>
      <Image
        source={photo ? image : require("../../../images/ava.png")}
        style={styles.img}
      />
      <Text
        onPress={() => {
          navigation.navigate("edit");
        }}
        style={styles.text}
      >
        Edit profile
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#D04B38",
    width: 160,
    borderRadius: 10,
    height: 170,
    // padding: 10,
  },
  img: {
    borderRadius: 10,
    width: 130,
    height: 130,
  },
  text: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },
});

export default Photo;
