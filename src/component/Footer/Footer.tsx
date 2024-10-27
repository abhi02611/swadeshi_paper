import { Box, Container, Divider, Flex, Heading, ListItem, Text, UnorderedList, Image, InputGroup, Input, InputRightElement, Button } from "@chakra-ui/react";
import phone from '../../assets/images/phone-call.svg';
import mail from '../../assets/images/mail.svg';
import location from '../../assets/images/location_pin.svg'
import facebook from '../../assets/images/Facebook.svg';
import instagram from '../../assets/images/instagram.svg';
import twitter from '../../assets/images/twitter.png';



export default function() {
    return (
        <Box bgColor='#262626' height={'470px'}>
            <Container maxWidth={"80%"}>
                <Flex justify={'space-between'} color="white" pt="90px">
                    <UnorderedList styleType='none' textAlign={'left'}>
                        <Text
                            fontWeight={"800"}
                            fontSize={"30px"}
                            lineHeight={'41px'}
                        >CONTACT US</Text>
                        <Flex direction={'column'} gap={'20px'} mt="20px">
                            <ListItem>
                                <Flex gap={'30px'} justify='flex-start' align={'center'}>
                                    <Image src={phone} height={'35px'} width={'35px'} />
                                    <Text
                                        fontWeight={"400"}
                                        fontSize={"20px"}
                                        lineHeight={'27px'}
                                    >(+91) 1234567890</Text>
                                </Flex>
                            </ListItem>
                            <ListItem>
                                <Flex gap={'30px'} justify='flex-start' align={'center'}>
                                    <Image src={mail} height={'35px'} width={'35px'} />
                                    <Text
                                        fontWeight={"400"}
                                        fontSize={"20px"}
                                        lineHeight={'27px'}
                                    >swadeshipaper@gmail.com</Text>
                                </Flex>
                            </ListItem>
                            <ListItem>
                                <Flex gap={'30px'} justify='flex-start' align={'center'}>
                                    <Image src={location} height={'35px'} width={'35px'} />
                                    <Text
                                        fontWeight={"400"}
                                        fontSize={"20px"}
                                        lineHeight={'27px'}
                                    >Mi donec risus commodo auctor phasellus.</Text>
                                </Flex>
                            </ListItem>
                        </Flex>
                    </UnorderedList>
                    <Flex direction={'column'}>
                        <Text
                            fontWeight={"800"}
                            fontSize={"30px"}
                            lineHeight={'41px'}
                            textAlign={'left'}
                        >QUICK SHOP</Text>
                        <UnorderedList mt="20px">
                            <ListItem>
                                <Text
                                    fontWeight={"400"}
                                    fontSize={"20px"}
                                    lineHeight={'27px'}
                                    mt="20px"
                                >My Account</Text>
                            </ListItem>
                            <ListItem>
                                <Text
                                    fontWeight={"400"}
                                    fontSize={"20px"}
                                    lineHeight={'27px'}
                                    mt="20px"
                                >Our Services</Text>
                            </ListItem>
                            <ListItem>
                                <Text
                                    fontWeight={"400"}
                                    fontSize={"20px"}
                                    lineHeight={'27px'}
                                    mt="20px"
                                >Our Case Study</Text>
                            </ListItem>
                            <ListItem>
                                <Text
                                    fontWeight={"400"}
                                    fontSize={"20px"}
                                    lineHeight={'27px'}
                                    mt="20px"
                                >Customer Review</Text>
                            </ListItem>
                        </UnorderedList>
                    </Flex>
                    <Flex direction={'column'} gap={'20px'}>
                        <Text
                            fontWeight={"800"}
                            fontSize={"30px"}
                            lineHeight={'41px'}
                        >Get Social
                        </Text>
                        <Text
                            fontWeight={"400"}
                            fontSize={"20px"}
                            lineHeight={'27px'}
                            width={'450px'}
                        >Subscribe to Our Newsletter to get Important News, Amazing Offers & Inside Scoops:
                        </Text>
                        <Box>
                            <InputGroup size='md'>
                                <Input
                                    type={'text'}
                                    sx={{
                                        borderRadius: '0',
                                        padding: 0,
                                        background: "#fff"

                                    }}
                                />
                                <InputRightElement width='130px'>
                                    <Button
                                        h='100%'
                                        sx={{
                                            borderRadius: '0',
                                            backgroundColor: '#9A0172',
                                            color: "#fff",
                                            padding: "20px"

                                        }}
                                    >
                                        SUBSCRIBE
                                    </Button>
                                </InputRightElement>
                            </InputGroup>
                        </Box>
                        <Flex gap={'10px'}>
                            <Flex gap={"10px"} justify={'center'} align={'center'}>
                                <Box><Image src={facebook} height={'23px'} width={'23px'} /></Box>
                                <Text
                                    fontWeight={"400"}
                                    fontSize={"20px"}
                                    lineHeight={'27px'}
                                >Facebook</Text>
                            </Flex>
                            <Divider orientation="vertical" />
                            <Flex gap={"10px"} justify={'center'} align={'center'}>
                                <Box><Image src={instagram} height={'23px'} width={'23px'} /></Box>
                                <Text
                                    fontWeight={"400"}
                                    fontSize={"20px"}
                                    lineHeight={'27px'}
                                >Instagram</Text>
                            </Flex>
                            <Divider orientation="vertical" />
                            <Flex gap={"10px"} justify={'center'} align={'center'}>
                                <Box><Image src={twitter} height={'23px'} width={'23px'} /></Box>
                                <Text
                                    fontWeight={"400"}
                                    fontSize={"20px"}
                                    lineHeight={'27px'}
                                >Twitter</Text>
                            </Flex>
                        </Flex>
                    </Flex>
                </Flex>
                <Divider
                    sx={{
                        border: '1px',
                        borderColor: '#494949',
                        marginTop: "70px"
                    }}
                />
                <center>
                    <Text
                        fontWeight={"400"}
                        fontSize={"18px"}
                        lineHeight={'30px'}
                        color='white'
                        marginTop={'10px'}
                    >
                        Copyrights © 2024 All Rights Reserved by Swadeshi Paper.
                    </Text>
                </center>
            </Container>
        </Box>
    )
}