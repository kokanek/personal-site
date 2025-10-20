import React from 'react'
import ShareLink from './ShareLink'

const ShareYouTube = () => {

  return (
    <ShareLink
      media="youtube"
      href={"https://www.youtube.com/@codesketched"}
      target="_blank"
      rel="noopener noreferrer"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="64"
        height="64"
        viewBox="0 0 64 64"
        aria-hidden="true"
      >
        <path data-name="layer1"
          d="M49.539 12H14.461A12.4 12.4 0 0 0 2 24.327v17.346A12.4 12.4 0 0 0 14.461 54h35.078A12.4 12.4 0 0 0 62 41.673V24.327A12.4 12.4 0 0 0 49.539 12z"
          fill="none" stroke="#202020" stroke-linecap="round" stroke-miterlimit="10"
          stroke-width="2" stroke-linejoin="round"></path>
        <path data-name="layer2" d="M41.111 33.844L24.7 41.585a.658.658 0 0 1-.938-.585V25.031a.659.659 0 0 1 .956-.581l16.407 8.225a.649.649 0 0 1-.014 1.169z"
          fill="none" stroke="#202020" stroke-linecap="round" stroke-miterlimit="10"
          stroke-width="2" stroke-linejoin="round"></path>
      </svg>
    </ShareLink>
  )
}

export default ShareYouTube
