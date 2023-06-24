import bannerImg375 from 'assets/Mobile/Banner-carousel1-375.png';
import bannerImg768 from 'assets/Tablet/Banner-carousel1-768.png';
import bannerImg1440 from 'assets/Desktop/Banner-carousel1-1440.png';
import { StyledBanner } from './styles';

export default function Banner() {
  return (
    <StyledBanner>
      <img 
        src={bannerImg375}
        srcSet={`${bannerImg375} 375w, ${bannerImg768} 768w, ${bannerImg1440} 1440w`} 
        sizes='(min-width: 357px) 357px, (min-width: 768px) 768px, (min-width: 1440px) 1440px'
      />
    </StyledBanner>
  )
}
