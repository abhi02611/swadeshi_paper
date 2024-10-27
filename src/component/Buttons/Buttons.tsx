import { Box } from "@chakra-ui/react";

export default function({text}) {
    return(
        <Box
            as='button'
            height='64px'
            lineHeight='26px'
            border='1px'
            borderRadius='52px' 
            fontSize='18px'
            fontWeight='700'
            bg='#B12291'
            color='#fff'
            padding={'20px'}
        >
            {text}
        </Box>
    )
}