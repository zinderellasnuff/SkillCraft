import React, { useEffect } from "react";
import { View, Text, Button, StyleSheet } from "react-native";

const WelcomeScreen = ({ navigation }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace("Auth"); // Cambia a AuthNavigator
    }, 2000); // Simula un pequeño delay, puedes ajustar esto

    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>¡Bienvenido a la aplicación!</Text>
      <Button title="Empezar" onPress={() => navigation.replace("Auth")} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 24,
    marginBottom: 20,
  },
});

export default WelcomeScreen;
