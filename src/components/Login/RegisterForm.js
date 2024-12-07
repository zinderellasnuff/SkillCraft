import React, { useState } from "react";
import { View, Text, StyleSheet, Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { doesUsernameExist } from "../../services/userService";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { addDoc, collection } from "firebase/firestore";
import { useFirebase } from "../../hooks/useFirebase";
import CustomInput from "./CustomInput";
import CustomButton from "./CustomButton";

const RegisterForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [lastName, setLastName] = useState("");
  const { auth, firestore } = useFirebase();
  const navigation = useNavigation();

  const handleSignUp = async () => {
    if (!email || !password || !username || !lastName) {
      Alert.alert("Error", "Por favor llena todos los campos.");
      return;
    }

    try {
      const userNameExists = await doesUsernameExist(firestore, username);

      if (userNameExists.length === 0) {
        const createdUserResult = await createUserWithEmailAndPassword(
          auth,
          email,
          password
        );

        await updateProfile(createdUserResult.user, {
          displayName: username,
        });

        await addDoc(collection(firestore, "users"), {
          userId: createdUserResult.user.uid,
          username: username.toLowerCase(),
          lastName: lastName,
          emailAddress: email.toLowerCase(),
          dateCreated: Date.now(),
        });

        navigation.replace("Welcome");
      } else {
        Alert.alert("Error", "Ese usuario ya está tomado, prueba con otro.");
      }
    } catch (error) {
      console.error("Error creando el usuario: ", error);
      Alert.alert("Error", error.message);
    }
  };

  return (
    <View style={styles.container}>
      <CustomInput
        placeholder="Nombre"
        value={username}
        onChangeText={setUsername}
      />
      <CustomInput
        placeholder="Apellidos"
        value={lastName}
        onChangeText={setLastName}
      />
      <CustomInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />
      <CustomInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <CustomButton text="Registrarse" onPress={handleSignUp} />
      <Text style={styles.redirectText}>
        ¿Ya tienes cuenta?{" "}
        <Text style={styles.link} onPress={() => navigation.navigate("Login")}>
          Ingresa
        </Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
    backgroundColor: "#f9fafd",
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

export default RegisterForm;
