import React, { useState } from 'react';
import styled, { css, useTheme } from 'styled-components';
import Link from 'next/link'
import Head from "next/head";
import Pagination from '../components/Pagination';
import ProjectBlock from '../components/ProjectBlock';
import NewsletterBlock from '../components/NewsletterBlock';
import { Sidebar } from '../components/sidebar';
import { mq, spacing } from '../theme'

const next = { id: 'Intro', path: '/' }

export default function Home() {
  const [showSidebar, toggleSidebar] = useState(false);
  const theme = useTheme();

  const closeSidebar = () => toggleSidebar(false);
  const toggleSidebarState = () => {
    console.log('toggle sidebar called');
    toggleSidebar(!showSidebar)
  };

  return (
    <>
      <Page
        showSidebar={showSidebar}
        theme='DefaultTheme'
      >
        <Head defaultTitle={"Kapeel Kokane"}>
          <title>Projects by Kapeel Kokane</title>
          <meta name="description" content="This page lists some of the prominent projects created by Kapeel Kokane." />
        </Head>
        <Sidebar showSidebar={showSidebar} closeSidebar={closeSidebar} />
        <PageContent className="PageContent">
          <Pagination toggleSidebar={toggleSidebarState} nextLink={next} position="top" />
          <PageMain>
            <h1>🔖 Projects</h1>
            <ProjectBlock
              text="Play store link"
              github="https://github.com/kokanek/local-pass"
              link="https://play.google.com/store/apps/details?id=com.codesketched.localpass&hl=en_GB"
              heading="LocalPass - Secure store (Android app)"
              description="I have developed an android app and its uploaded to the play store. Localpass is a 100% offline, encrypted password manager."
            />
            <ProjectBlock
              text="Check it out"
              link="https://ytcourses.vercel.app/"
              heading="YT Courses"
              description="This is an app that takes links of long YouTube videos and converts them into courses where users can track their progress."
            />
            <ProjectBlock
              text="Check it out"
              link="https://excalinote.vercel.app/"
              github={"https://github.com/kokanek/excali-note"}
              heading="Excalinote"
              description="This is an app that allows users to create notebooks with pages as the excalidraw canvas."
            />
            <ProjectBlock
              text="Check it out"
              link="https://log-journal.vercel.app/"
              heading="Log Journal"
              description="A journalling app that lets users capture theirs logs throughout the day with tagging support. Uses a redis backend."
            />
          </PageMain>
        </PageContent>
      </Page>
    </>
  )
}

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


