import React from "react"

import { Link } from "gatsby"
import PropTypes from "prop-types"
import { UtilityNav } from "./utility-nav"

const Header = ({ siteTitle }) => (
  <header>
      <div className="header-content">
        <Link
          to="/"
        >
          <img src="https://osl0fa.dm.files.1drv.com/y4mqq8WAwhh-ZeBXEMGjRi2c3DHwcGHVnvS5EcLvbaI4XZGV7eqHhBpg4MxTi85QOXMeTTaXNe-uxlTFQ6WQzk5T3N49MgaBO-HsjnqV8H42t7uN1ue9jLSghgDOFA6p0bvAvBuYv6-V3Y43KswBQWSmMoGJADxYtgidDazo2i5RfX9CEX6xLG4dfdMVzBfJjS4" alt="Line Height" className="header-logo" />
        </Link>
        <UtilityNav />
      </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
