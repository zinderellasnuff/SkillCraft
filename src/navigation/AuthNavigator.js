import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "../screens/LoginScreen";
import RegisterScreen from "../screens/RegisterScreen";

const Stack = createStackNavigator();

const AuthNavigator = () => (
  <Stack.Navigator
    initialRouteName="Login"
    screenOptions={{ headerShown: true }}
  >
    <Stack.Screen
      name="Login"
      component={LoginScreen}
      options={{ title: "Iniciar Sesión" }}
    />
    <Stack.Screen
      name="Register"
      component={RegisterScreen}
      options={{ title: "Registro" }}
    />
  </Stack.Navigator>
);

export default AuthNavigator;
