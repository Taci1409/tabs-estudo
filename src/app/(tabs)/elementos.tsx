import { ElementBlock } from "@/src/components/ElementBlock";
import { HeaderSection } from "@/src/components/HeaderSection";
import { Image, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
 
const pills = ["Header", "Card", "Text", "Image", "Button", "List"];
 
export default function ElementosScreen() {
  return (
    <SafeAreaView className="flex-1">
      <ScrollView>
        <HeaderSection
          eyebrow="Base Visual"
          title="Elementos"
          subtitle="Exemplos curtos de componentes nativos do react-native estilizados com native-wind."
          icon="grid-outline"
        />
 
        <View className="gap-4">
          <ElementBlock
            name="View"
            description="Agrupa elementos e controla alinhamento, espaçamento, fundo e bordas."
            icon="layers-outline"
          >
            {/* View funciona como uma caixa para organizar outros componentes.*/}
            <View>
              <View className="h-16 flex-1 rounded-2xl bg-petroleo" />
              <View className="h-16 flex-1 rounded-2xl bg-aqua" />
              <View className="h-16 flex-1 rounded-2xl bg-white" />
            </View>
          </ElementBlock>
          <ElementBlock
            name="Texto"
            description="Exibe textos e permite aplicar hierarquia visual como o tamanho, peso e cor"
            icon="text-outline"
          >
            {/* Text é usado para todo conteúdo textual do react native*/}
            <Text className="text-2xl font-extrabold text-petroleo-dark">
              Título em destaque
            </Text>
            <Text className="mt-2 text-base leading-6 text-slate-600">
              Parágrafo com boa legibilidade para leitura em telas pequenas
            </Text>
          </ElementBlock>
          <ElementBlock
            name="Imagem"
            description="Renderiza imagens locais ou remotas e ajuda a enriquecer o contexto visual."
            icon="image-outline"
          >
            {/* Imagem precisa de uma fonte e dimensões para aparecer corretamente.*/}
          <Image
            source={{
                uri:"https://i.imgflip.com/82lstk.jpg"
            }}
            resizeMode="cover"
            className="h-80 w-full rounded-2xl"
          />
          </ElementBlock>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
 