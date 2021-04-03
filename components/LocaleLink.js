import React from 'react'
import { usePageContext } from '../helpers/pageContext'
import get from 'lodash/get'

const LocaleLink = ({ to, ...rest }) => {
    const context = usePageContext()
    return <a href="/" />
}

export default LocaleLink
