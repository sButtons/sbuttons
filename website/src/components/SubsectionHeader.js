import React from 'react'
import SectionLink from './SectionLink'

function SubsectionHeader ({title, to}) {
    return (
        <h4 className="text-xl font-medium mb-3">
            <SectionLink to={to} />
            {title}
        </h4>
    )
}

export default SubsectionHeader