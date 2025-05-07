import React from 'react';
import HeaderThree from '../common/header/HeaderThree';
import Breadcrumb from '../common/breadcrumb/Breadcrumb';
import ServiceTwo from '../components/service/ServiceTwo';
import FooterOne from '../common/footer/FooterOne';
import WorkProcessOne from '../components/work-process/WorkProcessOne';

const Service = () => {
    return (
        <>
            <HeaderThree />
            <Breadcrumb 
                heading="Our Services"
                currentPage="Our Services" 
            />
            <ServiceTwo />
            <WorkProcessOne />
            <FooterOne />
        </>
    )
}

export default Service;