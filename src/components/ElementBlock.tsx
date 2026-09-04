import { Ionicons } from "@expo/vector-icons";
import type { ComponentProps, ReactNode } from "react";
import { Text, View } from "react-native";

type IconName = ComponentProps<typeof Ionicons>["name"];

type ElementBlockProps = {
    name: string;
    description: string;
    icon: IconName;
    children: ReactNode;
}
/*O componente Layout nao sabe antecipadamente qual conteúdo sera 
exibido no <main> por exemplo, ele simplesmente renderiza tudo que 
sera passado pelo children, e o tipo ReactNode garante que esse conteudo
seja algo que o React consegue renderizar.
*/

//ElementBlock organizar nome, descrição e ícone de cada elemento nativo.

export function ElementBlock({name, description, icon,children}: ElementBlockProps) {
    return(
        <View className="rounded-3xl border border-black bg-white p-5 shadow-sm" >
            <View className="flex-row items-start gap-3">
                <View className="h-11 w-11 items-center justify-center rounded-2xl bg-purple-dark"><Ionicons name={icon} size={22} color={"#bd8cc5"}/>
                </View>
            </View>
            <View className="flex-1 ">
                <Text className="mt-1 text-sm leading-5 text-slate-600">{description}</Text>

            </View>
            <View className="mt-5 rounded-2xl bg-gelo p-4"> {children}</View>

        </View>        
    );
}