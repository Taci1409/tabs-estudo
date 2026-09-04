import { Image } from "expo-image"
import { Link } from "expo-router"
import { useState } from "react"
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native"
export default function Index(){
    const logo = "https://image2url.com/r2/default/images/1774539419020-b5b5952f-267d-4954-adf4-0842618b79d2.png"
    const fundo = "https://image2url.com/r2/default/images/1775658053837-0f708276-b322-40a4-bf44-1f6633ddd4e4.png"
    const [email, setEmail,] = useState("")
    const [senha, setSenha,] = useState("")
    const [setor, setSetor,] = useState("")
    return(
        <View style = {styles.container}>
            <Image 
                source = {logo} 
                style = {styles.logo}
                contentFit="contain"
                transition={2000}/>
            <Text style = {styles.titulo}>CADASTRO</Text>
            <TextInput
                style = {styles.textInput}
                placeholder="E-mail"
                value={email}
                onChangeText={setEmail}
                />
            <Text style = {styles.textSaida}>{email} </Text>
            <TextInput
                style = {styles.textInput}
                placeholder="Senha"
                value={senha}
                onChangeText={setSenha}
                />
            <TextInput
                style = {styles.textInput}
                placeholder="Setor"
                value={setor}
                onChangeText={setSetor}
                />                
            <Text style ={styles.textSaida}>{senha} </Text>
            <View style ={styles.btnContainer}>
                <Link href ={"./dashboard"}>
                    <TouchableOpacity style = {styles.buttons}>
                    <Text style = {styles.buttonsText}>Entrar</Text>
                    </TouchableOpacity>
                </Link>
                <Link href={"/"}>
                    <TouchableOpacity style = {styles.buttons}>
                    <Text style = {styles.buttonsText}>Voltar</Text>
                    </TouchableOpacity>
                </Link>
            </View>
        </View>
    )
}
 
const styles = StyleSheet.create({
    container: {
        flex: 1,
        gap: 15,
        alignItems: "center",
        paddingTop: 100,
        backgroundColor: "#ffffff",
        padding: 20,
    },
    
    logo: {
        width: 750, 
        height: 450,
        marginTop:-60,
        marginBottom:-50
    },
    titulo: {
        fontSize: 22,
        fontWeight: 400,
        marginBottom: 20,
    },
    textSaida:{
        fontSize: 14,
        color: "red",
        marginBottom:10,
        marginTop: -45
    },
    textInput: {
        backgroundColor: "#bdc2c9",
        color: "white",
        marginBottom:0,
        fontWeight: 600, 
        letterSpacing: 1.5,
        borderRadius: 7,
        padding: 10,
        width: "100%"
    },
    buttonsText: {
        backgroundColor: "#1e3a8a",
        color: "white",
        fontSize: 16,
        fontWeight: "bold",
        textAlign: "center",
        paddingVertical: 7,
        paddingHorizontal: 12
    },
    btnContainer:{
        width: "60%",
        gap: 20,
        flex:-1,
        justifyContent: "center",
        flexDirection: "row"
    },
    buttons: {
        backgroundColor: "#1e3a8a",
        borderRadius: 10,
        flex: 1,
        padding: 10,
        width: 120,
    }
})
 