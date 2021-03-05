import React from 'react';
import { Link } from 'react-router-dom';
import { FiGithub } from 'react-icons/fi';
import useDarkMode, { DarkModeToggler } from 'use-dark-mode-hook'

function Header(props) {
    const [isDarkMode, toggleDarkMode] = useDarkMode()

    return (
        <nav className="shadow-sm py-5 dark:bg-gray-600 bg-white dark:text-white transition-colors duration-100">
            <div className="container flex flex-row mx-auto">
                <Link to="/" className="lg:w-2/12 w-4/12">
                    <img src="/images/logo-colored.png" alt="Logo" />
                </Link>
                <div className="md:flex hidden items-center lg:w-6/12">
                        <Link to="/documentation" 
                            className="block border-b-2 border-transparent hover:border-red-600 mr-3 ml-4 text-xl text-gray-600 dark:text-white">
                            Docs
                        </Link>
                        <Link to="/examples" 
                            className="block border-b-2 border-transparent hover:border-red-600 mx-3 text-xl text-gray-600 dark:text-white">
                            Examples
                        </Link>
                        <Link to="/projects-using-sbuttons" 
                            className="block border-b-2 border-transparent hover:border-red-600 mx-3 text-xl text-gray-600 dark:text-white">
                            Projects Using sButtons
                        </Link>
                </div>
                <div className="justify-end flex items-center lg:w-4/12 md:w-2/12 w-4/12 md:mx-0 mr-0 ml-auto">
                    <Link to="https://github.com/sButtons/sbuttons" className="hover:opacity-100 opacity-40 px-3 transition-none">
                        <FiGithub size="1.5rem" />
                    </Link>
                    <DarkModeToggler 
                        isDarkMode={isDarkMode} 
                        toggleDarkMode={toggleDarkMode}
                        buttonClassName="focus:outline-none hover:opacity-100 opacity-40 px-3 transition-none"
                    />
                </div>
            </div>
        </nav>
    )
}

export default Header;