import React from 'react'
import Helmet from 'react-helmet'

const Head = () => {
    // const { getToolName } = useTools()

    let overrides = {}
    // const toolName = getToolName(context)
    // if (toolName) {
    //     overrides.title = `${websiteTitle}: ${toolName}`
    // 

    const mergedMeta = [
        { charset: 'utf-8' },
        { name: 'description', content: 'Kapeel Kokane developer web site' },
        // responsive
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        // google check
        {
            name: 'google-site-verification',
            content: 'hrTRsz9fkGmQlVbLBWA4wmhn0qsI6_M3NKemTGCkpps',
        },
    ]

    return (
        <>
            <Helmet meta={mergedMeta} defaultTitle={"Kapeel Kokane"}>
                <html lang="en" />
                <title>{"Kapeel Kokane"}</title>
                <link rel="shortcut icon" href="favicon.png" />
                <link rel="preconnect" href="https://fonts.gstatic.com/" crossOrigin />
                <link
                    href="https://fonts.googleapis.com/css?family=IBM+Plex+Mono:300,300i,500,600"
                    rel="stylesheet"
                />
            </Helmet>
        </>
    )
}

export default Head
