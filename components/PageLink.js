import React from 'react'
import PropTypes from 'prop-types'
import Link from 'next/link'

const PageLink = ({ page, children, className, activeClassName, onClick }) => (
  <a className={className} activeClassName={activeClassName}>
    <Link href={page.path}>
      <a>{children}</a>
    </Link>
  </a>
)

PageLink.propTypes = {
  page: PropTypes.shape({
      path: PropTypes.string,
  }),
}

export default PageLink
