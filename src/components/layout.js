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
            <div className="footer-1">
              <div className="footer-copy">
                <h3>About Line Height</h3>
                <p>
                Line Height is the creative outlet of Brad Samuelson (me), a cartoonist and web developer. 
                I have used my unique mix of skills to help clients and push personal projects in fun and 
                innovative directions. I've also used my combination of creativity and technical skills to 
                help engineering teams focus on user experience, visual polish, and performance with clean 
                scalable CSS and front-end development using a wide range of technologies.
                </p>
                <p>
                For as long as I can remember, I've been drawing and creating stories. I began posting 
                comics online in 2008 with my first comic strip, <em>As the Grass Grows.</em> In 2013, I created 
                the sci-fi graphic novel, <em>Sector Four</em>, and followed that up with my humor strip, <em>Change Log</em>, 
                in 2016. <em>Change Log</em> follows the antics and adventures of a technology journalist dog and his 
                software developer (and human) roommate. I'm currently working on a pirate adventure comic called
                <em>Near the Wind</em>, which I'll be releasing soon.
                </p>
              </div>
              <div className="footer-image" />
            </div>
            <div className="copyright">Copyright © {new Date().getFullYear()} Bradley Samuelson | <Link to="/privacy/">Privacy Policy</Link></div>
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
