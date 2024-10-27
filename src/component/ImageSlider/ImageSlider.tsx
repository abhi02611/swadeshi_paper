import { Image } from "@chakra-ui/react";
import Slider from "react-slick";
import imgFrame from '../../assets/images/Frame.jpg'
import './ImageSlider.css'

export default function() {

    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1
    }; 

    const images = [imgFrame, imgFrame, imgFrame, imgFrame, imgFrame]
    
    return (
        <div className="slider-container">
            <Slider {...settings}>
                {images.map((image, i) => {
                    return (
                        <Image src={image} key={'image_' + i} height="100%" width={'100%'} />
                    )
                })}
            </Slider>
        </div>
    )
}