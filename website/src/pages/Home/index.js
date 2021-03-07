/* eslint-disable react/jsx-no-target-blank */
import React from 'react'
import { FiCloud, FiCode } from 'react-icons/fi'
import Code from '../../components/Code'
import Footer from '../../components/Footer'
import Common from '../Common'
import Hero from '../../components/Hero'

function Home () {
    return (
        <div className="home">
            <Common />
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
                <section className="p-4">
                    <h2 className="text-3xl font-bold text-red-600">
                        <span className="inline-block mr-3 align-middle">
                            <FiCloud size="2rem" />
                        </span>
                        sButtons CDN
                    </h2>
                    <div className="gap-12 grid md:grid-cols-2 grid-cols-1 text-xl mt-2">
                        <p>
                            When you only need to include sButtons’ compiled CSS , you can use 
                            <a href="https://cdn.jsdelivr.net/npm/sbuttons/dist/sbuttons.min.css" 
                                target="_blank"
                                className="text-gray-600 dark:text-white underline-red ml-1"
                            >
                                sButtons CDN
                            </a>.
                        </p>
                        <div>
                            <Code code={`<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/sbuttons/dist/sbuttons.min.css">`} 
                                language="shell" />
                        </div>
                    </div>
                </section>
            </div>
            <Footer />
        </div>
    )
}

export default Home