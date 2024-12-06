import React, { useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { onAuthStateChanged } from "firebase/auth";
import { ActivityIndicator, View, StyleSheet } from "react-native";
import useFirebase from "../hooks/useFirebase";
import HomeTabs from "./HomeTabs";
import AuthNavigator from "./AuthNavigator";
import WelcomeScreen from "../screens/WelcomeScreen";

const Stack = createStackNavigator();

const RootNavigator = () => {
  const { auth } = useFirebase();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });

    return unsubscribe;
  }, [auth]);

  if (loading) {
    return (
      <View style={styles.loading}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: true }}>
        {!user ? (
          // Si no hay usuario, se muestra el WelcomeScreen y luego el AuthNavigator
          <>
            <Stack.Screen
              name="Welcome"
              component={WelcomeScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Auth"
              component={AuthNavigator}
              options={{ title: "Autenticación" }}
            />
          </>
        ) : (
          // Si hay usuario autenticado, se muestra el HomeTabs
          <Stack.Screen
            name="Home"
            component={HomeTabs}
            options={{ headerShown: false }}
          />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  loading: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default RootNavigator;
