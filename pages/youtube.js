import React, {useState} from 'react';
import styled, { css, useTheme } from 'styled-components';
import Pagination from '../components/Pagination';
import NewsletterBlock from '../components/NewsletterBlock';
import { Sidebar } from '../components/sidebar';
import { mq, spacing } from '../theme'
import Head from "next/head";

const next = {id: 'Blogs', path: '/blogs'}

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
          <title>Kapeel Kokane - YouTube videos</title>
          <meta name="description" content="This page lists some of the prominent YouTube Videos created by Kapeel Kokane." />
        </Head>
        <Sidebar showSidebar={showSidebar} closeSidebar={closeSidebar} />
        <PageContent className="PageContent">
          <Pagination toggleSidebar={toggleSidebarState} nextLink={next} position="top"/>
          <PageMain>
            <h1>🎥 YouTube Content</h1>
            <h3>I have been creating content on YouTube on and off for about 3 years now with more than 50 videos on the channel.</h3>
            <h3>Here are a few of my popular <span style={{color: theme.colors.contrast}}>YouTube Videos</span></h3>
            <NewsletterBlock 
              buttonText="Watch"
              link="https://www.youtube.com/watch?v=XzXIMZMN9k4"
              heading="The Event Loop" 
              description="In this video, I explain the functioning of the JavaScript Event Loop by getting into the call-stack, the browser APIs and the event queue 👇🏽"
            />
            <NewsletterBlock 
              buttonText="Watch"
              link="https://www.youtube.com/watch?v=KM9coMpy5sQ"
              heading="The JavaScript Engine" 
              description="In this video, we look into the JS engine and skim over the role that it plays in executing JS code and check out how that process is optimized 👇🏽"
            />
            <NewsletterBlock 
              buttonText="Watch"
              link="https://www.youtube.com/watch?v=gV7SaMIFyg8"
              heading="Promises in JavaScript" 
              description="In this video, we look into promises and see how they can be made use of, in order to write consice, asynchronous code in JavaScript 👇🏽"
            />
            <NewsletterBlock 
              buttonText="Check out"
              link="https://www.youtube.com/c/ComScienceSimplified"
              heading="Other videos" 
              description="In addition to the ones mentioned above, there are ~50 videos on the channel. Feel free to browse around and watch the ones that you are interested in 👇🏽"
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


