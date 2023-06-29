import Carousel from "react-multi-carousel";
import 'react-multi-carousel/lib/styles.css';

// eslint-disable-next-line react/prop-types
export const Carrosel = ({ children }) => {
    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1440 },
            items: 1,
        },
        tablet: {
            breakpoint: { max: 1440, min: 768 },
            items: 1,
        },
        mobile: {
            breakpoint: { max: 768, min: 0 },
            items: 1,
        }
    }
    
    return (
        <Carousel 
            responsive={responsive}
            swipeable={true}
            draggable={false}
            infinite={true}
            autoPlaySpeed={3500}
            keyBoardControl={true}
            customTransition="all .5"
            transitionDuration={500}
            containerClass="carousel-container"
            removeArrowOnDeviceType={["tablet", "mobile"]}
        >
            {children}
        </Carousel>
    )
}