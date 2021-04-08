import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { mq, spacing, fontSize } from '../theme'
import PageLink from './PageLink'

const StyledLink = styled(PageLink)`
    display: flex;
    align-items: center;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    justify-content: ${(props) => (props.type === 'previous' ? 'flex-start' : 'flex-end')};
    padding: ${spacing()};

    @media ${mq.smallMedium} {
        font-size: ${fontSize('smaller')};
        span {
            display: block;
            text-overflow: ellipsis;
            overflow: hidden;
            white-space: nowrap;
            width: 100%;
            text-align: center;
        }
    }
    @media ${mq.large} {
        font-size: ${fontSize('medium')};
    }

    &:hover {
        background: ${(props) => props.theme.colors.backgroundAlt};
    }
`

const PaginationLink = ({ page, type }) => (
    <StyledLink page={page} type={type}>
        {type === 'previous' && (
            <span>
              «&nbsp;
              {page.id}
            </span>
        )}
        {type === 'next' && (
            <span>
              {page.id}
              &nbsp;»
            </span>
        )}
    </StyledLink>
)

PaginationLink.propTypes = {
    page: PropTypes.shape({
        id: PropTypes.string.isRequired,
        path: PropTypes.string.isRequired,
    }).isRequired,
    type: PropTypes.oneOf(['previous', 'next']).isRequired,
}

export default PaginationLink
