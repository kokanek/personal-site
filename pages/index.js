import { useState } from 'react';
import styled, { css, useTheme } from 'styled-components';
import Head from "next/head";
import Link from 'next/link'
import Pagination from '../components/Pagination';
import NewsletterBlock from '../components/NewsletterBlock';
import { Sidebar } from '../components/sidebar';
import { mq, spacing } from '../theme'
import ShareSite from '../components/socials/ShareSite'

const next = { id: 'YouTube', path: '/youtube' }

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
          <title>Kapeel Kokane</title>
          <meta name="description" content="This is the home page for the developer website for Kapeel Kokane. Kapeel Kokane is a programmer, YouTuber and a freelance Blogger." />
        </Head>
        <Sidebar showSidebar={showSidebar} closeSidebar={closeSidebar} />
        <PageContent className="PageContent">
          <Pagination toggleSidebar={toggleSidebarState} nextLink={next} position="top" />
          <PageMain>
            {/* <PageMetaDebug /> */}
            {/* <IntroLogo /> */}
            <h1>Hi There! 👋🏾</h1>
            <p>I am <span style={{ color: theme.colors.contrast }}>Kapeel Kokane</span>. I currently work as a senior developer at Microsoft.</p>

            <p>With over 11 years of experience, I excel at creating high-quality, scalable applications, services, and interfaces</p>

            <p>I also like to create content in order to help other who are starting out with their development journey through my videos, blogs and sketchnotes. You can find them here: <Link href={'https://www.codesketched.com'}>codesketched.com</Link></p>

            <h1>My socials 👇🏾</h1>
            <ShareSite />

            <h1 style={{ marginTop: '1.5rem' }}>My content 📝</h1>

            <NewsletterBlock
              link='https://codesketched.gumroad.com/l/jsillustrated/blirvwg'
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
              link='https://codesketched.substack.com/'
              heading="My Newsletter"
              buttonText="Join now!"
              description="I send a weekly newsletter with a curated collection of Webdev resources for you. Join the list if you'd like the update in your inbox 👇🏽"
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
