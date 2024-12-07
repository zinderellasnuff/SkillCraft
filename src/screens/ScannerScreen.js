import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native"; // Importa useNavigation

const ScannerScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      {/* Camera View Simulation */}
      <View style={styles.cameraView}>
        <View style={styles.overlay}>
          <Text style={styles.overlayText}>Identifica el texto</Text>
        </View>
      </View>

      {/* Camera Control Buttons */}
      <View style={styles.controls}>
        <TouchableOpacity
          style={styles.shutterButton}
          onPress={() => navigation.navigate("Quiz")} // Navega a QuizScreen
        >
          <View style={styles.shutterCircle} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    backgroundColor: "black",
  },
  cameraView: {
    flex: 1,
    backgroundColor: "#000",
    justifyContent: "center",
    alignItems: "center",
  },
  overlay: {
    position: "absolute",
    top: 10,
    left: 10,
    right: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  overlayText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
    backgroundColor: "rgba(0,0,0,0.5)",
    padding: 5,
    borderRadius: 5,
  },
  controls: {
    padding: 20,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: 40,
  },
  shutterButton: {
    width: 80,
    height: 80,
    backgroundColor: "#fff",
    borderRadius: 40,
    justifyContent: "center",
    alignItems: "center",
  },
  shutterCircle: {
    width: 60,
    height: 60,
    backgroundColor: "#ff4081", // Shutter button color
    borderRadius: 30,
  },
});

export default ScannerScreen;
