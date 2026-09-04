//Determinar as regras de navegação para as guias
import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import { ComponentProps } from "react";


type IconName = ComponentProps<typeof Ionicons>["name"];

const tabMap: Record<
    string, {
        title: string;
        icon: IconName;
        activeIcon: IconName;
    } > = {
        index:{
        title: "Inicio",
        icon: "home-outline",
        activeIcon: "home"          
        },
        cards:{
            title: "Cards",
            icon : "albums-outline",
            activeIcon: "albums"
        },
        perfil:{
            title : "Perfil",
            icon : "person-outline",
            activeIcon : "person"
        }
    };

export default function TabsLayout(){
    return(
        <Tabs
        screenOptions={({route})=> {
            const tab= tabMap[route.name];

            return{
                headerShown: false,
                title: tab?.title ?? route.name,

                tabBarActiveTintColor: "#bd8cc5",
                tabBarInactiveTintColor: "#64748B",

                tabBarStyle:{
                    height: 64,
                    paddingTop: 8,
                    paddingBottom: 8
                },
                
                tabBarIcon: ({color, size, focused}) =>(
                    <Ionicons
                    name = {focused ? tab.activeIcon : tab.icon}
                    size={size}
                    color={color} 
                    ></Ionicons>
                )
            };
        }}
        >
            <Tabs.Screen name= "index" />
            <Tabs.Screen name= "cards" />
            <Tabs.Screen name= "perfil" />
        </Tabs>
    );
}