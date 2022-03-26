import React from 'react'
import { Breadcrumb, BreadcrumbItem, Text } from '@chakra-ui/react'
import { MoonIcon, SunIcon } from '@chakra-ui/icons'

function Header() {
    return (
        <Breadcrumb separator=' ' textAlign='right' >
            <BreadcrumbItem>
                <Text>Proyects</Text>
            </BreadcrumbItem>
            <BreadcrumbItem>
                <Text>Skills</Text>
            </BreadcrumbItem>
            <BreadcrumbItem>
                <Text>Resume</Text>
            </BreadcrumbItem>
            <BreadcrumbItem>
                <Text>Contact</Text>
            </BreadcrumbItem>
            <BreadcrumbItem>
                <MoonIcon />
                <SunIcon />
            </BreadcrumbItem>
        </Breadcrumb >
    )
}

export default Header