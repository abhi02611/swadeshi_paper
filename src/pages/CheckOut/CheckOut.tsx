import {
    Box,
    Container,
    Text,
    Flex,
    Button,
    Input,
    FormControl,
    FormLabel,
    HStack,
    Divider,
    Select,
    Image
} from "@chakra-ui/react";
import { useState } from "react";
import { CloseIcon } from "@chakra-ui/icons";
import sampleImg from '../../assets/images/069_Photoroom-20240814-223342_5.svg';

const stateCityData = {
    "Andhra Pradesh": ["Amaravati", "Visakhapatnam", "Vijayawada", "Tirupati", "Kakinada", "Nellore", "Guntur", "Rajahmundry", "Eluru", "Chittoor"],
    "Arunachal Pradesh": ["Itanagar", "Naharlagun", "Pasighat", "Tezpur", "Tawang", "Bomdila", "Ziro", "Aalo", "Namsai", "Changlang"],
    "Assam": ["Guwahati", "Silchar", "Dibrugarh", "Jorhat", "Tezpur", "Nagaon", "Hailakandi", "Karimganj", "Tinsukia", "Goalpara"],
    "Bihar": ["Patna", "Gaya", "Bhagalpur", "Muzaffarpur", "Darbhanga", "Purnea", "Katihar", "Bhagalpur", "Sasaram", "Begusarai"],
    "Chhattisgarh": ["Raipur", "Bilaspur", "Durg", "Korba", "Raigarh", "Jagdalpur", "Dantewada", "Ambikapur", "Kawardha", "Mahasamund"],
    "Goa": ["Panaji", "Margao", "Mapusa", "Ponda", "Vasco da Gama", "Bicholim", "Quepem", "Sanguem", "Curchorem", "Pernem"],
    "Gujarat": ["Ahmedabad", "Surat", "Vadodara", "Rajkot", "Gandhinagar", "Bhavnagar", "Jamnagar", "Ahmedabad", "Diu", "Kutch"],
    "Haryana": ["Chandigarh", "Faridabad", "Gurugram", "Hisar", "Rohtak", "Karnal", "Panipat", "Ambala", "Sonipat", "Yamunanagar"],
    "Himachal Pradesh": ["Shimla", "Dharamshala", "Kullu", "Manali", "Solan", "Mandi", "Palampur", "Bilaspur", "Hamirpur", "Una"],
    "Jharkhand": ["Ranchi", "Jamshedpur", "Dhanbad", "Bokaro", "Deoghar", "Hazaribagh", "Giridih", "Dumka", "Koderma", "Ramgarh"],
    "Karnataka": ["Bangalore", "Mysore", "Mangalore", "Hubli", "Dharwad", "Bellary", "Tumkur", "Chikmagalur", "Udupi", "Bijapur"],
    "Kerala": ["Thiruvananthapuram", "Kochi", "Kozhikode", "Kollam", "Thrissur", "Malappuram", "Kannur", "Pathanamthitta", "Wayanad", "Idukki"],
    "Madhya Pradesh": ["Bhopal", "Indore", "Gwalior", "Jabalpur", "Ujjain", "Sagar", "Ratlam", "Dewas", "Katni", "Rewa"],
    "Maharashtra": ["Mumbai", "Pune", "Nagpur", "Thane", "Nashik", "Aurangabad", "Solapur", "Kolhapur", "Amravati", "Akola"],
    "Manipur": ["Imphal", "Thoubal", "Churachandpur", "Kakching", "Tamenglong", "Senapati", "Ukhrul", "Chandel", "Jiribam", "Bishnupur"],
    "Meghalaya": ["Shillong", "Tura", "Jowai", "Nongpoh", "Williamnagar", "Bholaganj", "Mairang", "Sohra", "Baghmara", "Nongstoin"],
    "Mizoram": ["Aizawl", "Lunglei", "Siaha", "Champhai", "Kolasib", "Serchhip", "Mamit", "Lawngtlai", "Hnahthial", "Lunglei"],
    "Nagaland": ["Kohima", "Dimapur", "Mokokchung", "Wokha", "Tuensang", "Zunheboto", "Peren", "Mon", "Longleng", "Kiphire"],
    "Odisha": ["Bhubaneswar", "Cuttack", "Berhampur", "Rourkela", "Sambalpur", "Puri", "Balasore", "Jharsuguda", "Kendujhar", "Nabarangpur"],
    "Punjab": ["Chandigarh", "Amritsar", "Ludhiana", "Jalandhar", "Patiala", "Bathinda", "Mohali", "Fatehgarh Sahib", "Rupnagar", "Mansa"],
    "Rajasthan": ["Jaipur", "Udaipur", "Jodhpur", "Ajmer", "Bikaner", "Kota", "Bharatpur", "Tonk", "Churu", "Sikar"],
    "Sikkim": ["Gangtok", "Namchi", "Gyalshing", "Mangan", "Pakyong", "Rangpo", "Gyalshing", "Jorethang", "Singtam", "Yuksom"],
    "Tamil Nadu": ["Chennai", "Coimbatore", "Madurai", "Trichy", "Salem", "Tirunelveli", "Erode", "Tirupur", "Vellore", "Kanyakumari"],
    "Telangana": ["Hyderabad", "Warangal", "Khammam", "Nizamabad", "Mahbubnagar", "Ranga Reddy", "Adilabad", "Medak", "Sangareddy", "Jagtial"],
    "Tripura": ["Agartala", "Unakoti", "Dhalai", "North Tripura", "South Tripura", "West Tripura", "Khowai", "Sepahijala", "Gomati", "Tripura"],
    "Uttar Pradesh": ["Lucknow", "Kanpur", "Agra", "Varanasi", "Ghaziabad", "Allahabad", "Meerut", "Noida", "Aligarh", "Moradabad"],
    "Uttarakhand": ["Dehradun", "Haridwar", "Nainital", "Rudrapur", "Haldwani", "Roorkee", "Pithoragarh", "Champawat", "Tehri", "Uttarkashi"],
    "West Bengal": ["Kolkata", "Siliguri", "Howrah", "Durgapur", "Asansol", "Bardhaman", "Malda", "Kalyani", "Krishnanagar", "Jalpaiguri"]
};

const CheckoutPage = () => {
    const [cartItems, setCartItems] = useState([
        { id: 1, name: "Laser Cut Paper Wedding Card", price: 570, quantity: 1, discount: 50, img: sampleImg },
        { id: 2, name: "Laser Cut Paper Wedding Card", price: 570, quantity: 1, discount: 50, img: sampleImg },
        { id: 3, name: "Elegant Wedding Card", price: 399, quantity: 1, discount: 0, img: sampleImg },
    ]);

    const [formData, setFormData] = useState({
        Fname: '',
        Lname: '',
        email: '',
        phone: '',
        address: '',
        city: '',
        state: '',
        zip: ''
    });

    const [cities, setCities] = useState([]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevFormData => ({
            ...prevFormData,
            [name]: value
        }));
        if (name === 'state') {
            setCities(stateCityData[value] || []);
            setFormData(prevFormData => ({
                ...prevFormData,
                city: '',
            }));
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form submitted:", formData);
    };

    // Helper functions for cart actions
    const removeItem = (id) => {
        setCartItems(prevItems => prevItems.filter(item => item.id !== id));
    };

    const increaseQuantity = (id) => {
        setCartItems(prevItems =>
            prevItems.map(item =>
                item.id === id ? { ...item, quantity: item.quantity + 1 } : item
            )
        );
    };

    const decreaseQuantity = (id) => {
        setCartItems(prevItems =>
            prevItems.map(item =>
                item.id === id && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item
            )
        );
    };

    const subtotal = cartItems.reduce((acc, item) => acc + (item.price - item.discount) * item.quantity, 0);

    return (
        <Container maxW={{ base: '95%', md: '90%' }} mt={{ base: '40px', md: '90px' }} mb={{ base: '90px' }}>
            <Text fontSize={{ base: '24px', md: '36px' }} fontWeight="bold" mb="20px" textAlign="left" color="#444">
                Checkout
            </Text>

            <Flex direction={{ base: 'column', md: 'row' }} justify="space-between" borderWidth={1} borderRadius="lg" boxShadow="md">
                {/* Left side - Checkout Form */}
                <Box flex="1" p={10}>
                    <Text fontSize={{ base: '18px', md: '24px' }} fontWeight="600" mb="20px">Shipping Information</Text>
                    <form onSubmit={handleSubmit}>
                        <FormControl id="Fname" mb={4} isRequired>
                            <FormLabel>Full Name</FormLabel>
                            <Input type="text" name="Fname" value={formData.Fname} onChange={handleChange} placeholder="First Name" />
                        </FormControl>
                        <FormControl id="address" mb={4} isRequired>
                            <FormLabel>Address</FormLabel>
                            <Input type="text" name="address" value={formData.address} onChange={handleChange} placeholder="123 Main St" />
                        </FormControl>
                        <HStack spacing={4} mb={4}>
                            <FormControl id="state" isRequired>
                                <FormLabel>State</FormLabel>
                                <Select name="state" value={formData.state} onChange={handleChange}>
                                    <option value="">Select State</option>
                                    {Object.keys(stateCityData).map((state) => (
                                        <option key={state} value={state}>{state}</option>
                                    ))}
                                </Select>
                            </FormControl>
                            <FormControl id="city" isRequired>
                                <FormLabel>City</FormLabel>
                                <Select name="city" value={formData.city} onChange={handleChange} isDisabled={cities.length === 0}>
                                    <option value="">Select City</option>
                                    {cities.map((city) => (
                                        <option key={city} value={city}>{city}</option>
                                    ))}
                                </Select>
                            </FormControl>
                            <FormControl id="zip" isRequired>
                                <FormLabel>ZIP Code</FormLabel>
                                <Input type="text" name="zip" value={formData.zip} onChange={handleChange} placeholder="12345" />
                            </FormControl>
                        </HStack>
                        <FormControl id="email" mb={4} isRequired>
                            <FormLabel>Email</FormLabel>
                            <Input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="john@example.com" />
                        </FormControl>
                        <FormControl id="phone" mb={4} isRequired>
                            <FormLabel>Your Mobile</FormLabel>
                            <Input type="number" name="phone" value={formData.phone} onChange={handleChange} placeholder="+91-0000-000-000" />
                        </FormControl>

                        <Text fontSize={{ base: '18px', md: '24px' }} fontWeight="600" mt="50px" mb="20px">Payment Information</Text>

                        {/* UPI Payment Section */}
                        <FormControl id="upiId" mb={4} isRequired>
                            <FormLabel>UPI ID</FormLabel>
                            <Input type="text" name="upiId" value={formData.upiId} onChange={handleChange} placeholder="user@bank" />
                        </FormControl>
                        <Button bg="#B12291" color="white" size="lg" width="100%" mt={4}>
                            Verify & Pay
                        </Button>

                    </form>
                </Box>

                {/* Right side - Cart Summary */}
                <Box width={{ base: '100%', md: '30%' }} background='#ffe6fa' p={10}>
                    <Flex direction="column">
                        <Text fontSize={{ base: '18px', md: '24px' }} fontWeight="600" mb="10px">Order Summary</Text>
                        <Divider mb={4} />
                        {cartItems.map((item) => (
                            <Flex key={item.id} justify="space-between" align="center" py="15px" borderBottom="1px solid #fff">
                                <Flex align="center" width={{ base: '100%', md: '80%' }}>
                                    <Image
                                        src={item.img}
                                        alt={item.name}
                                        width={{ base: "80px", md: "80px" }}
                                        height={{ base: "80px", md: "80px" }}
                                        borderRadius="md"
                                        objectFit='cover'
                                    />
                                    <Box ml="20px">
                                        <Text fontSize={{ base: '14px', md: '15px' }} fontWeight="700" color="#444">
                                            {item.name}
                                        </Text>

                                    </Box>
                                </Flex>
                                <Text fontSize="lg" fontWeight="bold" color="#444" width={{ base: '100%', md: '20%' }} textAlign="right">
                                    ₹{(item.price - item.discount) * item.quantity}
                                </Text>
                            </Flex>
                        ))}

                        <Divider my={3} />

                        <Flex align="center" width="100%" justify="space-between">
                            <Text fontSize={{ base: '16px', md: '16px' }} fontWeight="400" mb="10px">Subtotal</Text>
                            <Text fontSize={{ base: '16px', md: '16px' }} fontWeight="400" color="#B12291">₹{subtotal}</Text>
                        </Flex>



                        <Flex align="center" width="100%" justify="space-between">
                            <Text fontSize={{ base: '16px', md: '16px' }} fontWeight="400" mb="10px">Shipping cost</Text>
                            <Text fontSize={{ base: '16px', md: '16px' }} fontWeight="400" color="#B12291">₹{subtotal}</Text>
                        </Flex>


                        <Flex align="center" width="100%" justify="space-between">
                            <Text fontSize={{ base: '16px', md: '16px' }} fontWeight="400" mb="10px">Discount</Text>
                            <Text fontSize={{ base: '16px', md: '16px' }} fontWeight="400" color="red">-₹{cartItems.reduce((acc, item) => acc + item.discount * item.quantity, 0)}</Text>
                        </Flex>

                        <Divider my={2} />
                        <Flex justify="space-between" fontWeight="bold">
                            <Text>Cart Total</Text>
                            <Text fontSize={{ base: '16px', md: '16px' }} fontWeight="400" mb="10px">₹{subtotal}</Text>
                        </Flex>
                        <Button type="submit" bg="#B12291" color="white" size="lg" width="100%" marginTop='20px'>
                            Place Order
                        </Button>
                    </Flex>
                </Box>
            </Flex>
        </Container>
    );
};

export default CheckoutPage;
