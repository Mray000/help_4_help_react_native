import React, { useEffect } from "react";
import { compose } from "redux";
import Profile from "./Profile";
import { connect } from "react-redux";
import Preloader from "../../mini-components/Preloader";
import { GetProfile } from "../../Redux/Reducers/ProfileReducer";
import { Text, View } from "react-native";
// import { withRouter } from "react-router-native";
// import { withRouter } from "react-router-native";

const ProfileContainer = ({
  myId,
  GetProfile,
  profileUserId,
  route,
  navigation,
}) => {
  if (!route.params) {
    navigation.setParams({
      userId: myId,
    });
    navigation.navigate("profile");
  } else {
    useEffect(() => {
      GetProfile(route.params.userId);
    }, [route.params.userId]);
  }
  if (!profileUserId) return <Preloader />;
  return <Profile userId={route.params.userId} />;
};

const mapStateToProps = (state) => ({
  profileUserId: state.Profile.profile.userId,
  isAuth: state.Auth.isAuth,
  myId: state.Auth.id,
});

export default compose(
  connect(mapStateToProps, { GetProfile })
  // withAuthRedirect
)(ProfileContainer);
