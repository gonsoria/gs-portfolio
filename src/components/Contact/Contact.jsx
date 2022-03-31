import { AtSignIcon } from '@chakra-ui/icons'
import {
    Drawer,
    DrawerBody,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    Box,
    FormLabel,
    Input,
    Stack,
    Text,
    Textarea,
    useDisclosure,
    InputLeftAddon,
    InputGroup,
} from '@chakra-ui/react'
import React from 'react'
import { FaUserAlt } from 'react-icons/fa'


function Contact() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const firstField = React.useRef()

    return (
        <>
            <Text
                fontSize='lg'
                onClick={onOpen}
                py={1} _hover={{
                    color: '#a6a6a6',
                    cursor: 'pointer'
                }}>Contact
            </Text>
            <Drawer
                isOpen={isOpen}
                placement='right'
                initialFocusRef={firstField}
                onClose={onClose}
                size='sm'
            >
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerCloseButton py={3} outline='none' />
                    <DrawerHeader
                        fontSize='30px' pb={3} py={1} bg='#0d0d0d'>
                        CONTACT ME:
                    </DrawerHeader>

                    <DrawerBody bg='#0d0d0d'>
                        <Stack spacing='24px'>
                            <Box>
                                <FormLabel htmlFor='username'>Name</FormLabel>
                                <InputGroup>
                                    <InputLeftAddon> <FaUserAlt /> </InputLeftAddon>
                                    <Input
                                        ref={firstField}
                                        id='username'
                                        placeholder='Please enter your name'
                                    />
                                </InputGroup>
                            </Box>

                            <Box>
                                <FormLabel htmlFor='url'>Email</FormLabel>
                                <InputGroup>
                                    <InputLeftAddon><AtSignIcon /></InputLeftAddon>
                                    <Input
                                        type='email'
                                        id='email'
                                        placeholder='Please enter your email'
                                    />
                                </InputGroup>
                            </Box>

                            <Box>
                                <FormLabel htmlFor='url'>Subject</FormLabel>
                                <InputGroup>
                                    <Input
                                        type='url'
                                        id='url'
                                        placeholder='Subject'

                                    />
                                </InputGroup>
                            </Box>

                            <Box>
                                <FormLabel htmlFor='desc'>Message</FormLabel>
                                <Textarea
                                    height='200px'
                                    id='desc'
                                    placeholder='Type your message here...'
                                />
                            </Box>
                        </Stack>
                    </DrawerBody>

                </DrawerContent>
            </Drawer>
        </>
    )
}


export default Contact