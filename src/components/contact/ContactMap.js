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
                            <div className="col-xl-7">
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
                            <div className="col-xl-5">
                                <div className="contact-page-bottom__content">
                                    <div className="sec-title">
                                        <div className="sec-title__tagline">
                                            <h6>Contact Us</h6>
                                            <span className="right"></span>
                                        </div>
                                        <h2 className="sec-title__title">Get In Touch</h2>
                                    </div>
                                    <div className="contact-page-bottom__content-img">
                                        <div className="contact-info">
                                            <ul>
                                                <li>
                                                    <div className="inner">
                                                        <div className="icon-box">
                                                            <span className="icon-phone-call-1"></span>
                                                        </div>
                                                        <div className="content-box">
                                                            <p>Phone Number :<br />
                                                                <a href="tel:+251908686868">+251908 686868</a><br />
                                                                <a href="tel:+251908676767">+251908 676767</a>
                                                            </p>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="inner">
                                                        <div className="icon-box">
                                                            <span className="icon-message"></span>
                                                        </div>
                                                        <div className="content-box">
                                                            <p>Email Address :<br />
                                                                <a href="mailto:info.charot@gmail.com">info.charot@gmail.com</a>
                                                            </p>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="inner">
                                                        <div className="icon-box">
                                                            <span className="icon-placeholder"></span>
                                                        </div>
                                                        <div className="content-box">
                                                            <p>Our Address :<br />
                                                                Lebu,Foziyana Bldg, 4th Floor<br />
                                                                Addis Ababa, Ethiopia
                                                            </p>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="inner">
                                                     
                                                         <div className="icon-box">
                                                    <span className="icon-back-in-time"></span>
                                                </div>
                                                        <div className="content-box">
                                                            <p>Working Time :</p>
                                                            <div style={{ display: 'flex', gap: '24px', marginTop: '4px' }}>
                                                                <div style={{ minWidth: '120px' }}>
                                                                    <div><strong>Monday to Friday</strong></div>
                                                                    <div><strong>Saturday</strong></div>
                                                                </div>
                                                                <div>
                                                                    <div>08:30 Am - 5:00 PM</div>
                                                                    <div>08:30 Am - 12:00 PM</div>
                                                                </div>
                                                            </div>
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