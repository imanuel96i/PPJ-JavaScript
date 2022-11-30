import { Handyman, Search } from '@mui/icons-material'
import { Badge, Box, Button, Drawer } from '@mui/material'
import React, { useState } from 'react'
import styled from 'styled-components'
import ShoppingCartRoundedIcon from '@mui/icons-material/ShoppingCartRounded';
// import fs from 'fs'
import data from '../data.json'
const imagesCart = require.context('../assets/img', true);


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
    const [state, setState] = useState({
        right: false,
    });

    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState({ ...state, [anchor]: open });
    };
    
    const checkCart = data.shoppingCart.length > 0 ? true : false;

    const list = (anchor) => (
        <Box
            sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 450 }}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
            >
                {
                checkCart ?
                    data.shoppingCart.map((cart) => (
                        <div key={cart.id}>
                            <h1>{cart.title}</h1>
                            <h1>${cart.price} CLP</h1>
                            <img  alt="" src={imagesCart(`./${cart.img}`)} style={{autoSize: "auto"}}></img>
                        </div>
                    ))
                    :
                    <div>
                        <Handyman/><Handyman/><Handyman/><Handyman/>
                        <h2>No hay productos que mostrar</h2>
                    </div>
                }
        </Box>
    );


    return (
        <Container>
            <Wrapper>
                <Left><Logo>Tienda Tecnología</Logo></Left>
                <Center>
                    <Handyman />
                    <SearchContainer>
                        <Input/>
                        <Search style={{color:"gray", fontSize:16,}} />
                    </SearchContainer>
                </Center>
                <Right>
                    <MenuItem><Handyman />Registro</MenuItem>
                    <MenuItem><Handyman />Inicio Sesión</MenuItem>
                    <MenuItem>
                        <Button onClick={toggleDrawer("right", true)}>
                            <Badge badgeContent={4} color="primary">
                                <ShoppingCartRoundedIcon/>
                            </Badge>
                        </Button>
                        <Drawer
                            anchor="right"
                            open={state["right"]}
                            onClose={toggleDrawer("right", false)}
                        >
                            {list("right")}
                        </Drawer>
                    </MenuItem>
                </Right>
            </Wrapper>
        </Container>
    )
}

export default NavBar