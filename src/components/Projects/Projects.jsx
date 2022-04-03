import React, { useState } from 'react'
import {
    Box,
    Image,
    Badge,
    Flex,
    Heading,
    useDisclosure,
    Grid,
} from '@chakra-ui/react'
import ProjectModal from './ProjectModal'

//NOKLER
import nokler from '../../assets/img/nokler/nokler.JPG'
import detail from '../../assets/img/nokler/detail.JPG'
import models from '../../assets/img/nokler/models.JPG'
import gallery from '../../assets/img/nokler/gallery.JPG'
import prisma from '../../assets/img/nokler/prismascheme.JPG'
import route from '../../assets/img/nokler/sendmail.JPG'
import tablas from '../../assets/img/nokler/tablas.JPG'

//GAMERSPOT
import gamerspot from '../../assets/img/gamerspot/gamerspot.JPG'
import model from '../../assets/img/gamerspot/model.JPG'
import form from '../../assets/img/gamerspot/form.JPG'
import home from '../../assets/img/gamerspot/home.JPG'
import reducer from '../../assets/img/gamerspot/reducer.JPG'


//TODOLIST
import todolist from '../../assets/img/todolist/todoList.JPG'
import app from '../../assets/img/todolist/app.JPG'
import todo from '../../assets/img/todolist/todo.JPG'
import { Link } from 'react-router-dom'
import { ArrowLeftIcon } from '@chakra-ui/icons'



function Projects() {
    const projects = [
        {
            id: 1,
            title: 'Nøkler Games',
            tech: ['javascript', 'react', 'express', 'prisma'],
            imageUrl: nokler,
            imageAlt: 'Nokler Games',
            images: [nokler, gallery, detail, prisma, route, models, tablas],
            description: 'Nøkler its an online platform dedicated to the sale of digital keys for games. ',
            myWork: 'In this project i worked in the backend area designing  the ERD for the database and creating the relational models using Pisma ORM. Also worked with NodeJS and Express for the data management and the implementation of Nodemailer, Stripe and auth0 for checkouts, messages and user roles. I worked with 6 coworkers using SCRUM methodology.',
            tags: ['backend', 'prisma', 'nodejs', 'express', 'stripe', 'nodemailer', 'auth0', 'javascript', 'reactjs', 'redux', 'chakra ui'],
            color: 'purple',
            deployUrl: 'https://nokler-noklerhenry.vercel.app/',
            repositoryUrl: 'https://github.com/gonsoria/nokler-api'
        },
        {
            id: 2,
            title: 'Gamerspot',
            tech: ['javascript', 'react', 'express', 'sequelize'],
            imageUrl: gamerspot,
            imageAlt: 'Gamerspot',
            images: [gamerspot, home, form, model, reducer],
            description: 'Gamerspot is an application to find information about any games. Consumes data from an external API ',
            myWork: 'This was my first fullstack project, i made a single page application with Javascript. The back-end was developed in NodeJS using Express, PostgreSQL and Sequelize for database control, consuming data from an external API. The front-end was developed with React and using Redux for state management, styled using CSS without any additional framework or library. Characteristics: Searches, sorters and filters, controlled form for the creation of games.',
            tags: ['backend', 'frontend', 'javascript', 'reactjs', 'redux', 'css', 'nodejs', 'express', 'sequelize'],
            color: 'yellow',
            deployUrl: '',
            repositoryUrl: 'https://github.com/gonsoria/videogames-pi'
        },
        {
            id: 3,
            title: 'Todo List',
            tech: ['javascript', 'react'],
            imageUrl: todolist,
            imageAlt: 'Todo List',
            images: [todolist, app, todo],
            description: 'Simple front-end application to create tasks. Developed with react',
            myWork: 'This is my first app created with React and CSS. I will be working on making this app better with more functionalities. All states are managed with react, responsive design with css, icons from fontawesome and some fonts froom google fonts.',
            tags: ['frontend', 'javascript', 'reactjs', 'css'],
            color: 'blue',
            deployUrl: 'https://todo-list-app-knu18tvkf-gonsoria.vercel.app/',
            repositoryUrl: 'https://github.com/gonsoria/todo-list-app'
        },
    ]

    const [idController, setIdController] = useState(null)

    const { isOpen, onOpen, onClose } = useDisclosure()
    const handleClick = (id) => {
        setIdController(id)
        onOpen()
    }

    return (
        <>
            <Flex px={6} py={3} position='relative' justifyContent='flex-start' >
                <Grid templateColumns='repeat(8, 1fr)' gap={6} textAlign='center' >
                    <Link to='/'>
                        <ArrowLeftIcon />
                    </Link>
                </Grid>
            </Flex >

            <Box textAlign='center' height='max-content' width={{ base: 'fit-content', xs: '90vw' }} mx='auto' py='auto' my={5}>
                <Heading >
                    Projects
                </Heading>
            </Box>
            <Flex textAlign='left' height='max-content' width={{ base: 'fit-content', xs: '90vw' }} mx='auto' justifyContent='space-around' paddingTop={{ base: '20px' }} paddingBottom={{ base: '20px' }} wrap='wrap' >
                {
                    projects.map(
                        (project) => (
                            <Box w={{ base: '80vw', xs: '350px' }} mb={5} borderWidth='1px' borderRadius='lg' overflow='hidden' key={project.id} display='inline-block' height='400px' position='relative' bg='#0d0d0d' border='none'

                                _hover={{
                                    cursor: 'pointer',
                                    border: '1px solid #595959'
                                }}
                                onClick={() => handleClick(project.id)}>
                                <Image
                                    roundedTop={10}
                                    src={project.imageUrl}
                                    alt={project.imageAlt}
                                    h='50%'
                                    objectFit='fill'
                                    mx='auto'
                                />

                                <Box px='6' h='40%' >
                                    <Box mx='auto' my={3} w='95%' fontSize='xl' textTransform='uppercase' >
                                        {project.title}
                                    </Box>
                                    <Box display='flex' alignItems='baseline' width='95%' mx='auto'>
                                        <Badge borderRadius='full' px='2' colorScheme='gray'>
                                            Tech
                                        </Badge>
                                        <Box
                                            color='#8c8c8c'
                                            fontWeight='semibold'
                                            letterSpacing='wide'
                                            fontSize='xs'
                                            textTransform='uppercase'
                                            ml='2'
                                        >
                                            {project.tech.map(t => `${t} `)}
                                        </Box>
                                    </Box>

                                    <Box
                                        my='3'
                                        mx='auto'
                                        fontWeight='normal'
                                        as='h4'
                                        lineHeight='tight'
                                        width='95%'
                                    >
                                        {project.description}
                                    </Box>
                                </Box>
                            </Box>
                        )
                    )
                }
            </Flex >
            <ProjectModal
                isOpen={isOpen}
                onOpen={handleClick}
                onClose={onClose}
                projects={projects}
                idController={idController}
                image={projects[0].images[0]}
            />
        </>
    )

}

export default Projects