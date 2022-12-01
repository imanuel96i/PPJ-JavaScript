import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import Product from './Product'
import http from './http/http'

/*
 * @author Manuel Vidal García
 * Contacto: mvidal@acl.cl
 * Fecha creación: 16/11/2022
 * Fecha ultima modificación: 30/11/2022
*/

const Container = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`



const Products = () => {
    const [product, setProduct] = useState([])
    useEffect(() => {
        const GetProducts = async () => {
            await http.get('/products')
                .then(res => setProduct(res.data))
                .catch(err => setProduct([
                    {
                        id: "error",
                        title: "Ocurrio un error :(",
                        img: "error.jpg"
                    }]))
        }

        GetProducts();
    }, [])
    return (
        <Container>
            {
                product.map(item => (
                    <Product item={item} key={item.id}/>
                )) 
            }
        </Container>
    )
}

export default Products