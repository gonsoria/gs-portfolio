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
    Button,
    UnorderedList,
    ListItem,
    SimpleGrid,
} from '@chakra-ui/react'
import React, { useState } from 'react'
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
import chakra from '../../assets/frontend/chakra.png'
import botstrap from '../../assets/frontend/bootstrap.png'
import npm from '../../assets/tools/npm.png'

function Skills() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()

    const [skillsRender, setSkillsRender] = useState('icon')

    const handleSkills = (e) => {
        if (skillsRender === 'icon') {
            setSkillsRender('list')
        } else if (skillsRender === 'list') {
            setSkillsRender('icon')
        }
    }

    return (
        <>
            <Text
                fontSize={{ base: '3xl', xs: 'lg' }}
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
                size='md'
                closeOnOverlayClick={false}
                closeOnEsc={false}
                autoFocus={false}

            >
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerCloseButton fontSize='xl'
                        py={3} outline='none' _hover={{
                            bg: "#f2f2f2", color: '#0d0d0d',
                        }} />
                    <DrawerHeader fontSize='30px' pb={0} py={1} bg='#0d0d0d'
                    >TECH SKILLS
                        <Button h='30px' mb='7.5px' ml='15px' bg='#262626'
                            _hover={{
                                bg: "#f2f2f2", color: '#0d0d0d',
                            }} onClick={handleSkills}> {
                                skillsRender === 'icon' ? 'List' : 'Icons'
                            } </Button>
                    </DrawerHeader>
                    {
                        skillsRender === 'icon' ?
                            <DrawerBody bg='#0d0d0d'
                            >
                                <Text fontSize='lg' py={1} decoration='underline'> Programming Lenguage</Text>
                                <Image
                                    height='35px'
                                    objectFit='cover'
                                    src={js}
                                    alt='JAVASCRIPT'
                                    display='inline-block'
                                    title='JavaScript'
                                />
                                <Image
                                    height='35px'
                                    objectFit='cover'
                                    src={ts}
                                    alt='TYPESCRIPT'
                                    display='inline-block'
                                    px={5}
                                    title='TypeScrip'
                                />


                                <Text fontSize='lg' pt={4} pb={1} decoration='underline'> Back End Stack</Text>
                                <Image
                                    height='35px'
                                    objectFit='cover'
                                    src={nodejs}
                                    alt='NODEJS'
                                    display='inline-block'
                                    pb={2}
                                    title='Node.js'
                                />
                                <Image
                                    height='35px'
                                    objectFit='cover'
                                    src={expressIcon}
                                    display='inline-block'
                                    alt='EXPRESS'
                                    px={5}
                                    title='Express'
                                />

                                <Text fontSize='lg' pt={4} pb={1} decoration='underline'> Data Base | ORM</Text>
                                <Image
                                    height='40px'
                                    objectFit='cover'
                                    src={psql}
                                    alt='POSTGRESQL'
                                    display='inline-block'
                                    pr={2.5}
                                    title='PostgreSQL'
                                />
                                <Image
                                    height='40px'
                                    objectFit='contain'
                                    src={sequelize}
                                    alt='SEQUELIZE'
                                    display='inline-block'
                                    px={2.5}
                                    title='Sequelize'
                                />
                                <Image
                                    height='40px'
                                    objectFit='cover'
                                    src={prisma}
                                    alt='PRISMA'
                                    display='inline-block'
                                    pl={2}
                                    pt={{ base: '1', xxs: '0' }}
                                    title='Prisma'
                                />
                                <Text fontSize='lg' pt={4} pb={1} decoration='underline'> Front End Stack</Text>
                                <Image
                                    height='45px'
                                    objectFit='cover'
                                    src={css}
                                    alt='CSS3'
                                    display='inline-block'
                                    pr={2.5}
                                    title='CSS'
                                />
                                <Image
                                    height='45px'
                                    objectFit='cover'
                                    src={htmlIcon}
                                    alt='HTML5'
                                    display='inline-block'
                                    px={2.5}
                                    title='HTML'
                                />
                                <Image
                                    height='45px'
                                    objectFit='cover'
                                    src={reactIcon}
                                    alt='REACT'
                                    display='inline-block'
                                    px={2.5}
                                    title='React JS'
                                />
                                <Image
                                    height='57px'
                                    objectFit='cover'
                                    src={reduxIcon}
                                    alt='REDUX'
                                    display='inline-block'
                                    px={2.5}
                                    pt={2}
                                    title='Redux JS'
                                />
                                <br />

                                <Image
                                    height='40px'
                                    objectFit='cover'
                                    src={chakra}
                                    alt='CHAKRA'
                                    display='inline-block'
                                    mr={2.5}
                                    title='Chakra UI'

                                />
                                <Image
                                    height='45px'
                                    objectFit='cover'
                                    src={botstrap}
                                    alt='BOOTSTRAP'
                                    display='inline-block'
                                    ml={2.5}
                                    mt={2}
                                    title='Bootstrap'
                                />


                                <Text fontSize='lg' pt={4} pb={1} decoration='underline'>Revision Control | Management | Tools</Text>
                                <Box alignItems='center'>
                                    <Image
                                        height='35px'
                                        objectFit='cover'
                                        src={git}
                                        alt='GIT'
                                        display='inline-block'
                                        pr={2.5}
                                        pt={1}
                                        title='Git'

                                    />
                                    <Image
                                        height='30px'
                                        objectFit='cover'
                                        src={github}
                                        alt='GITHUB'
                                        display='inline-block'
                                        px={2.5}
                                        pb={1}
                                        title='GitHub'
                                    />
                                    <Image
                                        height='40px'
                                        objectFit='cover'
                                        src={slack}
                                        alt='SLACK'
                                        display='inline-block'
                                        px={2.5}
                                        pt={1}
                                        title='Slack'
                                    />
                                    <Image
                                        height='40px'
                                        objectFit='cover'
                                        src={notion}
                                        alt='NOTION'
                                        display='inline-block'
                                        px={2.5}
                                        pt={1}
                                        title='Notion'
                                    />
                                    <Image
                                        height='30px'
                                        objectFit='cover'
                                        src={npm}
                                        alt='NPM'
                                        display='inline-block'

                                        pt={1}
                                        title='npm'
                                    />
                                </Box>
                            </DrawerBody >
                            :
                            <DrawerBody bg='#0d0d0d' >
                                <UnorderedList m={0}>
                                    <Text fontSize='lg' py={1} decoration='underline'>Programming Lenguage</Text>
                                    <ListItem mx={6}>JavaScript</ListItem>
                                    <ListItem mx={6}>TypeScript</ListItem>
                                    <Text fontSize='lg' pt={4} pb={1} decoration='underline'>Back End Stack</Text>
                                    <ListItem mx={6}>Node.js</ListItem>
                                    <ListItem mx={6}>Express</ListItem>
                                    <Text fontSize='lg' pt={4} pb={1} decoration='underline'>Data Base | ORM</Text>
                                    <ListItem mx={6}>PostgreSQL</ListItem>
                                    <ListItem mx={6}>Sequelize</ListItem>
                                    <ListItem mx={6}>Prisma</ListItem>
                                    <Text fontSize='lg' pt={4} pb={1} decoration='underline' >Front End Stack</Text>
                                    <SimpleGrid columns={{ base: 2, xxs: 3 }}>
                                        <ListItem mx={6}>HTML5</ListItem>
                                        <ListItem mx={6}>CSS3</ListItem>
                                        <ListItem mx={6}>ReactJs</ListItem>
                                        <ListItem mx={6}>ReduxJs</ListItem>
                                        <ListItem mx={6}>Chakra UI</ListItem>
                                        <ListItem mx={6}>Bootstrap</ListItem>
                                    </SimpleGrid>
                                    <Text fontSize='lg' pt={4} pb={1} decoration='underline'>Revision Control | Management | Tools</Text>
                                    <SimpleGrid columns={{ base: 2, xxs: 3 }} spacing={1}>
                                        <ListItem mx={6}>Git</ListItem>
                                        <ListItem mx={6}>GitHub</ListItem>
                                        <ListItem mx={6}>NPM</ListItem>
                                        <ListItem mx={6}>Slack</ListItem>
                                        <ListItem mx={6}>Notion</ListItem>
                                    </SimpleGrid>

                                </UnorderedList>

                            </DrawerBody>

                    }

                </DrawerContent>
            </Drawer>
        </>
    )
}

export default Skills