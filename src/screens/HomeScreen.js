import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Image,
} from "react-native";
import { useNavigation } from "@react-navigation/native"; // Importa useNavigation

const HomeScreen = () => {
  const [dailyGoal, setDailyGoal] = useState(3); // Número de tareas diarias completadas
  const totalDailyGoal = 5; // Meta diaria

  const badges = [
    { id: 1, name: "Principiante", icon: require("../assets/Badge1.png") },
    { id: 2, name: "Avanzado", icon: require("../assets/Badge1.png") },
    { id: 3, name: "Maestro", icon: require("../assets/Badge1.png") },
  ];

  const recommendations = [
    {
      id: 1,
      title: "Mejora tus habilidades de programación",
      description: "Aprende estructuras de datos y algoritmos básicos.",
      image: require("../assets/programing.jpg"),
    },
    {
      id: 2,
      title: "Domina el inglés profesional",
      description: "Practica vocabulario y gramática avanzada.",
      image: require("../assets/english.png"),
    },
    {
      id: 3,
      title: "Estadísticas básicas para datos",
      description: "Entiende conceptos fundamentales de estadística.",
      image: require("../assets/statistics.jpg"),
    },
  ];

  const navigation = useNavigation(); // Usa useNavigation para obtener el objeto navigation

  return (
    <View style={styles.container}>
      {/* Encabezado */}
      <View style={styles.header}>
        <Text style={styles.greeting}>👋 Bienvenido de nuevo</Text>
        <Text style={styles.subText}>
          ¡Sigue aprendiendo y alcanzando tus metas!
        </Text>
      </View>

      {/* Sección de progreso diario */}
      <View style={styles.dailyGoalContainer}>
        <Text style={styles.sectionTitle}>🎯 Meta diaria</Text>
        <View style={styles.goalProgress}>
          <Text style={styles.goalText}>
            {dailyGoal}/{totalDailyGoal} completadas
          </Text>
          <TouchableOpacity
            style={styles.completeButton}
            onPress={() => {
              if (dailyGoal < totalDailyGoal) setDailyGoal(dailyGoal + 1);
            }}
          >
            <Text style={styles.completeButtonText}>+ Completar</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Insignias */}
      <View style={styles.badgeContainer}>
        <Text style={styles.sectionTitle}>🏅 Tus Insignias</Text>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.badgeScroll}
        >
          {badges.map((badge) => (
            <View key={badge.id} style={styles.badgeCard}>
              <Image source={badge.icon} style={styles.badgeIcon} />
              <Text style={styles.badgeText}>{badge.name}</Text>
            </View>
          ))}
        </ScrollView>
      </View>

      {/* Recomendaciones personalizadas */}
      <View style={styles.recommendationsContainer}>
        <Text style={styles.sectionTitle}>📚 Recomendaciones para ti</Text>
        {recommendations.map((rec) => (
          <View key={rec.id} style={styles.recommendationCard}>
            <Image source={rec.image} style={styles.recommendationImage} />
            <View style={styles.recommendationContent}>
              <Text style={styles.recommendationTitle}>{rec.title}</Text>
              <Text style={styles.recommendationDescription}>
                {rec.description}
              </Text>
              <TouchableOpacity
                style={styles.startButton}
                onPress={() => navigation.navigate("Quiz")} // Navega a QuizScreen
              >
                <Text style={styles.startButtonText}>Comenzar</Text>
              </TouchableOpacity>
            </View>
          </View>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F3F4F6",
    padding: 20,
  },
  header: {
    marginBottom: 20,
  },
  greeting: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
  },
  subText: {
    fontSize: 16,
    color: "#555",
  },
  dailyGoalContainer: {
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
    padding: 15,
    marginBottom: 20,
    elevation: 3,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#333",
  },
  goalProgress: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  goalText: {
    fontSize: 16,
    color: "#555",
  },
  completeButton: {
    backgroundColor: "#0288D1",
    padding: 10,
    borderRadius: 5,
  },
  completeButtonText: {
    color: "#FFFFFF",
    fontWeight: "bold",
  },
  badgeContainer: {
    marginBottom: 20,
  },
  badgeScroll: {
    flexDirection: "row",
  },
  badgeCard: {
    alignItems: "center",
    marginRight: 15,
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
    padding: 10,
    elevation: 3,
  },
  badgeIcon: {
    width: 50,
    height: 50,
    marginBottom: 5,
  },
  badgeText: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#555",
  },
  recommendationsContainer: {},
  recommendationCard: {
    flexDirection: "row",
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
    padding: 10,
    marginBottom: 15,
    elevation: 3,
  },
  recommendationImage: {
    width: 80,
    height: 80,
    borderRadius: 10,
    marginRight: 10,
  },
  recommendationContent: {
    flex: 1,
    justifyContent: "space-between",
  },
  recommendationTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
  },
  recommendationDescription: {
    fontSize: 14,
    color: "#555",
  },
  startButton: {
    backgroundColor: "#0288D1",
    padding: 10,
    borderRadius: 5,
    alignSelf: "flex-start",
  },
  startButtonText: {
    color: "#FFFFFF",
    fontWeight: "bold",
  },
});

export default HomeScreen;
