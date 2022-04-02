import React from 'react'
import {
    Box,
    Image,
    Badge,
    Flex,
    Heading
} from '@chakra-ui/react'
import nokler from '../../assets/img/nokler.JPG'
import gamerspot from '../../assets/img/gamerspot.JPG'
import todolist from '../../assets/img/todoList.JPG'



function Projects() {
    const projects = [
        {
            title: 'Nøkler Games',
            tech: ['javascript', 'react', 'express', 'prisma'],
            imageUrl: nokler,
            imageAlt: 'Nokler Games',
            description: 'Nøkler its an online platform dedicated to the sale of digital keys for games. ',
        },
        {
            title: 'Gamerspot',
            tech: ['javascript', 'react', 'express', 'sequelize'],
            imageUrl: gamerspot,
            imageAlt: 'Gamerspot',
            description: 'Gamerspot is an application to find information about any games. Consumes data from an external API ',
        },
        {
            title: 'Todo List',
            tech: ['javascript', 'react'],
            imageUrl: todolist,
            imageAlt: 'Todo List',
            description: 'Simple front-end application to create tasks. Developed with react',
        },

    ]

    return (
        <>
            <Box textAlign='center' height='max-content' width={{ base: 'fit-content', xs: '90vw' }} mx='auto' py='auto' >
                <Heading >
                    Projects
                </Heading>
            </Box>
            <Flex textAlign='left' height='max-content' width={{ base: 'fit-content', xs: '90vw' }} mx='auto' justifyContent='space-around' paddingTop={{ base: '20px' }} paddingBottom={{ base: '20px' }} wrap='wrap' >
                {
                    projects.map(
                        (project, i) => (
                            <Box w='350px' mb={5} borderWidth='1px' borderRadius='lg' overflow='hidden' key={i} display='inline-block' height='70vh' position='relative' bg='#0d0d0d'
                                _hover={{
                                    cursor: 'pointer',
                                    border: '1px solid #595959'
                                }}>
                                <Image
                                    src={project.imageUrl}
                                    alt={project.imageAlt}
                                    h='60%'
                                    objectFit='fill'
                                />

                                <Box px='6' h='40%' >
                                    <Box mx='auto' my={3} w='95%' fontSize='xl' textTransform='uppercase'>
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
        </>
    )

}

export default Projects