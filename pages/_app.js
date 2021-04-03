import {useState} from 'react';
import { createGlobalStyle, ThemeProvider } from 'styled-components'
import { GlobalStyle } from '../theme';
import themes from '../theme/themes/index'

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
            <Head />
            {props.context.id === 'report' ? <ReportLayout {...props} />:<MainLayout {...props} />}
        </ThemeProvider>
    )
}

export default function App({ Component, pageProps }) {

  const [themeId, setThemeId] = useState('test')

  return (
    <>
      <ThemeProvider theme={themes[themeId]}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}
