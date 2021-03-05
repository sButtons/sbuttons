import React from 'react'
import Highlight, { defaultProps } from "prism-react-renderer"
import okaidia from "prism-react-renderer/themes/okaidia"


function Code ({code, language}) {

    return (
        <Highlight {...defaultProps} theme={okaidia} code={code} language={language}>
            {({ className, style, tokens, getLineProps, getTokenProps }) => (
            <pre className={className + ' p-3'} style={style}>
                {tokens.map((line, i) => (
                <div {...getLineProps({ line, key: i })}>
                    {line.map((token, key) => (
                    <span {...getTokenProps({ token, key })} />
                    ))}
                </div>
                ))}
            </pre>
            )}
        </Highlight>
    )
}

export default Code