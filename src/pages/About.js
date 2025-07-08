import React from "react";
import HeaderThree from "../common/header/HeaderThree";
import Breadcrumb from "../common/breadcrumb/Breadcrumb";

import AboutThree from "../components/about/AboutThree";

import TestimonialTwo from "../components/testimonial/TestimonialTwo";

import FooterOne from "../common/footer/FooterOne";
import ServiceTwo from "../components/service/ServiceTwo";
import TeamTwo from "../components/team/TeamTwo";
import MissionVisionTwo from "../components/service/MissionVisionTwo";
import ServiceThree from "../components/service/ServiceThree";
import WhyChooseOne from "../components/why-choose-us/WhyChooseOne";

const About = () => {
  return (
    <>
      <HeaderThree />
      <Breadcrumb heading="About Us" currentPage="About Us" />
      <AboutThree />
      <MissionVisionTwo />
      {/* <ServiceTwo /> */}
      <ServiceThree />

      <WhyChooseOne />
      {/* <TestimonialTwo />
      <TeamTwo /> */}
      <FooterOne />
    </>
  );
};

export default About;
