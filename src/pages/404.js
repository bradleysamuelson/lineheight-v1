import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Link } from "gatsby"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <section className="secondary-container">
        <div className="secondary-content">
            <div className="secondary-page-logo">
            <Link to="/"><img src="https://yyq3zw.dm.files.1drv.com/y4mi0btWuhnIMLYa8Q8feBQbwMD2sAIjIwr5Qvvq2SxhRyfzUKe_UDp57ArjPv3FupqWPQzVAcNvIrMsBJ0md2Xq4IqPzYA5RkgrhjJej2f8hjtvQfTY13h2rEzDmhmZXCQQGLyvYDnQlWjIRo37EnQjcX52QCd6mg1MGhLfaozjceoQzFjnTQVqzbvjr12ox7i" alt="Line Height - Cartoons and Code" className="logo-lg" />
            </Link>
            </div>
          <h1>Uh Oh...</h1>
          <p>This page doesn&#39;t exist... click the giant logo above to go back.</p>
      </div>
    </section>
  </Layout>
)

export default NotFoundPage
