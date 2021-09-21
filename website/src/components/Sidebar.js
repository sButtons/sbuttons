import React, { useState } from 'react'
import SearchBar from './SearchBar';

function Sidebar ({children = []}) {
    const [searchTerm,setSearchTerm] = useState(''); 
    // console.log(children)
    const filtered = 
    children.filter(val => {
        if (searchTerm === '') {
            return val.props.text || val.props.children[0].props.text;
        } else if (val.props.text.toLowerCase().includes(searchTerm.toLowerCase())) {
            // console.log(val);
            return val.props.text;
        } 
    })
    return (
        <div className="md:relative fixed animate__animated -left-full md:left-0 dark:bg-gray-700 bg-white shadow-md h-full md:block md:pt-0 md:w-4/12 top-0 w-9/12 z-20" id="sidebar">
            <div className="md:fixed h-full md:h-4/6 md:pt-0 md:w-4/12 overflow-y-auto pb-3 pl-5 pt-5">
                <SearchBar onChange = {value => setSearchTerm(value) } />
                {filtered}
            </div>
        </div>
    )
}

export default Sidebar
