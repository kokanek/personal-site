import React, {useState} from 'react';
import styled, { css, useTheme } from 'styled-components';
import classNames from 'classnames'
import Pagination from '../components/Pagination';
import NewsletterBlock from '../components/NewsletterBlock';
import { Sidebar } from '../components/sidebar';
import { mq, spacing } from '../theme'
import { IntroLogo } from '../components/logo/IntroLogo';
import styles from '../styles/Home.module.scss';

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
        <Sidebar showSidebar={showSidebar} closeSidebar={closeSidebar} />
        <PageContent className="PageContent">
          <Pagination toggleSidebar={toggleSidebarState} nextLink={next} position="top"/>
          <PageMain>
            <h1>Here are a few of my popular <span style={{color: theme.colors.contrast}}>YouTube Videos</span></h1>
            <NewsletterBlock 
              heading="The Event Loop" 
              description="In this video, I explain the functioning of the JavaScript Event Loop by getting into the call-stack, the browser APIs and the event queue 👇🏽"
            />
            <NewsletterBlock 
              heading="The JavaScript Engine" 
              description="In this video, we look into the JS engine and skim over the role that it plays in executing JS code and check out how that process is optimized 👇🏽"
            />
            <NewsletterBlock 
              heading="Promises in JavaScript" 
              description="In this video, we look into promises and see how they can be made use of, in order to write consice, asynchronous code in JavaScript 👇🏽"
            />
            <NewsletterBlock 
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


