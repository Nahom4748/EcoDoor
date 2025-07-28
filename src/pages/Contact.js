import React from 'react';
import HeaderTwo from '../common/header/HeaderTwo';
import ContactForm from '../components/contact/ContactForm';
import ContactMap from '../components/contact/ContactMap';
import FooterOne from '../common/footer/FooterOne';

const Contact = () => {
    return (
        <>
            <HeaderTwo />
            <ContactForm />
            <ContactMap />
            <FooterOne />
        </>
    )
}

export default Contact;