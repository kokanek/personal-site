import React from 'react'
import styled from 'styled-components'

const NewsletterBlock = ({heading, description}) => {
    return (
        <Container>
            <Heading>{heading}</Heading>
            <Description>{description}</Description>
            {'this is the newsletter block'}
        </Container>
    )
}

const Container = styled.div`
    padding: 16;
    margin-bottom: 16;
    max-width: 700px;
    margin-left: auto;
    margin-right: auto;
`

const Heading = styled.h3`
    margin-bottom: 16;
`

const Description = styled.div`
    margin-bottom: 16;
`

export default NewsletterBlock
