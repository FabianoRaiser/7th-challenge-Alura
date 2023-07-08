import { StyledBanner } from './styles';
import imagensBannerData from './imagensBanner.json'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay'

export default function Banner() {
  const imagensBanner = imagensBannerData.imgBanners;
  console.log(imagensBanner);



  return (
    <StyledBanner>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        pagination={{ clickable: true }}
        slidesPerView={1}
        autoplay={{
          delay: 3500}}
      >
        {imagensBanner.map((imagem) => {
          return (
            <SwiperSlide key={imagem.imgID}>
              <picture>
                <source srcSet={imagem.desktop} media='(min-width: 1440px)' />
                <source srcSet={imagem.tablet} media='(min-width: 768px)' />
                <img src={imagem.mobile} alt="Imagem do Banner" />
              </picture>
            </SwiperSlide>
          )
        })}
      </Swiper>
    </StyledBanner>
  )
}
