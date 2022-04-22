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

//PORTFOLIO
import portfolio from '../../assets/img/portfolio/home.JPG'
import { useTranslation } from 'react-i18next'

//TASK-MANAGER
import folders from '../../assets/img/task-manager/folders.JPG'
import hometask from '../../assets/img/task-manager/home.JPG'
import register from '../../assets/img/task-manager/register.JPG'
import todolist2 from '../../assets/img/task-manager/todolist.JPG'


function Projects() {
    const { t, i18n } = useTranslation()
    const enProjects = [
        {
            id: 1,
            title: 'Todo List',
            tech: ['javascript', 'react'],
            imageUrl: todolist,
            imageAlt: 'Todo List',
            images: [todolist, app, todo],
            description: 'Simple FrontEnd application to create tasks. Developed with ReacJs',
            myWork: 'This is my first FrontEnd app. All states are managed with ReactJs, responsive design with CSS, icons from FontAwesome and some fonts from Google-Fonts.',
            tags: ['frontend', 'javascript', 'reactjs', 'css'],
            color: 'blue',
            deployUrl: 'https://todo-list-app-knu18tvkf-gonsoria.vercel.app/',
            repositoryUrl: 'https://github.com/gonsoria/todo-list-app'
        },
        {
            id: 2,
            title: 'Gamerspot',
            tech: ['javascript', 'react', 'express', 'sequelize'],
            imageUrl: gamerspot,
            imageAlt: 'Gamerspot',
            images: [gamerspot, home, form, model, reducer],
            description: 'Gamerspot is an application where you can find information about different video games. Consumes data from an external API ',
            myWork: 'This was my first FullStacj project, i made a single page application with JavaScript. The BackEnd was developed in NodeJS using Express, PostgreSQL and Sequelize for database control, consuming data from an external API. The FrontEnd was developed with ReactJs, using ReduxJs for state management, styled using CSS without any additional framework or library. Characteristics: Searches, sorters and filters, controlled form for the creation of video games.',
            tags: ['backend', 'frontend', 'javascript', 'reactjs', 'redux', 'css', 'nodejs', 'express', 'sequelize'],
            color: 'yellow',
            deployUrl: '',
            repositoryUrl: 'https://github.com/gonsoria/videogames-pi'
        },

        {
            id: 3,
            title: 'Nøkler Games',
            tech: ['javascript', 'react', 'express', 'prisma'],
            imageUrl: nokler,
            imageAlt: 'Nokler Games',
            images: [nokler, gallery, detail, prisma, route, models, tablas],
            description: 'Nøkler its an online platform dedicated to the sale of digital keys for games. ',
            myWork: 'In this project i worked in the BackEnd area designing  the ERD for the database and creating the relational models using Prisma ORM. For the data management, i used NodeJs with Express and the implementation of Nodemailer, Stripe and Auth0 for checkouts, messages and user roles. Nøkler team was composed of six developers, working together using SCRUM methodology.',
            tags: ['backend', 'prisma', 'nodejs', 'express', 'stripe', 'nodemailer', 'auth0', 'javascript', 'reactjs', 'redux', 'chakra ui', 'scrum'],
            color: 'purple',
            deployUrl: 'https://nokler-noklerhenry.vercel.app/',
            repositoryUrl: 'https://github.com/gonsoria/nokler-api'
        },
        {
            id: 4,
            title: 'Personal portfolio',
            tech: ['javascript', 'react'],
            imageUrl: portfolio,
            imageAlt: 'Todo List',
            images: [portfolio],
            description: 'Personal portfolio where you can find all my projects and information about me',
            myWork: 'This is my personal portfolio. Yes, this is the lastest version of it. All my projects, deploys and repositories will be posted here. You can contact me from the CONTACT section, ill be glad to answer you any question.',
            tags: ['frontend', 'javascript', 'reactjs', 'chakra ui', 'css', 'emailjs'],
            color: 'gray',
            deployUrl: 'https://gs-portfolio.vercel.app/',
            repositoryUrl: 'https://github.com/gonsoria/gs-portfolio'
        },
        {
            id: 5,
            title: 'Task Manager',
            tech: ['javascript', 'react', 'redux', 'nodejs', 'express', 'postgresql', 'prisma'],
            imageUrl: hometask,
            imageAlt: 'Task Manager',
            images: [hometask, register, folders, todolist2],
            description: 'Single Page Application that allows you to create to-do items and folders to group them ',
            myWork: 'A single page application that allows you to create tasks and manage them. Fullstack app, with backend develope with NodeJs, Express, PostgreSQL and Prisma. To-do items CRUD and user management. You can create an account, your password will be encrypted in the database.',
            tags: ['fullstack', 'javascript', 'reactjs', 'bootstrap', 'css', 'backend', 'nodejs', 'database'],
            color: 'black',
            deployUrl: 'https://todo-manager-app.vercel.app/',
            repositoryUrl: 'https://github.com/gonsoria/task-manager'
        }
    ]
    const esProjects = [
        {
            id: 1,
            title: 'Todo List',
            tech: ['javascript', 'react'],
            imageUrl: todolist,
            imageAlt: 'Todo List',
            images: [todolist, app, todo],
            description: 'Aplicación simple desarrollada en React para crear una lista de tareas.',
            myWork: 'Esta es mi primera aplicación, creada con ReactJs y usando CSS puro para estlilos, sin librerias externas. Tiene algunos iconos de "FontAwesome" y tipografias de "GoogleFonts" ',
            tags: ['frontend', 'javascript', 'reactjs', 'css'],
            color: 'blue',
            deployUrl: 'https://todo-list-app-knu18tvkf-gonsoria.vercel.app/',
            repositoryUrl: 'https://github.com/gonsoria/todo-list-app'
        },
        {
            id: 2,
            title: 'Gamerspot',
            tech: ['javascript', 'react', 'express', 'sequelize'],
            imageUrl: gamerspot,
            imageAlt: 'Gamerspot',
            images: [gamerspot, home, form, model, reducer],
            description: 'Aplicación web donde es posible encontrar informacion sobre video juegos. Consume datos de una API externa',
            myWork: 'Este fue mi primer proyecto Fullstack desarrollado con JavaScript. Se trata de una aplicacion en una sola pagina con funciones de busqueda, filtrado, ordenamientos y creacion de juegos con formulario controlado. El FrontEnd se desarrollo con ReactJs y ReduxJs para el manejo de estados, estilos con CSS puro. Para el BackEnd se utilizo NodeJs y Express. La base de datos se manejo con PostgreSQL usando Sequelize',
            tags: ['backend', 'frontend', 'javascript', 'reactjs', 'redux', 'css', 'nodejs', 'express', 'sequelize'],
            color: 'yellow',
            deployUrl: '',
            repositoryUrl: 'https://github.com/gonsoria/videogames-pi'
        },

        {
            id: 3,
            title: 'Nøkler Games',
            tech: ['javascript', 'react', 'express', 'prisma'],
            imageUrl: nokler,
            imageAlt: 'Nokler Games',
            images: [nokler, gallery, detail, prisma, route, models, tablas],
            description: 'Nøkler es un e-Commerce desarrollado para la venta de videojuegos, a través de llaves (KEY), para diversas plataformas y tiendas digitales. ',
            myWork: 'En este proyecto estuve a cargo del BackEnd, creando diagramas de entidad y modelos relacionales para la base de datos, se implemento Prisma como tecnologia principal. El manejo de datos y rutas se desarrolló con NodeJs y Express. Tambien implementé Nodemailer, Auth0 y Stripe para distintas funcionalidades, tanto para usuarios como para administrador. El trabajo fue un proyecto grupal en el que participaron otras seis personas mediante la metodologia Scrum.',
            tags: ['backend', 'prisma', 'nodejs', 'express', 'stripe', 'nodemailer', 'auth0', 'javascript', 'reactjs', 'redux', 'chakra ui'],
            color: 'purple',
            deployUrl: 'https://nokler-noklerhenry.vercel.app/',
            repositoryUrl: 'https://github.com/gonsoria/nokler-api'
        },
        {
            id: 4,
            title: 'Página personal',
            tech: ['javascript', 'react'],
            imageUrl: portfolio,
            imageAlt: 'Todo List',
            images: [portfolio],
            description: 'Página personal de presentación, acá podes encontrar los distintos proyectos que realicé.',
            myWork: 'En esta aplicacion web podrás encontrar informacion sobre mi, mis proyectos y habilidades. Asi es, estás viendo la ultima version actualizada!. Para contactarme podes hacerlo desde la sección de "Contacto" completando el formulario o buscando mi información personal en la misma seccion.',
            tags: ['frontend', 'javascript', 'reactjs', 'chakra ui', 'css', 'emailjs'],
            color: 'gray',
            deployUrl: 'https://gs-portfolio.vercel.app/',
            repositoryUrl: 'https://github.com/gonsoria/gs-portfolio'
        },
        {
            id: 5,
            title: 'Task Manager',
            tech: ['javascript', 'react', 'redux', 'nodejs', 'express', 'postgresql', 'prisma'],
            imageUrl: hometask,
            imageAlt: 'Task Manager',
            images: [hometask, register, folders, todolist2],
            description: 'Aplicacion simple que te permite crear tareas y carpetas para agruparlas',
            myWork: 'En esta aplicacion tenes la posibilidad de crear usuarios para administrar tareas personales y carpetas para agruparlas, las contraseñas son encriptadas en la base de datos para mayor seguridad. Se desarrollo el FrontEnd con ReacJS y Redux para el manejo de estados, se utilizo Boostrap para el estilo. El BackEnd se desarrollo con NodeJs, Express y la base de datos con PostgreSQL y Prisma.',
            tags: ['fullstack', 'javascript', 'reactjs', 'bootstrap', 'css', 'backend', 'nodejs', 'database'],
            color: 'black',
            deployUrl: 'https://todo-manager-app.vercel.app/',
            repositoryUrl: 'https://github.com/gonsoria/task-manager'
        }

    ]


    esProjects.sort((a, b) => {
        if (a.id < b.id) {
            return 1
        } else if (a.id > b.id) {
            return -1
        } else {
            return 0
        }
    })
    enProjects.sort((a, b) => {
        if (a.id < b.id) {
            return 1
        } else if (a.id > b.id) {
            return -1
        } else {
            return 0
        }
    })



    const [idController, setIdController] = useState(null)

    const { isOpen, onOpen, onClose } = useDisclosure()
    const handleClick = (id) => {
        setIdController(id)
        onOpen()
    }

    const projects = i18n.languages[0] === 'es' ? esProjects : enProjects
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
                    {t('projects.title')}
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
                                        align='justify'
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
                image={esProjects[0].images[0]}
            />
        </>
    )

}

export default Projects