import React from "react"

import { Twitter, Instagram, Youtube, Email } from './icons';

export const UtilityNav = () => {
    return (
        <div className="utility-nav">
            <a className="utility-link" href="/store">Store</a>
            <a href="https://www.instagram.com/line_height/" rel="noopener noreferrer" target="_blank" title="Instagram"><Instagram /></a>
            <a href="https://twitter.com/line_height/" rel="noopener noreferrer" target="_blank" title="Twitter"><Twitter /></a>
            <a href="https://www.youtube.com/channel/UCZGFHTzKTaY_O2Ph8aMUArw" rel="noopener noreferrer" target="_blank" title="YouTube"><Youtube /></a>
            <a href="mailto:brad@lineheight.co"><Email /></a>
        </div>
    )
};