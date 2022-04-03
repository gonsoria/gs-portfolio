import React from 'react'
import { Link } from 'react-router-dom'
import { BsLinkedin, BsGithub, BsInfoCircleFill } from 'react-icons/bs'
import {
    Box,
    Button,
    Flex,
    Popover,
    PopoverArrow,
    PopoverBody,
    PopoverContent,
    PopoverTrigger,
    Tooltip,
} from '@chakra-ui/react'
import AnimatedComponents from './AnimatedComponents'

function LandingPage() {
    return (
        <>
            <Flex direction='column' textAlign={{ base: 'center', md: 'left' }} height='fit-content' width={{ base: '76vw', xxs: '90vw' }} mx='auto' py={{ xxs: 'calc(50vh - 213px)', xs: 'calc(50vh - 209px)', sm: 'calc(50vh - 202px)', md: 'calc(50vh - 202px)', lg: 'calc(50vh - 202px)' }} paddingTop={{ base: '15px' }} paddingBottom={{ base: '20px' }} >
                <AnimatedComponents />
            </Flex >
            <Flex justifyContent={{ base: 'center', xxs: 'space-between' }} width={{ base: '76vw', xxs: '90vw' }} mx={{ base: '12vw', xxs: '5vw' }} my='10px' flexWrap={{ base: 'wrap', xs: 'wrap' }} alignContent='center'>
                <Box textAlign={{ base: 'center' }}>
                    <Link to='/about'>
                        <Button size='sm' color="black" bg='#a6a6a6' _hover={{ bg: '#d9d9d9' }}  >
                            More about me.
                        </Button>
                    </Link>
                </Box>
                <Box alignContent='center' mt={{ base: '30px', xxs: '0' }}>

                    <Box px={5} display={{ base: 'none', xxs: 'inline-block' }} >
                        <Tooltip label='This portfolio was developed with ReactJs, using Chakra UI for styling components and transitions.' hasArrow arrowSize={15} placement='left-start' bg='#bfbfbf' color='#0d0d0d'>
                            <Box >
                                <BsInfoCircleFill
                                    fontSize={30}
                                    color='#a6a6a6'
                                    _hover={{ cursor: 'pointer' }}
                                />
                            </Box>
                        </Tooltip>
                    </Box>

                    <Box px={5} display={{ base: 'inline-block', xxs: 'none' }} >
                        <Popover>
                            <PopoverTrigger>
                                <Box as='button' >
                                    <BsInfoCircleFill
                                        fontSize={30}
                                        color='#a6a6a6'
                                        _hover={{ cursor: 'pointer' }}
                                    />
                                </Box>
                            </PopoverTrigger>
                            <PopoverContent>
                                <PopoverArrow />
                                <PopoverBody bg='#bfbfbf' color='#0d0d0d'>
                                    This portfolio was developed with ReactJs, using Chakra UI for styling components and transitions.
                                </PopoverBody>
                            </PopoverContent>
                        </Popover>
                    </Box>

                    <Box px={1} display='inline-block'>
                        <a href='https://www.linkedin.com/in/gonzalosoria-fullstack/' rel="noopener noreferrer" target='_blank'  >
                            <BsLinkedin fontSize={30} color='#a6a6a6' />
                        </a>
                    </Box>
                    <Box px={5} display='inline-block' >
                        <a href='https://github.com/gonsoria' rel="noopener noreferrer" target='_blank'>
                            <BsGithub fontSize={30} color="#a6a6a6" />
                        </a>
                    </Box>
                </Box>
            </Flex>
        </ >
    )
}


export default LandingPage
