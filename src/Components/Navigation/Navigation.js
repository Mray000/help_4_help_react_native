// import React from "react";
// import { StyleSheet, View } from "react-native";
// import { Icon } from "react-native-elements";
// import { connect } from "react-redux";
// import { Link, withRouter } from "react-router-native";
// import { compose } from "redux";
// import LinkCreator from "../../mini-components/LinkCreator";
// const Tab = createBottomTabNavigator();

// const Navigation = ({ navigation }) => {
//   console.log(isNavigation);
//   const navigators = ["profile", "dialogs", "music", "settings"];
//   if (!isNavigation) {
//     return <View />;
//   } else
//     return (
//       <View>
//         <View style={styles.nav}>
//           {navigators.map((n) => {
//             if (n === "profile")
//               return <LinkCreator link="profile" name="home" type={null} />;
//             if (n === "dialogs")
//               return <LinkCreator link="dialogs" name="message-square" />;
//             else {
//               return <LinkCreator link={n} />;
//             }
//           })}
//         </View>
//       </View>
//     );
// };
// const styles = StyleSheet.create({
//   nav: {
//     padding: 10,
//     flexDirection: "row",
//     justifyContent: "space-around",
//     backgroundColor: "#132636",
//   },
// });

// const mapStateToProps = (state) => ({
//   isNavigation: state.App.isNavigation,
// });

// export default compose(connect(mapStateToProps), withRouter)(Navigation);
import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Icon } from "react-native-elements";

const MyTabBar = ({ state, descriptors, navigation, isNavigation }) => {
  // console.log(state);
  const focusedOptions = descriptors[state.routes[state.index].key].options;

  if (focusedOptions.tabBarVisible === false) {
    return null;
  }

  if (isNavigation === false) {
    return null;
  }

  return (
    <View style={{ flexDirection: "row", backgroundColor: "#132637" }}>
      {state.routes.map((route, index) => {
        // const { options } = descriptors[route.key];
        const isFocused = state.index === index;
        const onPress = () => {
          const event = navigation.emit({
            type: "tabPress",
            target: route.key,
            canPreventDefault: true,
          });
          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };
        let iconName = route.name;
        if (iconName === "profile") iconName = "home";
        if (iconName === "dialogs") iconName = "message-square";

        return (
          <TouchableOpacity
            // accessibilityRole="button"
            // accessibilityStates={isFocused ? ["selected"] : []}
            // accessibilityLabel={options.tabBarAccessibilityLabel}
            // testID={options.tabBarTestID}
            onPress={onPress}
            style={styles.navItem}
          >
            <Icon
              name={iconName}
              color={isFocused ? "#F76FF0" : "white"}
              type={route.name === "profile" ? null : "feather"}
            />
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  navItem: {
    flex: 1,
    alignItems: "center",
    padding: 10,
    borderRadius: 10,
  },
});

export default MyTabBar;
