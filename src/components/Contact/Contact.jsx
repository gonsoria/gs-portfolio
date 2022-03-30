import { Box, Button, Container, FormControl, FormLabel, GridItem, Heading, Input, SimpleGrid, Stack, Text, Textarea } from '@chakra-ui/react'
import React from 'react'
// import { BiUser } from 'react-icons/bi'
// import { AiOutlineMail } from 'react-icons/ai'
// import { MdSubject } from 'react-icons/md'


function Contact() {
    return (
        <Container maxW="90vw" p="5" mt="50px">
            <Box textAlign="left" margin='0 3%'>
                <Heading mb={2} size='2xl' >Contact me:</Heading>
            </Box>
            <Box mt={[10, 0]}>
                <SimpleGrid
                    display={{ base: "initial", md: "grid" }}
                    columns={{ md: 3 }}
                    spacing={{ md: 4 }}
                    margin='0 3%'
                >
                    <GridItem colSpan={{ md: 1 }}>
                        <Box textAlign="left">
                            <Text mt={2} fontSize='20px' lineHeight='28px' mb='20px'>
                                I'll be glad to answer your questions.
                            </Text>
                        </Box>
                    </GridItem>
                    <GridItem mt={[5, null, 0]} colSpan={{ md: 2 }}>
                        <Stack
                            px={4}
                            py={5}
                            p={[null, 6]}
                            spacing={6}
                        >
                            <SimpleGrid columns={6} spacing={6}>
                                <FormControl as={GridItem} colSpan={6} isRequired>
                                    <FormLabel fontSize="sm">
                                        Name
                                    </FormLabel>
                                    <Input
                                        type="text"
                                        bg='white'
                                        mt={1}
                                        focusBorderColor="#8c06f7"
                                        shadow="sm"
                                        w="full"
                                        rounded="md"
                                    />
                                </FormControl>

                                <FormControl as={GridItem} colSpan={6} isRequired>
                                    <FormLabel
                                        fontSize="sm"
                                    >
                                        Email address
                                    </FormLabel>
                                    <Input
                                        type="text"
                                        bg="white"
                                        mt={1}
                                        focusBorderColor="#8c06f7"
                                        shadow="sm"
                                        w="full"
                                        rounded="md"
                                    />
                                </FormControl>

                                <FormControl
                                    as={GridItem}
                                    id="email"
                                    mt={1}
                                    colSpan={6}
                                    isRequired
                                >
                                    <FormLabel
                                        fontSize="sm"
                                    >
                                        Your message
                                    </FormLabel>
                                    <Textarea
                                        bg='white'
                                        mt={1}
                                        rows={3}
                                        shadow="sm"
                                        focusBorderColor="#8c06f7"
                                        fontSize={{ sm: "sm" }}
                                    />
                                </FormControl>
                            </SimpleGrid>
                        </Stack>
                        <Box
                            px={{ base: 4, sm: 6 }}
                            py={1}
                            textAlign="right"
                        >
                            <Button type="submit" colorScheme='yellow'>
                                Send
                            </Button>
                        </Box>
                    </GridItem>
                </SimpleGrid>
            </Box>

            {/* <Box visibility={{ base: "hidden", sm: "visible" }} aria-hidden="true">
                <Box py={5}>
                    <Box
                        borderTop="solid 1px"
                    ></Box>
                </Box>
            </Box> */}
        </Container >
    )
}

export default Contact