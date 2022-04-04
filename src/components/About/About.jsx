import { ArrowLeftIcon } from '@chakra-ui/icons'
import { Box, Flex, Grid, GridItem, Image } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'
import profilePic from '../../assets/img/profile.jpeg'
function About() {
    return (
        <div>
            <Flex px={6} py={3} position='relative' justifyContent='flex-start' >
                <Grid templateColumns='repeat(8, 1fr)' gap={6} textAlign='center' >
                    <Link to='/'>
                        <ArrowLeftIcon />
                    </Link>
                </Grid>
            </Flex >
            <Flex textAlign={{ base: 'center', md: 'left' }} width='80vw' mx='auto' bg='#0d0d0d' position='relative' >

                <Grid width='65%' templateRows='repeat(4, 1fr)' textAlign='justify' m={3} h='fit-content'>
                    <GridItem rowSpan={1} py={2}>
                        Soy un apasionado de la informatica, la conectividad y la electronica, disfruto mucho aprender nuevas tecnologias relacionadas a la programacion, la resolucion de problemas, la innovacion y la creacion de aplicaciones utiles.
                        Tengo experiencia en el desarrollo web fullstack con Javascript tanto en proyectos grupales como individuales.
                    </GridItem>
                    <GridItem rowSpan={1} py={2}>
                        Actualmente me encuentro estudiando Ingenieria Electronica en la universidad nacional de La Plata, area en la que trabaje estos ultimos años y donde participé en tareas relacionadas al ioT usando lenguaje C, principalmente con microcontroladores Arduino o Espressif (ESP32).
                        Estudié diseño de circuitos impresos (PCBs) en la Universidad Tecnologica Nacional (UTN FRRe) utilizando el software Altium Designer.
                    </GridItem>
                    <GridItem rowSpan={1} py={2}>
                        Desde hace seis años llevo a cabo mi propio emprendimiento, enfocado en tareas de diseño, desarrollo y armado de circuitos apuntados principalmente al audio y la fabricacion de equipamiento musical.
                        Tambien formo parte de un proyecto llamado Createch, que es un espacio en el que mediante cursos de robotica y programacion se busca enseñar a jovenes estudiantes el mundo de la tecnologia y el pensamiento logico.
                    </GridItem>
                    <GridItem rowSpan={1} py={2}>
                        Me considero una persona analitica, comprometida, responsable y con muchas ideas. Mi objetivo es poder insertarme en un ambiente laboral con un grupo de desarrollo del cual pueda aprender y donde pueda aportar mis habilidades adquiridas estos ultimos años. Me gustaria ganar experiencia principalmente en el area de backend o trabajar logica en tareas  de frontend.
                    </GridItem>
                </Grid>
                <Box w='35%'>
                    <Image
                        pt={5}
                        src={profilePic}
                        alt='profile pic'
                    />
                </Box>
            </Flex >

        </div >
    )
}

export default About