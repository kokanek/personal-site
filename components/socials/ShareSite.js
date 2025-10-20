import React from 'react'
import styled from 'styled-components'
import ShareTwitter from './ShareTwitter'
import ShareEmail from './ShareEmail'
import ShareLinkedIn from './ShareLinkedIn'
import ShareYouTube from './ShareYouTube'

const ShareSite = () => {

  return (
    <Container className="ShareSite">
      <ShareTwitter />
      <ShareYouTube />
      <ShareLinkedIn />
      <ShareEmail subject="Let's connect!" />
    </Container>
  )
}

const Container = styled.div`
    border: ${(props) => props.theme.separationBorder};
    display: flex;
    justify-content: space-evenly;
    position: relative;
    z-index: 1;
`

export default ShareSite
