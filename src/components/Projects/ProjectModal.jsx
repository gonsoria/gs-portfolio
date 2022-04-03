import React from 'react'
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalBody,
    ModalCloseButton,
    Button,
    SimpleGrid,
    Box,
    Grid,
    GridItem,
    Heading,
    Badge,
    Spacer,
} from '@chakra-ui/react'
import ImgGallery from '../ImageGallery/ImgGallery'

function ProjectModal({ isOpen, onClose, projects, idController, image }) {

    const project = projects.filter(project => project.id === idController)

    return (
        <>
            <Modal isOpen={isOpen} onClose={onClose} size='6xl'>
                <ModalOverlay />
                <ModalContent bg='#0d0d0d' >
                    <ModalCloseButton />
                    <ModalBody >
                        <SimpleGrid columns={2}>
                            <ImgGallery project={project} image={image} />
                            <Grid templateRows='repeat(6, 1fr)'>
                                <GridItem rowSpan={5}>
                                    <Heading textAlign='center'>
                                        {project[0]?.title}
                                    </Heading>
                                    <Box p={10} align='justify'>
                                        {project[0]?.myWork}
                                        <Spacer my={5} />
                                        {project[0]?.tags?.map((tag, i) =>
                                            <Badge key={i} borderRadius='full' px='2' mr={2} colorScheme={project[0].color} align='justify'>
                                                {tag}
                                            </Badge>
                                        )}
                                    </Box>
                                </GridItem>
                                <GridItem textAlign='right' px={10}>
                                    <Button size='sm' mx='5'>
                                        Deploy
                                    </Button>
                                    <Button size='sm'>
                                        Repository
                                    </Button>
                                </GridItem>
                            </Grid>
                        </SimpleGrid>
                    </ModalBody>
                </ModalContent>
            </Modal>
        </>)
}

export default ProjectModal