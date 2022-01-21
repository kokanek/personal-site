import React, {useState} from 'react';
import styled, { css, useTheme } from 'styled-components';
import classNames from 'classnames'
import Head from "next/head";
import Pagination from '../components/Pagination';
import NewsletterBlock from '../components/NewsletterBlock';
import { Sidebar } from '../components/sidebar';
import { mq, spacing } from '../theme'
import { IntroLogo } from '../components/logo/IntroLogo';
import BioBlock from '../components/BioBlock';

import styles from '../styles/Home.module.scss';

const next = {id: 'YouTube', path: '/youtube'}

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
          <title>Kapeel Kokane - Homepage</title>
          <meta name="description" content="This is the home page for the developer website for Kapeel Kokane. Kapeel Kokane is a programmer, YouTuber and a freelance Blogger." />
        </Head>
        <Sidebar showSidebar={showSidebar} closeSidebar={closeSidebar} />
        <PageContent className="PageContent">
          <Pagination toggleSidebar={toggleSidebarState} nextLink={next} position="top" />
          <PageMain>
              {/* <PageMetaDebug /> */}
              <IntroLogo />
              <h1>Hi There! 👋🏾</h1>
              <h2>I am <span style={{color: theme.colors.contrast}}>Kapeel Kokane</span>. I currently work as a full-stack developer at Microsoft.</h2> 
              
              <h3>I also like to create content in order to help other who are starting out with their development journey through my videos, blogs and sketchnotes. 🙌🏾. Here, you will find the links to some of my content.</h3>
              <NewsletterBlock 
                link='https://kapeelkokane.gumroad.com/l/jsillustrated/blirvwg'
                heading="My Free ebook" 
                buttonText="Get it now!"
                description="I put together a collection of my #sketchnotes about a few important JavaScript concepts into a book. Get it for free here! 👇🏽"
              />
              <NewsletterBlock 
                link='/youtube'
                heading="My YouTube Channel" 
                buttonText="View"
                description="I create short, animated style videos for those getting strated with JavaScript & other computer science releated topics. Give those a try if you feel like 👇🏽"
              />
              <NewsletterBlock 
                link='/blogs'
                heading="My Blogs" 
                buttonText="View"
                description="I create blog posts for the Logrocket Blog. I mostly write on the topics related to React, Styled-components & Next.js. Check those out if it interests you 👇🏽"
              />
              <NewsletterBlock 
                link='https://sendfox.com/comscience'
                heading="My Newsletter"
                buttonText="Join now!" 
                description="I send a weekly newsletter with a curated collection of JavaScript resources that I find interesting. Feel free to join the list if you'd like the update in your inbox 👇🏽"
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
