import React from "react"

import scrollTo from 'gatsby-plugin-smoothscroll';

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Link } from "gatsby"
import { UtilityNav } from "../components/utility-nav"
import { CartoonGallery } from "../components/gallery"
import { Email, GitHub } from '../components/icons';

import "../styles/main.scss"

const IndexPage = () => (
  <Layout>
    <SEO title="Cartoons and Code" />
    <section className="overview-container">
        <div className="overview-content">
            <div className="overview-1">
                <img src="https://yyq3zw.dm.files.1drv.com/y4mi0btWuhnIMLYa8Q8feBQbwMD2sAIjIwr5Qvvq2SxhRyfzUKe_UDp57ArjPv3FupqWPQzVAcNvIrMsBJ0md2Xq4IqPzYA5RkgrhjJej2f8hjtvQfTY13h2rEzDmhmZXCQQGLyvYDnQlWjIRo37EnQjcX52QCd6mg1MGhLfaozjceoQzFjnTQVqzbvjr12ox7i" alt="Line Height - Cartoons and Code" className="logo-lg" />
                <div className="overview-copy">
                Cartoons and Code can seem like an odd pairing, however at their essence, both disciplines are about solving problems and telling stories. I'm passionate about both.
                </div>
                <div className="overview-buttons">
                    <button onClick={() => scrollTo('#comics')}>More About Cartoons</button>
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
    <section className="comics-container">
        <a id="comics" className="page-anchor" />
        <div className="comics-content">
            <div className="comics-copy">
                <h2>Cartoons &amp; Comics</h2>
                <p>Telling stories through comics is one of the most rewarding, difficult, and fun forms of storytelling. I've worked on a number of comics in many different capacities. Currently I'm working on a comic called Near the Wind about anthropomorphic pirates. I'm also making an attempt to draw every day. I sometimes achieve that goal. You can check out some of my cartoons below.</p>
            </div>
            <ul className="comics-links">
                <li><a href="https://www.nearthewind.com/" target="_blank" className="comic-ntw" title="Near the Wind" rel="noopener noreferrer"><span>Near the Wind</span></a></li>
                <li><a href="https://changelogcomic.com/" target="_blank" className="comic-cl" title="Change Log" rel="noopener noreferrer"><span>Change Log</span></a></li>
                <li><a href="http://sectorfour.com/" target="_blank" className="comic-s4" title="Sector Four" rel="noopener noreferrer"><span>Sector Four</span></a></li>
                <li><a href="http://www.asthegrassgrows.com/" target="_blank" className="comic-atgg" title="As the Grass Grows" rel="noopener noreferrer"><span>As the<br />Grass Grows</span></a></li>
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
    <section className="code-container">
        <a id="code" className="page-anchor" />
        <div className="code-content">
            <div className="code-copy">
                <h2>Code</h2>
                <p>
                    Coding is another form of storytelling. As a designer and engineer for the 
                    past 10+ years, my goal is to create user interfaces and experiences that help 
                    users understand the story and accomplish their goals as seamlessly and efficiently 
                    as possible. In working with other engineers (front-end, back-end, or full-stack) 
                    I've been able to successfully bridge the gap between the design and development 
                    sides of the story. This is where my focus has been lately, 
                    creating <a href="https://preamp.design/#/core/buttons/Button" title="PreAmp Design System" target="_blank" rel="noopener noreferrer">design systems</a>, 
                    reusable components, style guides and 
                    CSS <a href="https://preamp.design/#/mixer/getting-started" target="_blank" title="Mixer" rel="noopener noreferrer">frameworks</a>. If this is a need of you or your company, I'd love to connect to see if we'd be a good fit.
                </p>
            </div>
            <div className="code-1">
                <ul className="code-actions">
                    <li>
                        <Link to="/portfolio" className="code-button">Portfolio</Link>
                    </li>
                    <li>
                        <a href="mailto:brad@lineheight.co" className="code-button" title="Email">
                            <Email /> Email Me
                        </a>
                    </li>
                    <li>
                        <a href="https://github.com/bradleysamuelson/" className="code-button" target="_blank" title="GitHub">
                            <GitHub /> GitHub
                        </a>
                    </li>
                </ul>
                <div className="code-brad">
                    <img src="https://bxldwq.dm.files.1drv.com/y4mte0UdOCKfJdm5kis22fnyeq5qvLMVRiy27BqYMD5PA1HW4ROaSPJF_8GqZ40Xjbz3k59efVx3GwidXBMI6yygIKgqPDWxqblGr_IKTkWOOu5_KMmwIm0l4ZbF92s2qRKZy5Y3unruBdEYQQUUocc7GZ91-ALBvrqana0oBR65UoE6xMTxIoX2kuvPDGi2LdI" alt="Code" />
                </div>
            </div>
        </div>
    </section>
  </Layout>
)

export default IndexPage
