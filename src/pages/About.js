import React from 'react';
import HeaderThree from '../common/header/HeaderThree';
import Breadcrumb from '../common/breadcrumb/Breadcrumb';

import AboutThree from "../components/about/AboutThree";

import TestimonialTwo from "../components/testimonial/TestimonialTwo";

import FooterOne from "../common/footer/FooterOne";
import ServiceTwo from "../components/service/ServiceTwo";
import TeamTwo from "../components/team/TeamTwo";


const About = () => {
    return (
        <>
            <HeaderThree />
            <Breadcrumb 
                heading="About Us"
                currentPage="About Us" 
            />
            <AboutThree />
            <ServiceTwo />
            <TestimonialTwo />
            <TeamTwo />
            <FooterOne />
        </>
    )
}

export default About;
