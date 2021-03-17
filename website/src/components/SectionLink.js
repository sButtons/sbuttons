import React from 'react'
import { FiHash } from 'react-icons/fi'

function SectionLink ({to}) {
    return (
        <a href={`#${to}`} className="hover:opacity-100 inline-block mr-2 opacity-80 text-red-600">
            <FiHash className="inline" /> 
        </a>
    )
}

export default SectionLink