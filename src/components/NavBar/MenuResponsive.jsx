import React, { useState } from 'react'
import { HamburgerIcon } from '@chakra-ui/icons'
import {
    Button,
    Drawer,
    DrawerBody,
    DrawerCloseButton,
    DrawerContent,
    Heading,
    VStack,
    useDisclosure,
} from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import Skills from '../Skills/Skills'
import Contact from '../Contact/Contact'
import { useTranslation } from 'react-i18next';


function MenuResponsive() {
    const { t, i18n } = useTranslation()
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()

    const stdColor = {
        color: "#f2f2f2",
        bg: "#0d0d0d"
    }

    const [enColor, setEnColor] = useState(stdColor.color)
    const [enBgColor, setEnBgColor] = useState(stdColor.bg)
    const [esColor, setEsColor] = useState(stdColor.color)
    const [esBgColor, setEsBgColor] = useState(stdColor.bg)

    const handleSelect = (e) => {
        if (e.target.value === 'es') {
            i18n.changeLanguage('es')
            setEnColor(stdColor.color)
            setEnBgColor(stdColor.bg)
            setEsColor(stdColor.bg)
            setEsBgColor(stdColor.color)
        } else {
            i18n.changeLanguage('en')
            setEnColor(stdColor.bg)
            setEnBgColor(stdColor.color)
            setEsColor(stdColor.color)
            setEsBgColor(stdColor.bg)
        }
    }

    return (
        <>
            <Button
                icon='none'
                display={{ xs: 'none' }}
                w='fit-content'
                h='fit-content'
                mt={15}
                onClick={handleSelect}
                variant='unstyled'
                defaultValue='def'
                bg={enBgColor}
                color={enColor}
                fontSize='lg'
                _hover={{
                    cursor: 'pointer'
                }}
                _focus={{ outline: 'none' }}
                value='en'
            >
                EN
            </Button>
            <Button
                icon='none'
                display={{ xs: 'none' }}
                w='fit-content'
                h='fit-content'
                mt={15}
                mr='auto'
                onClick={handleSelect}
                variant='unstyled'
                defaultValue='def'
                bg={esBgColor}
                color={esColor}
                fontSize='lg'
                _hover={{
                    color: '#a6a6a6',
                    cursor: 'pointer'
                }}
                _focus={{ outline: 'none' }}
                value='es'
            >
                ES
            </Button>

            <Button
                outline='none'
                bg='none'
                color="#f2f2f2"
                fontSize='4xl'
                display={{ xs: 'none' }}
                ref={btnRef}
                onClick={onOpen}
                isActive={false}
                _focus={false}
            >
                <HamburgerIcon />

            </Button>
            <Drawer
                isOpen={isOpen}
                placement='top'
                onClose={onClose}
                size='full'
                autoFocus={false}
                finalFocusRef={false}            >
                <DrawerContent
                    bg='#0d0d0d'
                    color='#f2f2f2'
                >
                    <DrawerCloseButton
                        fontSize='xl'
                        display='flex'
                        width='100vw'
                        justifyContent='flex-end'
                        position='relative'
                    />
                    <DrawerBody pt={20}>
                        <VStack>
                            <Link to='/' onClick={onClose}>
                                <Heading py={3}>{t('responsiveMenu.home')}</Heading>
                            </Link>
                            <Link to='/about'>
                                <Heading py={3}>{t('responsiveMenu.about')}</Heading>
                            </Link>
                            <Link to='/projects'>
                                <Heading py={3}>{t('responsiveMenu.projects')}</Heading>
                            </Link>
                            <Heading py={2} ><Skills /></Heading>
                            <Heading > <Contact /> </Heading>

                        </VStack>

                    </DrawerBody>

                </DrawerContent>
            </Drawer>

        </>
    )
}

export default MenuResponsive