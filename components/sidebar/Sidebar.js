import React from 'react'
import styled from 'styled-components'
import Link from '../LocaleLink'
import { mq, color, screenReadersOnlyMixin } from '../../theme'
import { Nav } from './Nav'
import { SidebarLogo } from '../logo/SidebarLogo'
import ShareSite from '../socials/ShareSite'

const CloseIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
        <g fill="none" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10">
            <line x1=".5" y1=".5" x2="23.5" y2="23.5" />
            <line x1="23.5" y1=".5" x2=".5" y2="23.5" />
        </g>
    </svg>
)

export const Sidebar = ({ showSidebar, closeSidebar, rest }) => {

    return (
        <SidebarContainer show={showSidebar} className="Sidebar">
            <SidebarHeader>
                <SidebarLogo />
                <SidebarCloseButton onClick={closeSidebar}>
                    <CloseIcon />
                </SidebarCloseButton>
            </SidebarHeader>
            <Nav {...rest} closeSidebar={closeSidebar} />
            <ShareSite />
        </SidebarContainer>
    )
}

const SidebarContainer = styled.nav`
    border-right: ${(props) => props.theme.separationBorder};
    display: flex;
    flex-direction: column;

    @media ${mq.large} {
        width: 270px;
        height: 100vh;
        position: fixed;
    }

    @media ${mq.smallMedium} {
        width: 100%;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background: ${color('background')};
        z-index: 1000;
        text-align: center;
        /* overflow-x: hidden; */
        /* overflow-y: scroll; */
        position: fixed;
        ${(props) => (props.show ? '' : screenReadersOnlyMixin)};
    }
`
const SidebarHeader = styled.div`
    display: grid;
    grid-template-columns: 0 1fr 0;
    grid-template-areas: 'left logo right';
    border-bottom: ${(props) => props.theme.separationBorder};

    @media ${mq.smallMedium} {
        grid-template-columns: 50px 1fr 50px;
    }
`

const SidebarLogoLink = styled(Link)`
    grid-area: logo;
    display: flex;
    justify-content: center;
    align-items: center;

    svg {
        max-height: 76px;
    }

    &:hover {
        text-decoration: none;
    }
`

const SidebarCloseButton = styled.button`
    grid-area: right;
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    background: none;
    cursor: pointer;
    border: none;

    &:focus {
        outline: 0;
    }

    svg {
        stroke: ${color('link')};
    }

    @media ${mq.large} {
        display: none;
    }
`
