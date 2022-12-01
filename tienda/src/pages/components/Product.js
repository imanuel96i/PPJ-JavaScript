import { FavoriteBorderOutlined, SearchOutlined, ShoppingCartOutlined } from '@mui/icons-material';
import { Button } from '@mui/material';
import React, { useState } from 'react'
import styled from 'styled-components'
import { shoppingCart } from '../../data';
const Images = require.context('../assets/img', true);

/*
 * @author Manuel Vidal García
 * Contacto: mvidal@acl.cl
 * Fecha creación: 16/11/2022
 * Fecha ultima modificación: 17/11/2022
*/

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
    cursor: pointer;
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
    const [Shcart, setShcart] = useState([])

    const HandleClick = (props) => {
        const newCartPro = {
            id: Math.floor(Math.random() * 1000),
            title: props.title,
            price: props.price,
            img: props.img
        }
        setShcart([...Shcart, newCartPro])
        shoppingCart.splice(0, shoppingCart.length, ...Shcart)
        console.log(shoppingCart)
    }

    return (
        <Container>
            <Image src={Images(`./${item.img}`)} />
            <Info>
                {item.id === "error" ? "" :<>
                    <Icon>
                        <Button onClick={() => {
                            HandleClick(item)
                        }}>
                            <ShoppingCartOutlined style={{color: "black",}}/>
                        </Button>
                    </Icon>
                    <Icon>
                        <SearchOutlined/>
                    </Icon>
                    <Icon>
                        <FavoriteBorderOutlined/>
                    </Icon>
                </>}
            </Info>
            <Title>{item.title}</Title>
            {item.id === "error" ? "" : <Price>{`$${item.price} CLP`}</Price>}
        </Container>
    )
}

export default Product