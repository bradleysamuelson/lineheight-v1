/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import * as React from 'react';
import cx from 'classnames';
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"

const Layout = ({ children }) => {
  const [scrollY, setScrollY] = React.useState(0);

  // function checkScroll() {
  //   if (window.scrollY < 0) {
  //     setIsTop(false);
  //     console.log("top");
  //   } else {
  //     setIsTop(true);
  //     console.log("not top");
  //   }
  // };

  // React.useEffect(() => {
  //   window.addEventListener("scroll", checkScroll())
  // });
  React.useLayoutEffect(() => {
    const handleScroll = e => {
      setScrollY(window.scrollY)
    }

    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const headerClass = cx(
    'header-container',
    { 'header-container--visible': scrollY > 0 }
  );

  const contentClass = cx(
    'content-wrapper',
    { 'content-class--scrolled': scrollY > 0 } 
  );

  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <div className={headerClass}>
        <Header siteTitle={data.site.siteMetadata.title} />
      </div>
      <div className={contentClass}>
        <main>{children}</main>
        <footer>
          <div className="footer-content">
            Copyright © {new Date().getFullYear()} Bradley Samuelson | <Link to="/privacy/">Privacy Policy</Link>
          </div>
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
