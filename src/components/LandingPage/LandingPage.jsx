import React from 'react'
import { Link } from 'react-router-dom'
import { BsLinkedin, BsGithub } from 'react-icons/bs'
import {
    Box,
    Button,
    Flex,
    Spacer,
    Tooltip,
} from '@chakra-ui/react'
import AnimatedComponents from './AnimatedComponents'
import { InfoIcon } from '@chakra-ui/icons'

function LandingPage() {
    return (
        <>
            <Flex direction='column' textAlign='left' height='fit-content' width={{ base: 'fit-content', md: '90vw' }} mx='auto' py={{ xxs: 'calc(50vh - 213px)', xs: 'calc(50vh - 209px)', sm: 'calc(50vh - 202px)', md: 'calc(50vh - 202px)', lg: 'calc(50vh - 202px)' }} paddingTop={{ base: '50px' }} paddingBottom={{ base: '50px' }} >
                <AnimatedComponents />
            </Flex >
            <Flex justifyContent={{ base: 'center', xxs: 'flex-end' }} width={{ base: '76vw', xxs: '90vw' }} mx={{ base: '12vw', xxs: '5vw' }} my='16px'>
                <Box textAlign='center'>
                    <Link to='/about'>
                        <Button size='sm' color="black" bg='#a6a6a6' _hover={{ bg: '#d9d9d9' }}  >
                            More about me.
                        </Button>
                    </Link>
                </Box>
                <Spacer display={{ base: 'none', xxs: 'inline-block' }} />
                <Box px={5} display={{ base: 'none', xxs: 'inline-block' }}>
                    <Tooltip label='This portfolio was develope with ReactJs, using Chakra UI for styling components and transitions.' hasArrow arrowSize={15} placement='left-start'>
                        <InfoIcon fontSize={30} color='#a6a6a6' _hover={{ cursor: 'pointer' }} />
                    </Tooltip>
                </Box>
                <Box px={1} display={{ base: 'none', xxs: 'inline-block' }}>
                    <a href='https://www.linkedin.com/in/gonzalosoria-fullstack/' rel="noopener noreferrer" target='_blank'  >
                        <BsLinkedin fontSize={30} color='#a6a6a6' />
                    </a>
                </Box>
                <Box px={5} display={{ base: 'none', xxs: 'inline-block' }}>
                    <a href='https://github.com/gonsoria' rel="noopener noreferrer" target='_blank'>
                        <BsGithub fontSize={30} color="#a6a6a6" />
                    </a>
                </Box>
            </Flex>
        </ >
    )
}


export default LandingPage
