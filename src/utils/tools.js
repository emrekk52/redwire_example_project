import { Text } from "react-native";
import React from "react";
import Toast from "react-native-toast-message";

export const Colors = {
  white: "#ffffff",
  black: "#131418",
  black2: "#272930",
  black3: "#1a1a21",
  grey: "#c8c8c8",
  red: "#d74444",
};

export const LogoText = (props) => (
  <Text
    style={{
      fontFamily: "Monoton-Regular",
      color: Colors.white,
      fontSize: 50,
      ...props.style,
    }}
  >
    RedWire
  </Text>
);

export const showToast = (type, text1, text2) => {
  if (type === "success" || type === "info" || type === "error")
    Toast.show({
      type: type,
      text1,
      text2,
      position: "bottom",
      visibilityTime: 4000,
      autoHide: true,
      bottomOffset: 50,
    });
  else null;
};

