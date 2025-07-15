import React from "react";
import WhyChooseOne from "../components/why-choose-us/WhyChooseOne";

import ServiceOne from "../components/service/ServiceOne";
// import ProjectThree from "../components/project/ProjectThree.js";
import WorkProcessOne from "../components/work-process/WorkProcessOne";
import FaqOne from "../components/faq/FaqOne";
import FaqTwo from "../components/faq/FaqTwo";
import FooterOne from "../common/footer/FooterOne";
import HeaderTwo from "../common/header/HeaderTwo";
import HeroOne from "../components/hero/HeroOne";

import HeroTwo from "../components/hero/HeroTwo";
import ServiceTwo from "../components/service/ServiceTwo";
import AboutThree from "../components/about/AboutThree";
// import ServiceThree from "../components/service/ServiceThree";
import TeamTwo from "../components/team/TeamTwo.js";
import TestimonialTwo from "../components/testimonial/TestimonialTwo.js";
import OurCustomers from "../components/service/OurCustomers.js";
import Unique from "../components/service/Unique.js";
import ProjectThree from "../components/project/ProjectThree.js";

const HomeDefault = () => {
  return (
    <>
      <HeaderTwo />
      <HeroTwo />
      <WhyChooseOne />
      {/* <WhyChooseOne /> */}

      <ServiceTwo />
      <AboutThree />
      <Unique />

      <ServiceOne />
      {/* <ProjectOne /> */}
      {/* <ProjectThree /> */}
      <WorkProcessOne />
      <OurCustomers />
      {/* <FaqOne /> */}
      <FaqTwo/>
      {/* <TestimonialOne /> */}
      <TestimonialTwo />
      {/* <ExcellentWorkOne /> */}
      {/* <BlogOne /> */}
      <FooterOne />
    </>
  );
};

export default HomeDefault;
