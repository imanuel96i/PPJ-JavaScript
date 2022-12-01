import React, {useEffect, useState} from 'react'
import styled from 'styled-components'
import CategoryItem from './CategoryItem'
import http from './http/http'

/*
 * @author Manuel Vidal García
 * Contacto: mvidal@acl.cl
 * Fecha creación: 16/11/2022
 * Fecha ultima modificación: 01/12/2022
*/

const Container = styled.div`
    display: flex;
    padding: 20px;
    justify-content: space-between;
`

const Categories = () => {
    const itemerr = [{ id: 1, title: "<h1>Ocurrio un error :(</h1>", img: "" }]

    const [category, setCategory] = useState([])
    useEffect(() => {
        const GetCategories = async () => {
            await http.get('/categories')
                .then(res => setCategory(res.data))
                .catch(err => setCategory([
                    {
                        id: "error",
                        title: "Ocurrio un error :(",
                        img: "error.jpg"
                    }]))
        }
        GetCategories();
    }, [])
    return (
        <Container>
            {
                category ? 
                    category.map(item => (
                        <CategoryItem item={item} key={ item.id} />
                    ))
                    :
                    <CategoryItem item={itemerr} key={ itemerr.id} />
            }
        </Container>
    )
}

export default Categories