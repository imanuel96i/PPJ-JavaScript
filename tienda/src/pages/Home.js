import React from 'react'
import Announcement from './components/Announcement'
import Categories from './components/Categories'
import NavBar from './components/NavBar'
import Slider from './components/Slider'
import Products from './components/Products'
import styled from 'styled-components'
import Footer from './components/Footer'

/*
 * @author Manuel Vidal García
 * Contacto: mvidal@acl.cl
 * Fecha creación: 16/11/2022
 * Fecha ultima modificación: 16/11/2022
*/

const TitleProduc = styled.h1`
    display:flex;
    justify-content: center;
`

const Home = () => {
    return (
        <div style={{
            display: "flex",
            flexDirection: "column",
            height: "100vh"
        }}>
            <Announcement/>
            <NavBar />
            <div style={{flexGrow: 1}}>
                <Slider />
                <Categories />
                <TitleProduc>Productos</TitleProduc>
                <Products />
            </div>
            <Footer />
        </div>
    )
}

export default Home