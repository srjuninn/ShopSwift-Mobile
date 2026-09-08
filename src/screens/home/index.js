import { HighlightsText, HighlightsTitle, HomeContainer, OurHighlights, ScrollViewHighlights, OurCategories, OurCategoriesTitle, OurCategoriesText, Categories, CategoryImage, CategoryText, Category } from "./style"
import { Image, ScrollView} from "react-native"
import logotype from '../../assets/logoShopSwift.png'
import destaque1 from '../../assets/destaque1.png'
import destaque2 from '../../assets/destaque2.png'
import destaque3 from '../../assets/destaque3.png'
import games from '../../assets/gamesIcon.png'
import gamesActive from '../../assets/gamesActive.png'
import shirts from '../../assets/shirtIcon.png'
import shirtsActive from '../../assets/shirtActive.png'
import shoes from '../../assets/shoesIcon.png'
import shoesActive from '../../assets/shoesActive.png'
import eletronics from '../../assets/eletronicsIcon.png'
import eletronicsActive from '../../assets/eletronicActive.png'
import pants from '../../assets/pantsIcon.png'
import pantsActive from '../../assets/pantsActive.png'
import { CardCategory } from "../../components/CardCategory"

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
                        {/* Duas ultilização de cards categoriesa, sem props e com props */}
                        {/* <Category>
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
                        </Category> */}
                        <CardCategory
                            image={games}
                            activeImage={gamesActive}
                            name="Gaymes"
                        />
                        <CardCategory
                            image={shirts}
                            activeImage={shirtsActive}
                            name="Camisinhas"
                        />
                        <CardCategory
                            image={pants}
                            activeImage={pantsActive}
                            name="Camisinhas"
                        />
                        <CardCategory
                            image={shoes}
                            activeImage={shoesActive}
                            name="Tênis"
                        />
                        <CardCategory
                            image={eletronics}
                            activeImage={eletronicsActive}
                            name="Eletrônicos"
                        />

                    </Categories>
                </ScrollView>
            </OurCategories>
        </HomeContainer>
    )
}