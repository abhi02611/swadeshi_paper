import { Flex, Text } from "@chakra-ui/react";

export default function({title}) {
    return (
        <Flex height={'279px'} width={'100%'} bgColor={'blackAlpha.700'} justify='center' align='center'>
            <Text
                width={'760px'}
                fontWeight={'400'}
                fontSize={'45px'}
                lineHeight={'63px'}
                color='white'
                textAlign={'center'}
            >{title}</Text>
        </Flex>
    )
}