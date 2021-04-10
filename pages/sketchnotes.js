import React, {useState} from 'react';
import styled, { css, useTheme } from 'styled-components';
import classNames from 'classnames'
import Pagination from '../components/Pagination';
import NewsletterBlock from '../components/NewsletterBlock';
import { Sidebar } from '../components/sidebar';
import { mq, spacing } from '../theme'
import Image from 'next/image'

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
          <Pagination toggleSidebar={toggleSidebarState} position="top"/>
          <PageMain>
            <h1>📝 Sketchnotes</h1>
            <h3>I also create one-pager notes called <span style={{color: theme.colors.contrast}}>Sketchnotes</span> like the one below.</h3>
            <h3>If you like that, you can find and download more for FREE on my <a href="https://gumroad.com/kapeelkokane">gumroad page</a> 🎁</h3>
            <ImageContainer>
              <Image
                src="/prototypal.png"
                alt="Prototypal inheritance in JavaScript"
                width={720}
                height={1080}
              />
            </ImageContainer>
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


