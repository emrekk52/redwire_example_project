import { registerRootComponent } from "expo";

import App from "./src/App";
import React from "react";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import promiseMiddleware from "redux-promise";
import reducers from "./src/store/reducers";
import {
  DarkTheme,
  DefaultTheme,
  Provider as PaperProvider,
} from "react-native-paper";
import Toast from "react-native-toast-message";
import { View,Text } from "react-native";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const createStoreWithMiddleware = createStore(
  reducers,
  composeEnhancers(applyMiddleware(promiseMiddleware))
);

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: "tomato",
    accent: "yellow",
  },
};

const toastConfig = {
  success: (internalState) => (
    <View style={{ height: 60, width: "100%", backgroundColor: "pink" }}>
      <Text>{internalState.text1}</Text>
    </View>
  )

};

const reduxApp = () => (
  <Provider store={createStoreWithMiddleware}>
    <PaperProvider theme={theme}>
      <App />
      <Toast config={toastConfig} ref={(ref) => Toast.setRef(ref)} />
    </PaperProvider>
  </Provider>
);
// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in the Expo client or in a native build,
// the environment is set up appropriately
registerRootComponent(reduxApp);
