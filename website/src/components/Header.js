import React from 'react';
import { Link } from 'react-router-dom';
import { FiGithub } from 'react-icons/fi';
import useDarkMode, { DarkModeToggler } from 'use-dark-mode-hook'

function Header(props) {
    const [isDarkMode, toggleDarkMode] = useDarkMode()

    return (
        <nav className="shadow-sm py-5 dark:bg-gray-600 bg-white dark:text-white">
            <div className="container flex flex-row mx-auto">
                <Link to="/" className="w-2/12">
                    <img src="/images/logo-colored.png" alt="Logo" />
                </Link>
                <div className="flex flex-1 items-center">
                        <Link to="/documentation" 
                            className="block border-b-2 border-transparent duration-100 hover:border-blue-400 mr-3 ml-4 transition-all">
                            Docs
                        </Link>
                        <Link to="/examples" 
                            className="block border-b-2 border-transparent duration-100 hover:border-blue-400 mx-3 transition-all">
                            Examples
                        </Link>
                        <Link to="/projects-using-sbuttons" 
                            className="block border-b-2 border-transparent duration-100 hover:border-blue-400 mx-3 transition-all">
                            Projects Using sButtons
                        </Link>
                </div>
                <div className="justify-end flex-1 flex items-center">
                    <Link to="https://github.com/sButtons/sbuttons" className="duration-100 hover:opacity-100 opacity-40 px-3 transition-all">
                        <FiGithub size="1.5rem" />
                    </Link>
                    <DarkModeToggler 
                        isDarkMode={isDarkMode} 
                        toggleDarkMode={toggleDarkMode}
                        buttonClassName="focus:outline-none duration-100 hover:opacity-100 opacity-40 px-3 transition-all"
                    />
                </div>
            </div>
        </nav>
    )
}

export default Header;