import Document, { Html, Head, Main, NextScript } from 'next/document'
import { ServerStyleSheet } from 'styled-components'

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        })

      const initialProps = await Document.getInitialProps(ctx)
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      }
    } finally {
      sheet.seal()
    }
  }

  render() {
    return (
      <Html>
        <Head>
          <script
            type="text/javascript"
            dangerouslySetInnerHTML={{
              __html: `
                (function() {
                  try {
                    if(window.location && window.location.search && window.location.search.indexOf('capture-sitebehaviour-heatmap') !== -1) {
                      sessionStorage.setItem('capture-sitebehaviour-heatmap', '_');
                    }
               
                    var sbSiteSecret = '8609c854-3a16-4c5c-a469-b8e7201deaa5';
                    window.sitebehaviourTrackingSecret = sbSiteSecret;
                    var scriptElement = document.createElement('script');
                    scriptElement.defer = true;
                    scriptElement.id = 'site-behaviour-script-v2';
                    scriptElement.src = 'https://sitebehaviour-cdn.fra1.cdn.digitaloceanspaces.com/index.min.js?sitebehaviour-secret=' + sbSiteSecret;
                    document.head.appendChild(scriptElement); 
                  }
                  catch (e) {console.error(e)}
                })()
              `,
            }}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
