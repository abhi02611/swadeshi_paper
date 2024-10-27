import { Container, Flex, Box, Text, Image, HStack, Button, Divider } from "@chakra-ui/react";
import CardBanner from "../../component/CardBanner/CardBanner";
import mainImg from '../../assets/images/003_Photoroom-20240910-214227_1.svg';
import p1Img from '../../assets/images/031_Photoroom-20240908-011302_2.svg';
import p2Img from '../../assets/images/004_Photoroom-20240908-004627_1.svg';
import p3Img from '../../assets/images/003_Photoroom-20240910-214227_1.svg';
import p4Img from '../../assets/images/069_Photoroom-20240814-223342_5.svg';
import CaseStudy from "../../component/CaseStudy/CaseStudy";
import NewsLetter from "../../component/NewsLetter/NewsLetter";


export default function() {

    const products = [
        { title: "Laser Cut Paper Wedding Card with 2 Card Inserts and 1 Envelope", img: p1Img, size: "(17.5 x 7.5 inch, 100)", description: "Park of 50 quy Priming & Shipping For" },
        { title: "Laser Cut Paper Wedding Card with 2 Card Inserts and 1 Envelope", img: p2Img, size: "(17.5 x 7.5 inch, 100)", description: "Park of 50 quy Priming & Shipping For" },
        { title: "Laser Cut Paper Wedding Card with 2 Card Inserts and 1 Envelope", img: p3Img, size: "(17.5 x 7.5 inch, 100)", description: "Park of 50 quy Priming & Shipping For" },
        { title: "Laser Cut Paper Wedding Card with 2 Card Inserts and 1 Envelope", img: p4Img, size: "(17.5 x 7.5 inch, 100)", description: "Park of 50 quy Priming & Shipping For" },

    ]

    return (
        <>
            <CardBanner title={'Checkout'} />
                <Container maxW={'85%'} mt='90px'>
                    <Flex justify={'space-between'}>
                        <Box width={'49%'}>
                            <Flex direction={'column'}>
                                <Box height={'680px'} width='100%'>
                                    <Image src={mainImg} h='100%' w='100%' />
                                </Box>
                            </Flex>
                        </Box>
                        <Box width={'49%'}>
                            <Flex direction={'column'}>
                                {/* <Text
                                    fontWeight={'400'}
                                    fontSize='28px'
                                    lineHeight={'33px'}
                                >Home / Laser Cut Paper /Laser Cut Paper Wedding Card with 2 Card Inserts and 1 Envelope 
                                </Text> */}
                                <Text
                                    fontWeight={'700'}
                                    fontSize='42px'
                                    lineHeight={'50px'}
                                    mt='20px'
                                >
                                    Laser Cut Paper Wedding Card with 2 Card Inserts and 1 Envelope
                                </Text>
                                <Divider mt='20px' border={'1px solid #414141'}/>
                                <Text
                                    fontWeight={'600'}
                                    fontSize='35px'
                                    lineHeight={'33px'}
                                    mt='20px'
                                >
                                    ₹ 570.00
                                </Text>
                           
                                <Text
                                    fontWeight={'400'}
                                    fontSize='15px'
                                    lineHeight={'25px'}
                                    color='#008000'
                                >
                                    Inclusive of all taxes
                                </Text>
                                <Text
                                    fontWeight={'400'}
                                    fontSize='18px'
                                    lineHeight={'44px'}
                                    color='#414141'
                                    textAlign={'left'}
                                    width='550px'
                                    mt={'20px'}
                                >
                                    This elegantly designed wedding card features intricate laser-cut patterns that create a stunning and unique first impression. Crafted from high-quality paper, the card includes two inserts for customizable messages, such as event details and RSVP information. The inserts easily slide into the designated slots, ensuring a neat and organized presentation.
                                </Text>
                                <Button
                                    sx={{
                                        height: '60px',
                                        bgColor: '#9A0172',
                                        color: '#fff',
                                        width: '550px',
                                        rounded: 'none',
                                        mt: "20px"
                                    }}
                                >
                                    ADD TO CART
                                </Button>
                            </Flex>
                        </Box>
                    </Flex>
                </Container>
                <Container maxW={'80%'} mt='90px'>
                    <Flex>
                        <Flex marginTop={'40px'} width={'100%'} justify={'space-between'}>
                            {products.map((product, i) => {
                                return (
                                    <Flex direction={'column'} key={i}>
                                        <Image src={product.img} height='330px' width={'330px'} />
                                        <Text
                                            fontWeight={'700'}
                                            fontSize='25px'
                                            lineHeight={'30px'}
                                            mt='20px'
                                        >{product.title}
                                        </Text>
                                        <Text
                                            fontWeight={'500'}
                                            fontSize='18px'
                                            lineHeight={'33px'}
                                            color='#454545'

                                        >{product.size}
                                        </Text>
                                        <Text
                                            fontWeight={'500'}
                                            fontSize='20px'
                                            lineHeight={'23px'}
                                            color='#454545'
                                        >{product.description}
                                        </Text>
                                    </Flex>
                                )
                            })}
                        </Flex>
                    </Flex>
                </Container>
                <CaseStudy />
                <NewsLetter />
        
        </>
       
    )
}