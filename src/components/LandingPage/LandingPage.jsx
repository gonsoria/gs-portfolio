import { Box, Button, Heading, Text } from '@chakra-ui/react'
import React from 'react'

function LandingPage() {
    return (
        <div>
            <Box maxW='70vw' textAlign='left'>
                <Heading mb={2} size='xl' >Hello there, my name is</Heading>
                <Heading mb={4} size='4xl' >Gonzalo J. Soria</Heading>
                <Text fontSize='md' maxW='50vw' color='gray.200'>
                    I'm a fullstack web developer located in La Plata Bs As. Argentina, looking to collaborate on web development.
                </Text>
                <Button size='sm' colorScheme='yellow' mt='24px'>
                    More about me.
                </Button>
            </Box>
        </div >

    )
}

export default LandingPage
