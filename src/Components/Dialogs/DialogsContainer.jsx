import React from "react";
import { compose } from "redux";
import { connect } from "react-redux";
// import { withAuthRedirect } from "../../utils/AuthRedirect";
import { Text, View } from "react-native";
// import { withRouter } from "react-router-native";
import Dialogs from "./Dialogs";

const DialogsContainer = ({ route, navigation, ...props }) => {
  // console.log(route);
  return (
    <Dialogs
      userId={route.params ? route.params.userId : null}
      navigation={navigation}
    />
  );
};

const mapStateToProps = (state) => ({
  dialogs: state.Dialogs,
});

export default compose(connect(mapStateToProps))(DialogsContainer);
