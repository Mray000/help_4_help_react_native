import React, { useState } from "react";
import { connect } from "react-redux";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Redirect } from "react-router-native";
import { SetNavigation } from "../../Redux/Reducers/AppReducer";
// import { LinearGradient } from "expo";
const People = (props) => {
  const [redirect, SetRedirect] = useState([false, 0]);
  console.log(props);
  console.log(props);
  if (redirect[0]) {
    props.navigation.navigate("dialogs", {
      userId: redirect[1],
    });
  }

  return (
    <ScrollView style={styles.container}>
      {props.people.map((humon) => {
        return (
          <View style={{ alignItems: "center" }} key={humon.id}>
            <TouchableOpacity
              style={styles.person_container}
              onPress={() => {
                SetRedirect([true, humon.id]);
                props.SetNavigation(false);
              }}
            >
              <Image
                source={require("./../../images/ava.png")}
                style={styles.img}
              />
              <View style={styles.container2}>
                <Text style={styles.text}>{humon.name}</Text>
                <Text style={styles.text}>Last message</Text>
              </View>
            </TouchableOpacity>
            <View
              style={{
                borderWidth: 1,
                width: 395,
                borderColor: "#4E97B7",
              }}
            />
          </View>
        );
      })}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  person_container: {
    alignItems: "center",
    flexDirection: "row",
    width: 410,
    height: 65,
  },
  container2: {
    height: 55,
    justifyContent: "space-around",
  },
  linearGradient: {
    flex: 1,
  },
  text: {
    color: "white",
  },
  img: {
    width: 55,
    height: 55,
  },
});

const mapStateToProps = (state) => {
  return {
    people: state.Dialogs.people,
  };
};

export default connect(mapStateToProps, { SetNavigation })(People);
