import React from "react";
import { TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export const MenuButton = ({ navigation }) => (
    <TouchableOpacity onPress={() => navigation.toggleDrawer()} style={{ marginLeft: 15 }}>
        <Ionicons name="menu" size={26} color="#fff" />
    </TouchableOpacity>
);
