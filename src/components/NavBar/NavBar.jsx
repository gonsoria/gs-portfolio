import {
    Grid,
    GridItem,
    Text,
    Flex,
} from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'
import Skills from '../Skills/Skills'

function NavBar() {
    return (
        <Flex px={6} py={3} position='relative' justifyContent='flex-end'>
            <Grid templateColumns='repeat(8, 1fr)' gap={6} textAlign='center' >
                <GridItem colStart={5} >
                    <Link to='/'>
                        <Text fontSize='lg' py={1} _hover={{
                            color: '#a6a6a6'
                        }}
                        >Home</Text>
                    </Link>
                </GridItem>
                <GridItem>
                    <Text fontSize='lg' py={1} _hover={{
                        color: '#a6a6a6'
                    }}
                    >Projects</Text>
                </GridItem>
                <GridItem>
                    <Skills />
                </GridItem>
                <GridItem>
                    <Text fontSize='lg' py={1} _hover={{
                        color: '#a6a6a6'
                    }}>Contact</Text>
                </GridItem>
            </Grid>
        </Flex >
    )
}

export default NavBar