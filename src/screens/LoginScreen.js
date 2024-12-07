import React, { useState } from "react";
import { View, Text, StyleSheet, Alert } from "react-native";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useFirebase } from "../hooks/useFirebase";
import CustomInput from "../components/Login/CustomInput";
import CustomButton from "../components/Login/CustomButton";

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { auth } = useFirebase();

  const handleLogin = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigation.navigate("Home"); // Cambiado de replace a navigate
    } catch (error) {
      console.error("Error al iniciar sesión: ", error);

      let errorMessage = "Error desconocido";
      switch (error.code) {
        case "auth/wrong-password":
          errorMessage = "Contraseña incorrecta";
          break;
        case "auth/user-not-found":
          errorMessage = "No se encuentra una cuenta con ese correo";
          break;
        case "auth/invalid-email":
          errorMessage = "La dirección de correo electrónico es inválida";
          break;
        default:
          errorMessage = error.message;
      }

      Alert.alert("Error", errorMessage);
      setEmail("");
      setPassword("");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Inicia Sesión</Text>
      <CustomInput
        placeholder="Correo electrónico"
        value={email}
        onChangeText={setEmail}
      />
      <CustomInput
        placeholder="Contraseña"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <CustomButton text="Ingresar" onPress={handleLogin} />
      <Text style={styles.redirectText}>
        ¿No tienes cuenta?{" "}
        <Text
          style={styles.link}
          onPress={() => navigation.navigate("Register")}
        >
          Regístrate
        </Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#f9fafd",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  redirectText: {
    textAlign: "center",
    marginTop: 15,
    fontSize: 16,
    color: "#555",
  },
  link: {
    color: "#007BFF",
    fontWeight: "bold",
    textDecorationLine: "underline",
  },
});

export default LoginScreen;
