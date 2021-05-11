import React from 'react' 
import CopyToClipboard from 'react-copy-to-clipboard'
import { toast } from 'react-toastify'
import { FiCopy } from 'react-icons/fi'

function Button ({classes, text, htmlContent}) {
    function getCopyClasses(classes) {
        classes = classes.trim()
        return "." + classes.replaceAll(new RegExp(/\s+/g), ".")
    }

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

    const copyClasses = classes ? getCopyClasses(classes) : ""

    function removePeriodsOnCopy (codeWithPeriods) {
        classes.replace('.', " ")
        return classes
    };

    return (
        <div className="flex flex-col items-center justify-items-center pb-5 pr-3 md:w-4/12 w-6/12">
            <button className={`${classes} max-w-full`}>
                {htmlContent && htmlContent.length && <div dangerouslySetInnerHTML={{__html: htmlContent}}></div>}
                {(!htmlContent || !htmlContent.length) && text}
            </button>
            <CopyToClipboard text={removePeriodsOnCopy({classes})} onCopy={showToast}>
                <span className="mt-3 text-gray-500 text-sm text-center cursor-pointer">
                    <FiCopy className="inline-block" />
                    <span className="pl-3">{copyClasses}</span>
                </span>
            </CopyToClipboard>
        </div>
    )
}

export default Button