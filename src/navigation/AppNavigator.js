import React from "react";
import HomeTabs from "./HomeTabs";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

function AppNavigator() {
  return (
    <Stack.Navigator initialRouteName="HomeTabs">
      <Stack.Screen name="HomeTabs" component={HomeTabs} />
    </Stack.Navigator>
  );
}

export default AppNavigator;
