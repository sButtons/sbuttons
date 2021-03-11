import React, { useCallback, useEffect } from 'react' 
import { Link } from 'react-router-dom'

function SidebarLink ({text, to = "", level = 0, clickCallback = null, current = null}) {
    const active = current === to
    function scroll () {
        if (to.length) {
            const elm = document.querySelector(to)
            if (elm) {
                const header = document.querySelector('.sticky nav'),
                    headerOffset = header ? header.clientHeight : 0
                window.scroll({
                    top: Math.abs(elm.offsetTop - headerOffset),
                    behavior: 'smooth'
                })
            }
            if (clickCallback) {
                clickCallback(to)
            }
        }
    }

    const scrollCallback = useCallback(scroll, [clickCallback, to])

    useEffect (() => {
        if (window.location.href.indexOf(to) !== -1) {
            scrollCallback()
        }
    }, [scrollCallback, to])

    return (
        <Link to={to.length ? to : '#'} 
            onClick={scroll}
            className={`block ${active ? 'border-red-600' : ''} sidebar-item lg:w-max text-lg border-b-2 border-transparent hover:border-red-600 dark:text-white ml-${level * 3}`}>{text}</Link>
    )
}

export default SidebarLink