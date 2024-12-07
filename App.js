import React from "react";
import { StatusBar } from "expo-status-bar";
import FirebaseProvider from "./src/context/firebaseProvider";
import RootNavigator from "./src/navigation/RootNavigator";

const App = () => (
  <FirebaseProvider>
    {/* Envuelve RootNavigator con UserProvider */}
    <RootNavigator />
    <StatusBar style="auto" />
  </FirebaseProvider>
);

export default App;
