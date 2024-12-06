import React, { useEffect, useState } from "react";
import { View, Text, Image, StyleSheet, ScrollView } from "react-native";
import { Avatar } from "react-native-elements";
import { getDoc, doc } from "firebase/firestore";
import useFirebase from "../hooks/useFirebase";

const ProfileScreen = () => {
  const [user, setUser] = useState(null);
  const { auth, firestore } = useFirebase();

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const currentUser = auth.currentUser;
        console.log("Usuario actual:", currentUser);
        if (!currentUser) {
          console.log("No hay un usuario autenticado");
          return;
        }
        const userRef = doc(firestore, "users", currentUser.uid);
        const userSnap = await getDoc(userRef);

        if (userSnap.exists()) {
          setUser(userSnap.data());
        } else {
          console.log("No existe tal usuario");
        }
      } catch (error) {
        console.error("Error al obtener los datos del usuario:", error);
      }
    };

    fetchUserData();
  }, []);

  if (!user) {
    return <Text>Loading...</Text>;
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
        <View style={styles.section}>
          <Text style={styles.title}>Intereses:</Text>
          {(user.interests || []).map((interest, index) => (
            <Text key={index} style={styles.text}>
              {interest}
            </Text>
          ))}
        </View>
      </View>
      <View style={styles.section}>
        <Text style={styles.title}>Intereses:</Text>
        {user.interests.map((interest, index) => (
          <Text key={index} style={styles.text}>
            {interest}
          </Text>
        ))}
      </View>
      <View style={styles.section}>
        <Text style={styles.title}>Publicación creada:</Text>
        <Text style={styles.text}>{user.createdPost}</Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.title}>Puntuación media:</Text>
        <Text style={styles.text}>{user.rating} ⭐</Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.title}>Comportamiento:</Text>
        <Text style={styles.text}>{user.behavior}</Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.title}>Interés Actual:</Text>
        {user.courses.map((course, index) => (
          <Text key={index} style={styles.text}>
            {course}
          </Text>
        ))}
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
  },
  avatar: {
    marginBottom: 10,
  },
  name: {
    fontSize: 24,
    fontWeight: "bold",
  },
  degree: {
    fontSize: 16,
    color: "gray",
  },
  mention: {
    fontSize: 16,
    color: "gray",
  },
  year: {
    fontSize: 14,
    color: "gray",
  },
  section: {
    marginBottom: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
  },
  text: {
    fontSize: 16,
    color: "black",
  },
  loading: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default ProfileScreen;
