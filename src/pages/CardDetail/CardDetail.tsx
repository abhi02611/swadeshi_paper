import { Box, Container, Text, Flex, Image, HStack, Button, Tab, TabList, TabPanel, TabPanels } from "@chakra-ui/react";
import CardBanner from "../../component/CardBanner/CardBanner";
import mainImg from '../../assets/images/003_Photoroom-20240910-214227_1.svg';
import firstImg from '../../assets/images/004_Photoroom-20240908-004627_1.svg';
import thirdImg from '../../assets/images/069_Photoroom-20240814-223342_5.svg';
import whatsappImg from '../../assets/images/image 8.png'
import { Tabs } from "@chakra-ui/react"
import CaseStudy from "../../component/CaseStudy/CaseStudy";
import NewsLetter from "../../component/NewsLetter/NewsLetter";
import p1Img from '../../assets/images/031_Photoroom-20240908-011302_2.svg';
import p2Img from '../../assets/images/004_Photoroom-20240908-004627_1.svg';
import p3Img from '../../assets/images/003_Photoroom-20240910-214227_1.svg';
import p4Img from '../../assets/images/069_Photoroom-20240814-223342_5.svg';





export default function() {

    const tabContent = 'Elegant Design: Intricate laser-cut patterns provide a stunning and modern aesthetic. High-Quality Material: Made from premium paper for durability and a luxurious feel. Customizable Inserts: Includes 2 card inserts for event details, RSVP, or personalized messages. Matching Envelope: Comes with a beautifully designed envelope that complements the card. Neat Organization: The inserts slide seamlessly into designated slots, ensuring a tidy look. Perfect for Special Occasions: Ideal for weddings, offering a memorable keepsake for guests. Versatile Usage: Suitable for various themes—classic, modern, or contemporary weddings.'

    const products = [
        { title: "Laser Cut Paper Wedding Card with 2 Card Inserts and 1 Envelope", img: p1Img, size: "(17.5 x 7.5 inch, 100)", description: "Park of 50 quy Priming & Shipping For" },
        { title: "Laser Cut Paper Wedding Card with 2 Card Inserts and 1 Envelope", img: p2Img, size: "(17.5 x 7.5 inch, 100)", description: "Park of 50 quy Priming & Shipping For" },
        { title: "Laser Cut Paper Wedding Card with 2 Card Inserts and 1 Envelope", img: p3Img, size: "(17.5 x 7.5 inch, 100)", description: "Park of 50 quy Priming & Shipping For" },
        { title: "Laser Cut Paper Wedding Card with 2 Card Inserts and 1 Envelope", img: p4Img, size: "(17.5 x 7.5 inch, 100)", description: "Park of 50 quy Priming & Shipping For" },
           
    ]

    return (
        <>
            <CardBanner title={'Laser Cut Paper Wedding Cardding Cards'} />
            <Container maxW={'85%'} mt='90px'>
                <Flex justify={'space-between'}>
                   <Box width={'49%'}>
                     <Flex direction={'column'}>
                        <Box height={'680px'} width='100%'>
                          <Image src={mainImg} h='100%' w='100%'/>
                        </Box>
                        <Flex justify={'space-between'}>
                                <Image src={firstImg} h='200px' w='32%' />
                                <Image src={thirdImg} h='200px' w='32%' />
                                <Image src={mainImg} h='200px' w='32%' />
                        </Flex>
                     </Flex>
                    </Box> 
                    <Box width={'49%'}>
                        <Flex direction={'column'}>
                            <Text
                              fontWeight={'400'}
                              fontSize='28px'
                              lineHeight={'33px'}
                             >Home / Laser Cut Paper
                             </Text>
                            <Text
                                fontWeight={'700'}
                                fontSize='42px'
                                lineHeight={'50px'}
                                mt='20px'
                             >
                                 Laser Cut Paper Wedding Card with 2 Card Inserts and 1 Envelope
                            </Text>
                            <Text
                                fontWeight={'400'}
                                fontSize='23px'
                                lineHeight={'27px'}
                                mt='20px'
                            >
                                Style No SG188950
                            </Text> 
                            <HStack mt='20px' gap={'10px'} align='center' justify={'flex-start'}>
                                <Text
                                    fontWeight={'400'}
                                    fontSize='35px'
                                    lineHeight={'35px'}
                                    color='#EE3D63'
                                    
                                >
                                    M.R.P ₹ 570.00
                                </Text> 
                                <Text
                                    fontWeight={'400'}
                                    fontSize='18px'
                                    lineHeight={'25px'}
                                    textDecoration={'line-through'}
                                >
                                    M.R.P 999.00
                                </Text> 
                            </HStack>
                            <Text
                                fontWeight={'400'}
                                fontSize='15px'
                                lineHeight={'25px'}
                                color='#008000'
                            >
                                Inclusive of all taxes
                            </Text> 
                            <HStack spacing={4} align='center' mt='20px'>
                                <Button
                                  sx={{
                                     height: '61px',
                                     bgColor: '#9A0172',
                                     color: '#fff',
                                     width: '260px',
                                     rounded: 'none'
                                   }}
                                  >
                                    BUY NOW
                                </Button>
                                <Button 
                                 sx={{
                                        height: '61px',
                                        bgColor: '#fff',
                                        color: '#9A0172',
                                        width: '260px',
                                        rounded: 'none',
                                        border: '1px solid #333333'
                                 }}
                                >
                                    Add to cart
                                </Button>
                            </HStack>
                            <Button
                              sx={{
                                    height: '60px',
                                    bgColor: '#fff',
                                    color: '#000',
                                    width: '550px',
                                    rounded: 'none',
                                    border: '2px solid #109D58',
                                    mt:"20px"
                              }}
                             >
                                <Image src={whatsappImg} height='30px' width={'30px'}/>
                                ORDER BY WHATSAPP
                            </Button>
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
                        </Flex>
                    </Box> 
                </Flex>
            </Container>
            <Container maxW={'100%'} mt='90px'>
              <Flex justify={'center'}>
                    <Box width="60%">
                        <Tabs>
                            <TabList>
                                <Tab>
                                    <Text
                                        fontWeight={'600'}
                                        fontSize='30px'
                                        lineHeight={'36px'}
                                        color='#444444'
                                    >Description</Text>
                                </Tab>
                                <Tab>
                                    <Text
                                        fontWeight={'600'}
                                        fontSize='30px'
                                        lineHeight={'36px'}
                                        color='#444444'
                                    >Additional Infomation</Text>
                                </Tab>
                                <Tab>
                                    <Text
                                        fontWeight={'600'}
                                        fontSize='30px'
                                        lineHeight={'36px'}
                                        color='#444444'
                                    >Review</Text>
                                </Tab>
                            </TabList>

                            <TabPanels>
                                <TabPanel>
                                    <Text
                                        fontWeight={'400'}
                                        fontSize='25px'
                                        lineHeight={'44px'}
                                        color='#444444'
                                    >{tabContent}</Text>
                                </TabPanel>
                                <TabPanel>
                                    <Text
                                        fontWeight={'400'}
                                        fontSize='25px'
                                        lineHeight={'44px'}
                                        color='#444444'
                                    >{tabContent}</Text>
                                </TabPanel>
                                <TabPanel>
                                    <Text
                                        fontWeight={'400'}
                                        fontSize='25px'
                                        lineHeight={'44px'}
                                        color='#444444'
                                    >{tabContent}</Text>
                                </TabPanel>
                            </TabPanels>
                        </Tabs>
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
            <CaseStudy/>
            <NewsLetter/>
        </>
    )
}