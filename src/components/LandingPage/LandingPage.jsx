import React from 'react'
import { Link } from 'react-router-dom'
// import { BsLinkedin, BsGithub, } from 'react-icons/bs'
import {
    Box,
    Button,
    Heading,
    Flex,
    Text,
    // Spacer,

} from '@chakra-ui/react'


function LandingPage() {
    return (
        <>
            <Flex direction='column' textAlign='left' height='calc(100vh - 111px)' width={{ base: 'fit-content', md: '80vw' }} mx='auto' paddingBottom={6} >
                <Box paddingTop={{ base: '50px', md: '103px' }}>
                    <Heading size='lg' fontFamily="heading" ><Text display='inline-block'>
                        Hello there,</Text>  my name is</Heading>
                </Box>
                <Box height='fit-content' width='fit-content'>
                    <Text fontSize={{ base: '40px', xxs: '50px', xs: '60px', sm: '80px', md: '90px', lg: '90px' }} fontWeight='extrabold' >Gonzalo Soria
                    </Text>
                </Box >
                <Box width={['271px', '339px', '339px', '407px', '542px', '610.84px']} align='justify' paddingTop={{ base: '20px', md: '0' }}>
                    <Text as='i' fontSize='md' >
                        I'm a Full Stack Web Developer based in La Plata, Bs As. Argentina. I have experience building web applications with Javascript / Reactjs / Nodejs and some others cool frameworks and libraries. I'm always learning about new things and looking forward to collaborate on development projects.
                    </Text>
                </Box>
                <Box paddingTop='25px'>
                    <Link to='/about'>
                        <Button size='sm' color="black" bg='#a6a6a6' _hover={{ bg: '#d9d9d9' }}  >
                            More about me.
                        </Button>
                    </Link>
                </Box>
            </Flex >
            {/* <Flex marginBottom={4} justifyContent='flex-end' width='90vw' marginLeft='10vw' >
                <Spacer />
                <Box px={1}>
                    <a href='https://www.linkedin.com/in/gonzalosoria-fullstack/' rel="noopener noreferrer" target='_blank'  >
                        <BsLinkedin fontSize={30} color='#a6a6a6' />
                    </a>
                </Box>
                <Box px={5}>
                    <a href='https://github.com/gonsoria' rel="noopener noreferrer" target='_blank'>
                        <BsGithub fontSize={30} color="#a6a6a6" />
                    </a>
                </Box>
            </Flex> */}
        </>
    )
}


export default LandingPage
