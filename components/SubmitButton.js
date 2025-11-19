// components/SubmitButton.js
import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

export const SubmitButton = ({ onPress, title }) => (
  <TouchableOpacity style={styles.button} onPress={onPress}>
    <Text style={styles.text}>{title}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#387adf",
    padding: 12,
    borderRadius: 5,
    alignItems: "center",
    marginTop: 10 
  },
  text: {
    color: "#fff",
    fontWeight: "bold",
  },
});

