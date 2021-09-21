import React from 'react'
// import {useState} from 'react'

function SearchBar(props) {
    return (
        <div>
            <input className="text-black" type="text" placeholder="Search...." onChange={event => props.onChange(event.target.value)} />             
        </div>
    );
};

export default SearchBar