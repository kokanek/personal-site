import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import isEmpty from 'lodash/isEmpty'
import { mq, spacing } from '../theme'
import Hamburger from './Hamburger'
import { usePageContext } from '../helpers/pageContext'
import PaginationLink from './PaginationLink'

const Pagination = ({ toggleSidebar }) => {
    const context = usePageContext()

    console.log('pagination context: ', context);
    let previous = <span />
    if (context.previous !== undefined && !isEmpty(context.previous)) {
        previous = (
            <PaginationLink
                className="PaginationPrevious"
                page={context.previous}
                type="previous"
            />
        )
    }

    let next = <span />
    if (context.next !== undefined && !isEmpty(context.next)) {
        next = <PaginationLink className="PaginationNext" page={context.next} type="next" />
    }

    return (
        <Container className="Pagination">
            {previous}
            <MiddleContent>
                <SidebarToggle onClick={() => {}}>
                    <Hamburger />
                </SidebarToggle>
            </MiddleContent>
            {next}
        </Container>
    )
}

Pagination.defaultProps = {
    toggleSidebar: PropTypes.func.isRequired,
}

const Container = styled.div`
    border-bottom: ${(props) => props.theme.separationBorder};
    z-index: 10;
    position: relative;
    display: grid;
    grid-template-columns: 1fr auto 1fr;

    @media ${mq.smallMedium} {
        grid-template-columns: 1fr 50px 1fr;
    }
`

const MiddleContent = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    border-left: ${(props) => props.theme.separationBorder};
    border-right: ${(props) => props.theme.separationBorder};
`

const SidebarToggle = styled.button`
    background: ${(props) => {console.log('theme props', props.theme); return props.theme.colors.background}};
    padding: 0 ${spacing(0.5)};
    cursor: pointer;
    border: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;

    &:hover {
        background: ${(props) => props.theme.colors.backgroundAlt};
    }

    &:focus {
        outline: 0;
    }

    svg {
        display: block;
        width: 100%;
        height: auto;
    }

    @media ${mq.large} {
        display: none;
    }
`

export default Pagination
