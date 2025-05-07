import React from 'react';

export default class ContactMap extends React.Component {
    render(){
        let publicUrl = process.env.PUBLIC_URL+'/'
        return (
            <>
                <section className="contact-page-bottom">
                    <div className="container">
                        <div className="row">
                            {/* Start Contact Page Bottom Map */}
                            <div className="col-xl-6">
                                <div className="contact-page-bottom-map">
                                    <iframe
                                        title="Address"
                                        src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d126120.09469724937!2d38.64628248143627!3d8.948822595005472!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x164b81f2be0781ed%3A0xe1749b5e158850f7!2sWPXH%2BGFM%2C%20Addis%20Ababa!3m2!1d8.9488317!2d38.7286844!5e0!3m2!1sen!2set!4v1746637435183!5m2!1sen!2set"
                                        className="contact-page__google-map" allowfullscreen>
                                    </iframe>
                                </div>
                            </div>
                            {/* End Contact Page Bottom Map */}

                            {/* Start Contact Page Bottom Content */}
                            <div className="col-xl-6">
                                <div className="contact-page-bottom__content">
                                    <div className="sec-title">
                                        <div className="sec-title__tagline">
                                            <h6>Contact Us</h6>
                                            <span className="right"></span>
                                        </div>
                                        <h2 className="sec-title__title">Get In Touch</h2>
                                    </div>
                                    <div className="contact-page-bottom__content-img">
                                        <img src={publicUrl+"assets/images/resources/contact-page-bottom-img.jpg"} alt="#" />

                                        <div className="contact-info">
                                            <ul>
                                                <li>
                                                    <div className="inner">
                                                        <div className="icon-box">
                                                            <span className="icon-phone-call-1"></span>
                                                        </div>

                                                        <div className="content-box">
                                                            <p> Tel : <a href="tel:12345615523">+ 123-4561-5523</a></p>
                                                        </div>
                                                    </div>
                                                </li>

                                                <li>
                                                    <div className="inner">
                                                        <div className="icon-box">
                                                            <span className="icon-message"></span>
                                                        </div>

                                                        <div className="content-box">
                                                            <p> Email : <a href="mailto:yourmail@email.com">needhelp@company.com</a></p>
                                                        </div>
                                                    </div>
                                                </li>

                                                <li>
                                                    <div className="inner">
                                                        <div className="icon-box">
                                                            <span className="icon-placeholder"></span>
                                                        </div>

                                                        <div className="content-box">
                                                            <p>Add : Flat 20, Reynolds Neck</p>
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* End Contact Page Bottom Content */}
                        </div>
                    </div>
                </section>
            </>
        )
    }
}