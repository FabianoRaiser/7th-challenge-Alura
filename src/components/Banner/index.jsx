import { StyledBanner } from './styles';
import { Carrosel } from 'components/Carrossel';
import imagensBannerData from './imagensBanner.json'
import { SlideCarrosel } from './SlideCarrosel';

export default function Banner() {
  const imagensBanner = imagensBannerData.imgBanners;
  console.log(imagensBanner);



  return (
    <StyledBanner>
      <Carrosel>
        {imagensBanner.map((imagem) => {
          return (
            <div key={imagem.imgID}>
              <SlideCarrosel imagem={imagem} />
            </div>
          )
        })}
      </Carrosel>
    </StyledBanner>
  )
}
