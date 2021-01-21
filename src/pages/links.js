import React from "react"
import { Twitter, Instagram, Youtube, Facebook, Web, Shop } from '../components/icons';

const Links = () => (
    
        <div class="links-container">
            <img alt="Line_Height avatar" class="links-avatar" src="https://instagram.fagc1-2.fna.fbcdn.net/v/t51.2885-19/s320x320/129277410_765333067400024_7889603680361417086_n.jpg?_nc_ht=instagram.fagc1-2.fna.fbcdn.net&amp;_nc_ohc=Vv70-emlEz8AX9A8jIE&amp;tp=1&amp;oh=0fceea994c743928ed8b5b952bf1227f&amp;oe=6034E84F"></img>
            <a href="https://www.lineheight.co/store/" 
                className="code-button" 
                target="_blank" 
                title="Store" 
                rel="noopener noreferrer">
                <Shop /> My Store
            </a>
            <a href="https://www.youtube.com/channel/UCZGFHTzKTaY_O2Ph8aMUArw" 
                className="code-button" 
                target="_blank" 
                title="YouTube" 
                rel="noopener noreferrer">
                <Youtube /> My YouTube Channel
            </a>
            <a href="https://www.lineheight.co" 
                className="code-button" 
                target="_blank" 
                title="Website" 
                rel="noopener noreferrer">
                <Web /> My Website
            </a>
            <a href="https://www.instagram.com/line_height/" 
                className="code-button" 
                target="_blank" 
                title="Instagram" 
                rel="noopener noreferrer">
                <Instagram /> My Instagram
            </a>
            <a href="https://www.facebook.com/LineHeightComics" 
                className="code-button" 
                target="_blank" 
                title="Facebook" 
                rel="noopener noreferrer">
                <Facebook /> My Facebook page
            </a>
            <a href="https://www.twitter.com/line_height/" 
                className="code-button" 
                target="_blank" 
                title="Twitter" 
                rel="noopener noreferrer">
                <Twitter /> My Twitter
            </a>
        </div>
    
)

export default Links