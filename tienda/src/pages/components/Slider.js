import { ArrowLeftOutlined, ArrowRightOutlined } from '@mui/icons-material'
import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import http from './http/http'
const sliderImages = require.context('../assets/img', true);


/*
 * @author Manuel Vidal García
 * Contacto: mvidal@acl.cl
 * Fecha creación: 16/11/2022
 * Fecha ultima modificación: 01/12/2022
*/

const Container = styled.div`
    width: 100%;
    height: 80vh;
    display: flex;
    position: relative;
    overflow: hidden;
    background-color: rgba(217, 223, 255, 0.6);
`

const Arrow = styled.div`
    width: 50px;
    height: 50px;
    background-color: #fff7f7;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    bottom: 0;
    left: ${props => props.direction === "left" && "10px"};
    right: ${props => props.direction === "right" && "10px"};
    margin: auto;
    cursor: pointer;
    opacity: 0.7;
    z-index: 2;
`

const Wrapper = styled.div`
    height: 100%;
    display: flex;
    transition: all 1.5s ease;
    transform: translateX(${(props) => props.slideIndex * -100}vw);
`

const Slide = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
`
const ImgContainer = styled.div`
    height: 100%;
    flex: 1;
`
const Image = styled.img`
    height: 75%;

`

const InfContainer = styled.div`
    flex: 1;
    padding: 50px;
`

const Title = styled.h1`
    font-size: 45px;
`

const Desc = styled.p`
    margin: 50px 0px;
    font-size: 20px;
    font-weight: 500;
    letter-spacing: 3px;
`

const Button = styled.button`
    padding: 10px;
    font-size: 20px;
    background-color: transparent;
    cursor: pointer;
`
const Slider = () => {
    const [slideIndex, setSlideIndex] = useState(0);
    
    const [slider, setSlider] = useState([])
    useEffect(() => {
        const GetSlider = async () => {
            await http.get('/slider')
                .then(res => setSlider(res.data))
                .catch(err => setSlider([
                    {
                        id: "error",
                        title: "Ocurrio un error :(",
                        img: "error.jpg"
                    }]))
        }

        GetSlider();
    }, [])

    const handleClick = (direction) => {
        const can = slider.length - 1
        if (direction === "left") {
            setSlideIndex(slideIndex > 0 ? slideIndex - 1 : can);
        } else {
            setSlideIndex(slideIndex < can ? slideIndex + 1 : 0);
        }
    }
    
    return (
        <Container>
            <Arrow direction="left" onClick={() => handleClick("left")}>
                <ArrowLeftOutlined/>
            </Arrow>
            <Wrapper slideIndex={slideIndex}>
                {slider.map(product => (
                    <Slide key={product.id}>
                        {product.id === "error" ? <>
                            <ImgContainer>
                                <Image src={sliderImages(`./${product.img}`)} />
                            </ImgContainer>
                            <InfContainer>
                                <Title>{product.title}</Title>
                            </InfContainer>
                        </> : <>
                            <ImgContainer>
                                <Image src={sliderImages(`./${product.img}`)} />
                            </ImgContainer>
                            <InfContainer>
                                <Title>{product.title}</Title>
                                <Desc>{`$${product.price} CLP`}</Desc>
                                <Button>Añadir a la canasta</Button>
                            </InfContainer>
                        </>}
                        
                    </Slide>
                ))}
            </Wrapper>
            <Arrow direction="right" onClick={() => handleClick("right")}>
                <ArrowRightOutlined/>
            </Arrow>
        </Container>
    )
}

export default Slider