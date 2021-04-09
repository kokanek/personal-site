import React from 'react'
import PropTypes from 'prop-types'
import Link from 'next/link'

const PageLink = ({ page, children, className, activeClassName, onClick }) => (
  <div className={className}>
    <Link href={page.path} className={activeClassName}>
      <a>{children}</a>
    </Link>
  </div>
)

PageLink.propTypes = {
  page: PropTypes.shape({
      path: PropTypes.string,
  }),
}

export default PageLink
