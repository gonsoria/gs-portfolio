import { ArrowLeftIcon } from '@chakra-ui/icons'
import { Flex, Grid } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

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
        </div>
    )
}

export default About