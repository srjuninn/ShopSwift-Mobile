import { Image, Text, View } from "react-native"
import { BoxProducts, ContainerPrice, ProductImage, ProductPrice, ProductsDescription, ProductTitle } from "./style"
import iconAdd from '../../../assets/iconAdd.png'
import { useEffect, useState } from "react"

export const CardProducs = () => {
    const [products, setProducts] = useState([])
    const api = async () => {
        const res = await fetch('https://fakestoreapi.com/products')
        const data = await res.json()
        setProducts(data)
    }

    useEffect(() => {
        api()
    },[])

    return (
        <BoxProducts>

            {products.map((product) => (
                <View key={product.id}>
                    <ProductImage source={{ uri: product.image }} />
                    <ProductsDescription>
                        <ProductTitle>{product.title}</ProductTitle>
                        <ContainerPrice>
                            <ProductPrice>R${product.price}</ProductPrice>
                            <Image source={iconAdd} />
                        </ContainerPrice>
                    </ProductsDescription>
                </View>
            ))}

        </BoxProducts>
    )
}