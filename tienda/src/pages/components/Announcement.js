import React from 'react'
import styled from 'styled-components'

/*
 * @author Manuel Vidal García
 * Contacto: mvidal@acl.cl
 * Fecha creación: 16/11/2022
 * Fecha ultima modificación: 17/11/2022
*/

const Container = styled.div`
    height:30px;
    background-color: #4461FD;
    color: white;
    display: flex;
    align-items: center;
    justify-content:  center;
    font-size: 18px;
    font-weight: 500
`
const Announcement = () => {
    return (
        <Container>
            Ofertas exclusivas por inauguración de la tienda!!!!
        </Container>
    )
}

export default Announcement