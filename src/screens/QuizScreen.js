import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";

const QuizScreen = ({ navigation }) => {
  // Datos del quiz (puedes reemplazar con datos dinámicos o de una API)
  const questions = [
    {
      id: 1,
      question: "¿Cuál es el resultado de 2 + 2?",
      options: ["3", "4", "5", "6"],
      correctAnswer: "4",
    },
    {
      id: 2,
      question: "¿Qué lenguaje se utiliza principalmente en React Native?",
      options: ["Python", "JavaScript", "C++", "Java"],
      correctAnswer: "JavaScript",
    },
    {
      id: 3,
      question: "¿Cuál es el planeta más grande del sistema solar?",
      options: ["Tierra", "Marte", "Júpiter", "Venus"],
      correctAnswer: "Júpiter",
    },
  ];

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [isAnswered, setIsAnswered] = useState(false);

  const currentQuestion = questions[currentQuestionIndex];

  const handleAnswer = (option) => {
    setSelectedOption(option);
    setIsAnswered(true);

    if (option === currentQuestion.correctAnswer) {
      setScore(score + 1);
    }
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedOption(null);
      setIsAnswered(false);
    } else {
      // Quiz terminado, redirigir a Home
      alert(`¡Quiz terminado! Tu puntuación es: ${score}/${questions.length}`);

      // Redirigir a Home (puedes usar la navegación para esto)
      navigation.navigate("HomeTabs"); // Redirige a la pantalla de inicio

      // Resetear el estado del quiz
      setCurrentQuestionIndex(0);
      setScore(0);
      setSelectedOption(null);
      setIsAnswered(false);
    }
  };

  // Función para salir del quiz y volver al Home
  const handleExitQuiz = () => {
    navigation.navigate("HomeTabs"); // Redirige al Home
  };

  return (
    <View style={styles.container}>
      {/* Cabecera */}
      <View style={styles.header}>
        <Text style={styles.headerText}>Quiz Interactivo</Text>
      </View>

      <ScrollView contentContainerStyle={styles.content}>
        {/* Pregunta */}
        <Text style={styles.questionText}>{currentQuestion.question}</Text>

        {/* Opciones */}
        {currentQuestion.options.map((option, index) => (
          <TouchableOpacity
            key={index}
            style={[
              styles.optionButton,
              selectedOption === option &&
              option === currentQuestion.correctAnswer
                ? styles.correctAnswer
                : selectedOption === option &&
                  option !== currentQuestion.correctAnswer
                ? styles.wrongAnswer
                : styles.defaultOption,
            ]}
            onPress={() => handleAnswer(option)}
            disabled={isAnswered}
          >
            <Text style={styles.optionText}>{option}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      {/* Botón para siguiente pregunta */}
      {isAnswered && (
        <TouchableOpacity
          style={styles.nextButton}
          onPress={handleNextQuestion}
        >
          <Text style={styles.nextButtonText}>
            {currentQuestionIndex < questions.length - 1
              ? "Siguiente Pregunta"
              : "Ver Resultados"}
          </Text>
        </TouchableOpacity>
      )}

      {/* Botón para salir del quiz */}
      <TouchableOpacity style={styles.exitButton} onPress={handleExitQuiz}>
        <Text style={styles.exitButtonText}>Salir</Text>
      </TouchableOpacity>
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F3F4F6",
    paddingHorizontal: 20,
    paddingTop: 40,
  },
  header: {
    marginBottom: 20,
    alignItems: "center",
  },
  headerText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
  },
  content: {
    flex: 1,
    justifyContent: "flex-start",
  },
  questionText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 20,
  },
  optionButton: {
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 10,
    marginBottom: 15,
    elevation: 2,
  },
  defaultOption: {
    backgroundColor: "#FFFFFF",
  },
  correctAnswer: {
    backgroundColor: "#4CAF50",
  },
  wrongAnswer: {
    backgroundColor: "#F44336",
  },
  optionText: {
    fontSize: 16,
    color: "#333",
    fontWeight: "bold",
  },
  nextButton: {
    backgroundColor: "#0288D1",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    marginBottom: 20,
  },
  nextButtonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
  },
  exitButton: {
    backgroundColor: "#f44336",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    marginBottom: 20,
  },
  exitButtonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default QuizScreen;
