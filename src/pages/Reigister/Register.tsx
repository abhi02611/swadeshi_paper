import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    InputGroup,
    HStack,
    InputRightElement,
    Stack,
    Button,
    Heading,
    Text,
    useColorModeValue,
    Link as ChakraLink,
} from '@chakra-ui/react'
import { useState } from 'react'
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons'
import { Link } from 'react-router-dom';

export default function SignupCard() {
    const [showPassword, setShowPassword] = useState(false)
    const [isOtpSent, setIsOtpSent] = useState(false)
    const [otp, setOtp] = useState('')
    const [isOtpVerified, setIsOtpVerified] = useState(false)

    const handleSendOtp = () => {
        // Here you would integrate the function to send OTP to the user
        // Simulate OTP send with a state change
        setIsOtpSent(true)
        console.log('OTP sent to the user.')
    }

    const handleVerifyOtp = () => {
        // Here you would integrate OTP verification logic
        if (otp === '123456') { // Replace with server-side verification logic
            setIsOtpVerified(true)
            console.log('OTP verified.')
        } else {
            alert('Invalid OTP. Please try again.')
        }
    }

    return (
        <Flex
            minH={'100%'}
            align={'center'}
            py={'30px'}
            justify={'center'}
            bg={useColorModeValue('gray.50', 'gray.800')}>
            <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
                <Stack align={'center'}>
                    <Heading fontSize={'4xl'} textAlign={'center'}>
                        Register
                    </Heading>
                </Stack>
                <Box
                    rounded={'lg'}
                    bg={useColorModeValue('white', 'gray.700')}
                    boxShadow={'lg'}
                    p={8}>
                    <Stack spacing={4}>
                        <HStack>
                            <Box>
                                <FormControl id="firstName" isRequired>
                                    <FormLabel>First Name</FormLabel>
                                    <Input type="text" />
                                </FormControl>
                            </Box>
                            <Box>
                                <FormControl id="lastName">
                                    <FormLabel>Last Name</FormLabel>
                                    <Input type="text" />
                                </FormControl>
                            </Box>
                        </HStack>
                        <FormControl id="email" isRequired>
                            <FormLabel>Email address</FormLabel>
                            <Input type="email" />
                        </FormControl>
                        <FormControl id="phone" isRequired>
                            <FormLabel>Phone No.</FormLabel>
                            <Input type="number" />
                        </FormControl>
                        <FormControl id="password" isRequired>
                            <FormLabel>Password</FormLabel>
                            <InputGroup>
                                <Input type={showPassword ? 'text' : 'password'} />
                                <InputRightElement h={'full'}>
                                    <Button
                                        variant={'ghost'}
                                        onClick={() => setShowPassword((showPassword) => !showPassword)}>
                                        {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                                    </Button>
                                </InputRightElement>
                            </InputGroup>
                        </FormControl>
                        <FormControl id="confirm_password" isRequired>
                            <FormLabel>Confirm Password</FormLabel>
                            <InputGroup>
                                <Input type={showPassword ? 'text' : 'password'} />
                                <InputRightElement h={'full'}>
                                    <Button
                                        variant={'ghost'}
                                        onClick={() => setShowPassword((showPassword) => !showPassword)}>
                                        {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                                    </Button>
                                </InputRightElement>
                            </InputGroup>
                        </FormControl>
                        <Stack spacing={4}>
                            {!isOtpSent ? (
                                <Button
                                    size="lg"
                                    bg={'#B12291'}
                                    color={'white'}
                                    onClick={handleSendOtp}>
                                    Send OTP
                                </Button>
                            ) : (
                                <>
                                    <FormControl id="otp" isRequired>
                                        <FormLabel>Enter OTP</FormLabel>
                                        <Input
                                            type="number"
                                            placeholder="Enter the OTP sent to your Email"
                                            value={otp}
                                            onChange={(e) => setOtp(e.target.value)}
                                        />
                                    </FormControl>
                                    <Button
                                        size="lg"
                                        bg={'#B12291'}
                                        color={'white'}
                                        onClick={handleVerifyOtp}>
                                        Verify OTP
                                    </Button>
                                </>
                            )}
                        </Stack>
                        {isOtpVerified && (
                            <Text color="green.500" textAlign="center">
                                OTP Verified Successfully!
                            </Text>
                        )}
                        <Stack pt={6}>
                            <Text align={'center'}>
                                Already a user? <Link color={'#B12291'} className='link' to="/login">Login</Link>
                            </Text>
                        </Stack>
                    </Stack>
                </Box>
            </Stack>
        </Flex>
    )
}
