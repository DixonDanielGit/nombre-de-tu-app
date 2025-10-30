import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StyleSheet, View, Text, Button, TextInput, ImageBackground, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import { Card } from "../components/Card";
import { SubmitButton } from "../components/SubmitButton";

// Imágenes
const wallpaper = require("../assets/Wallpaper.png");
const logo = require("../assets/logo.png");

// Pantalla Login
const Login = ({ navigation }) => {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = () => {
    if (user === "WDaniel123" && password === "Sistema.30") {
      navigation.navigate("Main");
    } else {
      alert("Fallo");
    }
  };

  return (
    <ImageBackground source={wallpaper} style={styles.background} resizeMode="cover">
      <Image source={logo} style={styles.logo} />
      <Card>
        <Text style={styles.title}>Iniciar Sesión</Text>
        <TextInput style={styles.input} value={user} onChangeText={setUser} placeholder="Usuario" />
        <TextInput style={styles.input} value={password} onChangeText={setPassword} placeholder="Contraseña" secureTextEntry />
        <SubmitButton title="Iniciar Sesión" onPress={handleSubmit} />
      </Card>
    </ImageBackground>
  );
};

// Pantalla Home
const Home = ({ navigation }) => {
  return (
    <View style={styles.homeContainer}>
      <Text style={styles.title}>Home</Text>
      <Button title="Cerrar sesión" onPress={() => navigation.navigate("Login")} />
    </View>
  );
};

// Tabs
const Tab = createBottomTabNavigator();

const HomeTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Home") {
            iconName = focused ? "home" : "home-outline";
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: "#387adf",
        tabBarInactiveTintColor: "gray",
        tabBarStyle: {
          backgroundColor: "#fff",
          borderTopColor: "#eee",
          height: 60,
        },
        tabBarLabelStyle: {
          fontSize: 12,
          marginBottom: 5,
        },
      })}
    >
      <Tab.Screen name="Home" component={Home} />
    </Tab.Navigator>
  );
};


// Stack
const Stack = createStackNavigator();

export const Navegation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{
          headerStyle: {
            backgroundColor: "#387adf",
          },
        }}
      >
        <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
        <Stack.Screen name="Main" component={HomeTabs} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

// Estilos
const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
  logo: {
    resizeMode: "contain",
    width: 100,
    height: 100,
    alignSelf: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#387adf",
    marginBottom: 20,
    textAlign: "center",
  },
  input: {
    height: 46,
    backgroundColor: "#F3F5FF",
    borderRadius: 10,
    paddingHorizontal: 16,
    marginVertical: 8,
    fontSize: 16,
    color: "#222831",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.06,
    shadowRadius: 4,
    elevation: 2,
  },
  homeContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
