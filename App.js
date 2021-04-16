import React, { useEffect, Fragment } from "react";
import "react-native-gesture-handler";
import store from "./src/Redux/store";
import { Provider, connect } from "react-redux";
import { Initialing } from "./src/Redux/Reducers/AppReducer";
import ProfileContainer from "./src/Components/Profile/ProfileContainer";
import Preloader from "./src/mini-components/Preloader";
import MyTabBar from "./src/Components/Navigation/Navigation";
import { SafeAreaView } from "react-native-safe-area-context";
import DialogsContainer from "./src/Components/Dialogs/DialogsContainer";
import { compose } from "redux";
import { StyleSheet } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
// import { LinearGradient } from "expo-linear-gradient";
// import MusicNavigation from "./src/Components/Music/Music";
const Tab = createBottomTabNavigator();

const App = ({ Initialing, initialized, isNavigation, ...props }) => {
  useEffect(() => {
    Initialing();
  }, [Initialing]);
  if (!initialized) return <Preloader />;
  return (
    <Fragment>
      <SafeAreaView
        style={{
          flex: 0.003,
          backgroundColor: "#193248",
        }}
      />
      <SafeAreaView style={{ flex: 1 }}>
        <NavigationContainer initialRouteName="profile">
          <Tab.Navigator
            tabBar={(props) => (
              <MyTabBar {...props} isNavigation={isNavigation} />
            )}
          >
            <Tab.Screen name="profile" component={ProfileContainer} />
            <Tab.Screen name="dialogs" component={DialogsContainer} />
            {/* <Tab.Screen name="music" component={MusicNavigation} /> */}
          </Tab.Navigator>
        </NavigationContainer>
      </SafeAreaView>
    </Fragment>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#193248",
    // resizeMode: "cover",
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    alignItems: "center",
    // position: "absolute",
  },
});

const mapStateToProps = (state) => ({
  initialized: state.App.initialized,
  isNavigation: state.App.isNavigation,
});

const AppContainer = compose(connect(mapStateToProps, { Initialing }))(App);

const MyApp = () => {
  return (
    <Provider store={store}>
      <AppContainer />
    </Provider>
  );
};

export default MyApp;
