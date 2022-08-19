import "react-native-gesture-handler";

import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { connect } from "react-redux";
import React, { Component, useEffect } from "react";

const Drawer = createDrawerNavigator();

import { Stack, HomeStack, VideosStack, screenOptions } from "./routes/stack";

import ProfileScreen from "./components/user/profile/profile";
import AuthScreen from "./components/auth";
import SideDrawerCustom from "./utils/customDrawer";
import VideoScreen from "./components/home/videos/video";
import Splash from "./components/auth/splash";
import { autoSignIn } from "./store/actions";
import RNBootSplash from "react-native-bootsplash";

const MainDrawer = () => (
  <Drawer.Navigator
    drawerContent={(props) => <SideDrawerCustom {...props} />}
    drawerStyle={{ backgroundColor: 'rgba(0,0,0,0.7)' }}
  >
    <Drawer.Screen name="Home" component={HomeStack} />
    <Drawer.Screen name="Videos" component={VideosStack} />
    <Drawer.Screen name="Profile" component={ProfileScreen} />
  </Drawer.Navigator>
);

class App extends Component {
  state = {
    loading: true,
  };

  componentDidMount() {
    this.props.dispatch(autoSignIn()).then(() => {
      this.setState({ loading: false });
      RNBootSplash.hide({ duration: 250, fade: true })
    });
  /*   RNBootSplash.hide({ duration: 250, fade: true }) */
  }

  render() {
    return (
      <NavigationContainer
    
      >
        <Stack.Navigator>
          {this.props.auth.isAuth ? (
            //whole app

            <>
              <Stack.Screen
                options={{ headerShown: false }}
                name="Main"
                component={MainDrawer}
              />
              <Stack.Screen
                name="VideoScreen"
                component={VideoScreen}
                options={{ ...screenOptions, headerBackTitleVisible: false }}
              />
            </>
          ) : //login
          this.state.loading ? (
            <Stack.Screen
              options={{ headerShown: false }}
              name="Splash"
              component={Splash}
            />
          ) : (
            <Stack.Screen
              options={{ headerShown: false }}
              name="Auth"
              component={AuthScreen}
            />
          )}
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

const mapStateToProps = (state) => ({ auth: state.auth });


export default connect(mapStateToProps)(App);
