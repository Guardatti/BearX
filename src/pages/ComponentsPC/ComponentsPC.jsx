import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom';
import { BuyButton, Container, ContainerCategoriesTypes, ContainerInfo, ContainerComponents, ContainerProducts, ProductBot, ProductMid, ProductTop, ContainerButtons, ShowMoreBtn, ShowLessBtn } from './ComponentsPCStyled';
import { formatPrice } from '../../utils/formatPrice';
import ScrollReveal from 'scrollreveal'
import { useDispatch, useSelector } from 'react-redux'
import { INITIAL_LIMIT_COMPONENTS } from '../../utils/constants'
import { addToCart } from '../../redux/cart/cartSlice'

const ComponentsPC = () => {

  const [filters, setFilters] = useState('All')

  const [limit, setLimit] = useState(INITIAL_LIMIT_COMPONENTS)

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
    <ContainerComponents>
      <ContainerCategoriesTypes>
        <h2>Category</h2>
        <select onChange={HandleChangeCategory}>
          <option value="All">All</option>
          <option value="Coolers">Coolers</option>
          <option value="HDD">HDD</option>
          <option value="SSD">SSD</option>
          <option value="Power Supply">Power Supply</option>
          <option value="Cabinets">Cabinets</option>
          <option value="Graphics Cards">Graphics Cards</option>
          <option value="Motherboards">Motherboards</option>
          <option value="Processors">Processors</option>
          <option value="RAM">RAM</option>
        </select>
      </ContainerCategoriesTypes>
      <ContainerProducts>
        {
          products.filter((product) => (filters === 'All' && product.category === 'Components' && product.id <= limit) || (product.type === filters)).map((product) => (
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
      {
        filters === 'All' && (
          <ContainerButtons>
            <ShowMoreBtn whileTap={{scale: 0.95}} onClick={() => setLimit(limit + 12)} disabled={208 <= limit}>Show More</ShowMoreBtn>
            <ShowLessBtn whileTap={{scale: 0.95}} onClick={() => setLimit(limit - 12)} disabled={INITIAL_LIMIT_COMPONENTS === limit}>Show Less</ShowLessBtn>
          </ContainerButtons>
        )
      }
    </ContainerComponents>
  )
}

export default ComponentsPC
