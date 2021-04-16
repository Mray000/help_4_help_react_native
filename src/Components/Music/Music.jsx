// import React from "react";
// // import { StackNavigator } from "react-navigation";
// import PlayerScreen from "react-native-sound-playerview";
// import { Text, TouchableOpacity, View } from "react-native";
// import { createStackNavigator } from "@react-navigation/stack";
// // import { NavigationContainer } from "@react-navigation/native";
// import ProfileContainer from "../Profile/ProfileContainer";

// const Music = (props) => {
//   // console.log(props);

//   return (
//     <View
//       style={{
//         backgroundColor: "white",
//         flex: 1,
//         alignItems: "center",
//         justifyContent: "center",
//       }}
//     >
//       <TouchableOpacity
//       // onPress={() => {
//       //   props.navigation.navigate("player", {
//       //     title: "ArrrNoiz",
//       //     filepath: require("../../images/Noize MC - Голос & струны (Орфей).mp3"),
//       //   });
//       // }}
//       >
//         <Text>Click me!</Text>
//         <Text>Click me!</Text>
//         <Text>Click me!</Text>
//         <Text>Click me!</Text>
//         <Text>Click me!</Text>
//       </TouchableOpacity>
//     </View>
//   );
// };

// // const MusicNavigation = StackNavigator({
// //   content: { screen: Music },
// //   player: { screen: PlayerScreen },
// // });

// const Stack = createStackNavigator();

// const MusicNavigation = () => {
//   return (
//     <Stack.Navigator initialRouteName="content">
//       <Stack.Screen name="content" component={Music} />
//       {/* <Stack.Screen name="player" component={PlayerScreen} /> */}
//       <Stack.Screen name="player" component={PlayerScreen} />
//     </Stack.Navigator>
//   );
// };
// export default MusicNavigation;
