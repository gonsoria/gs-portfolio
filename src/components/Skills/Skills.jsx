import { Box, Grid, GridItem, Text } from '@chakra-ui/react'
import React from 'react'

function Skills() {
    return (
        <Box w='80vw' m='auto'>
            <Grid templateColumns='repeat(5, 1fr)' gap={6}>
                <GridItem w='300px' h='10' bg='#a6a6a6' color='black'>
                    <Text> Front End Stack</Text>
                </GridItem>
            </Grid>
        </Box>
    )
}

export default Skills