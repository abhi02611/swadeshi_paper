import { Heading, Divider, Box } from "@chakra-ui/react";

export default function ({title, type, size}) {

    const dividerStyle = {
        width: '85px', 
        borderColor: '#B12291', 
        borderWidth: '3px', 
        marginTop: '20px'
    }


    return (
        <Box>
            <center>
                <Heading as={type} size={size}>{title}</Heading>
                <Divider sx={dividerStyle} opacity='1' />
            </center>
        </Box>
   
    )
}