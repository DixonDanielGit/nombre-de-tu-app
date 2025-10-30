import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { StyleSheet, View, Text, Button, TextInput, ImageBackground, Image } from "react-native";
import { Card } from "../components/Card";
import { SubmitButton } from "../components/SubmitButton";

const wallpaper = require("../assets/Wallpaper.png");
const logo = require("../assets/logo.png");

const Login = ({ navigation }) => {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = () => {
    if (user == "WDaniel123" && password == "Sistema.30") navigation.navigate("Home");
    else alert("Fallo");
  };
  return (
    <ImageBackground source={wallpaper} style={styles.background} resizeMode="cover">
      <Image source={logo} style={styles.logo} />

      <Card>
        <Text style={styles.title}>Iniciar Sesión</Text>

        <TextInput style={styles.input} value={user} onChangeText={setUser} placeholder="Usuario" />
        <TextInput style={styles.input} value={password} onChangeText={setPassword} placeholder="Contraseña" secureTextEntry />

        <SubmitButton title="Iniciar Sesion" onPress={handleSubmit} />
      </Card>
    </ImageBackground>
  );
};

const Home = () => {
  return (
    <View>
      <Text>Home</Text>
      <Button title="A Login" onPress={() => navigation.navigate("Home")}></Button>
    </View>
  );
};

const Stack = createStackNavigator();

export const Navegation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          hederBackgroundHome: {
            backgroundColor: "#387adf",
          }
        }}
        initialRouteName="Login"
      >
        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name="Login"
          component={Login}
        />
        <Stack.Screen name="Home" options={{
            title:'Dashbord'
        }} component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: "cover",
    width: "100%",
    height: "100%",
  },

  logo: {
    resizeMode: "contain",
    width: 100,
    height: 100,
    marginBottom: 0,
    alignSelf: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#387adf", // Color del texto del título
    marginBottom: 20,
    textAlign: "center",
  },
  input: {
    height: 46,
    backgroundColor: "#F3F5FF", // Fondo pálido violáceo
    borderRadius: 10, // Bordes redondeados
    paddingHorizontal: 16,
    marginVertical: 8,
    fontSize: 16,
    color: "#222831", // Color del texto ingresado
    // Sombra ligera para iOS
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.06,
    shadowRadius: 4,
    // Elevación para Android
    elevation: 2,
  },
  button: {
    backgroundColor: "#387adf", // Color del botón
    borderRadius: 10,
    paddingVertical: 12,
    alignItems: "center",
    marginTop: 12,
  },
  buttonText: {
    color: "#FFFFFF", // Color del texto del botón
    fontSize: 16,
    fontWeight: "bold",
  },
});
