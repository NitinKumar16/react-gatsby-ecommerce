import React from 'react'
import BackgroundImage from 'gatsby-background-image'

export default function Herosection({img,title,subtitle,heroclass}) {
    return (
        <BackgroundImage
            className={heroclass}
            fluid={img}
        >
            <h1 className="headline">{title}</h1>
            <div>
                <h2 className="headline2">{subtitle}</h2>

            </div>
        </BackgroundImage>
    )
}

