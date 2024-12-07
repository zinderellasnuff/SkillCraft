import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  ScrollView,
  TouchableOpacity,
  Image,
} from "react-native";

const SocialScreen = () => {
  const [search, setSearch] = useState("");
  const [selectedFilter, setSelectedFilter] = useState("Todos");
  const [users, setUsers] = useState([
    {
      id: 1,
      name: "Mike",
      field: "Ciencias de la Computación",
      avatar: require("../assets/mike.png"),
    },
    {
      id: 2,
      name: "Marilyn",
      field: "Ciencias de la Computación",
      avatar: require("../assets/marilyn.png"),
    },
    {
      id: 3,
      name: "Ross",
      field: "Comunicación",
      avatar: require("../assets/marilyn.png"),
    },
    {
      id: 4,
      name: "Jennifer",
      field: "Sistemas de información",
      avatar: require("../assets/mike.png"),
    },
    {
      id: 5,
      name: "Carter",
      field: "Ciencias de la Computación",
      avatar: require("../assets/carter.png"),
    },
    {
      id: 6,
      name: "Krystal",
      field: "Inglés",
      avatar: require("../assets/carter.png"),
    },
  ]);

  const filters = ["Todos", "Estudiar", "Inglés", "Programación"];

  const handleSearch = (text) => {
    setSearch(text);
  };

  const filteredUsers = users.filter(
    (user) =>
      (selectedFilter === "Todos" || user.field.includes(selectedFilter)) &&
      user.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <View style={styles.container}>
      {/* Barra de búsqueda */}
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Ingrese el tema que desea buscar..."
          value={search}
          onChangeText={handleSearch}
        />
      </View>

      {/* Filtros */}
      <View style={styles.filterContainer}>
        {filters.map((filter, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => setSelectedFilter(filter)}
            style={[
              styles.filterButton,
              selectedFilter === filter && styles.filterButtonActive,
            ]}
          >
            <Text
              style={[
                styles.filterText,
                selectedFilter === filter && styles.filterTextActive,
              ]}
            >
              {filter}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Lista de usuarios */}
      <ScrollView contentContainerStyle={styles.userList}>
        {filteredUsers.map((user) => (
          <TouchableOpacity key={user.id} style={styles.userCard}>
            <Image source={user.avatar} style={styles.userAvatar} />
            <View style={styles.userInfo}>
              <Text style={styles.userName}>{user.name}</Text>
              <Text style={styles.userField}>{user.field}</Text>
            </View>
          </TouchableOpacity>
        ))}
        {filteredUsers.length === 0 && (
          <Text style={styles.noResults}>No se encontraron resultados.</Text>
        )}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F9F9F9",
    padding: 20,
  },
  searchContainer: {
    marginBottom: 10,
  },
  searchInput: {
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
    padding: 10,
    fontSize: 16,
    elevation: 2,
  },
  filterContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 20,
  },
  filterButton: {
    backgroundColor: "#E0E0E0",
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 20,
  },
  filterButtonActive: {
    backgroundColor: "#0288D1",
  },
  filterText: {
    color: "#555",
    fontSize: 14,
  },
  filterTextActive: {
    color: "#FFFFFF",
    fontWeight: "bold",
  },
  userList: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  userCard: {
    backgroundColor: "#FFFFFF",
    width: "48%",
    borderRadius: 10,
    marginBottom: 15,
    padding: 10,
    alignItems: "center",
    elevation: 3,
  },
  userAvatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginBottom: 10,
  },
  userInfo: {
    alignItems: "center",
  },
  userName: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
  },
  userField: {
    fontSize: 14,
    color: "#777",
  },
  noResults: {
    textAlign: "center",
    fontSize: 16,
    color: "#999",
    marginTop: 20,
  },
});

export default SocialScreen;
