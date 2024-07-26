import React from 'react'
import { ContainerFooter, Email, LinksNavFooter, NavFooter, NavIcons, Whatsapp, Location, NavCards } from './FooterStyled'

const cards = [
    {
        image: 'metodosdepago/americanexpresss.png',
        title: 'American Express',
    },
    {
        image: 'metodosdepago/argencard.png',
        title: 'Argen Card',
    },
    {
        image: 'metodosdepago/banelco.png',
        title: 'Banelco',
    },
    {
        image: 'metodosdepago/cabal.png',
        title: 'Cabal',
    },
    {
        image: 'metodosdepago/cencosud.png',
        title: 'Cencosud',
    },
    {
        image: 'metodosdepago/dinnerclub.png',
        title: 'Dinner Club',
    },
    {
        image: 'metodosdepago/mastercard.png',
        title: 'Mastercard',
    },
    {
        image: 'metodosdepago/mercadopago.png',
        title: 'Mercado Pago',
    },
    {
        image: 'metodosdepago/naranjax.png',
        title: 'Naranja X',
    },
    {
        image: 'metodosdepago/other.png',
        title: 'Other',
    },
    {
        image: 'metodosdepago/pagofacil.png',
        title: 'Pago Facil',
    },
    {
        image: 'metodosdepago/rapipago.png',
        title: 'Rapipago',
    },
    {
        image: 'metodosdepago/tarjetashopping.png',
        title: 'Tarjetas Shopping',
    },
    {
        image: 'metodosdepago/visa.png',
        title: 'Visa',
    }
]

const Footer = () => {
  return (
    <ContainerFooter>
        <NavFooter>
            <LinksNavFooter to='/'>Home</LinksNavFooter>
            <LinksNavFooter to='aboutus'>About us</LinksNavFooter>
            <LinksNavFooter to='contactus'>Contact us</LinksNavFooter>
        </NavFooter>
        <NavFooter>
            <LinksNavFooter>Shipping policy</LinksNavFooter>
            <LinksNavFooter>Work with us</LinksNavFooter>
            <LinksNavFooter>Privacy policies</LinksNavFooter>
        </NavFooter>
        <NavIcons>
            <Whatsapp />
            <label>5493519999999</label>
        </NavIcons>
        <NavIcons>
            <Email />
            <label>bearx@gmail.com</label>
        </NavIcons>
        <NavIcons>
            <Location />
            <label>25393 Carmel Turnpike</label>
        </NavIcons>
        <NavCards>
            {cards.map((card) => (
                <img src={card.image} alt={card.title} key={card.image} className='cards' />
            ))}
        </NavCards>
    </ContainerFooter>
  )
}

export default Footer
