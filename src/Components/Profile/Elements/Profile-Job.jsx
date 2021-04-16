import React from "react";
import { Image, View, Text, StyleSheet } from "react-native";
import { Icon } from "react-native-elements";

// const img = {
//   green_indicator: { uri: require("./../../../images/green_indicator.svg") },
//   red_indicator: { uri: require("./../../../images/red_indicator.svg") },
// };

const Job = (job) => {
  // console.log(job);
  return (
    <View style={styles.container}>
      {job.lookingForAJob ? (
        <View style={styles.container}>
          <View>
            <Icon name="pluscircleo" color="green" type="antdesign" />
          </View>
          <Text style={styles.text}>
            {job.lookingForAJobDescription
              ? job.lookingForAJobDescription
              : "i am looking for a job"}
          </Text>
        </View>
      ) : (
        <View style={styles.container}>
          <View>
            <Icon name="minuscircleo" color="red" type="antdesign" />
          </View>
          <Text style={styles.text}>
            {job.lookingForAJobDescription
              ? job.lookingForAJobDescription
              : "i am not looking for a job"}
          </Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    // marginTop: 27,
  },
  text: {
    // color: "green",
    fontWeight: "bold",
    fontSize: 17,
    color: "red",
  },
});

export default Job;
