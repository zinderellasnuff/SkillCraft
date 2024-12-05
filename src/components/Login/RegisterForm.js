import React, { useState, useContext } from "react";
import { View, TextInput, Button, StyleSheet, Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";
import FirebaseContext from "../../context/firebaseContext";
import { doesUsernameExist } from "../../services/firebase";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { addDoc, collection } from "firebase/firestore";

const RegisterForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [lastName, setLastName] = useState("");
  const { auth, firestore } = useContext(FirebaseContext);
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

        navigation.replace("Welcome"); // Redirige al flujo principal
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
      <TextInput
        style={styles.input}
        placeholder="Nombre"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        style={styles.input}
        placeholder="Apellidos"
        value={lastName}
        onChangeText={setLastName}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <Button title="Register" onPress={handleSignUp} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 15,
    paddingLeft: 10,
  },
});

export default RegisterForm;
