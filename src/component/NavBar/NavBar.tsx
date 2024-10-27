'use client'

import {
    Box,
    Flex,
    HStack,
    Button,
    Image
} from '@chakra-ui/react'
import logo from '../../assets/images/pp.svg';



interface Props {
    children: React.ReactNode
}

const Links = ['HOME', 'OUR SERVICES', 'JOIN US', 'CONTACT US'];


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

    return (
        <>
            <Box bg={'white'} px="150px">
                <Flex h={16} alignItems={'center'} justifyContent={'space-between'} sx={{ 'height': '90px' }}>
                    <Box>
                        <Image src={logo} alt='Dan Abramov' />
                    </Box>
                    <HStack spacing={'40px'} alignItems={'center'}>
                        {Links.map((link) => (
                            <NavLink key={link}>{link}</NavLink>
                        ))}
                        <Box>
                            <Button
                                sx={{
                                    bgColor:'#B12291',
                                    color: '#fff',
                                    height: '34px',
                                    width: '95px'
                                }}
                             >LOG IN</Button>
                        </Box>
                        
                    </HStack>

                </Flex>
            </Box>
        </>
    )
}