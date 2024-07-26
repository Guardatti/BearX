import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay } from 'swiper/modules';
import { Link } from 'react-router-dom'

const brands = [
    {
     logo: 'logos/asus.jpg',
     link: '/asus',
     title: 'Asus',
     id: 1,
    },
    {
     logo: 'logos/hyperx.png',
     link: '/hyperx',
     title: 'Hyperx',
     id: 2,
    },
    {
     logo: 'logos/logitech.png',
     link: '/logitech',
     title: 'Logitech',
     id: 3,
    },
    {
     logo: 'logos/msi.jpg',
     link: '/msi',
     title: 'MSI',
     id: 4,
    },
    {
     logo: 'logos/kingston.jpg',
     link: '/kingston',
     title: 'Kingston',
     id: 5,
    },
    {
     logo: 'logos/ps.jpg',
     link: '/ps',
     title: 'PS',
     id: 6,
    },
    {
     logo: 'logos/reddragon.png',
     link: '/reddragon',
     title: 'Red Dragon',
     id: 7,
    },
    {
     logo: 'logos/samsung.jpg',
     link: '/samsung',
     title: 'Samsung',
     id: 8,
    },
    {
     logo: 'logos/xboxseries.png',
     link: '/xboxseries',
     title: 'Xbox Series',
     id: 9,
    },
    {
     logo: 'logos/amd.jpg',
     link: '/amd',
     title: 'AMD',
     id: 10,
    },
    {
     logo: 'logos/intel.jpg',
     link: '/intel',
     title: 'Intel',
     id: 11,
    },
    {
     logo: 'logos/aerocool.png',
     link: '/aerocool',
     title: 'Aerocool',
     id: 12,
    },
    {
     logo: 'logos/coolermaster.png',
     link: '/coolermaster',
     title: 'Cooler Master',
     id: 13,
    },
    {
     logo: 'logos/corsair.png',
     link: '/corsair',
     title: 'Corsair',
     id: 14,
    },
    {
     logo: 'logos/gigabyte.png',
     link: '/gigabyte',
     title: 'Gigabyte',
     id: 15,
    },
    {
     logo: 'logos/pny.png',
     link: '/pny',
     title: 'PNY',
     id: 16,   
    },
    {
     logo: 'logos/seagate.png',
     link: '/seagate',
     title: 'Seagate',
     id: 17,   
    },
    {
     logo: 'logos/thermaltake.png',
     link: '/thermaltake',
     title: 'Thermaltake',
     id: 18,   
    },
    {
     logo: 'logos/primus.jpg',
     link: '/primus',
     title: 'Primus',
     id: 19, 
    },
    {
     logo: 'logos/razer.png',
     link: '/razer',
     title: 'Razer',
     id: 20,   
    },
    {
     logo: 'logos/secretlab.png',
     link: '/secretlab',
     title: 'Secretlab',
     id: 21,   
    },
    {
     logo: 'logos/xppen.png',
     link: '/xppen',
     title: 'XP-pen',
     id: 22,   
    },
    {
     logo: 'logos/apple.png',
     link: '/apple',
     title: 'Apple',
     id: 23,
    },
    {
     logo: 'logos/tplink.png',
     link: '/tplink',
     title: 'Tp Link',
     id: 24,
    },
]


const SliderBrand = () => {
    return (
        <Swiper
        modules={[ Autoplay ]}
        autoplay={{
          delay: 2500,
        }}
        loop={true}
        breakpoints={{
            320:{
                slidesPerView: 1,
                spaceBetween: 0,
            },
            576:{
                slidesPerView: 3,
                spaceBetween: 50,
            },
            768:{
                slidesPerView: 3,
                spaceBetween: 50,
            },
            992:{
                slidesPerView: 4,
                spaceBetween: 50,
            }
        }}
        className='container-slide-brand'
        >
          {brands.map((slide) => (
            <SwiperSlide key={slide.id}><Link to={slide.link}><img src={slide.logo} alt={slide.title} className='img-brand'/></Link></SwiperSlide>
          ))}
        </Swiper>
      );
}

export default SliderBrand
