import React from "react";
import HeaderTwo from "../common/header/HeaderTwo";
import Breadcrumb from "../common/breadcrumb/Breadcrumb";

import AboutThree from "../components/about/AboutThree";

import TestimonialTwo from "../components/testimonial/TestimonialTwo";

import FooterOne from "../common/footer/FooterOne";
import ServiceTwo from "../components/service/ServiceTwo";
import TeamTwo from "../components/team/TeamTwo";
import ServiceThree from "../components/service/ServiceThree";
import MissionVision from "./MissionVision";
import WhyChooseOne from "../components/why-choose-us/WhyChooseOne";

const About = () => {
  return (
    <>
      <HeaderTwo />
      <Breadcrumb heading="About Us" currentPage="About Us" />
      <AboutThree />
      <MissionVision />

      <ServiceThree />
      <WhyChooseOne />
      {/* <ServiceTwo /> */}
      {/* <TestimonialTwo />
      <TeamTwo /> */}
      <FooterOne />
    </>
  );
};

export default About;
