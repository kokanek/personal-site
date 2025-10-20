import React from 'react'
import { spacing, mq } from '../theme'
import { useRouter } from 'next/router'
import Button from './Button';
import styled, { useTheme } from 'styled-components';

const ProjectBlock = ({ heading, description, github, link, text }) => {

  const router = useRouter();
  const theme = useTheme();

  return (
    <Container>
      <Heading>{heading}</Heading>
      <Description>{description}</Description>
      <Row style>
        {github && <SubmitButton as="button" onClick={() => router.push(github)}>
          {'code'}
        </SubmitButton>}
        {link && <DemoButton as="button" onClick={() => router.push(link)} col={theme.colors.contrast}>
          {text || 'demo'}
        </DemoButton>}
      </Row>
    </Container>
  )
}

const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 4px;
`

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

const DemoButton = styled(Button)`
  min-width: 140px;
  border-color: ${(props) => props.col};
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

export default ProjectBlock
