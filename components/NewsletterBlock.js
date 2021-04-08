import React from 'react'
import styled from 'styled-components'
import { spacing, mq } from '../theme'
import Button from './Button';

const NewsletterBlock = () => {

    return (
        <Container>
            <Heading>Stay Tuned</Heading>
            <Description>If you'd like to know when we release additional results or announce next year's edition, just leave us your email below:</Description>
            <SubmitButton as="button" type="submit" name="subscribe">
              Submit
            </SubmitButton>
        </Container>
    )
}

const Container = styled.div`
    padding: ${spacing(1.5)};
    margin-bottom: ${spacing(2)};
    border: ${(props) => props.theme.separationBorder};
    max-width: 700px;
    margin-left: auto;
    margin-right: auto;
`

const Heading = styled.h3`
    margin-bottom: ${spacing(0.5)};
    font-size: ${(props) => props.theme.typography.size.larger};
`

const Description = styled.div`
    margin-bottom: ${spacing()};
`

const SubmitButton = styled(Button)`
    min-width: 140px;
    display: block;
    @media ${mq.small} {
        margin-top: ${spacing()};
        width: 100%;
    }
    /*
    @include small {
        width: 100%;
    }
    &:hover{
        @include ants;
    }
    */
`

export default NewsletterBlock
