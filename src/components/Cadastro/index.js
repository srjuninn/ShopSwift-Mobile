import { Image } from 'react-native'
import logo from '../../assets/logoShopSwift.png'
import { Container, TextTitle, TextHighlights, FormContainer, FormLabel, TextLabel, Input, SignUpButton, SignUpButtonText, HaveAnAccountText, SignUpText, HaveAnAccount } from './style'

export const Cadastro = () => {
    return (
        <Container>
            <Image source={logo}/>
            <TextTitle>Crie uma conta e <TextHighlights>se surpreenda</TextHighlights></TextTitle>
            <FormContainer>
                <FormLabel>
                    <TextLabel>E-mail</TextLabel>
                    <Input placeholder='meuemail@email.com' keyboardType='email-address'></Input>
                </FormLabel>
                <FormLabel>
                    <TextLabel>Password</TextLabel>
                    <Input placeholder='**********' secureTextEntry></Input>
                </FormLabel>
            </FormContainer>
            <HaveAnAccount>
                <SignUpButton><SignUpButtonText>Cadastrar</SignUpButtonText></SignUpButton>
                <HaveAnAccountText>Já tem uma conta ? <SignUpText>Entrar</SignUpText></HaveAnAccountText>
            </HaveAnAccount>
        </Container>
    )
}