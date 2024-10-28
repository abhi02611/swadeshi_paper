'use client'

import {
    Box,
    Flex,
    HStack,
    Button,
    Image,
    IconButton,
    useDisclosure,
    Stack,
} from '@chakra-ui/react'
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons'
import logo from '../../assets/images/pp.svg'

interface Props {
    children: React.ReactNode
}

const Links = ['HOME', 'OUR SERVICES', 'JOIN US', 'CONTACT US']

const NavLink = (props: Props) => {
    const { children } = props

    return (
        <Box
            sx={{
                'fontWeight': '800',
                'fontSize': '18px',
                'lineHeight': '18px'
            }}
        >
            {children}
        </Box>
    )
}

export default function NavBar() {
    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
        <Box bg="white" px={{ base: "20px", md: "50px", lg: "60px" }}>
            <Flex h={16} alignItems="center" justifyContent="space-between" sx={{ height: '90px' }}>
                <Box>
                    <Image src={logo} alt="Logo" height={{ base: '30px', md: '50px' }} />
                </Box>

                <IconButton
                    size="md"
                    icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
                    aria-label="Open Menu"
                    display={{ md: "none" }}
                    onClick={isOpen ? onClose : onOpen}
                />

                <HStack spacing="40px" alignItems="center" display={{ base: 'none', md: 'flex' }}>
                    {Links.map((link) => (
                        <NavLink key={link}>{link}</NavLink>
                    ))}
                    <Box>
                        <Button
                            sx={{
                                bgColor: '#B12291',
                                color: '#fff',
                                height: '34px',
                                width: '95px'
                            }}
                        >
                            LOG IN
                        </Button>
                    </Box>
                </HStack>

                {/* Responsive Menu */}
                {isOpen ? (
                    <Box
                        p={8}
                        display={{ md: "none" }}
                        position="absolute"
                        top="0px" 
                        left="0px" 
                        bg="white" 
                        boxShadow="md"
                        zIndex="dropdown"
                        width='70%' 
                        height='100vh'

                    >
                        <Stack as="nav" spacing={4}>
                            {Links.map((link) => (
                                <NavLink key={link}>{link}</NavLink>
                            ))}
                            <Button
                                sx={{
                                    bgColor: '#B12291',
                                    color: '#fff',
                                    height: '34px',
                                    width: '95px',
                                }}
                            >
                                LOG IN
                            </Button>
                        </Stack>
                    </Box>
                ) : null}
            </Flex>
        </Box>
    )
}
