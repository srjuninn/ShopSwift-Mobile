import { SafeAreaView } from "react-native-safe-area-context"
import { Text, Image, View, TextInput, Pressable } from 'react-native'
import logo from '../../assets/logoShopSwift.png'
import { styles } from './style'

export const SignUp = () => {
    return (
        <SafeAreaView>
            <View style={styles.containerHome}>
                <Image source={logo} />
                <Text style={styles.titleTxt}>Crie uma conta e <Text style={styles.titleHighlights}>se descubra</Text></Text>
                <View style={styles.formContainer}>
                    <View style={styles.contentSignUp}>
                        <Text style={styles.txtInput}>E-mail</Text>
                        <TextInput style={styles.input} placeholder="insira seu e-mail" keyboardAppearance="email-address"></TextInput>
                    </View>
                    <View style={styles.contentSignUp}>
                        <Text style={styles.txtInput}>Senha</Text>
                        <TextInput style={styles.input} placeholder="insira sua senha" secureTextEntry></TextInput>
                    </View>
                    <Pressable style={styles.button}><Text style={styles.buttonTxt}>Cadastrar</Text></Pressable>
                    <Text style={styles.haveAccountTxt}>Já tem uma conta ? <Text style={styles.haveAccountSignUp}>Entrar</Text></Text>
                </View>
            </View>
        </SafeAreaView>
    )
}