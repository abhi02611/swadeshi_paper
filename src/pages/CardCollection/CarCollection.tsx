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
import nextArrow from '../../assets/images/newxt-arrow.svg'
import prevArrow from '../../assets/images/prev.png'
import { useState } from 'react';

export default function () {
    const filters = [
        { title: "Theme", options: ["Photo", "Floral", "Greenery", "Monogram", "Champagne", "Destination"] },
        { title: "Style", options: [] },
        { title: "Season", options: [] },
        { title: "Color", options: [] },
        { title: "Photo Count", options: [] },
        { title: "Designer", options: ["Paperless Post", "Monique Lhuillier", "Oscar de la Renta", "Rifle Paper Co.", "Crane & Co.", "Stephanie Fishwick", "kate spade new york", "Mr.Boddington's Studio"] },
        { title: "Price", options: [] },
        { title: "Most Popular", options: ["Photo", "Floral", "Greenery", "Monogram", "Champagne", "Destination"] },
    ];

    const products = [
        { title: "Laser Cut Cards", img: card, size: "(17.5 x 7.5 inch, 100)", description: "Pack of 50 qty Priming & Shipping For" },
        { title: "Padding Cards", img: card, size: "(17.5 x 7.5 inch, 100)", description: "Pack of 50 qty Priming & Shipping For" },
        { title: "Luxury Box Cards", img: card, size: "(17.5 x 7.5 inch, 100)", description: "Pack of 50 qty Priming & Shipping For" },
        { title: "Tracing Cards", img: card, size: "(17.5 x 7.5 inch, 100)", description: "Pack of 50 qty Priming & Shipping For" },
        { title: "Acrylic Cards", img: card, size: "(17.5 x 7.5 inch, 100)", description: "Pack of 50 qty Priming & Shipping For" },
        { title: "Scroll Cards", img: card, size: "(17.5 x 7.5 inch, 100)", description: "Pack of 50 qty Priming & Shipping For" },
        { title: "Laser Cut Paper Card", img: card, size: "(17.5 x 7.5 inch, 100)", description: "Pack of 50 qty Priming & Shipping For" },
        { title: "Carry Bag Paper Card", img: card, size: "(17.5 x 7.5 inch, 100)", description: "Pack of 50 qty Priming & Shipping For" },
        { title: "Carry Bag Paper Card", img: card, size: "(17.5 x 7.5 inch, 100)", description: "Pack of 50 qty Priming & Shipping For" },
    ];

    // Pagination 
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 9; // Default item plz change to 9 
    const totalPages = Math.ceil(products.length / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const currentProducts = products.slice(startIndex, startIndex + itemsPerPage);

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    return (
        <>
            <CardBanner title={'Discover Wedding Invitation Card Collections'} />
            <Container maxW={'90%'} as="section">
                <Flex mt='90px' flexDirection={{ base: 'column', md: 'row' }} justify={'space-between'}>
                    <Flex
                        width={{ base: '100%', md: '25%' }}
                        direction='column'
                        mb={{ base: '40px', md: '0' }} // Add margin at the bottom for small screens
                    >
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
                                                    >
                                                        All filters
                                                    </Text>
                                                }
                                                <h2>
                                                    <AccordionButton alignItems={'center'} >
                                                        <Text
                                                            fontWeight={'500'}
                                                            fontSize='30px'
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
                    <Flex
                        width={{ base: '100%', md: '72%' }}
                        direction='column'
                    >
                        <Flex justify={'space-between'} width='100%' height={'66px'} align='center'>
                            <Box>
                                <Text
                                    fontWeight={'500'}
                                    fontSize={'18px'}
                                    lineHeight={'27px'}
                                >
                                    Showing {(startIndex + 1)}-{Math.min(startIndex + itemsPerPage, products.length)} of {products.length} results
                                </Text>
                            </Box>
                            <Box>
                                <InputGroup w={{ base: '100%', sm: 'auto' }} maxW={'342px'}>
                                    <Input
                                        placeholder='Search Entire Store...'
                                        borderRadius={'none'}
                                        border={'1px solid #444444'}
                                        height='66px'
                                    />
                                    <InputRightElement height='66px'>
                                        <SearchIcon />
                                    </InputRightElement>
                                </InputGroup>
                            </Box>
                        </Flex>
                        <Flex
                            marginTop={'40px'}
                            width='100%'
                            flexWrap='wrap'
                            justify={'space-between'}
                        >
                            {currentProducts.map((product, i) => {
                                return (
                                    <Flex
                                        direction="column"
                                        justify="center"
                                        width={{ base: '100%', sm: '48%', md: '30%' }} 
                                        textAlign={{ base: 'center', md: 'left' }}
                                        mb={{ base: '20px', md: '0' }} 
                                        key={i}
                                    >
                                        <Image src={product.img} height='100%' width={{base: '100%', sm:'100%', md:'100%', lg: '330px'}} borderRadius='5px'/>
                                        <Text
                                            fontWeight={'600'}
                                            fontSize='25px'
                                            lineHeight={'33px'}
                                            textAlign='center'
                                            mt='20px'
                                            mb='30px'
                                        >
                                            {product.title}
                                        </Text>
                                    </Flex>
                                )
                            })}
                        </Flex>
                        {/* Pagination Controls */}
                        <Flex justify="center" mt={4}>
                            {/* "Previous" Button */}
                            {currentPage > 1 && (
                                <Button
                                    bgColor='#fff'
                                    border='1px solid #444444'
                                    width='45px'
                                    height='45px'
                                    onClick={() => handlePageChange(currentPage - 1)}
                                    mx={2}
                                    padding='14px'
                                >
                                    <img src={prevArrow} />
                                </Button>
                            )}
                            {Array.from({ length: totalPages }, (_, index) => (
                                <Button
                                    key={index}
                                    bgColor='#fff'
                                    border='1px solid #444444'
                                    width='45px'
                                    height='45px'
                                    onClick={() => handlePageChange(index + 1)}
                                    isDisabled={currentPage === index + 1}
                                    mx={1}
                                    padding='14px'
                                >
                                    {index + 1}
                                </Button>
                            ))}

                            {/* "Next" Button */}
                            <Button
                                bgColor='#fff'
                                border='1px solid #444444'
                                width='45px'
                                height='45px'
                                onClick={() => handlePageChange(currentPage + 1)}
                                isDisabled={currentPage === totalPages}
                                mx={2}
                                padding='14px'
                            >
                                <img src={nextArrow} />
                            </Button>
                        </Flex>


                    </Flex>
                </Flex>
            </Container>
            <CaseStudy />
            <NewsLetter />
        </>
    );
}
