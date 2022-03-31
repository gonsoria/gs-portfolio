import { AtSignIcon, InfoIcon } from '@chakra-ui/icons'
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
    DrawerFooter,
    Button,
    Spacer,
} from '@chakra-ui/react'
import React, { useEffect, useRef, useState } from 'react'
import { FaUserAlt } from 'react-icons/fa'
import emailjs from '@emailjs/browser'


function Contact() {

    const initialFormValues = {
        from_name: '',
        from_email: '',
        subject: '',
        message: ''
    }

    const { isOpen, onOpen, onClose } = useDisclosure()
    const { firstField } = useRef()
    const refForm = useRef()

    const [mailStatus, setMailStatus] = useState('')

    const [formValues, setFormValues] = useState(initialFormValues)

    const [buttonStatus, setButtonStatus] = useState(true)

    const handleOnChange = (e) => {
        setFormValues({
            ...formValues,
            [e.target.name]: e.target.value
        })
    }

    const handleButtonStatus = () => {
        if (formValues.from_name === '') {
            setButtonStatus(true)
            return
        }
        if (formValues.from_email === '') {
            setButtonStatus(true)
            return
        }
        if (formValues.subject === '') {
            setButtonStatus(true)
            return
        }
        if (formValues.message === '') {
            setButtonStatus(true)
            return
        } else {
            setButtonStatus(false)
        }
    }

    const sendEmail = (e) => {
        e.preventDefault()

        emailjs
            .sendForm(
                'service_bg9mcph',
                'template_3feujlw',
                refForm.current,
                'PgF7TRo4jQ9CD11ng'
            )
            .then(
                (response) => {
                    console.log(response)
                    setMailStatus('sent')
                    setFormValues(initialFormValues)
                },
                (error) => {
                    console.log(error)
                    setMailStatus('failed')
                })
    }

    useEffect(() => {
        handleButtonStatus()
    })



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
                size='md'
                closeOnOverlayClick={false}
                closeOnEsc={false}
            >
                <DrawerOverlay />
                <form ref={refForm} onSubmit={sendEmail}>
                    <DrawerContent>
                        <DrawerCloseButton py={3} outline='none' onClick={() => setMailStatus()} />
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
                                            name='from_name'
                                            value={formValues.from_name}
                                            onChange={handleOnChange}
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
                                            name='from_email'
                                            value={formValues.from_email}
                                            onChange={handleOnChange}
                                        />
                                    </InputGroup>
                                </Box>

                                <Box>
                                    <FormLabel >Subject</FormLabel>
                                    <InputGroup>
                                        <Input
                                            id='url'
                                            placeholder='Subject'
                                            name='subject'
                                            value={formValues.subject}
                                            onChange={handleOnChange}
                                        />
                                    </InputGroup>
                                </Box>

                                <Box>
                                    <FormLabel htmlFor='desc'>Message</FormLabel>
                                    <Textarea
                                        id='desc'
                                        placeholder='Type your message here...'
                                        minH='130px'
                                        name='message'
                                        value={formValues.message}
                                        onChange={handleOnChange}
                                    />
                                </Box>
                            </Stack>
                        </DrawerBody>
                        <DrawerFooter bg='#0d0d0d'>
                            {
                                mailStatus === 'sent' ? <Text fontSize='md' as='i' > <InfoIcon color='green' mr={2} />Message succesfully sent! Thank you.</Text> : mailStatus === 'failed' ? <Text fontSize='md' as='i' w='80%' > <InfoIcon color='red' mr={2} />Failed to send the message, please try again</Text> : null
                            }
                            <Spacer />
                            <Button
                                type='submit'
                                isDisabled={buttonStatus}
                            >Send</Button>
                        </DrawerFooter>
                    </DrawerContent>
                </form>
            </Drawer>
        </>
    )
}


export default Contact