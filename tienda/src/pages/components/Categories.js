import React from 'react'
import { categories } from '../../data'
import styled from 'styled-components'
import CategoryItem from './CategoryItem'

/*
 * @author Manuel Vidal García
 * Contacto: mvidal@acl.cl
 * Fecha creación: 16/11/2022
 * Fecha ultima modificación: 16/11/2022
*/

const Container = styled.div`
    display: flex;
    padding: 20px;
    justify-content: space-between;
`

const Categories = () => {
    return (
        <Container>
            {
                categories.map(item => (
                    <CategoryItem item={item} key={ item.id} />
                ))
            }
        </Container>
    )
}

export default Categories