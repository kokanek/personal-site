import { useState } from 'react';
import { ThemeProvider } from 'styled-components'
import Head from "next/head";
import { GlobalStyle } from '../theme';
import themes from '../theme/themes/index'
const themeIds = ['state_of_js', 'state_of_css', 'test']

const ThemedLayout = (props) => {
  const [themeId, setThemeId] = useState('test')

  const switchTheme = useCallback(
    (event) => {
      if (event.code === 'KeyX') {
        setThemeId((current) => {
          const currentIndex = themeIds.findIndex((id) => id === current)
          if (currentIndex < themeIds.length - 1) {
            return themeIds[currentIndex + 1]
          }

          return themeIds[0]
        })
      }
    },
    [setThemeId]
  )

  useEffect(() => {
    if (ENV === 'development') {
      document.addEventListener('keypress', switchTheme)
    }

    return () => {
      document.removeEventListener('keypress', switchTheme)
    }
  }, [switchTheme])

  return (
    <ThemeProvider theme={themes[themeId]}>
      <GlobalStyle />
      {props.context.id === 'report' ? <ReportLayout {...props} /> : <MainLayout {...props} />}
    </ThemeProvider>
  )
}

export default function App({ Component, pageProps }) {

  const [themeId, setThemeId] = useState('state_of_js')

  return (
    <>
      <ThemeProvider theme={themes[themeId]}>
        <GlobalStyle />
        <Head defaultTitle={"Kapeel Kokane"}>
          <title>Kapeel Kokane</title>
          <link rel="shortcut icon" href="/favicon.ico" />
          <meta charset="UTF-8" />
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
          <meta name="robots" content="index, follow" />
          <meta name="description" content="Kapeel Kokane is a senior developer at Microsoft, YouTuber and a freelance Blogger." />
        </Head>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}
