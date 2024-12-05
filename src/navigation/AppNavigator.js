import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import HomeTabs from "./TabNavigator";

const Stack = createStackNavigator();

function AppNavigator() {
  return (
    <Stack.Navigator initialRouteName="HomeTabs">
      <Stack.Screen name="HomeTabs" component={HomeTabs} />
    </Stack.Navigator>
  );
}

export default AppNavigator;
