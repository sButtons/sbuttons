import React from 'react'
import Header from '../components/Header'
import Meta from '../components/Meta'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function Common ({activePage = null, pageTitle = '', showMenuButton = false, children = []}) {
    return (
        <div className="sticky top-0 z-10">
            <Meta pageTitle={pageTitle} children={children} />
            <ToastContainer />
            <Header activePage={activePage} showMenuButton={showMenuButton} />
        </div>
    )
}

export default Common