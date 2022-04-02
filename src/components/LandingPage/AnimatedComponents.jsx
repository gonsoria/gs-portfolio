import {
    Box,
    Heading,
    Text
} from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import styles from './TextAnimated.module.css'


function AnimatedComponents() {
    const [fadeState, setFadeState] = useState({
        fade: 'fadeIn'
    })

    const modifyState = () => {
        setTimeout(() => {
            setFadeState({
                fade: 'fadeOut'
            })
        }, 100)
    }

    useEffect(() => {
        modifyState()
    }, [])

    return (
        <Box className={`${fadeState.fade === 'fadeIn' ? styles.fadeOut : styles.fadeIn}`}>
            <Box>
                <Heading size='lg' fontFamily="heading" >
                    Hello there,  my name is
                </Heading>

                <Box fontSize={{ base: '40px', xxs: '50px', xs: '60px', sm: '80px', md: '90px', lg: '90px' }} fontWeight='extrabold' id='text' >
                    Gonzalo Soria
                </Box>

            </Box>
            <Box height='fit-content' width='fit-content'>

            </Box >

            <Box width={['271px', '339px', '339px', '407px', '542px', '610.84px']} align='justify' paddingTop={{ base: '20px', md: '0' }}>
                <Text as='i' fontSize='md' >
                    I'm a Full Stack Web Developer based in La Plata, Bs As. Argentina. I have experience building web applications with Javascript / Reactjs / Nodejs and some others cool frameworks and libraries. I'm always learning about new things and looking forward to collaborate on development projects.
                </Text>
            </Box>

        </Box>
    )
}

export default AnimatedComponents