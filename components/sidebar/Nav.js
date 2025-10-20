import React from 'react'
import { useRouter } from 'next/router'
import styled, { css } from 'styled-components'
import { mq, fancyLinkMixin, spacing } from '../../theme'
import { usePageContext } from '../../helpers/pageContext'
import PageLink from '../PageLink'
import { getPageLabelKey } from '../../helpers/pageHelpers'

const filteredNav = [
  { id: '👋🏾 Introduction', path: '/' },
  { id: '📹 Youtube', path: '/youtube' },
  { id: '✍🏼 Blogs', path: '/blogs' },
  { id: '📝 Sketchnotes', path: '/sketchnotes' },
  { id: '📁 Projects', path: '/projects' },
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
        a::before {
            content: '> ';
        }

        @media ${mq.smallMedium} {
            a::after {
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

const NavItem = ({ page, currentPath, closeSidebar, isHidden = false, depth = 0 }) => {
  const router = useRouter()
  console.log('#### nav item', router.pathname, page.path);
  const isActive = page.path == router.pathname;
  const hasChildren = page.children && page.children.length > 0
  const displayChildren = hasChildren > 0 && isActive


  return (
    <>
      <StyledPageLink
        activeClassName="_is-active"
        className={isActive ? "_is-active" : ""}
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
              isHidden={false}
            />
          ))}
        </>
      )}
    </>
  )
}

export const Nav = ({ closeSidebar }) => {
  const context = usePageContext()

  console.log('filterednav: ', filteredNav);
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
