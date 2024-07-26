import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom';
import { BuyButton, Container, ContainerCategoriesBrands, ContainerInfo, ContainerConsoles, ContainerProducts, ProductBot, ProductMid, ProductTop } from './ConsolesStyled';
import { formatPrice } from '../../utils/formatPrice';
import ScrollReveal from 'scrollreveal'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart } from '../../redux/cart/cartSlice';


const Consoles = () => {

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

  const HandleChangeBrand = (event) => {
    setFilters(event.target.value);
  }

  const products = useSelector(state => state.products.products)

  return (
    <ContainerConsoles>
      <ContainerCategoriesBrands>
        <h2>Brand</h2>
        <select onChange={HandleChangeBrand}>
          <option value="All">All</option>
          <option value="PS">Playstation</option>
          <option value="Xbox Series">Xbox Series</option>
        </select>
      </ContainerCategoriesBrands>
      <ContainerProducts>
        {
         products.filter((product) => (filters === 'All' && product.category === 'Consoles') || (product.brand === filters && product.category === 'Consoles')).map((product) => (
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
    </ContainerConsoles>
  )
}

export default Consoles
