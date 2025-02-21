import { useAuth } from "@/contexts/AuthContext";
import { useRouter } from "expo-router";
import { View, Text, TouchableOpacity, StyleSheet, Animated, FlatList } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import React, { useState } from "react";
import { useTask } from "@/contexts/TaskContext";
import TaskItem from "@/components/TaskCard";

export default function HomeScreen() {
  const router = useRouter();
  const { user, logout } = useAuth();

  const [scale] = useState(new Animated.Value(1));

  const handlePressIn = () => {
    Animated.timing(scale, { toValue: 0.95, duration: 1000, useNativeDriver: true }).start();
  };

  const handlePressOut = () => {
    Animated.timing(scale, { toValue: 1, duration: 1000, useNativeDriver: true }).start();
  };

  const {tasks} = useTask();

  return (
    <View style={styles.container}>
      <Ionicons name="home-outline" size={100} color="#3A4750" style={styles.iconMain} />

      <Text style={styles.welcomeText}>¡Hola, {user?.email || "Usuario"}!</Text>
      <Text style={styles.subText}>Bienvenido a tu panel de control</Text>

      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerText}>Tareas Por Realizar</Text>
          <FlatList
            data={tasks}
            keyExtractor={(item) => item.title}
            renderItem={({ item }) => (
              <TaskItem title={item.title} description={item.description}  />
            )}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#ffffff",
  },
  iconMain: {
    marginBottom: 20,
  },
  welcomeText: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#3A4750",
    marginBottom: 5,
    textAlign: "center",
  },
  subText: {
    fontSize: 16,
    color: "#7D8C97",
    marginBottom: 30,
    textAlign: "center",
  },
  animatedView: {
    width: "85%",
    marginBottom: 15,
  },
  button: {
    flexDirection: "row",
    backgroundColor: "#4A90E2",
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5,
  },
  logoutButton: {
    flexDirection: "row",
    backgroundColor: "#D9534F",
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5,
  },
  buttonText: {
    color: "black",
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: 10,
  },
  header: {
    width: "100%",
    backgroundColor: "#ffff",
    borderRadius: 10,
    padding: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  headerIcon: {
    marginBottom: 10,
  },
  headerText: {
    color: "#000000",
    fontSize: 18,
    marginBottom: 10,
  },
});
