import React from 'react'
import Header from '../components/Header'
import Meta from '../components/Meta'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function Common ({activePage = null}) {
    return (
        <div>
            <Meta />
            <ToastContainer />
            <Header activePage={activePage} />
        </div>
    )
}

export default Common