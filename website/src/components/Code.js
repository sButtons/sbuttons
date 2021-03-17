import React from 'react'
import Highlight, { defaultProps } from "prism-react-renderer"
import okaidia from "prism-react-renderer/themes/okaidia"
import {CopyToClipboard} from 'react-copy-to-clipboard'
import { FiCopy } from 'react-icons/fi'
import { toast } from 'react-toastify'


function Code ({code, language, className=""}) {

    function showToast () {
        toast.success('Copied!', {
            className: 'dark:bg-gray-800',
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: false,
            draggable: false,
            progress: undefined,
        })
    }

    const classes = className

    return (
        <Highlight {...defaultProps} theme={okaidia} code={code} language={language}>
            {({ className, style, tokens, getLineProps, getTokenProps }) => (
            <div className={`relative ${classes}`}>
                <pre className={className + ' p-3 dark:bg-gray-700 overflow-x-auto overflow-y-hidden lg:w-11/12 w-10/12'} style={style}>
                {tokens.map((line, i) => (
                    <div {...getLineProps({ line, key: i })}>
                        {line.map((token, key) => (
                        <span {...getTokenProps({ token, key })} />
                        ))}
                    </div>
                    ))}
                </pre>
                <CopyToClipboard text={code} onCopy={showToast}>
                    <button className="group absolute bg-gray-700 cursor-pointer h-full right-0 text-white lg:w-1/12 w-2/12 top-0 focus:outline-none">
                        <FiCopy className="duration-100 group-hover:opacity-100 opacity-60 transition-opacity m-auto" />
                    </button>
                </CopyToClipboard>
            </div>
            )}
        </Highlight>
    )
}

export default Code