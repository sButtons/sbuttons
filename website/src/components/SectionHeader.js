import React from 'react'
import SectionLink from './SectionLink'

function SectionHeader ({title, to}) {
    return (
        <h3 className="text-3xl font-medium mb-3">
            <SectionLink to={to} />
            {title}
        </h3>
    )
}

export default SectionHeader