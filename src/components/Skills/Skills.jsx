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
import { useTranslation } from 'react-i18next';


function Skills() {
    const { t } = useTranslation()
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
                }}>{t('skills.navTitle')}
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
                    >{t('skills.title')}
                        <Button h='30px' mb='7.5px' ml='15px' bg='#262626'
                            _hover={{
                                bg: "#f2f2f2", color: '#0d0d0d',
                            }} onClick={handleSkills}> {
                                skillsRender === 'icon' ? `${t('skills.btn-list')}` : `${t('skills.btn-icons')}`
                            } </Button>
                    </DrawerHeader>
                    {
                        skillsRender === 'icon' ?
                            <DrawerBody bg='#0d0d0d' >
                                <Text fontSize='lg' decoration='underline'> {t('skills.programmingLanguages')}</Text>
                                <Box pb={10} pt={2}>
                                    <Image
                                        height='30px'
                                        objectFit='cover'
                                        src={js}
                                        alt='JAVASCRIPT'
                                        pr={2.5}
                                        display='inline-block'
                                        title='JavaScript'
                                        filter='grayscale(20%)'
                                        _hover={{ filter: 'grayscale(0)' }}
                                    />
                                    <Image
                                        height='30px'
                                        objectFit='cover'
                                        src={ts}
                                        alt='TYPESCRIPT'
                                        display='inline-block'
                                        px={2.5}
                                        title='TypeScrip'
                                        filter='grayscale(20%)'
                                        _hover={{ filter: 'grayscale(0)' }}

                                    />
                                </Box>

                                <Text fontSize='lg' decoration='underline'>{t('skills.backend')}</Text>
                                <Box pb={10} pt={1}>
                                    <Image
                                        height='30px'
                                        objectFit='cover'
                                        src={nodejs}
                                        alt='NODEJS'
                                        display='inline-block'
                                        pb={2}
                                        pr={2.5}
                                        title='Node.js'
                                        filter='grayscale(20%)'
                                        _hover={{ filter: 'grayscale(0)' }}

                                    />
                                    <Image
                                        height='30px'
                                        objectFit='cover'
                                        src={expressIcon}
                                        display='inline-block'
                                        alt='EXPRESS'
                                        px={2.5}
                                        title='Express'
                                        filter='grayscale(20%)'
                                        _hover={{ filter: 'grayscale(0)' }}

                                    />
                                </Box>

                                <Text fontSize='lg' decoration='underline'>{t('skills.dataBase')}</Text>
                                <Box pb={10} pt={1}>
                                    <Image
                                        height='35px'
                                        objectFit='cover'
                                        src={psql}
                                        alt='POSTGRESQL'
                                        display='inline-block'
                                        pr={2.5}
                                        title='PostgreSQL'
                                        filter='grayscale(20%)'
                                        _hover={{ filter: 'grayscale(0)' }}

                                    />
                                    <Image
                                        height='35px'
                                        objectFit='contain'
                                        src={sequelize}
                                        alt='SEQUELIZE'
                                        display='inline-block'
                                        px={2.5}
                                        title='Sequelize'
                                        filter='grayscale(20%)'
                                        _hover={{ filter: 'grayscale(0)' }}

                                    />
                                    <Image
                                        height='35px'
                                        objectFit='cover'
                                        src={prisma}
                                        alt='PRISMA'
                                        display='inline-block'
                                        pl={2}
                                        pt={{ base: '1', xxs: '0' }}
                                        title='Prisma'
                                        filter='grayscale(20%)'
                                        _hover={{ filter: 'grayscale(0)' }}

                                    />
                                </Box>

                                <Text fontSize='lg' decoration='underline'> {t('skills.frontend')}</Text>
                                <Box pb={10} pt={1}>
                                    <Image
                                        height='40px'
                                        objectFit='cover'
                                        src={css}
                                        alt='CSS3'
                                        display='inline-block'
                                        pr={2.5}
                                        title='CSS'
                                        filter='grayscale(20%)'
                                        _hover={{ filter: 'grayscale(0)' }}

                                    />
                                    <Image
                                        height='40px'
                                        objectFit='cover'
                                        src={htmlIcon}
                                        alt='HTML5'
                                        display='inline-block'
                                        px={2.5}
                                        title='HTML'
                                        filter='grayscale(20%)'
                                        _hover={{ filter: 'grayscale(0)' }}

                                    />
                                    <Image
                                        height='40px'
                                        objectFit='cover'
                                        src={reactIcon}
                                        alt='REACT'
                                        display='inline-block'
                                        px={2.5}
                                        title='React JS'
                                        filter='grayscale(20%)'
                                        _hover={{ filter: 'grayscale(0)' }}

                                    />
                                    <Image
                                        height='52px'
                                        objectFit='cover'
                                        src={reduxIcon}
                                        alt='REDUX'
                                        display='inline-block'
                                        px={2.5}
                                        pt={2}
                                        title='Redux JS'
                                        filter='grayscale(20%)'
                                        _hover={{ filter: 'grayscale(0)' }}

                                    />

                                    <Image
                                        height='35px'
                                        objectFit='cover'
                                        src={chakra}
                                        alt='CHAKRA'
                                        display='inline-block'
                                        mx={2.5}
                                        title='Chakra UI'
                                        filter='grayscale(20%)'
                                        _hover={{ filter: 'grayscale(0)' }}


                                    />
                                    <Image
                                        height='40px'
                                        objectFit='cover'
                                        src={botstrap}
                                        alt='BOOTSTRAP'
                                        display='inline-block'
                                        ml={2.5}
                                        mt={2}
                                        title='Bootstrap'
                                        filter='grayscale(20%)'
                                        _hover={{ filter: 'grayscale(0)' }}

                                    />
                                </Box>

                                <Text fontSize='lg' decoration='underline'>{t('skills.tools')}</Text>
                                <Box alignItems='center' pt={1}>
                                    <Image
                                        height='30px'
                                        objectFit='cover'
                                        src={git}
                                        alt='GIT'
                                        display='inline-block'
                                        pr={2.5}
                                        pt={1}
                                        title='Git'
                                        filter='grayscale(20%)'
                                        _hover={{ filter: 'grayscale(0)' }}


                                    />
                                    <Image
                                        height='25px'
                                        objectFit='cover'
                                        src={github}
                                        alt='GITHUB'
                                        display='inline-block'
                                        px={2.5}
                                        pb={1}
                                        title='GitHub'
                                        filter='grayscale(20%)'
                                        _hover={{ filter: 'grayscale(0)' }}

                                    />
                                    <Image
                                        height='35px'
                                        objectFit='cover'
                                        src={slack}
                                        alt='SLACK'
                                        display='inline-block'
                                        px={2.5}
                                        pt={1}
                                        title='Slack'
                                        filter='grayscale(20%)'
                                        _hover={{ filter: 'grayscale(0)' }}

                                    />
                                    <Image
                                        height='35px'
                                        objectFit='cover'
                                        src={notion}
                                        alt='NOTION'
                                        display='inline-block'
                                        px={2.5}
                                        pt={1}
                                        title='Notion'
                                        filter='grayscale(20%)'
                                        _hover={{ filter: 'grayscale(0)' }}

                                    />
                                    <Image
                                        height='25px'
                                        objectFit='cover'
                                        src={npm}
                                        alt='NPM'
                                        display='inline-block'
                                        px={2.5}
                                        pt={1}
                                        title='npm'
                                        filter='grayscale(20%)'
                                        _hover={{ filter: 'grayscale(0)' }}

                                    />
                                </Box>
                            </DrawerBody >
                            :
                            <DrawerBody bg='#0d0d0d' >
                                <UnorderedList m={0}>
                                    <Text fontSize='lg' py={1} decoration='underline'>{t('skills.programmingLanguages')}</Text>
                                    <Box pb={10} pt={1}>
                                        <ListItem mx={6}>JavaScript</ListItem>
                                        <ListItem mx={6}>TypeScript</ListItem>
                                    </Box>
                                    <Text fontSize='lg' decoration='underline'>{t('skills.backend')}</Text>
                                    <Box pb={10} pt={1}>
                                        <ListItem mx={6}>Node.js</ListItem>
                                        <ListItem mx={6}>Express</ListItem>
                                    </Box>
                                    <Text fontSize='lg' decoration='underline'>{t('skills.dataBase')}</Text>
                                    <Box pb={10} pt={1}>
                                        <ListItem mx={6}>PostgreSQL</ListItem>
                                        <ListItem mx={6}>Sequelize</ListItem>
                                        <ListItem mx={6}>Prisma</ListItem>
                                    </Box>
                                    <Text fontSize='lg' decoration='underline' >{t('skills.frontend')}</Text>
                                    <Box pb={10} pt={1}>
                                        <SimpleGrid columns={{ base: 2, xxs: 3 }}>
                                            <ListItem mx={6}>HTML5</ListItem>
                                            <ListItem mx={6}>CSS3</ListItem>
                                            <ListItem mx={6}>ReactJs</ListItem>
                                            <ListItem mx={6}>ReduxJs</ListItem>
                                            <ListItem mx={6}>Chakra UI</ListItem>
                                            <ListItem mx={6}>Bootstrap</ListItem>
                                        </SimpleGrid>
                                    </Box>
                                    <Text fontSize='lg' decoration='underline'>{t('skills.tools')}</Text>
                                    <Box pb={10} pt={1}>
                                        <SimpleGrid columns={{ base: 2, xxs: 3 }} spacing={1}>
                                            <ListItem mx={6}>Git</ListItem>
                                            <ListItem mx={6}>GitHub</ListItem>
                                            <ListItem mx={6}>NPM</ListItem>
                                            <ListItem mx={6}>Slack</ListItem>
                                            <ListItem mx={6}>Notion</ListItem>
                                        </SimpleGrid>
                                    </Box>
                                </UnorderedList>

                            </DrawerBody>

                    }

                </DrawerContent>
            </Drawer>
        </>
    )
}

export default Skills