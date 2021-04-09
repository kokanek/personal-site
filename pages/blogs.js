import React, {useState} from 'react';
import styled, { css, useTheme } from 'styled-components';
import classNames from 'classnames'
import Pagination from '../components/Pagination';
import NewsletterBlock from '../components/NewsletterBlock';
import { Sidebar } from '../components/sidebar';
import { mq, spacing } from '../theme'
import { IntroLogo } from '../components/logo/IntroLogo';
import styles from '../styles/Home.module.scss';

const next = {id: 'Sketchnotes', path: '/sketchnotes'}

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
          <Pagination toggleSidebar={toggleSidebarState} nextLink={next} position="top" />
          <PageMain>
            <h1>I blog about some light stuff on <span style={{color: theme.colors.contrast}}>dev.to</span></h1>
            <NewsletterBlock 
              buttonText="View"
              link="https://dev.to/comscience"
              heading="My dev.to Blog" 
              description="The blogs here are mostly short how-to articles, snippets or my newsletter articles 👇🏽"
            />
            <h1>I also write blog articles for <span style={{color: theme.colors.contrast}}>The Logrocket Blog</span></h1>
            <NewsletterBlock 
              buttonText="View"
              link="https://blog.logrocket.com/push-notifications-with-react-and-firebase/"
              heading="Push notifications with React and Firebase" 
              description="In this article, we create a full-fledged solution for implementing end-to-end notifications in a React app using the Firebase framework 👇🏽"
            />
            <NewsletterBlock 
              buttonText="View"
              link="https://blog.logrocket.com/3d-rendering-in-the-browser-with-react-three-fiber/"
              heading="3d rendering in the browser" 
              description="In this article, we take a look at how to get started with rendering 3d inside of the browser context by using the popular three.js library 👇🏽"
            />
            <NewsletterBlock 
              buttonText="View"
              link="https://blog.logrocket.com/whats-new-in-next-js-10/"
              heading="Next.js 10.0 features" 
              description="In this article, we look into one of the major Next.js releases (10.0) and explore the new features made available with it 👇🏽"
            />
            <NewsletterBlock 
              buttonText="View"
              link="https://blog.logrocket.com/author/kapeelkokane/"
              heading="Other articles" 
              description="In addition to the ones mentioned above, there are several others that you can find on the Logrocket page 👇🏽"
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


