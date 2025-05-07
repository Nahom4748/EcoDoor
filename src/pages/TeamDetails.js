import React from 'react';
import HeaderThree from '../common/header/HeaderThree';
import Breadcrumb from '../common/breadcrumb/Breadcrumb';
import TeamContent from '../components/team/TeamContent';
import FooterOne from '../common/footer/FooterOne';

const TeamDetails = () => {
    return (
        <>
            <HeaderThree />
            <Breadcrumb 
                heading="vision-mission"
                currentPage="vision-mission" 
            />
            <TeamContent />
            <FooterOne />
        </>
    )
}

export default TeamDetails;