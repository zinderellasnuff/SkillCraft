import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import HomeTabs from "./HomeTabs";
import QuizScreen from "../screens/QuizScreen"; // Asegúrate de importar QuizScreen

const Stack = createStackNavigator();

function AppNavigator() {
  return (
    <Stack.Navigator initialRouteName="HomeTabs">
      <Stack.Screen name="HomeTabs" component={HomeTabs} />
      <Stack.Screen name="Quiz" component={QuizScreen} />{" "}
      {/* Agrega QuizScreen en el Stack */}
    </Stack.Navigator>
  );
}

export default AppNavigator;
