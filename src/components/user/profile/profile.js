import React from "react";
import { ScrollView, View, Text } from "react-native";
import { Appbar, TextInput, Divider, Button, Title } from "react-native-paper";

import UserData from "./userData";

const ProfileScreen = ({navigation}) => {
  return (
    <ScrollView>
      <Appbar.Header>
        <Appbar.BackAction onPress={() =>navigation.goBack()} />
        <Appbar.Content title="Profile" subtitle="Redwire" />
      </Appbar.Header>
      <View style={{ padding: 20 }}>
        <Title>Your user Login data</Title>
        <TextInput
          label="email"
          value={""}
          onChangeText={(text) => console.log(text)}
          mode="outlined"
        />
        <TextInput
          label="password"
          value={""}
          onChangeText={(text) => console.log(text)}
          mode="outlined"
        />
        <Button mode="contained" onPress={() => console.log("press")}>
          Update
        </Button>
      </View>
      <Divider />
      <UserData />
    </ScrollView>
  );
};

export default ProfileScreen;
