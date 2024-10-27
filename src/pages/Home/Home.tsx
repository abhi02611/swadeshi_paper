import { Box, Container, Divider, Flex, Heading, ListItem, Text, UnorderedList, Image, InputGroup, Input, InputRightElement, Button } from "@chakra-ui/react";
import ImageSlider from "../../component/ImageSlider/ImageSlider";
import MainHeading from "../../component/MainHeading/MainHeading";
import img1 from "../../assets/images/18464.svg";
import img2 from '../../assets/images/workers-with-color-palette.svg';
import exportMask1 from '../../assets/images/Mask group1.svg';
import exportMask2 from '../../assets/images/Mask group2.png';
import exportMask3 from '../../assets/images/Mask group3.png';
import exportMask4 from '../../assets/images/Mask group4.png';
import visionImg from '../../assets/images/vision_image.jpg';
import missionImg from '../../assets/images/mission_image.svg';

import digital1 from '../../assets/images/digitalprintingimg_1.svg';
import digital2 from '../../assets/images/digitalprintingimg_2.svg';
import digital3 from '../../assets/images/digitalprintingimg_3.png';
import digital4 from '../../assets/images/digitalprintingimg_4.png';
import digital5 from '../../assets/images/digitalprintingimg_5.png';
import digital6 from '../../assets/images/digitalprintingimg_6.png';

import dedicated_img from '../../assets/images/dedicated_img.svg';
import './Home.css';
import Buttons from "../../component/Buttons/Buttons";
import profileimg from '../../assets/images/profile.svg';


export default function Home() {

    const dividerStyle = {
        width: '85px',
        borderColor: '#B12291',
        borderWidth: '3px',
        marginTop: '20px'
    }

    const exportMaskData = [
        {
            img: exportMask1,
            val: 125,
            text: 'Delivery Partners',
            bgcolor: '#576F9E'
        },
        {
            img: exportMask2,
            val: 21411,
            text: 'Total Members',
            bgcolor: '#EE148F'
        },
        {
            img: exportMask3,
            val: 350,
            text: 'Dedicated Staffs',
            bgcolor: '#1F2322'
        },
        {
            img: exportMask4,
            val: 125,
            text: 'Our Branches',
            bgcolor: '#21AAE1'
        }
    ]

    const missionVissionData = [
        {
            title: "Our Vision",
            content: "Our vision is to bring all printers Pan India to one platform and unite them to enhance the strength as union. In addition to this we also look forword to extend our services to Printers for their welfare and development.",
            color: "#ECF3FB",
            img: visionImg
        },
        {
            title: "Our Mission",
            content: "To make India self dependent and leader in printer technology. To create innovative printing services & products to be available for Indian as well as International customers.",
            color: '#FAE2F0',
            img: missionImg
        }
    ]

    const digitalPrintingData = [
        {
            img: digital1,
            title: "Top Quality Prints",
            content: "Mi donec risus commodo auctor phasellus adipiscing. Faucibus magna cursus sed sodales amet. Nunc."
        },
        {
            img: digital2,
            title: "Mix and match colors",
            content: "Mi donec risus commodo auctor phasellus adipiscing. Faucibus magna cursus sed sodales amet. Nunc."
        },
        {
            img: digital3,
            title: "Shipping worldwide",
            content: "Mi donec risus commodo auctor phasellus adipiscing. Faucibus magna cursus sed sodales amet. Nunc."
        },
        {
            img: digital4,
            title: "Offset Printing",
            content: "Mi donec risus commodo auctor phasellus adipiscing. Faucibus magna cursus sed sodales amet. Nunc."
        },
        {
            img: digital5,
            title: "Quality Guarantee",
            content: "Mi donec risus commodo auctor phasellus adipiscing. Faucibus magna cursus sed sodales amet. Nunc."
        },
        {
            img: digital6,
            title: "Reorder quickly",
            content: "Mi donec risus commodo auctor phasellus adipiscing. Faucibus magna cursus sed sodales amet. Nunc."
        },

    ]

    const review = {
        name: "Roger Scott",
        star: 4,
        profileImg: profileimg,
        content: 'The treatment I received was top-notch, and I could tell that the staff genuinely cared about my dental health. I left ABC Dental Hospital feeling confident in my smile and grateful for the excellent care I received. I would highly recommend this hospital to anyone in need of dental care.'
    }


    return (
        <div>
            <Box width={'100%'} height={'700px'}>
                <ImageSlider />
            </Box>
            <Box>
                <Container maxW='80%' as="section" mt={'50px'}>
                    <MainHeading title="OUR SERVICES" type={'h1'} size="3xl" />

                    <Flex mt={'70px'} justify="space-between">
                        <Box
                            height={'550px'}
                            width={'700px'}
                            bgImage={img1}
                            roundedTopRight={'200px'}
                            roundedBottomLeft={'200px'}
                        >
                        </Box>
                        <Box height={'550px'} width={'600px'} mt={'30px'}>
                            <Box>
                                <Heading as={'h2'}>PRINTING SERVICES</Heading>
                                <Divider sx={dividerStyle} />
                            </Box>
                            <Box>
                                <Text className="text" mt={'50px'}>
                                    Our comprehensive printing services cater to all your personal and
                                    business needs, offering a wide range of high-quality printed materials.
                                    From custom wedding invitations and business cards to large-scale banners and
                                    promotional.
                                </Text>
                                <UnorderedList className="text">
                                    <ListItem>
                                        <strong>Custom Design: </strong>Work with our skilled designers to create unique, personalized designs that align with your vision.
                                    </ListItem>
                                    <ListItem>
                                        <strong>High-Quality Printing: </strong>Utilize state-of-the-art printing technology for crisp, vibrant prints on various mediums.
                                    </ListItem>
                                </UnorderedList>
                                <Box mt={'20px'}>
                                    <Buttons text={"Learn More"} />
                                </Box>
                            </Box>
                        </Box>
                    </Flex>
                    <Flex mt={'70px'} justify="space-between" gap={'20px'}>
                        <Flex direction={'column'} justify="center" height={'550px'} width={'598px'} mt={'30px'}>
                            <Box>
                                <Heading as={'h2'}>ALWAYS READY TO HELP PRINTERS & ADVERTISERS</Heading>
                                <Divider sx={dividerStyle} />
                            </Box>
                            <Box>
                                <Text className="text" mt={'30px'}>
                                    Unity empowers us. We can work alone, but together we will win. Unity is strength, where there is team work and collaborations, wonderfull things can be achieved.
                                </Text>
                            </Box>
                        </Flex>
                        <Box
                            height={'550px'}
                            width={'840px'}
                            bgImage={img2}
                        >
                        </Box>
                    </Flex>
                </Container>
                <Container maxW='80%' as="section" mt={'90px'}>
                    <Flex justify={'center'}>
                        {exportMaskData.map((mask, i) => {
                            return (
                                <Box
                                    height={'413px'}
                                    width={'390px'}
                                    padding={'70px'}
                                    bgColor={mask.bgcolor}
                                    key={'mask_' + i}
                                >
                                    <Flex
                                        direction={'column'}
                                        gap={'40px'}
                                        alignItems="center"
                                        justify={'center'}>
                                        <Box>
                                            <Image
                                                height={'104px'}
                                                width={'104px'}
                                                src={mask.img} alt='Dan Abramov' />
                                        </Box>
                                        <Text className="val" color='white'>{mask.val}</Text>
                                        <Text className="valText" color='white'>{mask.text}</Text>
                                    </Flex>

                                </Box>
                            )
                        })}
                    </Flex>

                </Container>
                <Container maxW='80%' as="section" mt={'90px'}>
                    <Flex justify={'center'} gap={'20px'}>
                        {missionVissionData.map((data, i) => {
                            return (
                                <Flex key={'vission_' + i}>
                                    <Flex direction={'column'}
                                        height={"642px"}
                                        width={'370px'}
                                        bgColor={data.color}
                                        roundedTopLeft={'15px'}
                                        roundedBottomLeft={'15px'}
                                        padding={"20px"}
                                    >
                                        <Heading as={'h3'}>{data.title}</Heading>
                                        <Text>{data.content}</Text>
                                        <Box mt={'20px'}>
                                            <Buttons text={"Learn More"} />
                                        </Box>
                                    </Flex>
                                    <Box>
                                        <Image height={'642px'} width={'300px'} src={data.img} />
                                    </Box>
                                </Flex>
                            )
                        })}
                    </Flex>

                </Container>
            </Box>
            
            <Container maxW='100%' as="section" mt={'90px'}>
                <Box width={'100%'} bgColor={'#FAFAFA'} pt="90px">
                    <MainHeading title="Professional Digital Printing" type={'h1'} size="3xl" />
                    <Container maxWidth={'70%'}>
                        <Flex wrap={'wrap'} justify='space-between'>
                            {digitalPrintingData.map((dprint, i) => {
                                return (
                                    <Flex
                                        key={'printing_' + i}
                                        direction={'column'}
                                        justify='center'
                                        align={'center'}
                                        width="336px"
                                        my={'60px'}
                                        gap={'20px'}>
                                        <Flex
                                            height={'113px'}
                                            width={"113px"}
                                            bgColor={'#FFF0EB'}
                                            borderRadius={'50%'}
                                            justify={'center'}
                                            align={'center'}>
                                            <Image height={'52px'} width={'52px'} src={dprint.img} />
                                        </Flex>
                                        <Text
                                            fontSize='30px'
                                            fontWeight='490'
                                            lineHeight="36px"
                                            textAlign='center'
                                        >{dprint.title}</Text>
                                        <Text
                                            fontSize='18px'
                                            fontWeight='400'
                                            lineHeight="32px"
                                            textAlign='center'
                                        >
                                            {dprint.content}
                                        </Text>
                                    </Flex>
                                )
                            })}

                        </Flex>
                    </Container>
                </Box>
        
            </Container>
            <Container maxWidth={'90%'} mt="90px">
                <MainHeading title="We are Dedicated To" type={'h1'} size="3xl" />
                <Box mt={"50px"}>
                    <Image src={dedicated_img}/>
                </Box>
            </Container>
            <Container maxWidth={'100%'} mt="90px"  >
                <Box bgColor={'#FAFAFA'} width="100%" pt="90px">
                    <MainHeading title="Customer Review" type={'h1'} size="3xl" />
                    <Box my={'50px'}>
                        <Flex justify={'center'} align='center'>
                            <Flex direction={'column'} gap={'30px'} align='center'>
                                <Text
                                    fontWeight={'400'}
                                    fontSize={'18px'}
                                    lineHeight={'36px'}
                                    textAlign='center'
                                    width='42%'
                                >
                                    {review.content}
                                </Text>
                                <Box height={'130px'} width={'130px'} bgColor={'#D2D2D2'} borderRadius={'50%'}>
                                    <Image src={review.profileImg} />
                                </Box>
                                <Text
                                    fontWeight={'400'}
                                    fontSize={'24px'}
                                    lineHeight={'28px'}
                                    color={'#ED6161'}
                                >{review.name}</Text>
                            </Flex>
                        </Flex>
                    </Box>
                </Box>
               
                
            </Container>
           
        </div>
    )
}
