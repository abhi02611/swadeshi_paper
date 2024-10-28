import { Box, Container, Text, Flex, Image, Button, HStack, VStack, IconButton } from "@chakra-ui/react";
import { useState } from "react";
import { CloseIcon } from "@chakra-ui/icons";
import sampleImg from '../../assets/images/069_Photoroom-20240814-223342_5.svg';

const CartPage = () => {
    const [cartItems, setCartItems] = useState([
        { id: 1, name: "Laser Cut Paper Wedding Card", price: 570, quantity: 1, discount: 50, img: sampleImg }, 
        { id: 2, name: "Laser Cut Paper Wedding Card", price: 570, quantity: 1, discount: 50, img: sampleImg }, 
        { id: 3, name: "Elegant Wedding Card", price: 399, quantity: 1, discount: 0, img: sampleImg }, 
    ]);

    // Calculate subtotal
    const subtotal = cartItems.reduce((acc, item) => acc + (item.price - item.discount) * item.quantity, 0);

    // Quantity increase
    const increaseQuantity = (id) => {
        setCartItems((prevItems) =>
            prevItems.map((item) =>
                item.id === id ? { ...item, quantity: item.quantity + 1 } : item
            )
        );
    };

    // Quantity decrease
    const decreaseQuantity = (id) => {
        setCartItems((prevItems) =>
            prevItems.map((item) =>
                item.id === id && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item
            )
        );
    };

    // Item removal
    const removeItem = (id) => {
        setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
    };

    return (
        <Container maxW={{ base: '95%', md: '90%' }} mt={{ base: '40px', md: '90px' }} mb={{ base: '90px' }}>
            <Text 
                fontSize={{ base: '24px', md: '36px' }} 
                fontWeight="bold" 
                mb="20px" 
                textAlign="left" 
                color="#444"
            >
                Your Shopping Cart
            </Text>

            <Flex direction={{ base: 'column', md: 'row' }} justify="space-between" gap="40px">
                {/* Left side - Cart Items */}
                <Box flex="1" borderWidth={1} borderRadius="lg" boxShadow="md" p={5}>
                    {cartItems.length > 0 ? (
                        <>
                            {/* Table Heading */}
                            <Flex
                                justify="space-between"
                                align="center"
                                fontWeight="bold"
                                fontSize={{ base: '18px', md: '20px' }}
                                color="gray.800"
                                borderBottom=".5px solid #E2E8F0"
                                py="10px"
                                width="100%"
                                maxWidth="800px"
                                mx="auto"
                                display={{ base: 'none', md: 'flex' }} // Hide on mobile view
                            >
                                <Text width={{ base: '100%', md: '40%' }}>Product Details</Text>
                                <Text width={{ base: '100%', md: '20%' }} textAlign="center">Price</Text>
                                <Text width={{ base: '100%', md: '20%' }} textAlign="center">Quantity</Text>
                                <Text width={{ base: '100%', md: '20%' }} textAlign="right">Total</Text>
                            </Flex>

                            {cartItems.map((item) => (
                                <Flex
                                    key={item.id}
                                    justify="space-between"
                                    align="center"
                                    py="15px"
                                    borderBottom="1px solid #E2E8F0"
                                    width="100%"
                                    maxWidth="800px"
                                    mx="auto"
                                >
                                    {/* Product Details Column */}
                                    <Flex align="center" width={{ base: '100%', md: '40%' }}>
                                        <Image
                                            src={item.img}
                                            alt={item.name}
                                            width={{ base: "80px", md: "140px" }}
                                            height={{ base: "80px", md: "160px" }}
                                            borderRadius="md"
                                            objectFit='cover'
                                        />
                                        <Box ml="20px">
                                            <Text fontSize={{ base: '18px', md: '20px' }} fontWeight="600" color="#444">
                                                {item.name}
                                            </Text>
                                            <Text color="gray.600" mt="5px">₹{item.price}</Text>
                                            <Text color="red.500" mt="5px">Discount: ₹{item.discount}</Text>
                                            <IconButton
                                                aria-label="Remove item"
                                                icon={<CloseIcon />}
                                                colorScheme="pink"
                                                size="sm"
                                                mt="5px"
                                                onClick={() => removeItem(item.id)}
                                            />
                                        </Box>
                                    </Flex>

                                    {/* Price Column */}
                                    <Text fontSize="lg" fontWeight="bold" color="gray.800" width={{ base: '100%', md: '20%' }} textAlign="center" display={{ base: 'none', md: 'block' }}>
                                        ₹{item.price}
                                    </Text>

                                    {/* Quantity Column */}
                                    <Flex align="center" width={{ base: '100%', md: '20%' }} justify="center" display={{ base: 'none', md: 'block' }}>
                                        <HStack spacing={3}>
                                            <Button onClick={() => decreaseQuantity(item.id)} size="sm" colorScheme="pink">-</Button>
                                            <Text fontSize="lg">{item.quantity}</Text>
                                            <Button onClick={() => increaseQuantity(item.id)} size="sm" colorScheme="pink">+</Button>
                                        </HStack>
                                    </Flex>

                                    {/* Total Column */}
                                    <Text fontSize="lg" fontWeight="bold" color="#444" width={{ base: '100%', md: '20%' }} textAlign="right" display={{ base: 'none', md: 'block' }}>
                                        ₹{(item.price - item.discount) * item.quantity}
                                    </Text>
                                </Flex>
                            ))}
                        </>
                    ) : (
                        <Text fontSize="xl" color="gray.500" mt="40px" textAlign="center">
                            Your cart is empty.
                        </Text>
                    )}
                </Box>

                {/* Right side - Checkout Section */}
                <Box width={{ base: '100%', md: '30%' }} borderWidth={1} borderRadius="lg" boxShadow="md" p={5} maxHeight='350px'>
                    <Flex direction="column">
                        <Text fontSize={{ base: '18px', md: '24px' }} fontWeight="600" mb="10px">Cart Total</Text>
                        <Flex align="center" width="100%" justify="space-between">
                            <Text fontSize={{ base: '16px', md: '16px' }} fontWeight="400" mb="10px">Cart Subtotal</Text>
                            <Text fontSize={{ base: '16px', md: '16px' }} fontWeight="400" color="#B12291">₹{subtotal}</Text>
                        </Flex>
                        <Flex align="center" width="100%" justify="space-between">
                            <Text fontSize={{ base: '16px', md: '16px' }} fontWeight="400" mb="10px">Discount</Text>
                            <Text fontSize={{ base: '16px', md: '16px' }} fontWeight="400" color="red">-₹{cartItems.reduce((acc, item) => acc + item.discount * item.quantity, 0)}</Text>
                        </Flex>
                        <Flex align="center" width="100%" justify="space-between">
                            <Text fontSize={{ base: '16px', md: '16px' }} fontWeight="400" mb="10px">Cart Total</Text>
                            <Text fontSize={{ base: '16px', md: '16px' }} fontWeight="400" color="#B12291">₹{subtotal - cartItems.reduce((acc, item) => acc + item.discount * item.quantity, 0)}</Text>
                        </Flex>
                  
                        <VStack mt="30px" spacing={4} width="100%">
                            <Button bg="#B12291" size="lg" width="100%" color="white">
                                Proceed to Checkout
                            </Button>
                            <Button variant="outline" colorScheme="pink" size="lg" width="100%">
                                Continue Shopping
                            </Button>
                        </VStack>
                    </Flex>
                </Box>
            </Flex>
        </Container>
    );
};

export default CartPage;
