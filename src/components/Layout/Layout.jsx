import React from 'react'
import Navbar from '../Navbar/Navbar'
import { Content, Container } from './LayoutStyled'
import Footer from '../Footer/Footer'


const Layout = ({children}) => {
  return (
    <Container>
        <Navbar />
        <Content>{children}</Content>
        <Footer />
    </Container>
  )
}

export default Layout
