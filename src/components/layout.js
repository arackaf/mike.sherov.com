import React from "react"
import { Link } from "gatsby"

import { rhythm } from "../utils/typography"

class Layout extends React.Component {
  render() {
    const { children, title } = this.props
    const navLinkStyles = {
      boxShadow: `none`,
      textDecoration: `none`,
      color: `inherit`,
    }
    const flexStyles = {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
    }
    const headerStyles = {
      ...flexStyles,
      marginBottom: rhythm(2),
    }
    const subnavLinkStyles = {
      ...navLinkStyles,
      paddingLeft: rhythm(1 / 2),
    }
    const pageHeader = (
      <header style={headerStyles}>
        <strong>
          <Link style={navLinkStyles} to={`/`}>
            {title}
          </Link>
        </strong>
        <nav style={flexStyles}>
          <Link style={subnavLinkStyles} to={`/about`}>
            About
          </Link>
          <Link style={subnavLinkStyles} to={`/blog`}>
            Posts
          </Link>
        </nav>
      </header>
    )

    return (
      <div
        style={{
          marginLeft: `auto`,
          marginRight: `auto`,
          maxWidth: rhythm(24),
          padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
        }}
      >
        {pageHeader}
        <main>{children}</main>
        <footer>© {new Date().getFullYear()}, Mike Sherov</footer>
      </div>
    )
  }
}

export default Layout
