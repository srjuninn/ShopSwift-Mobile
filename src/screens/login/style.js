import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
    containerHome: {
        paddingHorizontal: 20,
        gap: 78
    },
    contentHome: {
        gap: 40,
    },
    txtTitulo: {
        color: '#2D3133',
        fontSize: 40,
        fontWeight: '700',
        width: 265
    },
    txtHighlights: {
        color: '#375EE7',
        fontSize: 40
    },
    containerForm: {
        gap: 20
    },
    contentLogin: {
        gap: 20
    },
    txtInput: {
        fontSize: 24,
        color: '#000000'

    },
    input: {
        paddingHorizontal: 20,
        borderWidth: 1,
        borderColor: '#2D3133',
        borderRadius: 8
    },
    button: {
        marginTop: 40,
        paddingHorizontal: 50,
        paddingVertical: 18,
        backgroundColor: '#375EE7',
        borderRadius: 8
    },
    dontHaveAccount: {
        gap:20,
    },
    txtButton: {
        fontSize: 24,
        color: '#F8FAFC',
        textAlign: 'center'
    },
    dontHaveAccountTxt: {
        textAlign: 'center',
        fontSize: 20,
        color: '#2D3133'
    },
    createAccountTxt: {
        color: '#375EE7',
        fontWeight: '700'
    }
})