import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade'
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const images = [
  {
    id: 1,
    image: 'imagenesslider/asus.jpg',
    title: 'Asus',
  },
  {
    id: 2,
    image: 'imagenesslider/coolers.jpg',
    title: 'Gamdias',
  },
  {
    id: 3,
    image: 'imagenesslider/razer.jpg',
    title: 'Razer',
  },
  {
    id: 4,
    image: 'imagenesslider/ryzen.jpg',
    title: 'Ryzen',
  },
]


const Slider = () => {
  return (
    <Swiper
    modules={[EffectFade, Pagination, Autoplay ]}
    autoplay={{
      delay: 3500,
    }}
    effect="fade"
    slidesPerView={1}
    spaceBetween={0}
    loop={true}
    pagination={{clickable: true}}
    >
      {images.map((slide) => (
        <SwiperSlide key={slide.id}><img src={slide.image} alt={slide.title} className='img-slider'/></SwiperSlide>
      ))}
    </Swiper>
  )
}

export default Slider