import React from 'react'
import { FiCode } from 'react-icons/fi'
import Code from '../../components/Code'
import Header from '../../components/Header'
import Hero from '../../components/Hero'
import Meta from '../../components/Meta'

function Home () {
    return (
        <div className="home">
            <Meta />
            <Header />
            <Hero />
            <div className="content container px-4 mx-auto">
                <section className="p-4">
                    <h2 className="text-3xl font-bold text-red-600">
                        <span className="inline-block mr-3 align-middle">
                            <FiCode size="2rem" />
                        </span>
                        Installation
                    </h2>
                    <div className="gap-12 grid md:grid-cols-2 text-xl mt-2">
                        <p>
                            Install sButttons’s source LESS via npm.
                            Package managed installs don’t include documentation or our full build scripts. 
                            You can also use our npm.
                        </p>
                        <div>
                            <Code code={`npm install sbuttons`} language="shell" />
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default Home