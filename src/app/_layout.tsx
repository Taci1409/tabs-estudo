import "../styles/global.css";

import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";

//o _layout.tsx e o componente raiz na pasta do expo router:
//Tudo que estiver dentro da pasta appp/ passa por este layout antes de renderizar a tela.

export default function RootLayout(){
    return (
        <SafeAreaProvider>
            {/** a importação de global.css ativa as classes do NativeWind em todo app. **/}
            <View className="flex-1 bg-gelo">
                <Stack screenOptions ={{
                    headerShown: false,
                    contentStyle: {backgroundColor: "#A020F0"}
                    }}/>
                <StatusBar style="dark"/>
            </View>
        </SafeAreaProvider>
    );
}
