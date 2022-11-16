import { FavoriteBorderOutlined, SearchOutlined, ShoppingCartOutlined } from '@mui/icons-material';
import React from 'react'
import styled from 'styled-components'
const Images = require.context('../assets/img', true);

const Info = styled.div`
    opacity: 0;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(0,0,0,0.2);
    z-index: 3;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.5s ease;
`

const Container = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    margin: 5px;
    min-width: 380px;
    height: 450px;
    align-items: center;
    justify-content: center;
    background-color: rgba(217, 223, 255, 0.6);
    position: relative;

    &:hover ${Info}{
        opacity: 1;
    }
`

const Circle = styled.div`
    width: 100px;
    height: 100px;
    border-radius: 50%;
    background-color: white;
    position: absolute;
`
const Image = styled.img`
    height: calc(100% - 280px);
    z-index: 2;
    display:fixed;
`

const Icon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 10px;
    transition: all 0.5s ease;
    z-index: 4;
    &:hover{
        background-color: #e9f5f5;
        transform: scale(1.1)
    }
`

const Title = styled.h1`
    color: black;
    padding: 10px;
    margin-bottom: 20px;
    display: flex;
    position: absolute;
    bottom: 10%;
    align-items: center;
    text-align: center;
    justify-content: center;
`

const Price = styled.h2`
    color: black;
    margin-bottom: 20px;
    display: flex;
    position: relative;
    top: 25%;
    align-items: center;
    text-align: center;
    justify-content: center;
`

const Product = ({ item }) => {
    return (
        <Container>
            <Circle />
            <Image src={Images(`./${item.img}`)} />
            <Info>
                <Icon>
                    <ShoppingCartOutlined/>
                </Icon>
                <Icon>
                    <SearchOutlined/>
                </Icon>
                <Icon>
                    <FavoriteBorderOutlined/>
                </Icon>
            </Info>
            <Title>{item.title}</Title>
            <Price>{item.price}</Price>
        </Container>
    )
}

export default Product