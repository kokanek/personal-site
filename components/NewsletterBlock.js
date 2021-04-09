import React from 'react'
import styled from 'styled-components'
import { spacing, mq } from '../theme'
import { useRouter } from 'next/router'
import Button from './Button';

const NewsletterBlock = ({heading, description, buttonText, link}) => {

    const router = useRouter();
    
    const navigate = () => {
      router.push(link);
    }

    return (
        <Container>
            <Heading>{heading}</Heading>
            <Description>{description}</Description>
            <SubmitButton as="button" onClick={navigate}>
              {buttonText || 'Submit'}
            </SubmitButton>
        </Container>
    )
}

const Container = styled.div`
    padding: ${spacing(1.5)};
    margin-bottom: ${spacing(2)};
    border: ${(props) => props.theme.separationBorder};
    max-width: 700px;
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
