import { ActionButton } from "@/src/components/ActionButton";
import { HeaderSection } from "@/src/components/HeaderSection";
import { useState } from "react";
import { KeyboardAvoidingView, KeyboardTypeOptions, Platform, ScrollView, Text, TextInput, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
 
type FormState = {
    nome: string;
    email: string;
    curso: string;
    mensagem: string;
};
 
type FielConfig = {
    key: keyof FormState
    label: string;
    placeholder: string;
    keyboardtype?: KeyboardTypeOptions;
    multiline?: boolean;
};
 
const initialForm: FormState = {
    nome: "",
    email: "",
    curso: "",
    mensagem: ""
}
 
const campos: FielConfig[] = [
    {
        key: "nome",
        label:"Nome",
        placeholder: "Digite seu nome:"
    },
    {
        key: "email",
        label: "E-mail",
        placeholder: "Digite seu e-mail"
    },
     {
        key: "curso",
        label: "Curso",
        placeholder: "Ex.: Desenvolvimento Mobile..."
    },
     {
        key: "mensagem",
        label: "Mensagem",
        placeholder: "Escreva uma mensagem curta...",
        multiline: true
    }
   
];
 
export default function FormularioScreen(){
    const [form, setForm] = useState<FormState>(initialForm);
    const [feedback,setFeedback] = useState("");
    const [isSuccess, setIsSucess] = useState(false);
 
 
 
    function updateField(field: keyof FormState, value: string){
    setForm((currentForm ) =>({
        ...currentForm,
        [field]: value
    }));
    }
 
    function handleSubmit(){
        const hasEmptyField = Object.values(form).some((value) => value.trim() .length === 0);
 
        if (hasEmptyField){
            setIsSucess(false);
            setFeedback("Preencha todos os campos antes de enviar.");
            return;
        }
 
        setIsSucess(true);
        setFeedback(`obrigado(a), ${form.nome}! Sua mensagem foi registrada com sucesso`)
    }
    return(
       <SafeAreaView className="flex-1 bg-gelo" edges={["top"]}>
        <KeyboardAvoidingView
          className="flex-1"
          behavior={Platform.select({ios: "padding", default: undefined})}
        >
          <ScrollView>
            <HeaderSection
              eyebrow="Interacao"
              title="Formulário"
              subtitle="Uma tela simples para praticar TextInput"
              icon="document-text-outline"
            />
 
            <View className="rounded-3 border border-grey bg-white p-5 shadow-sm">
                {/* O array evita repetir o mesmo bloco de código da label + TextInput várias vezes */}
                {campos.map((campo) => (
                    <View key={campo.key} className="mb-4">
                        <Text className="mb-4 text-sm font-extrabold text-petroleo-dark">
                            {campo.label}
                        </Text>
                        <TextInput
                            value={form[campo.key]}
                            onChangeText={(value) => updateField(campo.key, value)}
                            placeholder={campo.placeholder}
                            placeholderTextColor="#7b8f95"
                            keyboardType={campo.keyboardtype}
                            multiline={campo.multiline}
                            textAlignVertical={campo.multiline ? "top" : "center"}
                            className={`rounded-2xl border border-grey bg-gelo px-4 text-base text-texto ${
                                campo.multiline ? "min-h-32 py-4" : "h-14"
                            }`}
                        />
                    </View>
                ))}
 
                <ActionButton
                    label="Enviar formulário"
                    icon="send-outline"
                    onPress={handleSubmit}
                />
 
                {feedback ? (
                    <View className={`mt-5 rounded-2xl p-4 ${isSuccess ? "bg-aqua-light" : "bg-red-50"}`}>
                        <Text className={`text-center text-sm font-bold ${isSuccess ? "text-aqua-dark" : "text-perigo"}`}>
                            {feedback}
                        </Text>
                    </View>
                ) : null}
            </View>
          </ScrollView>
 
        </KeyboardAvoidingView>
       </SafeAreaView>
    )
}
 
 
 