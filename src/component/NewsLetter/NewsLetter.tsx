import { Container, Flex, Divider, InputGroup, Input, InputRightElement, Button, Image, Text } from "@chakra-ui/react";
import colorPalete from "../../assets/images/color_pallete.svg";
import pen from "../../assets/images/pen.svg";

export default function () {
    return (
        <Container maxW={'100%'} mt='50px'>
            <Flex bgColor={'#FFF5F1'} height='480px'>
                <Flex width={'20%'} align="flex-end">
                    <Image src={colorPalete} />
                </Flex>
                <Flex
                    width={'60%'}
                    align='center'
                    justify={'center'}
                    direction='column'
                    gap={'50px'}
                >
                    <Flex direction={'column'} gap={'50px'}>
                        <Flex align='center' justify={'center'}>
                            <Divider border={'5px solid #9A0172'} width="115px" opacity={'1'} />
                            <Text
                                fontWeight={'800'}
                                fontSize='48px'
                                lineHeight={'74px'}
                                px='30px'
                            >Newsletter Subscribe</Text>
                            <Divider border={'5px solid #9A0172'} width="115px" opacity={'1'} />
                        </Flex>
                        <Text
                            fontWeight={'400'}
                            fontSize='18px'
                            lineHeight={'32px'}
                            textAlign='center'
                            width={'800px'}
                        >
                            Professional printing services can provide you with high-quality prints that will look great and last a long time. We have the equipment and expertise.
                        </Text>
                    </Flex>
                    <InputGroup height={'83px'}>
                        <Input
                            type={'text'}
                            height='100%'
                            sx={{
                                borderRadius: '0',
                                padding: 0,
                                background: "#fff"

                            }}
                        />
                        <InputRightElement h='100%' w={'25%'}>
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
                <Flex width={'20%'} align='center' justify={'center'}>
                    <Image src={pen} height="200px" width={"160px"} />
                </Flex>
            </Flex>

        </Container>
    )
}