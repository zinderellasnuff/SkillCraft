import React, { useState, useContext } from "react";
import { View, Text, StyleSheet, Alert } from "react-native";
import CustomInput from "../components/Login/CustomInput";
import CustomButton from "../components/Login/CustomButton";
import FirebaseContext from "../context/firebaseContext";

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { auth } = useContext(FirebaseContext);

  const handleLogin = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigation.replace("Welcome");
    } catch (error) {
      console.error("Error al iniciar sesión: ", error);
      if (
        error.code === "auth/invalid-login-credentials" ||
        error.code === "auth/invalid-credential"
      ) {
        Alert.alert(
          "Error",
          "Las credenciales de inicio de sesión no son válidas"
        );
      } else if (error.code === "auth/invalid-email") {
        Alert.alert("Error", "La dirección de correo electrónico es inválida");
      } else {
        Alert.alert("Error", error.message);
      }
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
      <CustomButton
        text="¿No tienes cuenta? Regístrate"
        onPress={() => navigation.navigate("Register")}
      />
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
});

export default LoginScreen;