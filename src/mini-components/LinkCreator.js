// import React from "react";
// import { StyleSheet } from "react-native";
// import { Icon } from "react-native-elements";
// import { Link, withRouter } from "react-router-native";

// const LinkCreator = ({ link, name = link, type = "feather", location }) => {
//   let pathname = location.pathname;
//   if (!(pathname.slice(9) == "")) {
//     pathname = "/dialogs";
//   }
//   let thispath = pathname.slice(1) === link;
//   return (
//     <Link
//       to={`/${link}`}
//       underlayColor="rgba(222,12,191, 0.1)"
//       style={styles.navItem}
//       key={link}
//     >
// <Icon name={name} type={type} color={thispath ? "#F76FF0" : "white"} />
//     </Link>
//   );
// };

// const styles = StyleSheet.create({
// navItem: {
//   flex: 1,
//   alignItems: "center",
//   padding: 10,
//   borderRadius: 10,
// },
// });

// export default withRouter(LinkCreator);
