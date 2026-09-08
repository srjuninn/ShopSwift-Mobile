import styled from "styled-components/native";

export const HomeContainer = styled.View`
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

export const OurCategories = styled.View`
    gap: 12px;
    `

export const OurCategoriesTitle = styled.Text`
    font-size: 25px;
    font-weight: 700;
    `

export const OurCategoriesText = styled.Text`
    color: #375EE7;
    `

export const Categories = styled.View`
    flex-direction: row;
    gap: 10px;
    `

export const Category = styled.View`
    flex-direction: row;
    padding: 10px 20px; 
    gap: 12px;
    border: 1px solid #375EE7;
    border-radius: 7px;
`

export const CategoryImage = styled.Image`
    width: 30px;
    height: 30px;
`

export const CategoryText = styled.Text`
    font-size: 20px;
    font-weight: bold;
    color: #375EE7
`