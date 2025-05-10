import React from 'react';
import HeaderThree from '../common/header/HeaderThree';
import Breadcrumb from '../common/breadcrumb/Breadcrumb';
import TeamContent from '../components/team/TeamContent';
import FooterOne from '../common/footer/FooterOne';
// import MissionVision from '../components/team/MissionVision';


const TeamDetails = () => {
    return (
        <>
            <HeaderThree />
            <Breadcrumb 
                heading="vision-mission"
                currentPage="vision-mission" 
            />
            <TeamContent />
            {/* <MissionVision /> */}
            <FooterOne />
        </>
    )
}

export default TeamDetails;