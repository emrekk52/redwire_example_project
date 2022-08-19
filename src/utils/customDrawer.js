import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Button } from "react-native-elements";
import { DrawerContentScrollView } from "@react-navigation/drawer";
import { Colors, LogoText } from "./tools";
import { useDispatch } from "react-redux";
import { logoutUser } from "../store/actions";

const SideDrawerCustom = (props) => {
  
  const dispatch = useDispatch();
  const currentScreen = props.state.routeNames[props.state.index];

  const mainOptions = [
    { title: "News", location: "Home" },
    { title: "Videos", location: "Videos" },
    { title: "Profile", location: "Profile" },
  ];

  return (
    <DrawerContentScrollView {...props}>
      <View>
        <LogoText
          style={{ fontSize: 40, textAlign: "center", color: Colors.black2 }}
        />
      </View>
      {mainOptions.map((item) => (
        <Button
          buttonStyle={
            item.location == currentScreen
              ? styles.drawerSelectedButton
              : styles.drawerUnselectedButton
          }
          key={item.location}
          title={item.title}
          onPress={() => props.navigation.navigate(item.location)}
          titleStyle={{
            width: "100%",
         
          }}
        />
      ))}
      <Button
        buttonStyle={styles.drawerUnselectedButton}
        title="Logout"
        onPress={() => dispatch(logoutUser())}
        titleStyle={{ width: "100%" }}
      />
    </DrawerContentScrollView>
  );
};

const styles = StyleSheet.create({
  drawerUnselectedButton: {
    marginRight: 5,
    backgroundColor: Colors.black,
    borderBottomWidth: 1,
    borderBottomColor: Colors.black2,
    opacity:0.8
  },
  drawerSelectedButton: {
    backgroundColor: 'rgba(255,0,0,0.7)',
    marginRight: 5,
   
  },
});

export default SideDrawerCustom;
