import { Ionicons } from "@expo/vector-icons";
import type { ComponentProps } from "react";
import { Text, TouchableOpacity } from "react-native";

type IconName = ComponentProps<typeof Ionicons>["name"];

type ActionButtonProps = {
    label: string;
    icon?: IconName;
    variant?: "primary" | "secondary" | "outline";
    onPress: () => void;
};

const buttonClasses  = {
    primary: "text-black",
    secondary: "text-purple-dark",
    outline: "text-purple"
};

const textClasses  = {
    primary: "text-black",
    secondary: "text-purple-dark",
    outline: "text-purple"
};

const iconColors  = {
    primary: "#2e5038",
    secondary:"#bd8cc5",
    outline: "#64748B"
};

export function ActionButton({
    label,
    icon,
    variant = "primary",
    onPress
}: ActionButtonProps){
    return(
        <TouchableOpacity
            activeOpacity={0.85}
            accessibilityRole = "button" // Acessibilidade visual 
            onPress={onPress}
            className={`min-h-12 flex-row items-center justify-center gap-2 rounded-2xl px-5 py-3 ${buttonClasses [variant]}`}
        >
            {icon ? <Ionicons name = {icon} size = {18} color ={iconColors[variant]}/> : null}
            <Text className ={`text-base font-bold ${textClasses[variant]}`}>{label}</Text>
            
        </TouchableOpacity>
    )
}