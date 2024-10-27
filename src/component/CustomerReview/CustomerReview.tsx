import { Text, Flex, Box,Image } from "@chakra-ui/react";
import Slider from "react-slick";
import profileimg from '../../assets/images/profile.svg';

export default function () {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    const reviews = [{
        name: "Roger Scott",
        star: 4,
        profileImg: profileimg,
        content: 'The treatment I received was top-notch, and I could tell that the staff genuinely cared about my dental health. I left ABC Dental Hospital feeling confident in my smile and grateful for the excellent care I received. I would highly recommend this hospital to anyone in need of dental care.'
    }]

    return (
        <div className="slider-container">
            <Slider {...settings}>
               { reviews.map((review, i) => {
                return (
                    <Box key={i}>
                        <Flex direction={'column'} gap={'50px'}>
                            <Text
                              fontWeight={'400'}
                              fontSize={'18px'}
                              lineHeight={'36px'}
                             >
                                {review.content}
                            </Text>
                            <Box height={'130px'} width={'130px'} bgColor={'#D2D2D2'} borderRadius={'50%'}>
                               <Image src={review.profileImg}/>  
                            </Box>
                            <Text
                                fontWeight={'400'}
                                fontSize={'24px'}
                                lineHeight={'28px'}
                                color={'#ED6161'}
                             >{review.name}</Text>
                        </Flex>
                    </Box>
                )
               })
               }
            </Slider>
        </div>
    )
}