import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { usePageContext } from '../helpers/pageContext'
import { mq } from '../theme'

const PageHeader = () => {
    const page = usePageContext()
    return (
        <PageTitle>
          {'Page Title'}
        </PageTitle>
    )
}

const PageTitle = styled.h2`
    font-size: ${(props) => props.theme.typography.size.largest};
    @media ${mq.small} {
        font-size: ${(props) => props.theme.typography.size.larger};
    }
    @media ${mq.mediumLarge} {
        font-size: ${(props) => props.theme.typography.size.largest};
    }
`

PageHeader.propTypes = {
    title: PropTypes.string,
    showIntro: PropTypes.bool,
    introduction: PropTypes.node,
}

export default PageHeader
