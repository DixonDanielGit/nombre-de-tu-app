import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export const HDaySummaryItem = ({ icon, color, number, label }) => (
    <View style={styles.item}>
        <Ionicons name={icon} size={20} color={color} />
        <Text style={styles.number}>{number}</Text>
        <Text style={styles.label}>{label}</Text>
    </View>
);

const styles = StyleSheet.create({
    item: { alignItems: "center", flex: 1 },
    number: {
        fontSize: 20,
        fontWeight: "bold",
        color: "#2c3e50",
        marginVertical: 4,
    },
    label: { fontSize: 12, color: "#7f8c8d" },
});
