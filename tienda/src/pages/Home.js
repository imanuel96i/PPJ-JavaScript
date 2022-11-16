import React from 'react'
import Announcement from './components/Announcement'
import Categories from './components/Categories'
import NavBar from './components/NavBar'
import Slider from './components/Slider'
import Products from './components/Products'
import styled from 'styled-components'

const TitleProduc = styled.h1`
    display:flex;
    justify-content: center;
`

const Home = () => {
    return (
        <div>
            <Announcement/>
            <NavBar />
            <Slider />
            <Categories />
            <TitleProduc>Productos</TitleProduc>
            <Products/>
        </div>
    )
}

export default Home