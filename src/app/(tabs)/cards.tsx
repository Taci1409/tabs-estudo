import { ActionButton } from "@/src/components/ActionButton";
import { HeaderSection } from "@/src/components/HeaderSection";
import { InfoCard } from "@/src/components/InfoCard";
import { Ionicons } from "@expo/vector-icons";
import { Alert, Image, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const metricas = [
    { label: "Aulas", value: "12" },
    { label: "Componentes", value: "05" },
    { label: "Projetos", value: "24" }
];

export default function CardScreen() {
    return (
        <SafeAreaView className="flex-1 bg-slate-50" edges={["top"]}>
            <ScrollView>
                <View className="rounded-3xl border border-cinza bg-white p-5 shadow-sm">
                <HeaderSection
                    eyebrow="Composição"
                    title="Cards"
                    subtitle="Variações de cards para trabalhar contraste, hierarquia, imagem, chamada de ação e dados"
                    icon="albums-outline" />
                    </View>

                <View className="rounded-3xl border border-cinza bg-white p-5 shadow-sm">
                    <InfoCard
                        title= "Card Informativo"
                        description=" Ideal para apresentar conceitos, recursos ou pequenas explicações com ícones"
                        icon="information-circle-outline"/>
                    </View>
                    <View className="rounded-3xl bg-black p-6 shadow-sm">
                        <View className="h-12 w-12 items-center justify-center rounded-2xl bg-purple">
                            <Ionicons name ="sparkles-outline"  size={24} color = "#fcfcfc" />
                        </View> 
                        <View className="rounded-3xl border border-cinza bg-white p-5 shadow-sm">  
                        <Text className="mt-5 text-2xl font-extrabold text-purple"> Card de destaque</Text>
                        <Text className="mt-2 text-base leading-6 text-black"> Use fundo forte quando precisar guiar o olhar para uma informação principal</Text>
                        </View> 
                    </View>

                    <View className="overflow-hidden rounded-3xl border-cinza bg-white shadow-sm">
                        <Image
                            source = {{uri: "https://share.google/6vDC019c8Mbs3KO3I"}}
                            resizeMode ="cover"
                            className ="h-44 w-full "/>

                        <View className="rounded-3xl border border-cinza bg-white p-5 shadow-sm ">
                            <Text className="text-xl font-extrabold text-purple-dark"> Card com imagem </Text>
                            <Text className="mt-2 text-sm leading-5 text-purple"> A imagem ajuda a contextualizar temas e deixar a interface mais memorável.</Text>
                        </View>
                    </View>
                    <View className="rounded-3xl border border-cinza bg-white p-5 shadow-sm">
                        <Text className="text-xl font-extrabold text-purple-dark"> Card com botão </Text>
                        <Text className="mt-2 text-sm leading-5 text-purple"> Combine um texto curto com uma ação clara para indicar o próximo passo.</Text>
                        <View>
                            <ActionButton
                                label="Ver exemplo"
                                icon="eye-outline"
                                onPress={()=> Alert.alert("Exemplo", "Este botão demonstra uma ação no card.")}/>    
                        </View>
                    </View>
                    <View className="rounded-3xl border border-cinza bg-white p-5 shadow-sm">
                        <Ionicons name="alert-circle-outline" size={22} color={"#ff3c2b"}/>
                        <View>
                            <Text className="text-xl font-extrabold text-purple-dark"> Card de aviso </Text>
                            <Text className="mt-2 text-sm leading-5 text-purple">Avisos usam cor de suporte para chamar atenção sem competir com a ação principal.</Text>
                        </View>
                    </View>  

                    <View className=" rounded-3xl border border cinza bg-white p-5 shadow-sm">
                        <View className="mb-5 flex-row items-center justify-between">
                            <Text className="text-xl font-extrabold text-petroleo-dark"> Card de Estatísticas</Text>
                            <Ionicons>-</Ionicons>
                        </View>
                        
                    </View>                     
            </ScrollView>
        </SafeAreaView>
    );
}