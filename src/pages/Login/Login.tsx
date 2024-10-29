import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    Checkbox,
    Stack,
    Button,
    Heading,
    Text,
    useColorModeValue,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { useState } from 'react';

export default function LoginPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = () => {
        // Logic to handle sign-in, e.g., calling an API
        console.log("Email:", email, "Password:", password);
    };

    return (
        <Flex
            minH={'100%'}
            py={'70px'}
            align={'center'}
            justify={'center'}
            bg={useColorModeValue('gray.50', 'gray.800')}>
            <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
                <Stack align={'center'}>
                    <Heading fontSize={'4xl'}>Login to your account</Heading>
                </Stack>
                <Box
                    rounded={'lg'}
                    bg={useColorModeValue('white', 'gray.700')}
                    boxShadow={'lg'}
                    p={8}>
                    <Stack spacing={4}>
                        <FormControl id="email" isRequired>
                            <FormLabel>Email address</FormLabel>
                            <Input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </FormControl>
                        <FormControl id="password" isRequired>
                            <FormLabel>Password</FormLabel>
                            <Input
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </FormControl>
                        <Stack spacing={10}>
                            <Stack
                                direction={{ base: 'column', sm: 'row' }}
                                align={'start'}
                                justify={'space-between'}>
                                <Checkbox>Remember me</Checkbox>
                                <Link to="/forgot-password" className='link'>
                                    <Text>Forgot password?</Text>
                                </Link>
                            </Stack>
                            <Button
                                bg={'#B12291'}
                                color={'white'}
                                
                                onClick={handleSubmit}>
                                Sign in
                            </Button>
                        </Stack>
                    </Stack>
                </Box>

                <Text fontSize={'md'} textAlign={'center'}>
                    New to Swadesi?{' '}
                    <Link to="/register" style={{ color: 'blue.400' }} className='link'>
                        Join Now
                    </Link>
                </Text>
            </Stack>
        </Flex>
    );
}
