import React from "react";
import { connect } from "react-redux";
import { View, Text, StyleSheet } from "react-native";
// import ava from "../../images/ava.png";
// import like from "../../images/like.png";

const Post = (props) => {
  return (
    <View>
      {props.posts.map((post) => (
        <View key={post.id} style={styles.container}>
          {/* {props.profile.photos.small ? (
            <img
              src={props.profile.photos.small}
              alt=""
              id="profile-small-ava"
            />
          ) : (
            <img src={ava} alt="" id="profile-small-ava" />
          )} */}
          <Text style={styles.text}>{props.email}</Text>
          <Text style={styles.text}>{post.text}</Text>
          {/* <View style={{ display: "flex" }}>
            <img src={like} alt="" id="like-img" />
            {post.likeCount}
          </View> */}
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "white",
  },
});

const mapStateToProps = (state) => {
  return {
    posts: state.Profile.posts,
    email: state.Auth.email,
  };
};

export default connect(mapStateToProps)(Post);
