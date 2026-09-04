import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { HeaderSection } from "../../components/HeaderSection";

const habilidades = [
    "Criação de componentes",
    "Estilização com NativeWind",
    "Navegação com Expo Router"
];

export default function PerfilScreen() {
    return (
        <SafeAreaView className="flex-1 bg-slate-50" edges={["top"]}>
            <ScrollView
                className="flex-1"
                contentContainerStyle={{ padding: 20, paddingBottom: 36 }} >
                <HeaderSection
                    eyebrow="Estudante"
                    title="Meu perfil"
                    subtitle="Informações e habilidades aprendidas durante o projeto."
                    icon="person-outline"
                />
                <View className="rounded-2xl bg-white p-5 shadow-sm">
                    <Text className="text-xl font-bold text-slate-900">
                        Taciana Xavier
                    </Text>

                    <Text className="mt-1 text-base text-slate-600">
                        Técnico em Desenvolvimento de Sistemas
                    </Text>

                    <Text className="mt-6 text-lg font-bold text-slate-900">
                        Habilidades
                    </Text>
                    <View className="mt-3 gap-3">
                        {habilidades.map((habilidade) => (
                            <Text
                                key={habilidade}
                                className="rounded-xl bg-slate-100 p-3 text-slate-700">
                                {habilidade}
                            </Text>
                        ))}
                    </View>
                    <View className="mt-6 items-center rounded-xl bg-purple-600 p-4">
                        <Text className="font-bold text-white">
                            Editar perfil
                        </Text>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}