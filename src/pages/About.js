import React from 'react';
import HeaderTwo from '../common/header/HeaderTwo';
import Breadcrumb from '../common/breadcrumb/Breadcrumb';

import AboutThree from "../components/about/AboutThree";

import TestimonialTwo from "../components/testimonial/TestimonialTwo";

import FooterOne from "../common/footer/FooterOne";
import ServiceTwo from "../components/service/ServiceTwo";
import TeamTwo from "../components/team/TeamTwo";


const About = () => {
    return (
        <>
            <HeaderTwo />
            {/* <Breadcrumb 
                heading="About Us"
                currentPage="About Us" 
            /> */}
            <AboutThree />
            <ServiceTwo />
            <TestimonialTwo />
            <TeamTwo />
            <FooterOne />
        </>
    )
}

export default About;
