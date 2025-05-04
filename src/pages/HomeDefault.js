import React from "react";
import HeroOne from "../components/hero/HeroOne";
import WhyChooseOne from "../components/why-choose-us/WhyChooseOne";
import AboutOne from "../components/about/AboutOne";
import BrandOne from "../components/brand/BrandOne";
import ContactOne from "../components/contact/ContactOne";
import ServiceOne from "../components/service/ServiceOne";
import ProjectOne from "../components/project/ProjectOne";
import WorkProcessOne from "../components/work-process/WorkProcessOne";
import FaqOne from "../components/faq/FaqOne";
import TestimonialOne from "../components/testimonial/TestimonialOne";
import ExcellentWorkOne from "../components/excellent-work/ExcellentWorkOne";
import BlogOne from "../components/blog/BlogOne";
import FooterOne from '../common/footer/FooterOne';
import HeaderTwo from "../common/header/HeaderTwo";
import HeroTwo from "../components/hero/HeroTwo";
import ServiceTwo from "../components/service/ServiceTwo";
import AboutThree from "../components/about/AboutThree";
import ServiceThree from "../components/service/ServiceThree";

const HomeDefault = () => {
    return (
        <>
            <HeaderTwo />
            <HeroTwo />
            <WhyChooseOne />
          
            
            <ServiceTwo/>
            <AboutThree />
                        <ServiceThree />
            
            <BrandOne />
            <ContactOne />
            <ServiceOne />
            <ProjectOne />
            <WorkProcessOne />
            <FaqOne />
            <TestimonialOne />
            <ExcellentWorkOne />
            <BlogOne />
            <FooterOne />
        </>
    )
}

export default HomeDefault;