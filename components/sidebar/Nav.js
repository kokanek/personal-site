import React from 'react'
import styled, { css } from 'styled-components'
import { mq, fancyLinkMixin, spacing } from '../../theme'
import { usePageContext } from '../../helpers/pageContext'
import PageLink from '../PageLink'
import { getPageLabelKey } from '../../helpers/pageHelpers'

const filteredNav = [
  {id: 'introduction', path: '/', next: {id: 'tshirt', path: "/tshirt/", showTitle: true}}, 
  {id: 'tshirt', path: '/test', next: {id: 'projects', path: "/projects/", showTitle: true}},
  {id: 'projects', path: '/projects', next: {id: 'youtube', path: "/projects/", showTitle: true}},
  {id: 'youtube', path: '/youtube'}
]

const StyledPageLink = styled(PageLink)`
    display: flex;
    white-space: nowrap;
    margin: 0 0 ${spacing(0.33)} 0;
    font-size: ${(props) =>
        props.depth > 0
            ? props.theme.typography.size.smallish
            : props.theme.typography.size.medium};
    font-weight: ${(props) => (props.depth === 0 ? 800 : 400)};

    /* & > span {

        display: inline-block;
    } */

    @media ${mq.smallMedium} {
        margin-bottom: ${spacing(0.5)};
        display: block;
    }

    @media ${mq.large} {
        & > span {
            text-overflow: ellipsis;
            overflow: hidden;
            white-space: nowrap;
            max-width: 100%;
            display: inline-block;
        }
        margin-left: ${(props) => (props.depth > 0 ? spacing() : 0)};
        ${(props) => {
            if (props.isHidden) {
                return css`
                    display: none;
                `
            }
        }}
    }

    &._is-active {
        span span::before {
            content: '> ';
        }

        @media ${mq.smallMedium} {
            span span::after {
                content: ' <';
            }
        }
    }

    ${(props) =>
        fancyLinkMixin({
            color: props.depth === 0 ? props.theme.colors.link : props.theme.colors.text,
            activeColor: props.theme.colors.linkActive,
        })}
`

const NavItem = ({ key, page, currentPath, closeSidebar, isHidden = false, depth = 0 }) => {
    const isActive = true
    const hasChildren = false
    const displayChildren = hasChildren > 0 && isActive

    console.log('**********nav item page', page);
    return (
        <>
            <StyledPageLink
                activeClassName="_is-active"
                onClick={closeSidebar}
                page={page}
                depth={depth}
                isHidden={isHidden}
            >
              {page.id}
            </StyledPageLink>
            {hasChildren && (
                <>
                    {page.children.map((childPage) => (
                        <NavItem
                            key={childPage.id}
                            page={childPage}
                            closeSidebar={closeSidebar}
                            currentPath={currentPath}
                            depth={depth + 1}
                            isHidden={!displayChildren}
                        />
                    ))}
                </>
            )}
        </>
    )
}

export const Nav = ({ closeSidebar }) => {
    const context = usePageContext()

    console.log('filterednav: ', context.currentPath, closeSidebar);
    return (
        <NavContainer>
            {filteredNav.map((page, i) => (
                <NavItem
                    key={i}
                    page={page}
                    currentPath={context.currentPath}
                    closeSidebar={closeSidebar}
                />
            ))}
        </NavContainer>
    )
}

const NavContainer = styled.div`
    flex-grow: 1;
    /* display: flex; */
    /* flex-direction: column; */
    padding: ${spacing(1.5)} ${spacing()};
    overflow-y: auto;

    @media ${mq.smallMedium} {
        align-items: center;
        overflow-y: scroll;
    }
`
