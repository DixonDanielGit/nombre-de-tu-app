// components/Input.js
import React from "react";
import { TextInput, StyleSheet, Text } from "react-native";

export const Input = ({ value, onChangeText, placeholder, secureTextEntry = false }) => (
  <>
    <Text>{placeholder}</Text>
    <TextInput
      style={styles.input}
      value={value}
      onChangeText={onChangeText}
      placeholder={placeholder}
      secureTextEntry={secureTextEntry}
    />
  </>
);

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    padding: 10,
    marginBottom: 15,
  },
});
