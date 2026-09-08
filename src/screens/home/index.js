import { HighlightsText, HighlightsTitle, HomeContainer, OurHighlights, ScrollViewHighlights, OurCategories, OurCategoriesTitle, OurCategoriesText, Categories, CategoryImage, CategoryText, Category } from "./style"
import { Image } from "react-native"
import logotype from '../../assets/logoShopSwift.png'
import { ScrollView } from "react-native"
import destaque1 from '../../assets/destaque1.png'
import destaque2 from '../../assets/destaque2.png'
import destaque3 from '../../assets/destaque3.png'
import games from '../../assets/gamesIcon.png'
import shirts from '../../assets/shirtIcon.png'
import shoes from '../../assets/shoesIcon.png'
import eletronics from '../../assets/eletronicsIcon.png'
import pants from '../../assets/pantsIcon.png'

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
                <OurCategoriesTitle>Nossas <OurCategoriesText>Categorias</OurCategoriesText></OurCategoriesTitle>
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                    <Categories>
                        <Category>
                            <CategoryImage source={games} />
                            <CategoryText>Gaymes</CategoryText>
                        </Category>
                        <Category>
                            <CategoryImage source={shirts} />
                            <CategoryText>Camisinhas</CategoryText>
                        </Category>
                        <Category>
                            <CategoryImage source={pants} />
                            <CategoryText>Calcinhas</CategoryText>
                        </Category>
                        <Category>
                            <CategoryImage source={shoes} />
                            <CategoryText>Tênis</CategoryText>
                        </Category>
                        <Category>
                            <CategoryImage source={eletronics} />
                            <CategoryText>Eletrônicos</CategoryText>
                        </Category>
                    </Categories>
                </ScrollView>
            </OurCategories>
        </HomeContainer>
    )
}