import React from "react";
import { TouchableOpacity, View, Text, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export const HQuickActionButton = ({ icon, bgColor, label, onPress }) => (
    <TouchableOpacity style={styles.button} onPress={onPress}>
        <View style={[styles.iconContainer, { backgroundColor: bgColor }]}>
            <Ionicons name={icon} size={24} color="#fff" />
        </View>
        <Text style={styles.text}>{label}</Text>
    </TouchableOpacity>
);

const styles = StyleSheet.create({
    button: {
        width: "48%",
        backgroundColor: "#fff",
        padding: 16,
        borderRadius: 12,
        alignItems: "center",
        marginBottom: 12,
        elevation: 2,
    },
    iconContainer: {
        width: 50,
        height: 50,
        borderRadius: 25,
        alignItems: "center",
        justifyContent: "center",
        marginBottom: 8,
    },
    text: {
        fontSize: 12,
        color: "#2c3e50",
        fontWeight: "500",
        textAlign: "center",
    },
});
