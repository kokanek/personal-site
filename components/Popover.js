import React, { memo, useState, useCallback, useEffect, useRef } from 'react'
import styled from 'styled-components'
import { mq, spacing, fontSize, color, zIndex } from '../theme'

const svgs = {
    top: <polygon stroke="#000" points="0,50 100,50 50,0" />,
    bottom: <polygon stroke="#000" points="0,0 100,0 50,50" />,
}

const Popover = ({ position = 'bottom', positionOpen = 'top', trigger, label, children }) => {
    const wrapperRef = useRef(null)

    const [isOpened, setIsOpened] = useState(false)
    const toggle = useCallback(() => {
        setIsOpened((flag) => !flag)
    }, [setIsOpened])

    const handleClickOutside = useCallback(
        (event) => {
            if (isOpened && wrapperRef.current && !wrapperRef.current.contains(event.target)) {
                setIsOpened(false)
            }
        },
        [isOpened]
    )

    useEffect(() => {
        document.addEventListener('click', handleClickOutside, false)
        return () => {
            document.removeEventListener('click', handleClickOutside, false)
        }
    }, [handleClickOutside])

    const triggerComponent = trigger ? (
        React.cloneElement(trigger, { onClick: toggle })
    ) : (
        <PopoverToggle className="PopoverToggle" onClick={toggle}>
            <span>{label}</span>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 50">
                {isOpened ? svgs[positionOpen] : svgs[position]}
            </svg>
        </PopoverToggle>
    )

    return (
        <Container
            className={`Popover Popover--${position} ${isOpened ? '_is-opened' : '_is-closed'}`}
        >
            <PopoverInner className="PopoverInner">
                {triggerComponent}
                <PopoverPopup ref={wrapperRef} className="PopoverPopup" position={position}>
                    {children}
                </PopoverPopup>
            </PopoverInner>
        </Container>
    )
}

const Container = styled.div`
    .Pagination & {
        @media ${mq.smallMedium} {
            display: none;
        }
    }

    .Sidebar & {
        margin-bottom: ${spacing(1)};
        border: ${({ theme }) => theme.separationBorder};

        @media ${mq.large} {
            display: none;
        }
    }
`

const PopoverInner = styled.div`
    position: relative;

    .Sidebar & {
        padding: 8px 12px;
    }
`

const PopoverToggle = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: ${fontSize('medium')};
    cursor: pointer;

    span {
        display: block;
        margin-right: ${spacing(0.25)};
    }

    svg {
        display: block;
        width: 12px;
        position: relative;
        polygon {
            fill: ${({ theme }) => theme.colors.text};
        }
    }

    .Pagination & {
        padding: ${spacing(1)};
    }

    @media ${mq.smallMedium} {
        font-size: ${fontSize('small')};
    }
`

const ARROW_SIZE = 18

const PopoverPopup = styled.div`
    @media ${mq.small} {
        width: 100%;
    }
    @media ${mq.mediumLarge} {
        width: 300px;
    }
    position: absolute;
    top: 125%;
    left: 50%;
    padding: ${spacing(1)};
    background: ${color('backgroundAlt')};
    border: ${(props) => props.theme.separationBorder};
    transform: translateX(-50%);
    z-index: ${zIndex('popover')};
    box-shadow: ${({ theme }) => theme.blockShadow};

    &:before {
        left: 50%;
        border: solid transparent;
        content: ' ';
        height: ${ARROW_SIZE}px;
        width: ${ARROW_SIZE}px;
        background: ${(props) => props.theme.colors.backgroundAlt};
        position: absolute;
        pointer-events: none;
        transform-origin: center center;
        border: ${(props) => props.theme.separationBorder};
        top: 0;
        transform: translate(${ARROW_SIZE * -0.5}px, ${ARROW_SIZE * -0.5}px) rotate(-45deg);
        border-bottom: 0;
        border-left: 0;
    }
    
    @media ${mq.smallMedium} {
        top: 145%;
    }
        
    @media ${mq.xSmall} {
        max-width: 90vw;
    }
    
    .Popover._is-closed & {
        display: none;
        // @include sr-only;
    }
}
`

export default memo(Popover)
