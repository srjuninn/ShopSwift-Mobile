import styled from "styled-components/native";

export const ContainerContact = styled.View`
    padding: 20px;
    gap: 40px;
`


export const ContainerForms = styled.View`
    gap: 20px;
`

export const MessageText = styled.Text`
    font-size: 24px;
    font-weight: 700;
    text-align: center;
`

export const MessageTextHighlights = styled.Text`
    color: #375EE7;
`

export const TextLabel = styled.Text`
    font-size: 20px;
`

export const Fildset = styled.View`
    gap: 12px;
`

export const Input = styled.TextInput`
    border: 1px solid #2D3133;
    border-radius: 8px;
    padding-left: 5px;
    `

export const DescriptionInput = styled(Input).attrs({
    multiline: true,
    textAlignVertical: 'top',
})`
    height: 150px;
`

export const ButtonMessage = styled.Pressable`
    padding: 15px 0;
    background-color: #375EE7;
    border-radius: 8px;
`

export const ButtonText = styled.Text`
    color: white;
    text-align: center;
    font-size: 20px;
    font-weight: 700;
`

export const MapContainer = styled.View`
    align-items: center;
    gap: 28px;
`

export const MapText = styled.Text`
    font-size: 24px;
    font-weight: 700;
`

export const TextHighlight = styled.Text`
    color: #375EE7;
`

export const MapsImage = styled.Image`
    width: 350px;
    object-fit: contain;
`