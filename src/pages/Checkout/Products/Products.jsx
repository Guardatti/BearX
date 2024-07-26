import React from 'react'
import { Product, Img, Info, Handler, BtnLess, BtnMore} from './ProductsStyled'
import { formatPrice }from '../../../utils/formatPrice'
import { addToCart, removeFromCart } from '../../../redux/cart/cartSlice';
import { useDispatch } from 'react-redux';

const Products = ({img, title, price, quantity, id}) => {

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

export default Products
