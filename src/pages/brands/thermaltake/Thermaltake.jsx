import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom';
import { BuyButton, Container, ContainerCategory, ContainerInfo, ContainerThermaltake, ContainerProducts, ProductBot, ProductMid, ProductTop } from './ThermaltakeStyled';
import { formatPrice } from '../../../utils/formatPrice';
import ScrollReveal from 'scrollreveal'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart } from '../../../redux/cart/cartSlice';


const Thermaltake = () => {

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
    <ContainerThermaltake>
      <ContainerCategory>
      <h2>Category</h2>
        <select onChange={HandleChangeCategory}>
          <option value="All">All</option>
          <option value="Coolers">Coolers</option>
          <option value="Power Supply">Power Supply</option>
          <option value="Cabinets">Cabinets</option>
        </select>
      </ContainerCategory>
      <ContainerProducts>
        {
          products.filter((product) => (filters === 'All' && product.brand === 'Thermaltake') || (product.type === filters && product.brand === 'Thermaltake')).map((product) => (
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
    </ContainerThermaltake>
  )
}

export default Thermaltake