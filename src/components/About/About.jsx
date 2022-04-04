import { ArrowLeftIcon } from '@chakra-ui/icons'
import { Box, Flex, Grid, VStack, Image, Heading, Text, Badge, Button, GridItem, Divider } from '@chakra-ui/react'
import React from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import profilePic from '../../assets/img/profile.jpeg'
import pcb from '../../assets/img/pcb.JPG'
import efset from '../../assets/img/efset.png'

import js from '../../assets/svg/js.svg'
import react from '../../assets/svg/react.svg'
import node from '../../assets/svg/node.svg'
import postgres from '../../assets/svg/postgres.svg'
import express from '../../assets/svg/express.svg'
import vscode from '../../assets/svg/vscode.svg'
import git from '../../assets/svg/git.svg'
import github from '../../assets/svg/github.svg'
import css from '../../assets/svg/css.svg'
import html from '../../assets/svg/html.svg'
import npm from '../../assets/svg/npm.svg'
import bootstrap from '../../assets/svg/bootstrap.svg'


function About() {
    const { t } = useTranslation()
    const svgs = [js, react, node, express, postgres, html, css, bootstrap, vscode, git, github, npm]
    const softSkills = ['pensamiento analitico', 'scrum', 'adaptabilidad', 'autodidacta', 'aprendizaje rapido', 'Resolucion de problemas', 'pensamiento critico']
    const interests = ['programacion', 'electronica', 'leer', 'musica', 'futbol', 'perros', 'café', 'ciencia ficcion', 'cine de terror']


    return (
        <>
            <Flex px={6} py={3} position='relative' justifyContent='flex-start' >
                <Grid templateColumns='repeat(8, 1fr)' gap={6} textAlign='center' >
                    <Link to='/'>
                        <ArrowLeftIcon />
                    </Link>
                </Grid>
            </Flex >


            <Flex width='80vw' mx='10vw' bg='#0d0d0d' position='relative'>
                <VStack textAlign='justify' px='2.5vw' my={2} display={{ base: 'flex', md: 'none' }}>
                    <Box>
                        <Heading size='2xl' >
                            Sobre mi
                        </Heading>
                    </Box>

                    <Box>
                        <Text>
                            {t('about.ph-1')}
                        </Text>
                    </Box>
                    <Box py={3}>
                        <Image
                            src={profilePic}
                            alt='profile pic'
                        />
                    </Box>
                    <Box >
                        {t('about.ph-2')}
                    </Box>
                    <Box align='center' py={2}>
                        {
                            svgs.map((svg, i) => {
                                return (
                                    <Image
                                        key={i}
                                        src={svg}
                                        alt='profile pic'
                                        display='inline-block'
                                        px={1}
                                    />)
                            })
                        }
                    </Box>
                    <Box >
                        {t('about.ph-3')}
                    </Box>
                    <Box py={3}>
                        <Image
                            src={pcb}
                            alt='pcb-pic'
                        />
                    </Box>
                    <Box >
                        {t('about.ph-4')}
                    </Box>
                    <Divider />
                    <Box >
                        <Heading fontSize='2xl'>
                            Nivel de ingles
                        </Heading>
                    </Box>

                    <Grid templateRows='repeat(3,1fr)'>
                        <GridItem rowSpan={2}>
                            <Image
                                src={efset}
                                alt='efset certificate'
                            />
                        </GridItem>
                        <GridItem align='center'>
                            <a href='https://www.efset.org/cert/LBFPxS' target='_blank' rel='noopener noreferrer'>
                                <Button mt={3} size='sm' bg='#262626'
                                    _hover={{
                                        bg: '#f2f2f2', color: '#0d0d0d',
                                    }}>
                                    Ver certificado EF-SET
                                </Button>
                            </a>
                        </GridItem>
                    </Grid>
                    <Divider />
                    <Box >
                        <Heading fontSize='2xl'>
                            Habilidades blandas
                        </Heading>
                    </Box>
                    <Box align='center'>
                        {softSkills.map((ss, i) =>
                            <Badge key={i} borderRadius='full' colorScheme='green' mx={{ base: '2px' }} px={{ base: '8px' }}>
                                {ss}
                            </Badge>
                        )}
                    </Box>
                    <Divider />
                    <Box>
                        <Heading fontSize='2xl'>
                            Intereses
                        </Heading>
                    </Box>
                    <Box align='center'>
                        {interests.map((interests, i) =>
                            <Badge key={i} borderRadius='full' colorScheme='orange' mx={{ base: '2px' }} px={{ base: '8px' }}>
                                {interests}
                            </Badge>
                        )}
                    </Box>
                    <Divider />
                    <Box >
                        <a href='https://www.efset.org/cert/LBFPxS' target='_blank' rel='noopener noreferrer'>
                            <Button mt={3} mb={10} size='sm' bg='#262626'
                                _hover={{
                                    bg: '#f2f2f2', color: '#0d0d0d',
                                }}>
                                Ver CV
                            </Button>
                        </a>
                    </Box>


                </VStack>
            </Flex >

            <Grid width='80vw' mx='10vw' bg='#0d0d0d' position='relative' templateColumns='repeat(12,1fr)' display={{ base: 'none', md: 'grid' }}>

                <GridItem colSpan={12} rowSpan={1} align='center' pt={5} pb={10}>
                    <Heading size='2xl' >
                        Sobre mi
                    </Heading>
                </GridItem>

                <GridItem colSpan={8} rowSpan={1} align='justify' pr={8}>
                    <Text>
                        {t('about.ph-1')}
                    </Text>
                </GridItem>

                <GridItem colSpan={8} rowSpan={1} align='justify' pr={8} pb={5}>
                    {t('about.ph-2')}
                </GridItem>

                <GridItem colSpan={4} rowSpan={3} rowStart={2} colStart={9} pt={1} >
                    <Image
                        w='fit-content'
                        src={profilePic}
                        alt='profile pic'
                    />
                </GridItem>

                <GridItem align='center' colSpan={{ base: 12, md: 8 }} rowSpan={1} colStart={1} pr={8}>
                    {
                        svgs.map((svg, i) => {
                            return (
                                <Image
                                    filter='grayscale(30%)'
                                    _hover={{
                                        filter: 'grayscale(0%)'
                                    }}
                                    key={i}
                                    src={svg}
                                    alt='techs'
                                    display='inline-block'
                                    px={2}
                                    pt={1}
                                />)
                        })
                    }
                </GridItem>



                <GridItem colSpan={8} rowSpan={1} colStart={5} py={5} align='justify' pl={8}>
                    {t('about.ph-3')}
                </GridItem>

                <GridItem colSpan={8} rowSpan={1} colStart={5} align='justify' pl={8}>
                    {t('about.ph-4')}
                </GridItem>


                <GridItem colSpan={4} rowSpan={2} rowStart={5} py={7}>
                    <Image
                        h='300px'
                        w='350px'
                        objectFit='cover'
                        src={pcb}
                        filter='grayscale(30%)'
                        _hover={{
                            filter: 'grayscale(0%)'
                        }}
                        alt='pcb-pic'
                    />
                </GridItem>


                <GridItem colSpan={4} rowSpan={1} align='center' p={5}>
                    <Heading fontSize='2xl'>
                        Nivel de ingles
                    </Heading>
                </GridItem>

                <GridItem colSpan={4} rowSpan={1} align='center' p={5}>
                    <Heading fontSize='2xl'>
                        Habilidades blandas
                    </Heading>
                </GridItem>

                <GridItem colSpan={4} rowSpan={1} align='center' p={5}>
                    <Heading fontSize='2xl'>
                        Intereses
                    </Heading>
                </GridItem>

                <GridItem colSpan={4} rowSpan={3} px={5}>
                    <Grid templateRows='repeat(3,1fr)'>
                        <GridItem rowSpan={2}>
                            <Image
                                src={efset}
                                alt='efset certificate'
                            />
                        </GridItem>
                        <GridItem align='center'>
                            <a href='https://www.efset.org/cert/LBFPxS' target='_blank' rel='noopener noreferrer'>
                                <Button mt={3} size='sm' bg='#262626'
                                    _hover={{
                                        bg: '#f2f2f2', color: '#0d0d0d',
                                    }}>
                                    Ver certificado EF-SET
                                </Button>
                            </a>
                        </GridItem>
                    </Grid>

                </GridItem>






                <GridItem align='center' colSpan={4} rowSpan={3} px={5}>
                    {softSkills.map((ss, i) =>
                        <Badge key={i} borderRadius='full' colorScheme='green' mx={{ base: '2px' }} px={{ base: '8px' }}>
                            {ss}
                        </Badge>
                    )}
                </GridItem>


                <GridItem align='center' colSpan={4} rowSpan={3} px={5}>
                    {interests.map((interests, i) =>
                        <Badge key={i} borderRadius='full' colorScheme='orange' mx={{ base: '2px' }} px={{ base: '8px' }}>
                            {interests}
                        </Badge>
                    )}
                </GridItem>
                <GridItem colSpan={11} align='right' my={10}>
                    <Text fontSize='xl'>
                        Curriculum vitae
                    </Text>
                </GridItem>
                <GridItem colSpan={1} align='center' my={10}>
                    <a href='#' target='_blank' rel='noopener noreferrer'>
                        <Button size='sm' bg='#262626'
                            _hover={{
                                bg: '#f2f2f2', color: '#0d0d0d',
                            }}>
                            Ver CV
                        </Button>
                    </a>
                </GridItem>
            </Grid>


        </ >
    )
}

export default About