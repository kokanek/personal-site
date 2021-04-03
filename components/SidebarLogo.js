import React from 'react'
import styled, { useTheme } from 'styled-components'
import { LogoCell } from './LogoCell'

export const SidebarLogo = () => {
    const theme = useTheme()
    console.log('the theme is: ', theme);

    return (
        <Container>
            <LogoCell text="Ka" color='cyan' index={0} />
            <LogoCell text="Ko" color='cyan' index={1} />
            <LogoCell text="Com" color='red' index={2} />
            <LogoCell text="Sim" color='red' index={3} />
        </Container>
    )
}

const Container = styled.span`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
`
