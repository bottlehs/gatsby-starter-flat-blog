import React from 'react'
import { useStaticQuery, graphql, Link } from 'gatsby'
import { ThemeToggler } from 'gatsby-plugin-dark-mode'
import { RiSunFill, RiMoonClearFill } from 'react-icons/ri'

const Layout = ({ location, title, children }) => {
  const data = useStaticQuery(graphql`
    query LayoutQuery {
      site {
        siteMetadata {
          copyright
        }
      }
    }
  `)
  const copyright = data.site.siteMetadata.copyright
  const rootPath = `${__PATH_PREFIX__}/`
  console.log(location.pathname)
  const isRootPath =
    location.pathname === rootPath || location.pathname === '/tags'
  let header

  if (isRootPath) {
    header = (
      <h1 className="main-heading">
        <Link to="/" title={title}>
          {title}
        </Link>
      </h1>
    )
  } else {
    header = (
      <Link className="header-link-home" to="/" title={title}>
        {title}
      </Link>
    )
  }

  return (
    <div>
      <div className="top">
        <ul className="navbar">
          <li>
            <Link className="" to="/">
              Blog
            </Link>
          </li>
          <li>
            <Link className="" to="/about">
              About
            </Link>
          </li>
        </ul>

        <div className="theme">
          <ThemeToggler>
            {({ theme, toggleTheme }) => (
              <div>
                <input
                  id="toggle"
                  type="checkbox"
                  onChange={(e) =>
                    toggleTheme(e.target.checked ? 'dark' : 'light')
                  }
                  checked={theme === 'dark'}
                />{' '}
                <label for="toggle">
                  {theme === 'dark' ? <RiSunFill /> : <RiMoonClearFill />}
                </label>
              </div>
            )}
          </ThemeToggler>
        </div>
      </div>
      <div className="global-wrapper" data-is-root-path={isRootPath}>
        <header className="global-header">{header}</header>
        <main>{children}</main>
        <footer>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://gatsby-starter-flat-blog.netlify.app">{copyright}</a>
        </footer>
      </div>
    </div>
  )
}

export default Layout
