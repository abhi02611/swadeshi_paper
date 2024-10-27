import { Box, Image } from "@chakra-ui/react";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './CaseImageImageSlider.css'
import case_study_1 from '../../assets/images/case_study_1.svg';
import case_study_2 from '../../assets/images/case_study_2.svg';
import case_study_3 from '../../assets/images/case_study_3.svg';
import case_study_4 from '../../assets/images/case_study_4.svg';
import case_study_5 from '../../assets/images/case_stusy_5.svg';
import styled from 'styled-components';

const StyledSlider = styled(Slider)`
    .slick-slide.slick-active.slick-cloned {
    width: 256px;
    }

    .slick-slide > div {
        width: 256px;
        padding: 0 10px;
    }

    .slick-slide.slick-active.slick-center.slick-current {
    width: 776px;
    }

    .slick-slide.slick-active.slick-center.slick-current > div {
    width: 776px;
    } 
`;

export default function () {

    const images = [case_study_3, case_study_2, case_study_1, case_study_4, case_study_5]

    var settings = {
        centerMode: true,
        infinite: true,
        centerPadding: "0",
        variableWidth: true,
        slidesToShow: 1,
        speed: 500
    };


  return (
      <StyledSlider {...settings}>
          {images.map((image, i) => {
              return (
                  <Box height={'500px'} width='256px'>
                      <Image src={image} key={'image_' + i} height="100%" width={'100%'}  fit="cover" borderRadius={'5px'} />
                </Box>
              )
          })}
      </StyledSlider>
  )
}

