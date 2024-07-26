import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom';
import { BuyButton, Container, ContainerInfo, ContainerConnectivityAndNetworks, ContainerProducts, ProductBot, ProductMid, ProductTop, ContainerCategoriesTypes } from './ConnectivityAndNetworksStyled';
import { formatPrice } from '../../utils/formatPrice';
import ScrollReveal from 'scrollreveal'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart } from '../../redux/cart/cartSlice'

const ConnectivityAndNetworks = () => {

  const [filters, setFilters] = useState('All')

  const dispatch = useDispatch()

  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0)
    ScrollReveal().reveal('.Products', {
      delay: 150,
      distance: '10px',
      duration: 500,
      easing: 'ease-in-out',
      origin: 'bottom',
      reset: false,
    });
  }, [location])

  const HandleChangeCategory = (event) => {
    setFilters(event.target.value);
  }
  
  const products = useSelector(state => state.products.products)

  return (
    <ContainerConnectivityAndNetworks>
      <ContainerCategoriesTypes>
        <h2>Category</h2>
        <select onChange={HandleChangeCategory}>
          <option value="All">All</option>
        </select>
      </ContainerCategoriesTypes>
      <ContainerProducts>
        {
          products.filter((product) => product.category === 'Connectivity And Networks').map((product) => (
            <Container key={product.id} className='Products'>
              <img src={product.img} alt={product.category}/>
              <ContainerInfo>
                <ProductTop>
                  <p>{product.title}</p>
                </ProductTop>
                <ProductMid>
                  <label>{formatPrice(product.price)}</label>
                </ProductMid>
                <ProductBot>
                  <BuyButton whileTap={{scale: 0.95}} onClick={() => dispatch(addToCart({desc:product.title, id: product.id, title: product.title, img: product.img, price: product.price}))}>Buy</BuyButton>
                </ProductBot>
              </ContainerInfo>
            </Container>
          ))
        }
      </ContainerProducts>
    </ContainerConnectivityAndNetworks>
  )
}

export default ConnectivityAndNetworks
