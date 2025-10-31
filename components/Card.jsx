// components/Card.js
import React from "react";
import { View, StyleSheet } from "react-native";

export const Card = ({ children, color }) => <View style={[styles.card, {backgroundColor:color}]}>{children}</View>;

const styles = StyleSheet.create({
  card: {
    padding: 20,
    margin: 15,
    borderRadius: 10,
    elevation: 3,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 2 },
  },
});
