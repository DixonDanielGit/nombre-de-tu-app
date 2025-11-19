import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export const HPatientCard = ({ patient, getStatusColor, getStatusIcon }) => (
    <View style={styles.card}>
        <View style={styles.header}>
            <View>
                <Text style={styles.name}>{patient.name}</Text>
                <Text style={styles.age}>{patient.age} años</Text>
            </View>
            <View style={[styles.status, { backgroundColor: getStatusColor(patient.status) }]}>
                <Ionicons name={getStatusIcon(patient.status)} size={14} color="#fff" />
                <Text style={styles.statusText}>{patient.status.toUpperCase()}</Text>
            </View>
        </View>

        <View style={styles.details}>
            <Ionicons name="calendar" size={16} color="#797979" />
            <Text style={styles.detail}>Ingreso: {patient.admissionDate}</Text>
        </View>

        <Text style={styles.diagnosis}>Diagnóstico: {patient.diagnosis}</Text>

        <View style={styles.details}>
            <Ionicons name="medical" size={16} color="#387adf" />
            <Text style={styles.detail}>Médico: {patient.doctor}</Text>
        </View>

        <TouchableOpacity style={styles.action}>
            <Ionicons name="document-text" size={16} color="#387adf" />
            <Text style={styles.actionText}>Expediente</Text>
        </TouchableOpacity>
    </View>
);

const styles = StyleSheet.create({
    card: {
        backgroundColor: "#fff",
        padding: 16,
        marginBottom: 12,
        borderRadius: 12,
        elevation: 2,
    },
    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    name: { fontSize: 16, fontWeight: "bold", color: "#2c3e50" },
    age: { fontSize: 12, color: "#555" },
    status: {
        flexDirection: "row",
        alignItems: "center",
        padding: 4,
        borderRadius: 6,
    },
    statusText: { color: "#fff", marginLeft: 4, fontSize: 10 },
    details: { flexDirection: "row", alignItems: "center", marginTop: 6 },
    detail: { marginLeft: 6, fontSize: 12, color: "#555" },
    diagnosis: { marginTop: 6, fontSize: 13, fontStyle: "italic" },
    action: { flexDirection: "row", alignItems: "center", marginTop: 10 },
    actionText: { marginLeft: 6, color: "#387adf", fontWeight: "bold" },
});
