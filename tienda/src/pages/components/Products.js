import React from 'react'
import styled from 'styled-components'
import { products } from '../../data'
import Product from './Product'

/*
 * @author Manuel Vidal García
 * Contacto: mvidal@acl.cl
 * Fecha creación: 16/11/2022
 * Fecha ultima modificación: 16/11/2022
*/

const Container = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`

const Products = () => {
    return (
        <Container>
            {
                products.map(item => (
                    <Product item={item} key={item.id}/>
                ))
            }
        </Container>
    )
}

export default Products