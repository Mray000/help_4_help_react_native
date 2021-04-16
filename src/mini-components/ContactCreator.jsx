import React from "react";
import { Linking, StyleSheet, Text, View } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
// import github from "./../images/GitHub.png";
// import vk from "./../images/Vk.png";
// import facebook from "./../images/Facebook.png";
// import instagram from "./../images/Instagram.png";
// import twitter from "./../images/Twitter.png";
// import website from "./../images/Website.png";
// import youtube from "./../images/Youtube.png";
// import mainLink from "./../images/MainLink.png";

const Contact = (link, text_img) => {
  var color = {
    github: "#323131",
    vk: "#5181B8",
    facebook: "#4867AA",
    instagram: "pink",
    twitter: "#1DA1F2",
    youtube: "#FF0000",
  };
  const ucSymbols = (text) => {
    if (text === "github") return "GitHub";
    return text[0].toUpperCase() + text.slice(1);
  };
  return (
    <>
      {link && (
        <View style={styles.container} key={link}>
          <Icon name={text_img} color={color[text_img]} size={30} />
          <Text
            style={styles.text}
            onPress={() => Linking.openURL(`http://${link}`)}
          >
            {ucSymbols(text_img)}
          </Text>
        </View>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginTop: 4,
    alignItems: "center",
  },
  text: {
    color: "gold",
    fontWeight: "bold",
    fontSize: 20,
    marginLeft: 3,
  },
});

export default Contact;
