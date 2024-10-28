import { Box, Container, Text, Flex, Button, VStack, Input, FormControl, FormLabel, HStack, Divider, Select } from "@chakra-ui/react";
import { useState } from "react";
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

    // Calculate subtotal
    const subtotal = cartItems.reduce((acc, item) => acc + (item.price - item.discount) * item.quantity, 0);

    // Handle form inputs
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
        
        // Update formData
        setFormData(prevFormData => ({
            ...prevFormData,
            [name]: value
        }));
        
        // Handle state change
        if (name === 'state') {
            setCities(stateCityData[value] || []); // Update cities based on selected state
            setFormData(prevFormData => ({
                ...prevFormData,
                city: '', // Reset city when state changes
            }));
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Add form submission logic here
        console.log("Form submitted:", formData);
    };

    return (
        <Container maxW={{ base: '95%', md: '90%' }} mt={{ base: '40px', md: '90px' }} mb={{ base: '90px' }}>
            <Text fontSize={{ base: '24px', md: '36px' }} fontWeight="bold" mb="20px" textAlign="left" color="#444">
                Checkout
            </Text>

            <Flex direction={{ base: 'column', md: 'row' }} justify="space-between" gap="40px">
                {/* Left side - Checkout Form */}
                <Box flex="1">
                    <form onSubmit={handleSubmit}>
                        <HStack spacing={4} mb={4}>
                            <FormControl id="Fname" isRequired>
                                <FormLabel>First Name</FormLabel>
                                <Input type="text" name="Fname" value={formData.Fname} onChange={handleChange} placeholder="First Name" />
                            </FormControl>
                            <FormControl id="Lname" isRequired>
                                <FormLabel>Last Name</FormLabel>
                                <Input type="text" name="Lname" value={formData.Lname} onChange={handleChange} placeholder="Last Name" />
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

                        <Button type="submit" bg="#B12291" color="white" size="lg" width="100%">
                            Complete Order
                        </Button>
                    </form>
                </Box>

                {/* Right side - Cart Summary */}
                <Box width={{ base: '100%', md: '30%' }} borderWidth={1} borderRadius="lg" boxShadow="md" p={5} maxHeight='250px'>
                    <Flex direction="column">
                        <Text fontSize={{ base: '18px', md: '24px' }} fontWeight="600" mb="10px">Cart Summary</Text>
                        <Divider mb={4} />
                        {cartItems.map((item) => (
                            <Flex key={item.id} justify="space-between" mb={2}>
                                <Text fontWeight="500">{item.name}</Text>
                                <Text>₹{(item.price - item.discount) * item.quantity}</Text>
                            </Flex>
                        ))}
                        <Divider my={2} />
                        <Flex justify="space-between" fontWeight="bold">
                            <Text>Cart Total</Text>
                            <Text fontSize={{ base: '16px', md: '16px' }} fontWeight="400" mb="10px">₹{subtotal - cartItems.reduce((acc, item) => acc + item.discount * item.quantity, 0)}</Text>
                        </Flex>
                    </Flex>
                </Box>
            </Flex>
        </Container>
    );
};

export default CheckoutPage;
