import React, {useState} from 'react';
import styled, { css, useTheme } from 'styled-components';
import classNames from 'classnames'
import Pagination from '../components/Pagination';
import NewsletterBlock from '../components/NewsletterBlock';
import { Sidebar } from '../components/sidebar';
import { mq, spacing } from '../theme'
import { IntroLogo } from '../components/logo/IntroLogo';
import styles from '../styles/Home.module.scss';

export default function Home() {
  const [showSidebar, toggleSidebar] = useState(false);
  const theme = useTheme();

  const closeSidebar = () => toggleSidebar(false);

  return (
    <>
      <Page
        showSidebar={showSidebar}
        theme='DefaultTheme'
      >
        <Sidebar showSidebar={showSidebar} closeSidebar={closeSidebar} />
        <PageContent className="PageContent">
          <Pagination toggleSidebar={() => {}} position="top" />
          <PageMain>
              {/* <PageMetaDebug /> */}
              <IntroLogo />
              <h1>This is the YouTube content</h1>
              <h2>This is the h2 content</h2>
              <h3>This is the h2 content</h3>
              <h4>This is the h2 content</h4>
              <p>We'll be doing a special <a href="/test">launch livestream in collaboration</a> with the folks at the <span color="contrast">CodeItLive Twitch</span> channel. Join us along with guests such as Sarah Drasner, Josh W. Comeau, and Kent C. Dodds to discuss this past year's JavaScript trends!</p>
              <NewsletterBlock heading="Newsletter!" description="this is the best newsletter ever"/>
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


