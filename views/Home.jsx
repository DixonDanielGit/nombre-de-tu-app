import { StyleSheet, Text, View, Button } from "react-native";
import { Card } from "../components/Card";


export function Home({ navigation }) {
  return (
    <Card>
      <Text>Home</Text>
      <Button title="A Login" onPress={() => navigation.navigate("Login")}></Button>
    </Card>
  );
}

