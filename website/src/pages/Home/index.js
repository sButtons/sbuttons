import React from 'react'
import Header from '../../components/Header'
import Hero from '../../components/Hero'
import Meta from '../../components/Meta'

function Home () {
    return (
        <div className="home">
            <Meta />
            <Header />
            <Hero />
        </div>
    )
}

export default Home