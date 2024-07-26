import React from 'react'
import { Img, Info, Handler, BtnLess, BtnMore, Product } from './ModalCartStyled';
import { formatPrice } from '../../utils/formatPrice';
import { useDispatch } from 'react-redux';
import { addToCart, removeFromCart } from '../../redux/cart/cartSlice';

const ModalCartCard = ({ img, title, price, quantity, id }) => {

  const dispatch = useDispatch()

  return (
    <>
        <Product>
          <Img>
            <img src={img} alt={title}/>
          </Img>
          <Info>
            <span>{title}</span>
            <span>{formatPrice(price)}</span>
          </Info>
          <Handler>
            <BtnLess onClick={() => dispatch(removeFromCart(id))}>-</BtnLess>
            <span>{quantity}</span>
            <BtnMore onClick={() => dispatch(addToCart({img, title, price, quantity, id}))}>+</BtnMore>
          </Handler>
        </Product>
    </>
  )
}

export default ModalCartCard
