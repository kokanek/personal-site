import React from 'react'
import Link from 'next/link'
import { usePageContext } from '../helpers/pageContext'
import get from 'lodash/get'

const LocaleLink = ({ to, ...rest }) => {
    const context = usePageContext()
    return <Link href={'/'}><a></a></Link>
}

export default LocaleLink
