import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Button,
  Alert,
  ActivityIndicator,
} from "react-native";
import { Avatar } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";
import { signOut } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore"; // Importar funciones Firestore
import { useFirebase } from "../hooks/useFirebase";

const ProfileScreen = () => {
  const [user, setUser] = useState({
    username: "Kapadia",
    degree: "Licenciatura",
    mention: "General",
    year: "2024",
    interests: ["Tecnología", "Ciencia", "Arte"],
    createdPost: "Mi primera publicación",
    rating: 4.5,
    behavior: "Ejemplar",
    courses: ["Curso de React", "Curso de Firebase"],
  }); // Datos predeterminados del usuario
  const [loading, setLoading] = useState(true); // Indicador de carga
  const { auth, firestore } = useFirebase();
  const navigation = useNavigation();

  // Obtener datos del usuario desde Firestore
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const currentUser = auth.currentUser;
        console.log("UID del usuario autenticado:", auth.currentUser?.uid);

        if (!currentUser) {
          console.error("No hay un usuario autenticado.");
          Alert.alert("Error", "Usuario no autenticado.");
          setLoading(false);
          return;
        }

        console.log("UID del usuario autenticado:", currentUser.uid);

        const userDocRef = doc(firestore, "users", currentUser.uid);
        const userDoc = await getDoc(userDocRef);

        if (userDoc.exists()) {
          console.log("Datos del usuario obtenidos:", userDoc.data());
          setUser(userDoc.data());
        } else {
          console.error("No se encontraron datos para el usuario.");
          console.log("Referencia del documento consultado:", userDocRef.path);
          Alert.alert(
            "Error",
            "No se pudieron cargar los datos. Mostrando predeterminados."
          );
        }
      } catch (error) {
        console.error("Error al obtener los datos: ", error);
        Alert.alert(
          "Error",
          "Hubo un problema al cargar los datos. Mostrando predeterminados."
        );
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, [auth, firestore]);

  // Manejar cierre de sesión
  const handleLogout = async () => {
    setLoading(true); // Mostrar indicador de carga
    try {
      await signOut(auth);
      Alert.alert("Sesión Cerrada", "Has cerrado sesión correctamente.");
      navigation.replace("Login"); // Redirigir a la pantalla de Login
    } catch (error) {
      console.error("Error al cerrar sesión: ", error);
      Alert.alert("Error", "No se pudo cerrar la sesión.");
    } finally {
      setLoading(false); // Ocultar indicador de carga
    }
  };

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#007BFF" />
        <Text>Cargando perfil...</Text>
      </View>
    );
  }

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Avatar
          rounded
          size="xlarge"
          title={(user.username?.charAt(0) || "?").toUpperCase()}
          containerStyle={styles.avatar}
        />
        <Text style={styles.name}>
          {user.username || "Usuario desconocido"}
        </Text>
        <Text style={styles.degree}>
          Grado: {user.degree || "No especificado"}
        </Text>
        <Text style={styles.mention}>
          Mención: {user.mention || "No especificada"}
        </Text>
        <Text style={styles.year}>Año: {user.year || "No especificado"}</Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.title}>Intereses:</Text>
        {(user.interests || []).map((interest, index) => (
          <Text key={index} style={styles.text}>
            {interest}
          </Text>
        ))}
      </View>
      <View style={styles.section}>
        <Text style={styles.title}>Publicación creada:</Text>
        <Text style={styles.text}>{user.createdPost || "No especificada"}</Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.title}>Puntuación media:</Text>
        <Text style={styles.text}>{user.rating || 0} ⭐</Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.title}>Comportamiento:</Text>
        <Text style={styles.text}>{user.behavior || "No especificado"}</Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.title}>Interés Actual:</Text>
        {(user.courses || []).map((course, index) => (
          <Text key={index} style={styles.text}>
            {course}
          </Text>
        ))}
      </View>
      <View style={styles.logoutSection}>
        {loading ? (
          <ActivityIndicator size="large" color="#007BFF" />
        ) : (
          <Button
            title="Cerrar Sesión"
            onPress={handleLogout}
            color="#d9534f"
          />
        )}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E1F5FE",
    padding: 20,
  },
  header: {
    alignItems: "center",
    marginBottom: 20,
    backgroundColor: "#FFFFFF",
    borderRadius: 15,
    padding: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  avatar: {
    marginBottom: 10,
    borderColor: "#007BFF",
    borderWidth: 2,
  },
  name: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#007BFF",
  },
  degree: {
    fontSize: 18,
    color: "#555",
  },
  mention: {
    fontSize: 18,
    color: "#555",
  },
  year: {
    fontSize: 16,
    color: "#555",
  },
  section: {
    marginBottom: 20,
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
    padding: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 5,
    color: "#007BFF",
  },
  text: {
    fontSize: 16,
    color: "#333",
  },
  logoutSection: {
    marginTop: 30,
    alignItems: "center",
  },
  logoutButton: {
    backgroundColor: "#d9534f",
    borderRadius: 10,
    padding: 10,
    width: "80%",
    alignItems: "center",
  },
  logoutButtonText: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "bold",
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  errorContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default ProfileScreen;
