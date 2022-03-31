import {
    Drawer,
    DrawerBody,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    useDisclosure,
    Text,
    Image,
    Box,
} from '@chakra-ui/react'
import React from 'react'
import css from '../../assets/frontend/css.png'
import htmlIcon from '../../assets/frontend/html.png'
import reactIcon from '../../assets/frontend/react.svg'
import reduxIcon from '../../assets/frontend/reduxIcon.png'
import js from '../../assets/frontend/javascript.svg'
import ts from '../../assets/frontend/typescript.svg'
import expressIcon from '../../assets/backend/express.png'
import nodejs from '../../assets/backend/node.png'
import prisma from '../../assets/backend/prisma.png'
import psql from '../../assets/backend/psql.png'
import sequelize from '../../assets/backend/sequelize.png'
import slack from '../../assets/tools/slack.svg'
import notion from '../../assets/tools/notion.png'
import git from '../../assets/tools/git.png'
import github from '../../assets/tools/github.png'


function Skills() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()

    return (
        <>
            <Text
                fontSize='lg'
                onClick={onOpen}
                py={1} _hover={{
                    color: '#a6a6a6',
                    cursor: 'pointer'
                }}>Skills
            </Text>
            <Drawer
                isOpen={isOpen}
                placement='right'
                onClose={onClose}
                finalFocusRef={btnRef}
                size='sm'
            >
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerCloseButton py={3} outline='none' />
                    <DrawerHeader fontSize='30px' pb={3} py={1} bg='#0d0d0d'
                    >TECH SKILLS</DrawerHeader>
                    <DrawerBody bg='#0d0d0d'
                    >
                        <Text fontSize='lg' pb={1}> Programming Lenguage</Text>
                        <Image
                            height='35px'
                            objectFit='cover'
                            src={js}
                            alt='JAVASCRIPT'
                            display='inline-block'
                        />
                        <Image
                            height='35px'
                            objectFit='cover'
                            src={ts}
                            alt='TYPESCRIPT'
                            display='inline-block'
                            px={5}
                        />


                        <Text fontSize='lg' pt={4} pb={1}> Back End Stack</Text>
                        <Image
                            height='35px'
                            objectFit='cover'
                            src={nodejs}
                            alt='NODEJS'
                            display='inline-block'
                            pb={2}
                        />
                        <Image
                            height='35px'
                            objectFit='cover'
                            src={expressIcon}
                            display='inline-block'
                            alt='EXPRESS'
                            px={5}
                        />

                        <Text fontSize='lg' pt={4} pb={1}> Data Base | ORM</Text>
                        <Image
                            height='40px'
                            objectFit='cover'
                            src={psql}
                            alt='POSTGRESQL'
                            display='inline-block'
                            pr={2.5}
                        />
                        <Image
                            height='40px'
                            objectFit='contain'
                            src={sequelize}
                            alt='SEQUELIZE'
                            display='inline-block'
                            px={2.5}
                        />
                        <Image
                            height='40px'
                            objectFit='cover'
                            src={prisma}
                            alt='PRISMA'
                            display='inline-block'
                            pl={2}
                            pt={{ base: '1', xxs: '0' }}
                        />
                        <Text fontSize='lg' pt={4} pb={1}> Front End Stack</Text>
                        <Image
                            height='45px'
                            objectFit='cover'
                            src={css}
                            alt='CSS3'
                            display='inline-block'
                            pr={2.5}
                        />
                        <Image
                            height='45px'
                            objectFit='cover'
                            src={htmlIcon}
                            alt='HTML5'
                            display='inline-block'
                            px={2.5}
                        />
                        <Image
                            height='45px'
                            objectFit='cover'
                            src={reactIcon}
                            alt='REACT'
                            display='inline-block'
                            px={2.5}
                        />
                        <Image
                            height='57px'
                            objectFit='cover'
                            src={reduxIcon}
                            alt='REDUX'
                            display='inline-block'
                            px={2.5}
                            pt={2}
                        />


                        <Text fontSize='lg' pt={4} pb={1}>Revision Control | Management</Text>
                        <Box alignItems='center'>
                            <Image
                                height='35px'
                                objectFit='cover'
                                src={git}
                                alt='GIT'
                                display='inline-block'
                                pr={2.5}
                                pt={1}

                            />
                            <Image
                                height='30px'
                                objectFit='cover'
                                src={github}
                                alt='GITHUB'
                                display='inline-block'
                                px={2.5}
                                pb={1}
                            />
                            <Image
                                height='40px'
                                objectFit='cover'
                                src={slack}
                                alt='SLACK'
                                display='inline-block'
                                px={2.5}
                                pt={1}
                            />
                            <Image
                                height='40px'
                                objectFit='cover'
                                src={notion}
                                alt='NOTION'
                                display='inline-block'
                                px={2.5}
                                pt={1}
                            />
                        </Box>
                    </DrawerBody>
                </DrawerContent>
            </Drawer>
        </>
    )
}

export default Skills