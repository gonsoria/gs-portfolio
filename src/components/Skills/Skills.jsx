import { Grid, GridItem, Heading, Image, SimpleGrid } from '@chakra-ui/react'
import React from 'react'
import css from '../../assets/frontend/css3.svg'
import htmlIcon from '../../assets/frontend/html5.svg'
import reactIcon from '../../assets/frontend/react.svg'
import reduxIcon from '../../assets/frontend/redux.svg'
import js from '../../assets/frontend/javascript.svg'
import ts from '../../assets/frontend/typescript.svg'
import expressIcon from '../../assets/backend/expressjs-ar21.svg'
import nodejs from '../../assets/backend/node.png'
import prisma from '../../assets/backend/prisma-2.svg'
import psql from '../../assets/backend/psql.png'
import sequelize from '../../assets/backend/sequelize.png'
import slack from '../../assets/tools/slack.svg'
import notion from '../../assets/tools/notion.png'
import git from '../../assets/tools/git.png'
import github from '../../assets/tools/github.png'

function Skills() {
    return (
        <SimpleGrid w='85vw' mx='auto' columns={{ base: 1, sm: 2 }} spacingX={10} spacingY={6} my='5vh' p={8} rounded={15} overflowY={{ base: 'scroll', sm: 'unset' }} >
            <Grid templateRows='repeat(2, 1fr)' templateColumns='repeat(4, 1fr)' rowGap={1} columnGap={6} alignItems='center' h={120}  >
                <GridItem colSpan={4} >
                    <Heading size='lg' as='u'> Programming Lenguages</Heading>
                </GridItem>
                <Image
                    boxSize='55px'
                    objectFit='cover'
                    src={js}
                    alt='JAVASCRIPT'
                />
                <Image
                    boxSize='55px'
                    objectFit='cover'
                    src={ts}
                    alt='TYPESCRIPT'
                />
            </Grid>
            <Grid templateRows='repeat(2, 1fr)' templateColumns='repeat(4, 1fr)' rowGap={1} columnGap={6} alignItems='center' h={120}>
                <GridItem colSpan={4}>
                    <Heading size='lg' as='u' > Front End Stack</Heading>
                </GridItem>

                <Image
                    boxSize='60px'
                    objectFit='cover'
                    src={css}
                    alt='CSS3'
                />
                <Image
                    boxSize='60px'
                    objectFit='cover'
                    src={htmlIcon}
                    alt='HTML5'
                />
                <Image
                    boxSize='60px'
                    objectFit='cover'
                    src={reactIcon}
                    alt='REACT'
                />
                <Image
                    boxSize='60px'
                    objectFit='cover'
                    src={reduxIcon}
                    alt='REDUX'
                />
            </Grid>
            <Grid templateRows='repeat(2, 1fr)' templateColumns='repeat(5, 1fr)' rowGap={1} columnGap={6} alignItems='center' h={120}>
                <GridItem colSpan={5}>
                    <Heading size='lg' as='u' > Back End Stack</Heading>
                </GridItem>
                <GridItem colSpan={2} marginBottom={4}>
                    <Image
                        height='40px'
                        objectFit='contain'
                        src={nodejs}
                        alt='NODEJS'

                    />
                </GridItem>
                <GridItem colSpan={2}>
                    <Image
                        height='60px'
                        objectFit='cover'
                        src={expressIcon}
                        alt='EXPRESS'
                    />
                </GridItem>
            </Grid>
            <Grid templateRows='repeat(2, 1fr)' templateColumns='repeat(4, 1fr)' rowGap={1} columnGap={6} alignItems='center' h={120}>
                <GridItem colSpan={4}>
                    <Heading size='lg' as='u'> Data Base / ORM</Heading>
                </GridItem>

                <Image
                    boxSize='65px'
                    objectFit='cover'
                    src={psql}
                    alt='POSTGRESQL'
                />
                <Image
                    boxSize='50px'
                    objectFit='contain'
                    src={sequelize}
                    alt='SEQUELIZE'
                />
                <GridItem colSpan={2}>
                    <Image
                        height='50px'
                        objectFit='cover'
                        src={prisma}
                        alt='PRISMA'
                    />
                </GridItem>
            </Grid>
            <Grid templateRows='repeat(2, 1fr)' templateColumns='repeat(4, 1fr)' rowGap={1} columnGap={6} alignItems='center' h={120}>
                <GridItem colSpan={4}>
                    <Heading size='lg' as='u'> Management</Heading>
                </GridItem>
                <Image
                    boxSize='55px'
                    objectFit='cover'
                    src={slack}
                    alt='SLACK'
                />
                <Image
                    boxSize='55px'
                    objectFit='cover'
                    src={notion}
                    alt='NOTION'
                />
            </Grid>
            <Grid templateRows='repeat(2, 1fr)' templateColumns='repeat(5,1fr)' rowGap={1} columnGap={6} alignItems='center' h={120}>
                <GridItem colSpan={4}>
                    <Heading size='lg' as='u' > Revision Control</Heading>
                </GridItem>

                <GridItem colSpan={2}>
                    <Image
                        height='45px'
                        objectFit='cover'
                        src={git}
                        alt='GIT'
                    />
                </GridItem>
                <GridItem colSpan={2}>
                    <Image
                        height='65px'
                        objectFit='cover'
                        src={github}
                        alt='GITHUB'
                    />
                </GridItem>

            </Grid>

        </SimpleGrid>
    )
}

export default Skills