import {
    Box,
    Heading,
    Text
} from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import styles from './TextAnimated.module.css'
import { useTranslation } from 'react-i18next';

function AnimatedComponents() {
    const { t } = useTranslation()

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
                    {t("animatedComponent.title")}
                </Heading>
                <Box fontSize={{ base: '40px', xxs: '50px', xs: '60px', sm: '80px', md: '90px', lg: '90px' }} fontWeight='extrabold' id='text' >
                    {t("animatedComponent.name")}
                </Box>
            </Box>

            <Box width={['271px', '339px', '339px', '407px', '542px', '610.84px']} align='justify' paddingTop={{ base: '20px', md: '0' }} display='inline-block' position='relative' bg='#0d0d0d'>
                <Text fontSize='md' >
                    {t("animatedComponent.description")}
                </Text>
            </Box>

        </Box>
    )
}

export default AnimatedComponents