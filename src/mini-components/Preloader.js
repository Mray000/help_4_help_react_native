import React from "react";
import { View, Text, Image, ImageBackground, StyleSheet } from "react-native";
import { connect } from "react-redux";
import { SetNavigation } from "../Redux/Reducers/AppReducer";

// const Preloader = ({ SetNavigation }) => {
//   return (
//     <View style={styles.container}>
//       <Image source={require("../images/preloader.gif")} style={styles.image} />
//     </View>
//   );
// };
class Preloader extends React.Component {
  componentDidMount() {
    this.props.SetNavigation(false);
  }
  componentWillUnmount() {
    this.props.SetNavigation(true);
  }
  render() {
    return (
      <View style={styles.container}>
        <Image
          source={require("../images/preloader.gif")}
          style={styles.image}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#193248",
    flex: 1,
  },
  image: {
    width: 100,
    height: 100,
    marginLeft: 20,
  },
});

export default connect(Object, { SetNavigation })(Preloader);
