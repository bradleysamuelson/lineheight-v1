import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { UtilityNav } from "../components/utility-nav"
import { Link } from "gatsby"

const PrivacyPolicy = () => (
  <Layout>
    <SEO title="Page two" />
    <section className="secondary-container">
        <div className="secondary-content">
            <div className="secondary-page-logo">
            <Link to="/"><img src="https://yyq3zw.dm.files.1drv.com/y4mi0btWuhnIMLYa8Q8feBQbwMD2sAIjIwr5Qvvq2SxhRyfzUKe_UDp57ArjPv3FupqWPQzVAcNvIrMsBJ0md2Xq4IqPzYA5RkgrhjJej2f8hjtvQfTY13h2rEzDmhmZXCQQGLyvYDnQlWjIRo37EnQjcX52QCd6mg1MGhLfaozjceoQzFjnTQVqzbvjr12ox7i" alt="Line Height - Cartoons and Code" className="logo-lg" />
            </Link>
            </div>
            <h1>Privacy Policy</h1>
            <p>We do not sell or share any information that is collected from visitors of this site. Information is collected via cookies, which may log data regarding your visit such as your IP address and the name and/or location of your internet provider. The visitor may opt to enter additional information (such as name, and e-mail address) to submit the contact form or other features of the stie. This information is only used in the context of these features and is not retained for any other purposes. Visitors may block cookie usage via their personal browser settings, but it may disable some functionality of the site.
            </p>
            <p>When you subscribe or buy something from our store, we receive some personal information. This can include name, email address, and shipping address. As we said, we won’t sell or share this information. Email and shipping addresses will only be used to deliver requested products or services. If you have any questions or comments on the above policies, feel free to contact us.</p>
            <UtilityNav />
        </div>
    </section>
    
  </Layout>
)

export default PrivacyPolicy