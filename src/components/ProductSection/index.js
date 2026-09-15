import { BoxProducts, ContainerProducts, TextHighlight, TextTitle } from "./style"
import { CardProducs } from "./Products"
import imageProduct from '../../assets/testImg.png'

export const ProductsSection = () => {
    return(
        <BoxProducts>

            <TextTitle>Nossos <TextHighlight>Produtos</TextHighlight></TextTitle>

            <ContainerProducts>
                <CardProducs 
                    image={imageProduct} 
                    name="Tênis descolado do melhor corre..." 
                    price="800,00"/>            
                <CardProducs 
                    image={imageProduct} 
                    name="Tênis descolado do melhor corre..." 
                    price="800,00"/>      
                    <CardProducs 
                    image={imageProduct} 
                    name="Tênis descolado do melhor corre..." 
                    price="800,00"/>            
                <CardProducs 
                    image={imageProduct} 
                    name="Tênis descolado do melhor corre..." 
                    price="800,00"/>            
            </ContainerProducts>            

        </BoxProducts>
    )
}