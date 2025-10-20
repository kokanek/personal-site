import React, { useState } from 'react';
import styled, { css, useTheme } from 'styled-components';
import Head from "next/head";
import Pagination from '../components/Pagination';
import { Sidebar } from '../components/sidebar';
import { mq, spacing } from '../theme'
import { TwitterTweetEmbed } from 'react-twitter-embed';

const next = { id: 'Projects', path: '/projects' }

const tweets = [
  '1673284957798641665',
  '1673373449245409297',
  '1689346623577395200',
  '1688949748034678789',
  '1688614600537759745',
  '1687144129015291904',
  '1686734772972797952',
  '1686377751845171200',
  '1686066605124435970',
  '1685277927368220672',
  '1684621261236744192',
  '1684260308179640321',
  '1683888507440312327',
  '1683515841399201800',
  '1683123392394715136',
  '1682797970880643074',
  '1682462417350012928',
  '1682062601277112320',
  '1681712311436705799',
  '1681338206451646465',
  '1680989223636066304',
  '1680592381261893632',
  '1680273640011493378',
  '1679546576820117508',
  '1678813207442358275',
  '1677757796622782464',
  '1677380673685037056',
  '1677017625828679722',
  '1676646049220272145',
  '1676284863794622464',
  '1675575047338053632',
  '1675220027337846787',
  '1674849538303983619',
  '1674477936756269078',
  '1674119815965954049',
  '1673742001810948114',
]

export default function Home() {
  const [showSidebar, toggleSidebar] = useState(false);
  const theme = useTheme();

  const closeSidebar = () => toggleSidebar(false);
  const toggleSidebarState = () => {
    toggleSidebar(!showSidebar)
  };

  return (
    <>
      <Page
        showSidebar={showSidebar}
        theme='DefaultTheme'
      >
        <Head defaultTitle={"Kapeel Kokane"}>
          <title>Content by Kapeel Kokane</title>
          <meta name="description" content="This page lists some of the prominent sketchnotes created by Kapeel Kokane." />
        </Head>
        <Sidebar showSidebar={showSidebar} closeSidebar={closeSidebar} />
        <PageContent className="PageContent">
          <Pagination toggleSidebar={toggleSidebarState} position="top" nextLink={next} />
          <PageMain>
            <h1>📝 Sketchnotes</h1>
            <p>I also create <span style={{ color: theme.colors.contrast }}>Sketchnotes</span> and <span style={{ color: theme.colors.contrast }}>Code snippets</span> about Web development like the ones below.</p>
            <p>If you like that, you can find and download more for FREE on my <a href="https://codesketched.gumroad.com/">gumroad page</a>.</p>
            <div style={{ display: 'flex', flexWrap: 'wrap' }}>
              {tweets.map((tweetId) => (
                <div style={{ minWidth: 400, padding: 4, flexGrow: 1, flexShrink: 1 }}>
                  <TwitterTweetEmbed
                    tweetId={tweetId}
                  />
                </div>
              ))}
            </div>
          </PageMain>

        </PageContent>
      </Page>
    </>
  )
}

const ImageContainer = styled.div`
  & img {
    border-radius: 8px;
  }
`

const PageContent = styled.main`
    display: flex;
    flex-direction: column;
`

const Page = styled.div`
    min-height: 100vh;

    ${PageContent} {
        @media ${mq.large} {
            margin-left: 270px;
        }

        @media ${mq.smallMedium} {
            ${(props) => {
    if (props.showSidebar) {
      return css`
                        overflow: hidden;
                        height: 100vh;
                    `
    }
  }}
        }
    }
`

const PageMain = styled.main`
    flex-grow: 1;
    overflow-x: hidden;
    overflow-y: visible;

    @media ${mq.smallMedium} {
        padding: ${spacing()};
    }

    @media ${mq.large} {
        padding: ${spacing(3)};
    }
`


