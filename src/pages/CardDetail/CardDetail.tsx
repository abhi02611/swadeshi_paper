import { Box, Container, Text, Flex, Image, HStack, Button, Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";
import CardBanner from "../../component/CardBanner/CardBanner";
import mainImg from '../../assets/images/003_Photoroom-20240910-214227_1.svg';
import firstImg from '../../assets/images/004_Photoroom-20240908-004627_1.svg';
import thirdImg from '../../assets/images/069_Photoroom-20240814-223342_5.svg';
import whatsappImg from '../../assets/images/image 8.png';
import CaseStudy from "../../component/CaseStudy/CaseStudy";
import NewsLetter from "../../component/NewsLetter/NewsLetter";
import p1Img from '../../assets/images/031_Photoroom-20240908-011302_2.svg';
import p2Img from '../../assets/images/004_Photoroom-20240908-004627_1.svg';
import p3Img from '../../assets/images/003_Photoroom-20240910-214227_1.svg';
import p4Img from '../../assets/images/069_Photoroom-20240814-223342_5.svg';
import { useState } from 'react';

export default function ProductPage() {
    const tabContent = 'Elegant Design: Intricate laser-cut patterns provide a stunning and modern aesthetic. High-Quality Material: Made from premium paper for durability and a luxurious feel. Customizable Inserts: Includes 2 card inserts for event details, RSVP, or personalized messages. Matching Envelope: Comes with a beautifully designed envelope that complements the card. Neat Organization: The inserts slide seamlessly into designated slots, ensuring a tidy look. Perfect for Special Occasions: Ideal for weddings, offering a memorable keepsake for guests. Versatile Usage: Suitable for various themes—classic, modern, or contemporary weddings.'

    const products = [
        { title: "Laser Cut Paper Wedding Card with 2 Card Inserts and 1 Envelope", img: p1Img, size: "(17.5 x 7.5 inch, 100)", description: "Pack of 50 Qty - Printing & Shipping Included" },
        { title: "Laser Cut Paper Wedding Card with 2 Card Inserts and 1 Envelope", img: p2Img, size: "(17.5 x 7.5 inch, 100)", description: "Pack of 50 Qty - Printing & Shipping Included" },
        { title: "Laser Cut Paper Wedding Card with 2 Card Inserts and 1 Envelope", img: p3Img, size: "(17.5 x 7.5 inch, 100)", description: "Pack of 50 Qty - Printing & Shipping Included" },
        { title: "Laser Cut Paper Wedding Card with 2 Card Inserts and 1 Envelope", img: p4Img, size: "(17.5 x 7.5 inch, 100)", description: "Pack of 50 Qty - Printing & Shipping Included" },
    ];

    
    const [currentMainImg, setCurrentMainImg] = useState(mainImg);
    const [quantity, setQuantity] = useState(50); 

    const increaseQuantity = () => setQuantity(quantity * 2);
    const decreaseQuantity = () => setQuantity(Math.max(50, Math.floor(quantity / 2)));

    return (
        <>
            <CardBanner title={'Laser Cut Paper Wedding Cards'} />
            
            <Container maxW={{ base: '95%', md: '85%' }} mt={{ base: '40px', md: '90px' }}>
                <Flex direction={{ base: 'column', md: 'row' }} justify="space-between">
                    <Box width={{ base: '100%', md: '47%' }} mb={{ base: '20px', md: '0' }}>
                        <Flex direction="column">
                            <Box height={{ base: '100%', md: '100%' }} width="100%">
                                <Image src={currentMainImg} h="100%" w="100%" />
                            </Box>
                            <Flex justify="space-between" mt={{ base: '10px', md: '20px' }}>
                                <Image src={firstImg} h={{ base: '100px', md: '150px' }} w="32%" onClick={() => setCurrentMainImg(firstImg)} />
                                <Image src={thirdImg} h={{ base: '100px', md: '150px' }} w="32%" onClick={() => setCurrentMainImg(thirdImg)} />
                                <Image src={mainImg} h={{ base: '100px', md: '150px' }} w="32%" onClick={() => setCurrentMainImg(mainImg)} />
                            </Flex>
                        </Flex>
                    </Box>
                    
                    <Box width={{ base: '100%', md: '49%' }}>
                        <Flex direction="column">
                            <Text fontWeight="400" fontSize={{ base: '18px', md: '28px' }} lineHeight={{ base: '22px', md: '33px' }}>
                                Home / Laser Cut Paper
                            </Text>
                            
                            <Text fontWeight="700" fontSize={{ base: '28px', md: '42px' }} lineHeight={{ base: '34px', md: '50px' }} mt="20px">
                                Laser Cut Paper Wedding Card with 2 Card Inserts and 1 Envelope
                            </Text>
                            
                            <Text fontWeight="400" fontSize={{ base: '16px', md: '23px' }} lineHeight={{ base: '20px', md: '27px' }} mt="20px">
                                Style No SG188950
                            </Text>

                            <HStack mt="20px" gap="10px" align="center" justify="flex-start">
                                <Text fontWeight="400" fontSize={{ base: '24px', md: '35px' }} lineHeight="35px" color="#EE3D63">
                                    M.R.P ₹ 570.00
                                </Text>
                                <Text fontWeight="400" fontSize={{ base: '14px', md: '18px' }} lineHeight="25px" textDecoration="line-through">
                                    M.R.P 999.00
                                </Text>
                            </HStack>

                            <Text fontWeight="400" fontSize={{ base: '13px', md: '15px' }} lineHeight="25px" color="#008000">
                                Inclusive of all taxes
                            </Text>

                            {/* Quantity Controls */}
                            <Flex align="center" width={{ base: '100%', md: '20%' }} justify="center" mt="20px">
                                <HStack spacing={3}>
                                    <Button onClick={decreaseQuantity} size="sm" colorScheme="pink">-</Button>
                                    <Text fontSize="lg">{quantity}</Text>
                                    <Button onClick={increaseQuantity} size="sm" colorScheme="pink">+</Button>
                                </HStack>
                            </Flex>

                            <HStack spacing={4} align="center" mt="20px">
                                <Button
                                    sx={{
                                        height: { base: '50px', md: '61px' },
                                        bgColor: '#9A0172',
                                        color: '#fff',
                                        width: { base: '100%', md: '260px' },
                                        rounded: 'none'
                                    }}
                                >
                                    BUY NOW
                                </Button>
                                <Button
                                    sx={{
                                        height: { base: '50px', md: '61px' },
                                        bgColor: '#fff',
                                        color: '#9A0172',
                                        width: { base: '100%', md: '260px' },
                                        rounded: 'none',
                                        border: '1px solid #333333'
                                    }}
                                >
                                    Add to cart
                                </Button>
                            </HStack>

                            <Button
                                sx={{
                                    height: { base: '50px', md: '60px' },
                                    bgColor: '#fff',
                                    color: '#000',
                                    width: { base: '100%', md: '550px' },
                                    rounded: 'none',
                                    border: '2px solid #109D58',
                                    mt: '20px'
                                }}
                            >
                                <Image src={whatsappImg} height="30px" width="30px" />
                                ORDER BY WHATSAPP
                            </Button>

                            <Text
                                fontWeight="400"
                                fontSize={{ base: '14px', md: '18px' }}
                                lineHeight="44px"
                                color="#414141"
                                textAlign="left"
                                width={{ base: '100%', md: '550px' }}
                                mt="20px"
                            >
                                This elegantly designed wedding card features intricate laser-cut patterns that create a stunning and unique first impression. Crafted from high-quality paper, the card includes two inserts for customizable messages, such as event details and RSVP information. The inserts easily slide into the designated slots, ensuring a neat and organized presentation.
                            </Text>
                        </Flex>
                    </Box>
                </Flex>
            </Container>

            <Container maxW={'100%'} mt='90px'>
                <Flex justify={'center'}>
                    <Box width={'80%'}>
                        <Tabs>
                            <TabList justifyContent='space-around'>
                                <Tab>
                                    <Text fontWeight={'600'} fontSize={{ base: '18px', md: '30px' }} lineHeight={{ base: '18px', md: '36px' }} color='#444444'>Description</Text>
                                </Tab>
                                <Tab>
                                    <Text fontWeight={'600'} fontSize={{ base: '18px', md: '30px' }} lineHeight={{ base: '18px', md: '36px' }} color='#444444'>Additional Information</Text>
                                </Tab>
                                <Tab>
                                    <Text fontWeight={'600'} fontSize={{ base: '18px', md: '30px' }} lineHeight={{ base: '18px', md: '36px' }} color='#444444'>Review</Text>
                                </Tab>
                            </TabList>

                            <TabPanels>
                                <TabPanel>
                                    <Text fontWeight={'400'} fontSize='25px' lineHeight={'44px'} color='#444444'>{tabContent}</Text>
                                </TabPanel>
                                <TabPanel>
                                    <Text fontWeight={'400'} fontSize='25px' lineHeight={'44px'} color='#444444'>{tabContent}</Text>
                                </TabPanel>
                                <TabPanel>
                                    <Text fontWeight={'400'} fontSize='25px' lineHeight={'44px'} color='#444444'>{tabContent}</Text>
                                </TabPanel>
                            </TabPanels>
                        </Tabs>
                    </Box>
                </Flex>
            </Container>

            <CaseStudy />
            <NewsLetter />
        </>
    );
}
