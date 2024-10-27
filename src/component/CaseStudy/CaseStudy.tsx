import { Box, Container, Heading, Text } from "@chakra-ui/react";
import CaseStudyImageSlider from "../CaseStudyImageSlider/CaseStudyImageSlider";
import MainHeading from "../MainHeading/MainHeading";

export default function() {
    return (
        <Container maxW={'100%'} as="section" mt='90px' padding={'0'}>
            <Heading as='h2' textAlign={'center'}>Our Case Study</Heading>
            <Text
                fontWeight={'400'}
                fontSize={'35px'}
                lineHeight={'32px'}
                textAlign='center'
                mt='10px'
            >Create Stunning Print For Your Business</Text>
            <MainHeading type='h6' size={'1xl'} title='' />
            <Box mt={'50px'}>
                <CaseStudyImageSlider/>
            </Box>
         
        </Container>
    )
}