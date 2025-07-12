import React from 'react';
import HeaderTwo from '../common/header/HeaderTwo';
import FooterOne from '../common/footer/FooterOne';
import ProjectThree from '../components/project/ProjectThree';
import ServiceOne from '../components/service/ServiceOne';
import WorkProcessOne from '../components/work-process/WorkProcessOne';

const Projects = () => {
    return (
        <>
            <HeaderTwo />
            {/* <Breadcrumb 
                heading="projects"
                currentPage="projects" 
            /> */}
            <ProjectThree />
            <ServiceOne />
            <WorkProcessOne/>
           
            <FooterOne />
        </>
    )
}

export default Projects;