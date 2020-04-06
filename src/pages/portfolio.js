import React from "react"

import scrollTo from 'gatsby-plugin-smoothscroll';

import Layout from "../components/layout"
import SEO from "../components/seo"
import { UtilityNav } from "../components/utility-nav"
import { DesignGallery } from "../components/design"
import { Link } from "gatsby"

const Portfolio = () => (
  <Layout>
    <SEO title="Portfolio" />
    <section className="secondary-container">
        <div className="secondary-content">
            <div className="secondary-page-logo">
            <Link to="/">
                <img src="https://yyq3zw.dm.files.1drv.com/y4mi0btWuhnIMLYa8Q8feBQbwMD2sAIjIwr5Qvvq2SxhRyfzUKe_UDp57ArjPv3FupqWPQzVAcNvIrMsBJ0md2Xq4IqPzYA5RkgrhjJej2f8hjtvQfTY13h2rEzDmhmZXCQQGLyvYDnQlWjIRo37EnQjcX52QCd6mg1MGhLfaozjceoQzFjnTQVqzbvjr12ox7i" alt="Line Height - Cartoons and Code" className="logo-lg" />
            </Link>
            </div>
            <h1>Portfolio</h1>
            <p>
                I've had the opportunity to work on a wide range of projects over the years in a variety of
                different capacities but my areas of experties are in UX development, CSS architecture, and 
                UX design. Below are a few examples of my work. Feel free to contact me for more information 
                or if you have a project for which you think I might be a good fit.
            </p>
            <div className="portfolio-container">
                <ul className="portfolio-menu">
                    <li><button onClick={() => scrollTo('#css')} className="portfolio-menu-button">CSS Architecture</button></li>
                    <li><button onClick={() => scrollTo('#fe-dev')} className="portfolio-menu-button">Front-end Development</button></li>
                    <li><button onClick={() => scrollTo('#ux')} className="portfolio-menu-button">UX Design</button></li>
                </ul>
                <div className="portfolio-content">
                    <a id="css" className="page-anchor" />
                    <section className="css-architecture">
                        <h2>CSS Architecture</h2>
                        <p>
                            For the past several years I've worked on large projects as the CSS subject matter expert
                            helping to provide styling and CSS architecture of multiple design systems. The 
                            most recent one is <a href="https://preamp.design/#/core/buttons/Button" alt="PreAmp" target="_blank" rel="noopener noreferrer">PreAmp</a> where I was responsible
                            for creating the custom CSS framework called 
                            Mixer. 
                        </p>
                        My responsibilities included:
                        <ul>
                            <li>Creating the architecture used in the framework, including file structure, standards, methodology
                                for styling components, and naming conventions.
                            </li>
                            <li>
                                Setting up a theming system using CSS Custom Properties that can be manipulated by the component JavaScript.
                            </li>
                            <li>
                                Integrating the Tailwind CSS framework and creating rules around how it would be used within Mixer.
                            </li>
                            <li>Training developers on best practices for using the system and CSS in general.</li>
                        </ul>
                        
                        <a href="https://preamp.design/#/mixer/getting-started" className="code-button" target="_blank" title="Mixer" rel="noopener noreferrer">
                            Mixer CSS Framework
                        </a>
                    </section>
                    <section className="front-end-dev">
                        <a id="fe-dev" className="page-anchor" />
                        <h2>Front-end Development</h2>
                        <p>In the <a href="https://preamp.design/#/core/buttons/Button" alt="PreAmp" target="_blank" rel="noopener noreferrer">PreAmp Design System</a>, I worked to create reusable components with React and Typescript.
                            I created components of varying complexity, from buttons and form elements to loaders, expandable cards and tables. 
                            As the CSS subject matter expert, I was also responsible for making sure components matched 
                            specifications from the product design team.
                        </p>
                        <p>
                            One of the more complicated and fun components that I had the opportunity to work on was creating 
                            an SVG icon system that would convert SVG files into React components called Signal. 
                            It includes various levels of customization, such as size and dual tone color support. It also included
                            the creation of a general icon component that could take any SVG code and display it with the Signal styles applied.
                        </p>
                        <a href="https://preamp.design/#/signal" className="code-button" target="_blank" title="Signal" rel="noopener noreferrer">
                            Signal Icon System
                        </a>

                    </section>
                    <section className="ux-design">
                        <a id="ux" className="page-anchor" />
                        <h2>UX Design</h2>
                        <p>In addition to coding and styling components, I've also worked as a UX designer working 
                            on a number of web applications and features for existing applications. Click on an image below to see a larger version.
                        </p>
                        <DesignGallery />
                    </section>
                </div>
            </div>

            <UtilityNav />
        </div>
    </section>
    
  </Layout>
)

export default Portfolio