import React, { useState } from 'react'
import { ContainerLinks, ContainerNavbar, LogoLink, MenuIcon, Links, ContainerUserCart, User, Cart, ContainerDropdownMenu, DropdownMenu, LinksDropDown, CointainerDivProducts, ArrowDown, CartBubble, ContainerCart, Overlay } from './NavbarStyled';
import ModalCart from '../ModalCart/ModalCart';
import { useSelector } from 'react-redux';
import ModalUser from '../ModalUser/ModalUser';


const Navbar = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const toggleMenu = () => {

      setIsMenuOpen(!isMenuOpen);
      setIsCartOpen(true);
      setIsUserOpen(true);
    }

    const [isCartOpen, setIsCartOpen] = useState(false)
    const toggleCart = () => {

      setIsCartOpen(!isCartOpen);
      setIsUserOpen(true);
      setIsMenuOpen(true);
    }

    const [isUserOpen, setIsUserOpen] = useState(false)
    const toggleUser = () => {

      setIsUserOpen(!isUserOpen);
      setIsMenuOpen(true);
      setIsCartOpen(true);
    }

    const closeMenus = () => {
      setIsMenuOpen(true);
      setIsCartOpen(true);
      setIsUserOpen(true);
    }

    const {cartItems} = useSelector(state => state.cart)

    const totalQuiantity = cartItems.reduce((acc, quantity) => {
      return (acc += quantity.quantity)
    }, 0)


  return (
    <ContainerNavbar>
      <MenuIcon onClick={toggleMenu}/>
      <LogoLink to='/' onClick={closeMenus}>BearX</LogoLink>
      <ContainerLinks $isMenuOpen={isMenuOpen}>
        <Links to='/' onClick={closeMenus}>Home</Links>
        <Links to='/aboutus' onClick={closeMenus}>About us</Links>
        <ContainerDropdownMenu>
          <CointainerDivProducts>Products <ArrowDown /></CointainerDivProducts>
          <DropdownMenu>
            <LinksDropDown to='/peripherals' onClick={closeMenus}>Peripherals</LinksDropDown>
            <LinksDropDown to='/components' onClick={closeMenus}>Components</LinksDropDown>
            <LinksDropDown to='/consoles' onClick={closeMenus}>Consoles</LinksDropDown>
            <LinksDropDown to='/gamingchairs' onClick={closeMenus}>Gaming Chairs</LinksDropDown>
            <LinksDropDown to='/tablets' onClick={closeMenus}>Tablets</LinksDropDown>
            <LinksDropDown to='/applestore' onClick={closeMenus}>Apple Store</LinksDropDown>
            <LinksDropDown to='/connectivityandnetworks' onClick={closeMenus}>Connectivity And Networks</LinksDropDown>
          </DropdownMenu>
        </ContainerDropdownMenu>
        <Links to='/contactus' onClick={closeMenus}>Contact us</Links>
      </ContainerLinks>
      <ContainerUserCart>
        <User onClick={toggleUser}/>
        <ContainerCart onClick={toggleCart}>
          <Cart />
          <CartBubble>{totalQuiantity}</CartBubble>
        </ContainerCart>
      </ContainerUserCart>
      <ModalUser stateUser={isUserOpen} stateSetUser={setIsUserOpen}/>
      <ModalCart stateCart={isCartOpen} stateSetCart={setIsCartOpen}/>
      {
        ((isCartOpen === false ) || (isMenuOpen === false)) && <Overlay onClick={closeMenus} />
      }
    </ContainerNavbar>
  )
}

export default Navbar