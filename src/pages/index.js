import React from "react"

import scrollTo from 'gatsby-plugin-smoothscroll';

import Layout from "../components/layout"
import SEO from "../components/seo"
import { UtilityNav } from "../components/utility-nav"
import { CartoonGallery } from "../components/gallery"

import "../styles/main.scss"

const IndexPage = () => (
  <Layout>
    <SEO title="Line Height" />
    <section className="overview-container">
        <div className="overview-content">
            <div className="overview-1">
                <img src="https://yyq3zw.dm.files.1drv.com/y4mi0btWuhnIMLYa8Q8feBQbwMD2sAIjIwr5Qvvq2SxhRyfzUKe_UDp57ArjPv3FupqWPQzVAcNvIrMsBJ0md2Xq4IqPzYA5RkgrhjJej2f8hjtvQfTY13h2rEzDmhmZXCQQGLyvYDnQlWjIRo37EnQjcX52QCd6mg1MGhLfaozjceoQzFjnTQVqzbvjr12ox7i" alt="Line Height - Cartoons and Code" className="logo-lg" />
                <div className="overview-copy">
                Cartoons and Code can seem like an odd pairing, however at their essence, both disciplines are about solving problems and telling stories. I'm passionate about both.
                </div>
                <div className="overview-buttons">
                    <button onClick={() => scrollTo('#comics', 100)}>More About Cartoons</button>
                    <button onClick={() => scrollTo('#code')}>More About Code</button>
                </div>
            </div>
            <div className="overview-2">
                <img src="https://codqza.dm.files.1drv.com/y4mVVRtCHR3Y2AMlk96mFsEx_LUlSOUGmrQV8C1UK13Bo70LHhytPP3Kic7JQ6MauQjPYpP24x-5U92DxPfrjduu5sWlc1p8vBr16ju5Se73-YhKaYbtvSLbwjXwu7BWAljrrS7FvlrJBABdEkRL_zuZZHYla4NKW2jVC9xKfuM2rVgnvqR3nRat_UVNogZXful" 
                    alt="Cartoon Brad" 
                    className="overview-brad" />
            </div>
            <UtilityNav />
        </div>
    </section>
    <section className="comics-container" id="comics">
        <div className="comics-content">
            <div className="comics-copy">
                <h2>Comics</h2>
                <p>Telling stories through comics is one of the most rewarding, difficult, and fun forms of storytelling. I've worked on a number of comics in many different capacities. Currently I'm working on a comic called Near the Wind about anthropomorphic pirates. I'm also making an attempt to draw every day. I sometimes achieve that goal. You can check out some of my cartoons below.</p>
            </div>
            <ul className="comics-links">
                <li>Near the Wind</li>
                <li>Change Log</li>
                <li>Sector Four</li>
                <li>As the Grass grows</li>
            </ul>
        </div>
    </section>
    <section className="cartoons-container">
        <div className="cartoons-content">
            <div className="gallery-container">
                <CartoonGallery />
            </div>
        </div>
    </section>
    <section className="code-container" id="code">
        <div className="code-content">
            <h2>Code</h2>
            <p>Coding is another form of storytelling. As a designer and engineer for the past 10+ years, my goal is to create user interfaces and experiences that help users understand the story and accomplish their goals as seamlessly and efficiently as possible. In working with other engineers (front-end, back-end, or full-stack) I've been able to successfully bridge the gap between the design and development sides of the story. This is where my focus has been lately, creating design systems(preamp.design), reusable components, style guides and CSS frameworks(mixer). If this is a need of you or your company, I'd love to connect to see if we'd be a good fit.
            </p>
            <p>
                Email me<br />
                Github
            </p>
        </div>
    </section>
  </Layout>
)

export default IndexPage
