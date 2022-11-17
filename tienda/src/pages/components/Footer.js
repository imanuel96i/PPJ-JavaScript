import { Facebook, Instagram, LinkedIn, MailOutline, Twitter } from '@mui/icons-material'
import React from 'react'
import styled from 'styled-components'

/*
 * @author Manuel Vidal García
 * Contacto: mvidal@acl.cl
 * Fecha creación: 16/11/2022
 * Fecha ultima modificación: 16/11/2022
*/

const Container = styled.div`
    display: flex;
    background-color: rgba(241, 243, 255)
`
const Left = styled.div`
    flex: 1;
    display:flex;
    flex-direction: column;
    padding: 20px;
`
const Center = styled.div`
    flex: 1;
    padding: 20px;
    text-align: center;
`
const Right = styled.div`
    flex: 1;
    padding: 20px;
    align-items: center;
    justify-content: flex-end;
    text-align: center;

`

const Title = styled.h3`
    padding-top: 30px;
`

const Logo = styled.h1`
    font-weight: bold;
`

const SocialContainer = styled.div`
    display: flex;
`

const SocialIcon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
`

const ContactItem = styled.div`
    margin-bottom: 20px;
    display: flex;
    align-items: center;
    justify-content: center;


`

const Footer = () => {
    return (
        <Container>
            <Left>
                <Logo>Tienda Tecnología</Logo>
                <SocialContainer>
                    <SocialIcon>
                        <Facebook />
                    </SocialIcon>
                    <SocialIcon>
                        <Instagram/>
                    </SocialIcon>
                    <SocialIcon>
                        <Twitter/>
                    </SocialIcon>
                    <SocialIcon>
                        <LinkedIn/>
                    </SocialIcon>
                </SocialContainer>
            </Left>
            <Center>
                <Title>&#169; 2022 Manuel Vidal García</Title>
            </Center>
            <Right>
                <Title style={{ paddingTop: "10px" }}>Contacto</Title>
                <ContactItem>
                    <MailOutline style={{ marginRight: "10px", paddingTop: "10px"}} /> <strong style={{ paddingTop: "10px"}}>mvidal@acl.cl</strong>
                </ContactItem>
            </Right>
        </Container>
    )
}

export default Footer