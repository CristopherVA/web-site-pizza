import React from 'react';
import {
    ProductsContainer,
    ProductHeading,
    ProductWrapper,
    ProductCard,
    ProductImg,
    ProductInfo,
    ProductTitle,
    ProductDesc,
    ProductPrice,
    ProductBtn
} from './ProductsElements';

export const Products = ({ heading, data }) => {
    return (
        <ProductsContainer>
            <ProductHeading>{heading}</ProductHeading>
            <ProductWrapper>
                {
                    data.map((product, index) => {

                        const { img, alt, name, desc, price, button } = product;

                        return (
                            <ProductCard key={index}>
                                <ProductImg src={img} alt={alt} />
                                <ProductInfo>
                                    <ProductTitle>{name}</ProductTitle>
                                    <ProductDesc>{desc}</ProductDesc>
                                    <ProductPrice>{price}</ProductPrice>
                                    <ProductBtn>{button}</ProductBtn>
                                </ProductInfo>
                            </ProductCard>
                        )
                    })
                }
            </ProductWrapper>
        </ProductsContainer>
    )
}
