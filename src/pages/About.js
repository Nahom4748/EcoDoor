import React from "react";
import HeaderTwo from "../common/header/HeaderTwo";

import AboutThree from "../components/about/AboutThree";


import FooterOne from "../common/footer/FooterOne";
import ServiceThree from "../components/service/ServiceThree";
import MissionVision from "./MissionVision";
import WhyChooseOne from "../components/why-choose-us/WhyChooseOne";

const About = () => {
  return (
    <>
      <HeaderTwo />
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
