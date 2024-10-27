import { Box, Text, Flex, Container, Checkbox, Divider, Input, InputGroup, InputRightElement, Image, Heading, Button } from "@chakra-ui/react";
import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel
} from '@chakra-ui/react'
import { BsCaretDownFill } from "react-icons/bs";
import { BsCaretUpFill } from "react-icons/bs";
import { SearchIcon } from '@chakra-ui/icons'
import card from '../../assets/images/card.svg'
import CaseStudy from "../../component/CaseStudy/CaseStudy";
import NewsLetter from "../../component/NewsLetter/NewsLetter";
import CardBanner from "../../component/CardBanner/CardBanner";



export default function () {

    const filters = [
        { title: "Theme", options: ["Photo", "Floral", "Greenery", "Monogram", "Champagne", "Destination"] },
        { title: "Style", options: [] },
        { title: "Season", options: [] },
        { title: "Color", options: [] },
        { title: "Season", options: [] },
        { title: "Photo Count", options: [] },
        { title: "Designer", options: ["Paperless Post", "Monique Lhuillier", "Oscar de la Renta", "Rifle Paper Co.", "Crane & Co.", "Stephanie Fishwick", "kate spade new york", "Mr.Boddington's Studio"] },
        { title: "Price", options: [] },
        { title: "Most Populer", options: ["Photo", "Floral", "Greenery", "Monogram", "Champagne", "Destination"] },
    ]

    const products = [
        { title: "Laser Cut Cards", img: card, size: "(17.5 x 7.5 inch, 100)", description: "Park of 50 quy Priming & Shipping For"},
        { title: "Padding Cards", img: card, size: "(17.5 x 7.5 inch, 100)", description: "Park of 50 quy Priming & Shipping For"},
        { title: "Luxury Box cards", img: card, size: "(17.5 x 7.5 inch, 100)", description: "Park of 50 quy Priming & Shipping For"},
        { title: "Tracing Cards", img: card, size: "(17.5 x 7.5 inch, 100)", description: "Park of 50 quy Priming & Shipping For"},
        { title: "Acrylic Cards", img: card, size: "(17.5 x 7.5 inch, 100)", description: "Park of 50 quy Priming & Shipping For"},
        { title: "Scroll Cards", img: card, size: "(17.5 x 7.5 inch, 100)", description: "Park of 50 quy Priming & Shipping For"},
        { title: "Laser Cut Paper Card", img: card, size: "(17.5 x 7.5 inch, 100)", description: "Park of 50 quy Priming & Shipping For"},
        { title: "Carry Bag Paper Card", img: card, size: "(17.5 x 7.5 inch, 100)", description: "Park of 50 quy Priming & Shipping For"},
        { title: "Carry Bag Paper Card", img: card, size: "(17.5 x 7.5 inch, 100)", description: "Park of 50 quy Priming & Shipping For"},
    ]


    return (
        <>
            <CardBanner title={'Discover Wedding Invitation Card Collections'}/>
            <Container maxW={'80%'} as="section">
                <Flex  mt='90px' justify={'space-between'}>
                    <Flex width={'25%'} direction='column'>
                        {filters.map((f, i) => {
                            return (
                                <Accordion  
                                    key={i} 
                                    allowMultiple 
                                    width={'100%'} 
                                    mb='50px' 
                                    border={'1px solid #6F6F6F'} 
                                    px={'30px'} 
                                    pt='10px'
                                    >
                                    <AccordionItem border={'none'}>
                                        {({ isExpanded }) => (
                                            <>
                                                {i === 0 && 
                                                    <Text
                                                        fontSize={'25px'}
                                                        fontWeight={'500'}
                                                        lineHeight={'63px'}
                                                        borderBottom={'1px solid #DADADA'}
                                                        px={'18px'}
                                                        mb={'30px'}
                                                       >All filters
                                                    </Text>
                                                }
                                                <h2>
                                                    <AccordionButton alignItems={'center'} >
                                                        <Text
                                                          fontWeight={'500'}
                                                          fontSize='34px'
                                                          lineHeight={'45px'}
                                                          flex='1' 
                                                          textAlign='left'
                                                          >
                                                        {f.title}
                                                        </Text>
                                                        {isExpanded ? (
                                                            <BsCaretUpFill fontSize='20px' />
                                                        ) : (
                                                                <BsCaretDownFill fontSize='20px' />
                                                        )}
                                                    </AccordionButton>
                                                </h2>
                                                {isExpanded && <Divider border={'1px solid #DADADA'} />}
                                                <AccordionPanel pb={4}>
                                                    <Flex direction={'column'} align='flex-start'>
                                                        {f.options.map((o, i) => {
                                                            return (
                                                                <Checkbox defaultChecked size={'lg'} variant='solid' key={i}>
                                                                    <Text 
                                                                        fontWeight={'400'}
                                                                        fontSize='18px'
                                                                        lineHeight={'33px'}
                                                                     >{o}</Text>
                                                                </Checkbox>
                                                            )
                                                        })}
                                                    </Flex>
                                                   
                                                </AccordionPanel>
                                            </>
                                        )}
                                    </AccordionItem>
                                </Accordion>
                            )
                        })}
                    </Flex>
                    <Flex width={'70%'} direction='column'>
                        <Flex justify={'space-between'} width='100%' height={'66px'} align='center'>
                            <Box>
                                <Text
                                    fontWeight={'500'}
                                    fontSize={'18px'}
                                    lineHeight={'27px'}
                                >Showing 1-12 of 88 results</Text>
                            </Box>
                            <Box>
                                <InputGroup w={'342PX'}>
                                    <Input placeholder='Search Entire Store...' borderRadius={'none'} border={'1px solid #444444'}  height='66px'/>
                                    <InputRightElement height='66px'> 
                                        <SearchIcon />
                                    </InputRightElement>
                                </InputGroup>
                            </Box>
                        </Flex>
                        <Flex marginTop={'40px'}  width={'100%'} flexWrap='wrap' justify={'space-between'}> 
                            {products.map((product, i) => {
                                return (
                                    <Flex direction={'column'} key='i' mb={'31px'}>
                                        <Image src={product.img} height='330px' width={'330px'} />
                                        <Text
                                            fontWeight={'700'}
                                            fontSize='25px'
                                            lineHeight={'33px'}
                                            textAlign='center'
                                            mt='20px'
                                        >{product.title}
                                        </Text>
                                    </Flex>
                                )
                            })}
                        </Flex>
                    </Flex>
                </Flex>                
            </Container>
            <CaseStudy/>
            <NewsLetter/>

        </>
    )

}