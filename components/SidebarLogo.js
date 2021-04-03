import React from 'react'
import styled, { useTheme } from 'styled-components'
import { LogoCell } from './LogoCell'

export const SidebarLogo = () => {
    const theme = useTheme()

    console.log('the theme here: ', theme)
    return (
        <Container>
            <LogoCell text="Ka" color={theme.colors.text} index={0} />
            <LogoCell text="Ko" color={theme.colors.text} index={1} />
            <LogoCell text="Com" color={theme.colors.contrast} index={2} />
            <LogoCell text="Sim" color={theme.colors.contrast} index={3} />
        </Container>
    )
}

const Container = styled.span`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
`
