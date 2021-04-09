import {useState} from 'react';
import { createGlobalStyle, ThemeProvider } from 'styled-components'
import Head from "next/head";
import { GlobalStyle } from '../theme';
import themes from '../theme/themes/index'
import { mergePageContext } from '../helpers/pageHelpers'
import { PageContextProvider } from '../helpers/pageContext'

// const theme = {
//   colors: {
//     primary: '#0070f3',
//   },
// }

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
            {props.context.id === 'report' ? <ReportLayout {...props} />:<MainLayout {...props} />}
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
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}
