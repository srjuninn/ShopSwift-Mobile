import { Text, TextInput, View, Image, Pressable, ScrollView } from "react-native"
import logoType from '../../assets/logo-02.png'
import maps from '../../assets/maps.png'
import { ButtonMessage, ButtonText, ContainerContact, ContainerForms, DescriptionInput, Fildset, Input, MapContainer, MapsImage, MapText, MessageText, MessageTextHighlights, TextHighlight, TextLabel } from "./style"

export const Contato = () => {
    return (
        <ScrollView>

            <ContainerContact>
                <Image source={logoType} />


                <ContainerForms>
                    <MessageText>Mande uma <MessageTextHighlights>mensagem</MessageTextHighlights></MessageText>
                    <Fildset>
                        <TextLabel>Nome:</TextLabel>
                        <Input />
                    </Fildset>
                    <Fildset>
                        <TextLabel>Assunto:</TextLabel>
                        <Input />
                    </Fildset>
                    <Fildset>
                        <TextLabel>Mensagem:</TextLabel>
                        <DescriptionInput />
                    </Fildset>
                </ContainerForms>
                <ButtonMessage><ButtonText>Enviagra</ButtonText></ButtonMessage>
                <MapContainer>
                    <MapText>Venha nos <TextHighlight>visitar</TextHighlight></MapText>
                    <MapsImage source={maps} />
                </MapContainer>
            </ContainerContact>
        </ScrollView>
    )
}