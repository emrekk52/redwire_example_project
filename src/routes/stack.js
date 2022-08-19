import React from "react";

import VideosScreen from "../components/home/videos";
import HomeScreen from "../components/home/articles";

import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";
import ArticleScreen from "../components/home/articles/article";
import { Colors, LogoText } from "../utils/tools";
import { Platform, View } from "react-native";
import { Icon } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";

export const Stack = createStackNavigator();

const LeftIcon = () => {
  const navigation = useNavigation();

  return (
    <View style={{ margin: 10 }}>
      <Icon
        name="menufold"
        type="antdesign"
        color={Colors.white}
        onPress={() => navigation.openDrawer()}
      />
    </View>
  );
};

export const screenOptions = {
  headerTitleAlign: "center",
  headerTintColor: Colors.red,
  headerStyle: {
    backgroundColor: Colors.black,
    borderBottomWidth: 6,
    borderBottomColor: Colors.red,
    height: Platform.OS === "ios" ? 110 : 60,
  },
  headerTitle: () => <LogoText style={{ fontSize: 25 }} />,
  gestureEnabled: true,
  ...TransitionPresets.SlideFromRightIOS,
};

export const VideosStack = () => (
  <Stack.Navigator
    screenOptions={{
      headerLeft: () => <LeftIcon />,
      ...screenOptions,
    }}
    initialRouteName="Videos_screen"
  >
    <Stack.Screen name="Videos_screen" component={VideosScreen} />
  </Stack.Navigator>
);

export const HomeStack = () => (
  <Stack.Navigator
    screenOptions={{
      headerLeft: () => <LeftIcon />,
      ...screenOptions,
    }}
    initialRouteName="Home_screen"
  >
    <Stack.Screen name="Home_sreen" component={HomeScreen} />
    <Stack.Screen name="Article_screen" component={ArticleScreen} />
  </Stack.Navigator>
);
