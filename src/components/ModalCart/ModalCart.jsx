import React from 'react'
import { ContainerMenuCart, ContainerSubTotalShippingCost, SubTotal, Shippingcost, Divisor, Total, BtnCheckOut, BtnClearCart } from './ModalCartStyled';
import { useDispatch, useSelector } from 'react-redux';
import ModalCartCard from './ModalCartCard';
import { formatPrice } from '../../utils/formatPrice';
import { clearCart } from '../../redux/cart/cartSlice'
import { useNavigate } from 'react-router-dom';

const ModalCart = ({stateCart, stateSetCart}) => {
  
    const {cartItems, shippingCost} = useSelector(state => state.cart)

    const dispatch = useDispatch()

    const navigate = useNavigate()

    const totalPrice = cartItems.reduce((acc, item) => {
      return (acc + item.price * item.quantity) 
    }, 0)

    return (
    <>
      <ContainerMenuCart $stateCart={stateCart}>
        <h2>My Orders</h2>
        {
            cartItems.length ? (
              cartItems.map((items) => {
                return <ModalCartCard {...items} key={items.id}/>
              })
            ) : (<p>Your cart is currently empty</p>)
          }
        <ContainerSubTotalShippingCost>
          <SubTotal>
            <p>Subtotal</p>
            <span>{formatPrice(totalPrice)}</span>
          </SubTotal>
          <Shippingcost>
            <p>Shipping Cost</p>
            <span>{formatPrice(shippingCost)}</span>
          </Shippingcost>
        </ContainerSubTotalShippingCost>
        <Divisor />
        <Total>
          <p>Total</p>
          <span>{formatPrice(totalPrice + shippingCost)}</span>
        </Total>
        <BtnCheckOut onClick={() => {stateSetCart(!stateCart) ; navigate('/checkout')}} disabled={!cartItems.length}>CHECKOUT</BtnCheckOut>
        <BtnClearCart onClick={() => dispatch(clearCart())} disabled={!cartItems.length}>CLEAR CART</BtnClearCart>
      </ContainerMenuCart>
    </>
  )
}

export default ModalCart
