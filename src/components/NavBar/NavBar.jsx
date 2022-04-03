import {
    Grid,
    GridItem,
    Text,
    Flex,
} from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'
import Contact from '../Contact/Contact'
import Skills from '../Skills/Skills'
import MenuResponsive from './MenuResponsive'

function NavBar() {
    return (
        <Flex px={{ base: 0, xs: 6 }} py={3} position='relative' justifyContent='flex-end' mx={{ base: '12vw', xxs: '5vw' }}>
            <MenuResponsive />

            <Grid templateColumns='repeat(8, 1fr)' gap={6} textAlign='center' display={{ base: 'none', xs: 'grid' }}>
                <GridItem colStart={6} >
                    <Link to='/projects'>
                        <Text fontSize='lg' py={1} _hover={{
                            color: '#a6a6a6'
                        }}
                        >Projects</Text>
                    </Link>
                </GridItem>

                <GridItem>
                    <Skills />
                </GridItem>

                <GridItem>
                    <Contact />
                </GridItem>

            </Grid>
        </Flex >
    )
}

export default NavBar