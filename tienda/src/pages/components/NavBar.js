import { Search } from '@mui/icons-material'
import { Badge } from '@mui/material'
import React from 'react'
import styled from 'styled-components'
import ShoppingCartRoundedIcon from '@mui/icons-material/ShoppingCartRounded';

/*
 * @author Manuel Vidal García
 * Contacto: mvidal@acl.cl
 * Fecha creación: 16/11/2022
 * Fecha ultima modificación: 16/11/2022
*/

const Container = styled.div`
    height: 60px;
`
const Wrapper = styled.div`
    padding: 10px 20px;
    display: flex;
    justify-content: space-between;
`
const Left = styled.div`
    flex:1;
    text-align: left;
`
const Center = styled.div`
    flex:1;
    display: flex;
    align-items: center;
`
const Right = styled.div`
    flex:1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
`

const SearchContainer = styled.div`
    border: 1px solid lightgray;
    display: flex;
    align-items: center;
    padding: 5px;
    width: 100%;
`

const Input = styled.input`
    border: none;
    width: 100%;
`

const Logo = styled.h1`
    font-weight: bold;
`

const MenuItem = styled.div`
    font-size: 24px;
    cursor: pointer;
    margin-left: 25px;
`

const NavBar = () => {
    return (
        <Container>
            <Wrapper>
                <Left><Logo>Tienda Tecnología</Logo></Left>
                <Center>
                    <SearchContainer>
                        <Input/>
                        <Search style={{color:"gray", fontSize:16,}} />
                    </SearchContainer>
                </Center>
                <Right>
                    <MenuItem>Registro</MenuItem>
                    <MenuItem>Inicio Sesión</MenuItem>
                    <MenuItem>
                        <Badge badgeContent={4} color="primary">
                            <ShoppingCartRoundedIcon/>
                        </Badge>
                    </MenuItem>
                </Right>
            </Wrapper>
        </Container>
    )
}

export default NavBar