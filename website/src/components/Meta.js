import React from 'react';
import { Helmet } from 'react-helmet';

function Meta ({pageTitle = '', url = '/', children = {}}) {
    return (
        <Helmet>
            <title>{pageTitle ? pageTitle + ' - ' : ''}sButtons{!pageTitle ? ' - Simple buttons you can use easily for your next project.' : ''}</title>
            <meta name="description" content="Simple buttons you can use easily for your next project." />
            <meta name="keywords" content="css, less, buttons, simple, project, github, open source, contribute, first timers, animation, hover, basic, social, login" />
            <meta name="og:url" content={url} />
            <meta name="og:type" content="website" />
            {children}
        </Helmet>
    )
}

export default Meta