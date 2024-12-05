import React from "react";
import FirebaseProvider from "./src/context/firebaseProvider";
import RootNavigator from "./src/navigation/RootNavigator";
import { StatusBar } from "expo-status-bar";

const App = () => (
  <FirebaseProvider>
    <RootNavigator />
    <StatusBar style="auto" />
  </FirebaseProvider>
);

export default App;
