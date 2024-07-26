import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom';
import { CategoryStyled, ContainerBrands, ContainerCategories, ContainerHome, ContainerImgCategory, ContainerSlider, ContainerSliderBrands, ContainerText, ContainerTextCategory } from './HomeStyled'
import Slider from './Slider'
import SliderBrand from './SliderBrands'
import { Link } from "react-router-dom";

const list = [
  {
    link: '/peripherals',
    img: 'categorias/perifericos.webp',
    text: 'Peripherals',
    id: 1,
  },
  {
    link: '/components',
    img: 'categorias/componentes.png',
    text: 'Components',
    id: 2,
  },
  {
    link: '/consoles',
    img: 'categorias/consolas.jpg',
    text: 'Consoles',
    id: 3,
  },
  {
    link: '/gamingchairs',
    img: 'categorias/sillagamer.webp',
    text: 'Gaming Chairs',
    id: 4,
  },
]

const Home = () => {

  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location])

  return (
    <ContainerHome>
      <ContainerSlider>
        <Slider />
      </ContainerSlider>
      <ContainerBrands>
        <ContainerText>
          <h2>¡Our best brands!</h2>
        </ContainerText>
        <ContainerSliderBrands>
          <SliderBrand />
        </ContainerSliderBrands>
      </ContainerBrands>
      <ContainerCategories>
        {list.map((shortcut) =>(
          <CategoryStyled key={shortcut.id}>
            <Link to={shortcut.link}>
              <ContainerImgCategory>
                <img src={shortcut.img} className='img-category' />
              </ContainerImgCategory>
              <ContainerTextCategory>{shortcut.text}</ContainerTextCategory>
            </Link>
          </CategoryStyled>
        ))}
      </ContainerCategories>
    </ContainerHome>
  )
}

export default Home
