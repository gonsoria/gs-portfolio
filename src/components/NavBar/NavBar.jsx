import {
    Grid,
    GridItem,
    Text,
    Flex,
    Select,
} from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'
import Contact from '../Contact/Contact'
import Skills from '../Skills/Skills'
import MenuResponsive from './MenuResponsive'
import { useTranslation } from 'react-i18next';

function NavBar() {
    const { t, i18n } = useTranslation()

    const handleSelect = (e) => {
        if (e.target.value === 'es') {
            i18n.changeLanguage('es')
        } else {
            i18n.changeLanguage('en')
        }
    }
    return (


        <Flex px={{ base: 0, xs: 6 }} py={3} position='relative' justifyContent='flex-end' mx={{ base: '12vw', xxs: '5vw' }}>
            <MenuResponsive />
            <Grid templateColumns='repeat(10, 1fr)' gap={2} textAlign='center' display={{ base: 'none', xs: 'grid' }}>
                <GridItem colStart={7} >
                    <Link to='/projects'>
                        <Text fontSize='lg' py={1} _hover={{
                            color: '#a6a6a6'
                        }}
                        >{t('navBar.projects')} </Text>
                    </Link>
                </GridItem>

                <GridItem>
                    <Skills />
                </GridItem>

                <GridItem>
                    <Contact />
                </GridItem>
                <GridItem w='130px'>
                    <Select
                        pl={4}
                        onChange={handleSelect}
                        variant='unstyled'
                        defaultValue='def'
                        bg='#0d0d0d'
                        color='#f2f2f2'
                        boxShadow='#0d0d0d'
                        outline='none'
                        display='inline-block'
                        fontSize='lg'
                        py={1}
                        _hover={{
                            color: '#a6a6a6',
                            cursor: 'pointer'
                        }}
                        _focus={{ outline: 'none' }}
                    >
                        <option
                            color=''
                            value='def'
                            hidden
                        > {t('navBar.select')}
                        </option>
                        <option
                            value='en'
                        > {t('navBar.select-en')}
                        </option>

                        <option
                            value='es'
                        > {t('navBar.select-es')}
                        </option>
                    </Select>
                </GridItem>

            </Grid>
        </Flex >

    )
}

export default NavBar