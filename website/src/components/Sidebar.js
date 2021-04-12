import React from 'react'

function Sidebar ({children = []}) {
    return (
        <div className="md:relative fixed animate__animated -left-full md:left-0 dark:bg-gray-700 bg-white shadow-md h-full md:block md:pt-0 md:w-4/12 top-0 w-9/12 z-20" id="sidebar">
            <div className="md:fixed h-full md:h-4/6 md:pt-0 md:w-4/12 overflow-y-auto pb-3 pl-5 pt-5 border-b-2 border-gray-100 dark:border-gray-600">
                {children}
            </div>
        </div>
    )
}

export default Sidebar
