import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

const CustomButton = ({ onPress, text }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#007BFF",
    padding: 15,
    borderRadius: 5,
    alignItems: "center",
    marginVertical: 10,
  },
  text: {
    color: "#fff",
    fontWeight: "bold",
  },
});

export default CustomButton;
