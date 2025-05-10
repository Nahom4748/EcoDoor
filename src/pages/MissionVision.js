import React from "react";
import HeaderThree from "../common/header/HeaderThree";
import Breadcrumb from "../common/breadcrumb/Breadcrumb";
import MissionVisionTwo from "../components/service/MissionVisionTwo";
import FooterOne from "../common/footer/FooterOne";
import WorkProcessOne from "../components/work-process/WorkProcessOne";

const MissionVision = () => {
  return (
    <>
      <HeaderThree />
      <Breadcrumb heading="Vision-mission" currentPage="Vision-mission" />
      <MissionVisionTwo />  
      <WorkProcessOne />
      <FooterOne />
    </>
  );
};

export default MissionVision;
