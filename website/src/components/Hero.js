/* eslint-disable react/jsx-no-target-blank */
import React from 'react'
import { Link } from 'react-router-dom'

function Hero () {
    return (
        <div className="lg:mb-32 mb-10">
            <div className="container mx-auto px-4">
                <h1 className="lg:text-7xl lg:mt-16 mt-5  dark:text-white text-5xl bg-clip-text heading">
                    Simple and Creative buttons with sButtons.
                </h1>
                <div className="lg:mt-10 mt-9">
                    <Link to="/documentation" className="sbtn fill-color-btn down-fill blue-btn font-medium mr-3.5">
                        Documentation
                    </Link>
                    <a href="https://raw.githubusercontent.com/sButtons/sbuttons/master/dist/sbuttons.min.css" 
                        target="_blank"
                        className="sbtn fill-color-btn up-fill red-btn font-medium mr-3.5">
                        Download
                    </a>
                    <a href="https://www.buymeacoffee.com/shahednasser" 
                        target="_blank"
                        className="sbtn fill-color-btn down-fill orange-btn font-medium">
                        Buy Me a Coffee ☕️
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Hero