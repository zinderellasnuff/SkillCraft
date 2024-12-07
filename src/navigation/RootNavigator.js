import React, { useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { onAuthStateChanged } from "firebase/auth";
import { ActivityIndicator, View, StyleSheet } from "react-native";
import { useFirebase } from "../hooks/useFirebase";
import HomeTabs from "./HomeTabs"; // Your main tabs screen
import AuthNavigator from "./AuthNavigator"; // Auth flow if not logged in
import WelcomeScreen from "../screens/WelcomeScreen"; // Welcome screen
import QuizScreen from "../screens/QuizScreen"; // Import QuizScreen

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
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {!user ? (
          <>
            <Stack.Screen name="Welcome" component={WelcomeScreen} />
            <Stack.Screen name="Auth" component={AuthNavigator} />
          </>
        ) : (
          // This will be shown if the user is logged in
          <Stack.Screen name="HomeTabs" component={HomeTabsScreen} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const HomeTabsScreen = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="HomeTabs" component={HomeTabs} />
      <Stack.Screen name="Quiz" component={QuizScreen} />
    </Stack.Navigator>
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
