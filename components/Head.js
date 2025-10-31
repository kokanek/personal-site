import React from 'react'
import Head from "next/head";

const MetaHead = () => {
  // const { getToolName } = useTools()

  let overrides = {}
  // const toolName = getToolName(context)
  // if (toolName) {
  //     overrides.title = `${websiteTitle}: ${toolName}`
  // 

  const mergedMeta = [
    { charset: 'utf-8' },
    { name: 'description', content: 'Kapeel Kokane' },
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
      <Head meta={mergedMeta} defaultTitle={"Kapeel Kokane"}>
        <html lang="en" />
        <link rel="icon" type="image/png" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.gstatic.com/" crossOrigin="true" />
        <link
          href="https://fonts.googleapis.com/css?family=IBM+Plex+Mono:300,300i,500,600"
          rel="stylesheet"
        />
      </Head>
    </>
  )
}

export default MetaHead
