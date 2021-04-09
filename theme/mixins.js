import { css } from 'styled-components'

export const screenReadersOnlyMixin = css`
    border: 0;
    clip: rect(0 0 0 0);
    clip-path: polygon(0px 0px, 0px 0px, 0px 0px);
    -webkit-clip-path: polygon(0px 0px, 0px 0px, 0px 0px);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    width: 1px;
    white-space: nowrap;
`

export const textShadowMixin = (color) => css`
    text-shadow: 0px 2px 3px;
`

export const textShadowHighlightMixin = (color, transparency = 0.1) => css`
    text-shadow: 0px 2px 7px;
`

export const fancyLinkMixin = ({ color, activeClassName = '_is-active', activeColor }) => css`
    position: relative;
    text-decoration: none;
    transition: all ease-in 300ms;

    a,
    a:link,
    a:visited,
    a:active,
    a:focus {
        color: ${color};
    }

    &.${activeClassName} {
        color: ${activeColor};
        ${textShadowMixin(activeColor)}

        > span::before {
            background-color: ${activeColor};
        }
    }

    &:hover {
        text-decoration: none;
        ${textShadowHighlightMixin(color)}

        > span::before {
            transform-origin: bottom left;
            transform: scaleX(1);
        }
    }
`

export const antsMixin = (background, foreground) => css`
    /*
        // via https://codepen.io/danichk/pen/PPRxrR
@keyframes ants {
    to {
        background-position: 100% 100%;
    }
}

        */
    /*
       border: 1px solid transparent;
    background: linear-gradient($antsBg, $antsBg) padding-box,
        repeating-linear-gradient(-45deg, $antsFg 0, $antsFg 25%, transparent 0, transparent 50%) 0 /
            0.6em 0.6em;
    animation: ants 12s linear infinite;
    */
`
