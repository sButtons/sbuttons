import React, { useCallback, useEffect, useMemo, useRef } from 'react'
import { FiMenu } from 'react-icons/fi'
import 'animate.css';

function MenuToggler () {
    const menuToggleRef = useRef(null)
    const openClasses = useMemo(() => {
            return ['animate__slideInLeft']
        }, []),
        closeClasses = useMemo(() => {
            return ['animate__slideOutLeft', '-left-full']
        }, [])

    const changeSidebarClassesCallback = useCallback((add, remove) => {
        const menu = document.getElementById('sidebar')
        if (menu) {
            menu.classList.remove(...remove)
            menu.classList.add(...add)
        }
    }, [])

    function toggleSidebar () {
        const menu = document.getElementById('sidebar')
        if (menu) {
            let add = openClasses,
                remove = closeClasses
            if (menu.classList.contains(openClasses)) {
                add = closeClasses
                remove = openClasses
            }
            
            changeSidebarClassesCallback(add, remove)
        }
    }

    const closeSidebarCallback = useCallback(() => {
        changeSidebarClassesCallback([closeClasses[0]], openClasses)
    }, [changeSidebarClassesCallback, closeClasses, openClasses])

    const clickOutsideSidebarCallback = useCallback((e) => {
        const menu = document.getElementById('sidebar')
        // Check that the clicked element isn't the toggler button
        // and isn't inside the sidebar and the sidebar is opened
        if (e.target && menuToggleRef && menu && 
            menuToggleRef.current && e.target.id !== 'sidebar' && 
            !e.target.isSameNode(menuToggleRef.current) && 
            !menuToggleRef.current.contains(e.target) && 
            !menu.contains(e.target) && 
            menu.classList.contains(openClasses)
        ) {
                closeSidebarCallback()
        }
    }, [closeSidebarCallback, openClasses])

    const resizeListener = useCallback(() => {
        if (window.innerWidth >= 768) {
            changeSidebarClassesCallback([closeClasses[1]], closeClasses)
        }
    }, [changeSidebarClassesCallback, closeClasses])

    const clickSidebarLinks = useCallback((e) => {
        if (window.innerWidth < 768 && e.target && e.target.classList.contains('sidebar-item')) {
            closeSidebarCallback()
        }
    }, [closeSidebarCallback])

    useEffect(() => {
        window.addEventListener('resize', resizeListener)
        document.body.addEventListener('click', clickOutsideSidebarCallback)
        document.addEventListener('click', clickSidebarLinks)

        return () => {
            window.removeEventListener('resize', resizeListener)
            document.body.removeEventListener('click', clickOutsideSidebarCallback)
            document.removeEventListener('click', clickSidebarLinks)
        }
    }, [resizeListener, clickOutsideSidebarCallback, clickSidebarLinks])

    return (
        <div className="md:hidden flex sm:w-1/12 w-2/12 sm:pl-0 pl-3">
            <button className="focus:outline-none hover:opacity-100 opacity-40 transition-none" 
                onClick={toggleSidebar}
                ref={menuToggleRef}>
                <FiMenu size="1.5rem" />
            </button>
        </div>
    )
}

export default MenuToggler