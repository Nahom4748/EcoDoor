import React from 'react';
import HeaderThree from '../common/header/HeaderThree';
import Breadcrumb from '../common/breadcrumb/Breadcrumb';
import TeamFour from '../components/team/TeamFour';
import ExcellentWorkOne from '../components/excellent-work/ExcellentWorkOne';
import TestimonialOne from '../components/testimonial/TestimonialOne';
import FooterOne from '../common/footer/FooterOne';
import ProjectThree from '../components/project/ProjectThree';
import ServiceOne from '../components/service/ServiceOne';
import WorkProcessTwo from '../components/work-process/WorkProcessTwo';
import WorkProcessOne from '../components/work-process/WorkProcessOne';

const Projects = () => {
    return (
        <>
            <HeaderThree />
            <Breadcrumb 
                heading="projects"
                currentPage="projects" 
            />
            <ProjectThree />
            <ServiceOne />
            <WorkProcessOne/>
           
            <FooterOne />
        </>
    )
}

export default Projects;