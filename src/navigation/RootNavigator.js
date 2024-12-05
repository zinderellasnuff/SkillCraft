import React, { useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { onAuthStateChanged } from "firebase/auth";
import { ActivityIndicator, View, StyleSheet } from "react-native";

import AuthNavigator from "./AuthNavigator";
import AppNavigator from "./AppNavigator";
import FirebaseContext from "../context/firebaseContext";

const RootNavigator = () => {
  const { auth } = React.useContext(FirebaseContext);
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
      {user ? <AppNavigator /> : <AuthNavigator />}
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
