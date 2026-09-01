import styled from "styled-components/native";

export const HomeContainer = styled.View`
    border: 1px solid black;
    gap: 78px;
    padding-left: 20px;
`

export const OurHighlights = styled.View`
    gap: 5px;
`

export const HighlightsTitle = styled.Text`
    font-size: 25px;
    font-weight: 700;
    `

export const HighlightsText = styled.Text`
    color: #375EE7;
    `
export const ScrollViewHighlights = styled.ScrollView.attrs({
    contentContainerStyle: {
        gap: 10
    }
})``
