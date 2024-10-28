import { Container, Flex, Divider, InputGroup, Input, InputRightElement, Button, Image, Text, background } from "@chakra-ui/react";
import colorPalete from "../../assets/images/color_pallete.svg";
import pen from "../../assets/images/pen.svg";

export default function () {
    return (
        <section style={{ background: "#FFF5F1" }}>
        <Container maxW="100%" mt="50px">
            <Flex
                bgColor="#FFF5F1"
                height={{ base: 'auto', md: '480px' }} 
                flexDirection={{ base: 'column', md: 'row' }} 
                align="center"
                p={{ base: '20px', md: '0' }}
            >
                <Flex width={{ base: '100%', md: '20%' }} align="center" justify="center" mb={{ base: '20px', md: '0' }}>
                    <Image src={colorPalete} boxSize={{ base: "80px", md: "auto" }} /> 
                </Flex>
                <Flex
                    width={{ base: '100%', md: '60%' }}
                    align="center"
                    justify="center"
                    direction="column"
                    gap={{ base: '20px', md: '50px' }}
                >
                    <Flex direction="column" align="center" textAlign="center" gap={{ base: '20px', md: '50px' }}>
                        <Flex align="center" justify="center">
                            <Divider border="5px solid #9A0172" width={{ base: "60px", md: "115px" }} opacity="1" />
                            <Text
                                fontWeight="800"
                                fontSize={{ base: '40px', md: '48px' }}
                                lineHeight="48px"
                                textAlign="center"
                                px="30px"
                            >
                                Newsletter Subscribe
                            </Text>
                            <Divider border="5px solid #9A0172" width={{ base: "60px", md: "115px" }} opacity="1" />
                        </Flex>
                        <Text
                            fontWeight="400"
                            fontSize={{ base: '16px', md: '18px' }}
                            lineHeight="32px"
                            width={{ base: '100%', sm: '80%', md: '50%' }}
                            px="10px"
                        >
                            Professional printing services can provide you with high-quality prints that will look great and last a long time. We have the equipment and expertise.
                        </Text>
                    </Flex>
                    <InputGroup width="100%" height="83px" flexDirection={{ base: 'column', md: 'row' }}>
                        <Input
                            type="text"
                            height="100%"
                            sx={{
                                borderRadius: '0',
                                padding: '10px',
                                background: "#fff",
                                width: "100%"
                            }}
                            mb={{ base: '10px', md: '0' }}
                        />
                        <InputRightElement h="100%" w={{ base: "100%", md: "25%" }}>
                            <Button
                                sx={{
                                    borderRadius: '0',
                                    backgroundColor: '#9A0172',
                                    color: "#fff",
                                    padding: "20px",
                                    height: "100%",
                                    width: "100%"
                                }}
                            >
                                SUBSCRIBE
                            </Button>
                        </InputRightElement>
                    </InputGroup>
                </Flex>
                <Flex width={{ base: '100%', md: '20%' }} align="center" justify="center" mt={{ base: '20px', md: '0' }}>
                    <Image src={pen} boxSize={{ base: "80px", md: "160px" }} /> {/* Responsive image */}
                </Flex>
            </Flex>
        </Container>
    </section>
    
    )
}