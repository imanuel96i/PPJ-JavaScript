import { Handyman } from '@mui/icons-material';
import React from 'react'
import styled from 'styled-components'
const Images = require.context('../assets/img', true);

/*
 * @author Manuel Vidal García
 * Contacto: mvidal@acl.cl
 * Fecha creación: 16/11/2022
 * Fecha ultima modificación: 16/11/2022
*/

const Info = styled.div`
    opacity: 1;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    z-index: 3;
    transition: all 0.5s ease;
`

const Title = styled.h1`
    color: white;
    margin-bottom: 20px;
    z-index:4;
`

const Button = styled.button`
    border: none;
    padding: 10px;
    background-color: white;
    cursor: pointer;
    font-weight: 600;
    font-size: 18px;
    z-index:4;
`

const Container = styled.div`
    flex: 1;
    margin: 3px;
    height: 70vh;
    position: relative;

    &:hover ${Info}{
        background-color: rgba(0,0,0,0.7);
    }
`

const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index:1;
`

const CategoryItem = ({item}) => {
    return (
        <Container>
            <Image src={Images(`./${item.img}`)} />
            <Info>
                <Handyman style={{color: "white"}} />
                <Title>{item.title}</Title>
                <Button>Revisa aquí</Button>
            </Info>
            
        </Container>
    )
}

export default CategoryItem