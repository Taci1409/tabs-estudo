import { Ionicons } from "@expo/vector-icons";
import { ComponentProps } from "react";
import { Text, View } from "react-native";

type IconName = ComponentProps<typeof Ionicons>["name"];

type HeaderSectionProps ={
    eyebrow?: string;
    title: string;
    subtitle: string;
    icon: IconName;
};

// Componentes reutilizáveis para evitar repetir as mesmas estruturas
export function HeaderSection({eyebrow, title, subtitle, icon}: HeaderSectionProps){
    return(
        <View className="mb-6 rounded-3xl bg-white p6 shadow-sm">
            <View className="mb-4 flex-row items-center gap-3">
                {
                    icon ? (
                        <View className=" h-12 w-12 items-center justify-center rounded-2xl bg-black">
                            <Ionicons name={icon} size={24} color={"#35155f"}/>
                        </View>
                    ) : null
                }
                {
                    eyebrow ? (
                        <Text className="flex-1 text-xs font-bold uppercase text-purple">{eyebrow}</Text>
                    ) : null
                }
            </View>
            <Text className="text-3xl font-extrabold leading-9 text-petroleo-dark">{title}</Text>
            <Text className="my-3 text-base leading-6 text-slate-600">{subtitle}</Text>
        </View>
    );
}