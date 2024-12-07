import React from "react";
import { TextInput, StyleSheet, View } from "react-native";

const CustomInput = ({ placeholder, value, onChangeText, secureTextEntry }) => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        placeholderTextColor="#888"
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
    width: "100%", // Para que los inputs mantengan consistencia
    alignItems: "center",
  },
  input: {
    width: "90%", // Controla la anchura del input para que sea uniforme
    borderWidth: 2,
    borderColor: "#FFD700",
    borderRadius: 25,
    paddingVertical: 10,
    paddingHorizontal: 15,
    backgroundColor: "#fff",
    elevation: 5, // Sombra para un aspecto atractivo
    shadowColor: "#FF8C00",
    shadowOpacity: 0.5,
    shadowOffset: { width: 0, height: 5 },
    shadowRadius: 10,
    fontSize: 16,
    color: "#333",
  },
});

export default CustomInput;
