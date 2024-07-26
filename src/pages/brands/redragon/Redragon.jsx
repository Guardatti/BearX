import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom';
import { BuyButton, Container, ContainerCategory, ContainerInfo, ContainerRedragon, ContainerProducts, ProductBot, ProductMid, ProductTop } from './RedragonStyled';
import { formatPrice } from '../../../utils/formatPrice';
import ScrollReveal from 'scrollreveal'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart } from '../../../redux/cart/cartSlice';


const Redragon = () => {

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
    <ContainerRedragon>
      <ContainerCategory>
      <h2>Category</h2>
        <select onChange={HandleChangeCategory}>
          <option value="All">All</option>
          <option value="Headsets">Headsets</option>
          <option value="Monitors">Monitors</option>
          <option value="Mouses">Mouses</option>
          <option value="Keyboards">Keyboards</option>
          <option value="Mouse Pads">Mouse Pads</option>
          <option value="Web Cams">Web Cams</option>
          <option value="Coolers">Coolers</option>
          <option value="Power Supply">Power Supply</option>
          <option value="Cabinets">Cabinets</option>
        </select>
      </ContainerCategory>
      <ContainerProducts>
        {
          products.filter((product) => (filters === 'All' && product.brand === 'Redragon') || (product.type === filters && product.brand === 'Redragon')).map((product) => (
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
    </ContainerRedragon>
  )
}

export default Redragon