/* eslint-disable react/jsx-no-target-blank */
import React from 'react'
import Footer from '../../components/Footer'
import Common from '../Common'
import projects from '../../data/projects.json'
import ProjectCard from '../../components/ProjectCard'

function Projects () {
    return (
        <div className="projects">
            <Common />
            <div className="content container px-4 mx-auto mt-5">
                <h1 className="text-3xl">Projects using sButtons</h1>
                <h2 className="text-xl">Here's a list of projects using sButtons. If you are using sButtons in your project and would like to be featured, please submit it <a href="https://github.com/sButtons/sbuttons/issues/1255" target="_blank" className="underline-red">here</a>.</h2>
                <section className="flex flex-wrap mt-5">
                    {projects.map((project, index) => <ProjectCard project={project} key={index} />)}
                </section>
            </div>
            <Footer />
        </div>
    )
}

export default Projects