import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export const HStatCard = ({ icon, bgColor, number, label }) => (
    <View style={styles.card}>
        <View style={[styles.iconContainer, { backgroundColor: bgColor }]}>
            <Ionicons name={icon} size={24} color="#fff" />
        </View>
        <Text style={styles.number}>{number}</Text>
        <Text style={styles.label}>{label}</Text>
    </View>
);

const styles = StyleSheet.create({
    card: {
        alignItems: "center",
        margin: 8,
        flex: 0.48,
        backgroundColor: "#fff",
        borderRadius: 12,
        padding: 16,
        elevation: 2,
    },
    iconContainer: { padding: 8, borderRadius: 8, marginBottom: 4 },
    number: { fontSize: 18, fontWeight: "bold", color: "#2c3e50" },
    label: { fontSize: 12, color: "#555", textAlign: "center" },
});
