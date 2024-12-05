// En WelcomeScreen.js
import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const WelcomeScreen = ({ navigation }) => {
  const handleGetStarted = () => {
    navigation.navigate("Login"); // Redirige a la pantalla de login
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome to the App!</Text>
      <Button title="Get Started" onPress={handleGetStarted} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
});

export default WelcomeScreen;
