/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable react/jsx-no-target-blank */
import React from 'react'

function ProjectCard({project: {name, about, url, image}}) {
    return (
        <div className="border-2 border-gray-200 flex flex-col group hover:shadow-md lg:w-4/12 md:w-6/12 w-full relative shadow-sm transition-all mr-5 mt-4 bg-white">
            <img src={image} alt={name} />
            <div className="absolute bg-gray-100 bg-opacity-90 flex flex-col group-hover:opacity-100 h-full items-center justify-center left-0 opacity-0 px-3 text-center top-0 transition-all w-full">
                <h4 className="font-bold">{name}</h4>
                <p>{about}</p>
                <a href={url} target="_blank" className="stretched-link"></a>
            </div>
        </div>
    )
}

export default ProjectCard