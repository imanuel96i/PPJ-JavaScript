import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    height:30px;
    background-color: #4461FD;
    color: white;
    display: flex;
    align-items: center;
    justify-content:  center;
    font-size: 14px;
    font-weight: 500px
`
const Announcement = () => {
    return (
        <Container>
            Ofertas exclusivas por inauguración de la tienda!!!!
        </Container>
    )
}

export default Announcement