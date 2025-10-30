import { StyleSheet, Text, View, Button } from "react-native";
import { useState } from "react";
import { Card } from "../components/Card";
import { Input } from "../components/Input";

export function Login({ navigation }) {
  return (
    
    <View style={{ flex: 1, justifyContent: "center" }}>
      <Card>
        <Input value={nombre} onChangeText={setNombre} placeholder="Nombre" />

        <Input value={email} onChangeText={setEmail} placeholder="Email" />
        <Input value={password} onChangeText={setPassword} placeholder="Contraseña" secureTextEntry />
        <SubmitButton title="Iniciar Sesion" onPress={() => navigation.navigate("Home")} />
      </Card>
    </View>
  );
}
