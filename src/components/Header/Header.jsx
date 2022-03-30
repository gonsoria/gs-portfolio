import React, { useState } from 'react'
import {
    Grid,
    GridItem,
    IconButton,
    Text,
    Box,
    Flex,
    Spacer
} from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import { ArrowLeftIcon } from '@chakra-ui/icons'
// import { BsSun, BsMoonStarsFill } from 'react-icons/bs'

function Header() {
    const [isHome, seTisHome] = useState(true)

    return (
        <Flex px={6} py={4} position='relative' justifyContent='flex-end'>
            <Box textAlign='left'>
                <Link to='/' onClick={() => seTisHome(true)} >
                    {
                        isHome === false ? <ArrowLeftIcon color='#a6a6a6' /> : null

                    }
                </Link>
            </Box>
            <Spacer />
            <Grid templateColumns='repeat(8, 1fr)' gap={6} textAlign='center'>
                <GridItem colStart={4} >
                    <Link to='/projects' onClick={() => seTisHome(false)} >
                        <Text py={1} _hover={{
                            color: '#a6a6a6'
                        }}
                        >Projects</Text>
                    </Link>
                </GridItem>
                <GridItem>
                    <Link to='/skills' onClick={() => seTisHome(false)}>
                        <Text py={1} _hover={{
                            color: '#a6a6a6'
                        }}
                        >Skills</Text>
                    </Link>
                </GridItem>
                <GridItem>
                    <Link to='/resume' onClick={() => seTisHome(false)}>
                        <Text py={1} _hover={{
                            color: '#a6a6a6'
                        }}>Resume</Text>
                    </Link>
                </GridItem>
                <GridItem>
                    <Link to='contact' onClick={() => seTisHome(false)}>
                        <Text py={1} _hover={{
                            color: '#a6a6a6'
                        }}>Contact</Text>
                    </Link>
                </GridItem>
                <GridItem >
                    <IconButton
                    />
                </GridItem>
            </Grid>
        </Flex >
    )
}

export default Header