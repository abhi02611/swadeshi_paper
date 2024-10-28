import { Box, Container, Divider, Flex, Heading, ListItem, Text, UnorderedList, Image, InputGroup, Input, InputRightElement, Button } from "@chakra-ui/react";
import phone from '../../assets/images/phone-call.svg';
import mail from '../../assets/images/mail.svg';
import location from '../../assets/images/location_pin.svg'
import facebook from '../../assets/images/Facebook.svg';
import instagram from '../../assets/images/instagram.svg';
import twitter from '../../assets/images/twitter.png';
// import './Footer.css';

export default function Footer() {
    return (
        <Box bgColor='#262626' padding={'10px'}>
           <Container maxWidth={{ base: "100%", md: "95%",lg:"95%" }}>
                <Flex
                    direction={{ base: 'column', md: 'row' }}
                    justify={{ md: 'space-between' }}
                    color="white"
                    pt="90px"
                    className="responsive_grid"
                    gap={{ base: 8, md: 0 }}
                >
                    <UnorderedList styleType='none' textAlign={'left'} mb={{ base: 6, md: 0 }}>
                        <Text fontWeight={"800"} fontSize={"25px"} lineHeight={'41px'}>CONTACT US</Text>
                        <Flex direction={'column'} gap={'20px'} mt="20px">
                            <ListItem>
                                <Flex gap={'30px'} align={'center'}>
                                    <Image src={phone} height={'35px'} width={'35px'} />
                                    <Text fontWeight={"400"} fontSize={"20px"} lineHeight={'27px'}>(+91) 1234567890</Text>
                                </Flex>
                            </ListItem>
                            <ListItem>
                                <Flex gap={'30px'} align={'center'}>
                                    <Image src={mail} height={'35px'} width={'35px'} />
                                    <Text fontWeight={"400"} fontSize={"20px"} lineHeight={'27px'}>swadeshipaper@gmail.com</Text>
                                </Flex>
                            </ListItem>
                            <ListItem>
                                <Flex gap={'30px'} align={'center'}>
                                    <Image src={location} height={'35px'} width={'35px'} />
                                    <Text fontWeight={"400"} fontSize={"20px"} lineHeight={'27px'}>Mi donec risus commodo auctor phasellus.</Text>
                                </Flex>
                            </ListItem>
                        </Flex>
                    </UnorderedList>
                    <Flex direction={'column'} mb={{ base: 6, md: 0 }}>
                        <Text fontWeight={"800"} fontSize={"25px"} lineHeight={'41px'}>QUICK SHOP</Text>
                        <UnorderedList mt="20px" spacing={4}>
                            {['My Account', 'Our Services', 'Our Case Study', 'Customer Review'].map((item) => (
                                <ListItem key={item}>
                                    <Text fontWeight={"400"} fontSize={"20px"} lineHeight={'27px'}>{item}</Text>
                                </ListItem>
                            ))}
                        </UnorderedList>
                    </Flex>
                    <Flex direction={'column'} gap={'20px'}>
                        <Text fontWeight={"800"} fontSize={"25px"} lineHeight={'41px'}>Get Social</Text>
                        <Text fontWeight={"400"} fontSize={"20px"} lineHeight={'27px'} maxWidth={'450px'}>
                            Subscribe to Our Newsletter to get Important News, Amazing Offers & Inside Scoops:
                        </Text>
                        <InputGroup size='md'>
                            <Input
                                type={'text'}
                                placeholder="Email address"
                                sx={{
                                    borderRadius: '0',
                                    padding: '10px',
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
                        <Flex gap={'10px'} wrap={'wrap'} justify={{ base: 'center', md: 'flex-start' }}>
                            {[{ icon: facebook, name: "Facebook" }, { icon: instagram, name: "Instagram" }, { icon: twitter, name: "Twitter" }].map((social, idx) => (
                                <Flex key={idx} gap={"10px"} align={'center'}>
                                    <Image src={social.icon} height={'23px'} width={'23px'} />
                                    <Text fontWeight={"400"} fontSize={"20px"} lineHeight={'27px'}>{social.name}</Text>
                                    {idx < 2 && <Divider orientation="vertical" display={{ base: 'none', md: 'inline-block' }} />}
                                </Flex>
                            ))}
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
                    <Text fontWeight={"400"} fontSize={"18px"} lineHeight={'30px'} color='white' mt={'20px'} mb={'30px'}>
                        Copyrights © 2024 All Rights Reserved by Swadeshi Paper.
                    </Text>
                </center>
            </Container>
        </Box>
    );
}
