import { HighlightsText, HighlightsTitle, HomeContainer, OurHighlights, ScrollViewHighlights, OurCategories } from "./style"
import { Image } from "react-native"
import logotype from '../../assets/logoShopSwift.png'
import { ScrollView } from "react-native"
import destaque1 from '../../assets/destaque1.png'
import destaque2 from '../../assets/destaque2.png'
import destaque3 from '../../assets/destaque3.png'


export const Home = () => {
    return (
        <HomeContainer>
            <Image source={logotype} />
            <OurHighlights>
                <HighlightsTitle>Nossos <HighlightsText>destaques</HighlightsText></HighlightsTitle>
                <ScrollViewHighlights 
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                >
                    <Image source={destaque1} />
                    <Image source={destaque2} />
                    <Image source={destaque3} />
                </ScrollViewHighlights>
            </OurHighlights>

            <OurCategories>
                
            </OurCategories>
        </HomeContainer>
    )
}