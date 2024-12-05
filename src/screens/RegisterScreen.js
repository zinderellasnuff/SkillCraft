import React from "react";
import { View, Text, StyleSheet } from "react-native";
import RegisterForm from "../components/Login/RegisterForm";

const RegisterScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Create an Account</Text>
      <RegisterForm />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
});

export default RegisterScreen;
