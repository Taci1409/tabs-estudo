import { Ionicons } from "@expo/vector-icons";
import { ComponentProps } from "react";
import { Text, View } from "react-native";

type IconName = ComponentProps <typeof Ionicons>["name"];

type InfoCardProps ={
    title: string;
    description: string;
    icon: IconName;
    accentcolor?: string;

};
//condição ? verdadeira : falsa
/*
const idade = 18
const mensagem = idade >= 18? "Maior de idade" : "Menor de idade";
*/

const cardShadow = {
    shadowColor: "#A020F0",
    shadowOffset:{width:0, height: 8},
    shadowOpacity : 0.08,
    shadowRadius: 12,
    elevation: 3
};

export function InfoCard({
    title,
    description,
    icon,
    accentcolor = "#bd8cc5"
}: InfoCardProps) {
    return(
        <View className="rounded-3xl border border-cinza bg-black p-5" style ={cardShadow}>
            <View
            className ="mb-4 h-12 items-center justify-center rounded-2xl" style ={{backgroundColor:`${accentcolor}22`}}>
                <Ionicons name={icon} size={24} color ={accentcolor}/>
            </View>
                <Text className="text-lg font-extrabold">{title}</Text>
                <Text className="mt-2 text-sm leading-5 text-slate-600">{description}</Text>
        </View>
    );
}