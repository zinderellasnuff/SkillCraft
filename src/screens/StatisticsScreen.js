import React from "react";
import { View, Text, StyleSheet, Animated, Easing, Image } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";

const StatisticsScreen = () => {
  const progress = new Animated.Value(0);
  const navigation = useNavigation();

  // Animación para la barra de progreso
  React.useEffect(() => {
    Animated.timing(progress, {
      toValue: 0.75, // Progreso del 75%
      duration: 2000,
      easing: Easing.ease,
      useNativeDriver: false,
    }).start();
  }, []);

  // Datos ficticios para los participantes
  const participants = [
    {
      name: "Mike",
      points: 1500,
      avatar: require("../assets/mike.png"), // Reemplaza con la ruta de tu imagen
      isWinner: true,
    },
    {
      name: "Carter",
      points: 1000,
      avatar: require("../assets/carter.png"),
      isWinner: false,
    },
    {
      name: "Marilyn",
      points: 950,
      avatar: require("../assets/marilyn.png"),
      isWinner: false,
    },
  ];

  return (
    <View style={styles.container}>
      {/* Pódium */}
      <View style={styles.podium}>
        {participants.map((participant, index) => (
          <View
            key={index}
            style={[
              styles.podiumEntry,
              participant.isWinner && styles.winnerPodium,
            ]}
          >
            {participant.isWinner && (
              <View style={styles.trophyIcon}>
                <Text style={styles.trophyText}>🏆</Text>
              </View>
            )}
            <Image
              source={participant.avatar}
              style={[
                styles.avatar,
                participant.isWinner && styles.avatarWinner,
              ]}
            />
            <Text
              style={[
                styles.participantName,
                participant.isWinner && styles.winnerName,
              ]}
            >
              {participant.name}
            </Text>
            <Text style={styles.participantPoints}>
              {participant.points} puntos
            </Text>
          </View>
        ))}
      </View>

      {/* Mensaje motivacional */}
      <View style={styles.motivationContainer}>
        <Text style={styles.motivationText}>
          1. El conocimiento que guardas hoy es el éxito de mañana.
        </Text>
        <Text style={styles.motivationText}>
          2. Cada pequeño paso te lleva más lejos.
        </Text>
        <Text style={styles.motivationText}>
          3. El aprendizaje constante transforma sueños en logros.
        </Text>
      </View>

      {/* Barra de progreso del nivel */}
      <View style={styles.progressSection}>
        <Text style={styles.title}>Progreso del jugador:</Text>
        <View style={styles.progressBarBackground}>
          <Animated.View
            style={[
              styles.animatedBar,
              {
                width: progress.interpolate({
                  inputRange: [0, 1],
                  outputRange: ["0%", "100%"],
                }),
              },
            ]}
          />
        </View>
      </View>

      {/* Botón para jugar */}
      <TouchableOpacity
        style={styles.playButtonContainer}
        onPress={() => navigation.navigate("Quiz")} // Navega a QuizScreen
      >
        <Text style={styles.playButtonText}>¡Jugar ahora!</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
    padding: 20,
    alignItems: "center",
  },
  podium: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "flex-end",
    width: "100%",
    marginTop: 20,
  },
  podiumEntry: {
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
    padding: 10,
    elevation: 5,
    width: "30%",
    position: "relative",
  },
  winnerPodium: {
    backgroundColor: "#FFEB3B",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingVertical: 20,
  },
  avatar: {
    width: 60,
    height: 60,
    marginBottom: 10,
    borderRadius: 30,
  },
  avatarWinner: {
    width: 80,
    height: 80,
  },
  participantName: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
    textAlign: "center",
  },
  winnerName: {
    fontSize: 18,
    color: "#D32F2F",
  },
  participantPoints: {
    fontSize: 14,
    color: "#555",
  },
  motivationContainer: {
    marginTop: 30,
    paddingHorizontal: 10,
  },
  motivationText: {
    fontSize: 14,
    color: "#757575",
    textAlign: "center",
    marginBottom: 5,
  },
  progressSection: {
    marginTop: 30,
    width: "100%",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#555",
  },
  progressBarBackground: {
    height: 20,
    backgroundColor: "#E0E0E0",
    borderRadius: 10,
    overflow: "hidden",
  },
  animatedBar: {
    height: "100%",
    backgroundColor: "#76C7C0",
  },
  playButtonContainer: {
    marginTop: 40,
    backgroundColor: "#0288D1",
    borderRadius: 10,
    paddingVertical: 15,
    paddingHorizontal: 30,
    alignItems: "center",
  },
  playButtonText: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "bold",
  },
  trophyIcon: {
    position: "absolute",
    top: -30,
    zIndex: 10,
  },
  trophyText: {
    fontSize: 24,
  },
});

export default StatisticsScreen;
