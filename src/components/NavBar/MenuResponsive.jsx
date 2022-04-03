import React from 'react'
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

function MenuResponsive() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()


    return (
        <>
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
                                <Heading py={3}>Home</Heading>
                            </Link>
                            <Link to='/about'>
                                <Heading py={3}>About me</Heading>
                            </Link>
                            <Link to='/projects'>
                                <Heading py={3}>Projects</Heading>
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