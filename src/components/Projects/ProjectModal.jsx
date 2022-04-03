import React from 'react'
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalBody,
    ModalCloseButton,
    Button,
    Box,
    Grid,
    GridItem,
    Heading,
    Badge,
    Flex,
    Link,
} from '@chakra-ui/react'
import ImgGallery from '../ImageGallery/ImgGallery'

function ProjectModal({ isOpen, onClose, projects, idController, image }) {

    const project = projects.filter(project => project.id === idController)

    return (
        <>
            <Modal isOpen={isOpen} onClose={onClose} size='5xl'  >
                <ModalOverlay />
                <ModalContent bg='#0d0d0d'  >
                    <Box display='flex' justifyContent='flex-end' >
                        <ModalCloseButton position='relative' _hover={{
                            bg: "#f2f2f2", color: '#0d0d0d',
                        }} />
                    </Box>
                    <ModalBody  >
                        <Flex flexWrap={{ base: 'wrap-reverse', lg: 'nowrap' }} pb='10px'>
                            <Box w={{ base: '90%', lg: '50%' }} mx='auto'>
                                <ImgGallery project={project} image={image} />
                            </Box>
                            <Grid templateRows='repeat(6, 1fr)' w={{ lg: '50%' }}>
                                <GridItem rowSpan={5} >
                                    <Heading textAlign='center' pb={{ base: '10px' }}>
                                        {project[0]?.title}
                                    </Heading>
                                    <Box align='justify' pl={{ lg: '24px' }}>
                                        {project[0]?.myWork}
                                    </Box>
                                    <Box my={{ base: '5px' }} pl={{ lg: '24px' }} textAlign='justify'>
                                        {project[0]?.tags?.map((tag, i) =>
                                            <Badge key={i} borderRadius='full' colorScheme={project[0].color} mx={{ base: '2px' }} px={{ base: '8px' }} >
                                                {tag}
                                            </Badge>
                                        )}
                                    </Box>
                                </GridItem>
                                <GridItem mt='auto' mb={{ base: '15px' }} textAlign={{ base: 'center', lg: 'end' }}>
                                    <Link href={project[0]?.deployUrl} isExternal>
                                        <Button size='sm' _hover={{
                                            bg: "#f2f2f2", color: '#0d0d0d',
                                        }} isDisabled={
                                            project[0]?.deployUrl === '' ? true : false
                                        }
                                        >
                                            Deploy
                                        </Button>
                                    </Link>
                                    <Link href={project[0]?.repositoryUrl} isExternal >
                                        <Button size='sm' ml={5} _hover={{
                                            bg: "#f2f2f2", color: '#0d0d0d',
                                        }}>
                                            Repository
                                        </Button>
                                    </Link>
                                </GridItem>
                            </Grid>
                        </Flex>
                    </ModalBody>
                </ModalContent>
            </Modal>
        </>)
}

export default ProjectModal