import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom';
import { BuyButton, Container, ContainerButtons, ContainerCategoriesTypes, ContainerInfo, ContainerPerihperals, ContainerProducts, ProductBot, ProductMid, ProductTop, ShowLessBtn, ShowMoreBtn } from './PeripheralsStyled';
import { formatPrice } from '../../utils/formatPrice';
import ScrollReveal from 'scrollreveal'
import { useDispatch, useSelector } from 'react-redux'
import { INITIAL_LIMIT_PERIPHERALS } from '../../utils/constants'
import { addToCart } from '../../redux/cart/cartSlice';


const Peripherals = () => {

  const [filters, setFilters] = useState('All')

  const [limit, setLimit] = useState(INITIAL_LIMIT_PERIPHERALS)

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
    <ContainerPerihperals>
      <ContainerCategoriesTypes>
        <h2>Category</h2>
        <select onChange={HandleChangeCategory}>
          <option value="All">All</option>
          <option value="Headsets">Headsets</option>
          <option value="Joysticks">Joysticks</option>
          <option value="Microphones">Microphones</option>
          <option value="Monitors">Monitors</option>
          <option value="Mouses">Mouses</option>
          <option value="Keyboards">Keyboards</option>
          <option value="Mouse Pads">Mouse Pads</option>
          <option value="Web Cams">Web Cams</option>
        </select>
      </ContainerCategoriesTypes>
      <ContainerProducts>
        {
          products.filter((product) => (filters === 'All' && product.category === 'Peripherals' && product.id <= limit) || (product.type === filters)).map((product) => (
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
                  <BuyButton whileTap={{scale: 0.95}} onClick={() => dispatch(addToCart({desc:product.title , id: product.id, title: product.title, img: product.img, price: product.price}))}>Buy</BuyButton>
                </ProductBot>
              </ContainerInfo>
            </Container>
          ))
        }
      </ContainerProducts>
      {
        filters === 'All' && (
          <ContainerButtons>
            <ShowMoreBtn whileTap={{scale: 0.95}} onClick={() => setLimit(limit + INITIAL_LIMIT_PERIPHERALS)} disabled={75 <= limit}>Show More</ShowMoreBtn>
            <ShowLessBtn whileTap={{scale: 0.95}} onClick={() => setLimit(limit - INITIAL_LIMIT_PERIPHERALS)} disabled={INITIAL_LIMIT_PERIPHERALS === limit}>Show Less</ShowLessBtn>
          </ContainerButtons>
        )
      }
    </ContainerPerihperals>
  )
}

export default Peripherals
