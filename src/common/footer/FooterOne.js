import React from 'react';
import {Link} from 'react-router-dom';
import LogoTwo from "../../common/header/LogoTwo.js"


export default class FooterOne extends React.Component {
    render(){
        let publicUrl = process.env.PUBLIC_URL+'/'
        return (
            <>
                <footer class="footer-one">
                    {/* Start Footer */}
                    <div class="footer">
                        <div class="container">
                            <div class="row">
                                {/* Start Footer Widget Single */}
                                <div class="col-xl-5 col-lg-5  wow animated fadeInUp" data-wow-delay="0.1s">
                                    <div class="footer-widget__single">
                                        <div class="footer-widget__single-about">
                                            <div class="logo-box">
                                            <LogoTwo/>                                            </div>

                                            <form class="footer-widget__subscribe-box">
                                                <div class="title-box">
                                                    <h5>Subsrcibe for Latest Articles and Resources</h5>
                                                </div>
                                                <div class="footer-widget__subscribe-input-box">
                                                    <input type="email" placeholder="Email Address" name="email" />
                                                    <button type="submit" class="footer-widget__subscribe-btn">
                                                        <span>Go</span>
                                                    </button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                                {/* End Footer Widget Single */}

                                {/* Start Footer One Right */}
                                <div class="col-xl-7 col-lg-7">
                                    <div class="footer-one__right">
                                        <div class="row">
                                            {/* Start Footer One Right Single */}
                                            <div class="col-xl-4 col-lg-4 wow animated fadeInUp" data-wow-delay="0.2s">
                                                <div class="footer-one__right-single mb50">
                                                    <div class="title">
                                                        <h2>Explore</h2>
                                                    </div>
                                                    <div class="footer-one__right-single-services">
                                                        <ul class="footer-one__right-single-list">
                                                            <li><Link to={process.env.PUBLIC_URL + `/services`}>High Durability</Link></li>
                                                            <li><Link to={process.env.PUBLIC_URL + `/services`}>Eco-Friendly</Link></li>
                                                            <li><Link to={process.env.PUBLIC_URL + `/services`}>Waterproof & Fire Retardant</Link></li>
                                                            <li><Link to={process.env.PUBLIC_URL + `/services`}>Soundproof</Link></li>
                                                            <li><Link to={process.env.PUBLIC_URL + `/services`}>Termite & Rot Resistant</Link></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* End Footer One Right Single */}

                                            {/* Start Footer One Right Single */}
                                            <div class="col-xl-3 col-lg-3 wow animated fadeInUp" data-wow-delay="0.3s">
                                                <div class="footer-one__right-single mb50">
                                                    <div class="title">
                                                        <h2>Links</h2>
                                                    </div>
                                                    <div class="footer-one__right-single-links">
                                                        <ul class="footer-one__right-single-list">
                                                            <li><Link to={process.env.PUBLIC_URL + `/about`}>About Us</Link></li>
                                                            <li><Link to={process.env.PUBLIC_URL + `/contact`}>Contact Us</Link></li>
                                                            <li><Link to={process.env.PUBLIC_URL + `/`}>Our History</Link></li>
                                                            <li><Link to={process.env.PUBLIC_URL + `/`}>Projects</Link></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* End Footer One Right Single */}

                                            {/* Start Footer One Right Single */}
                                            <div class="col-xl-5 col-lg-5 wow animated fadeInUp" data-wow-delay="0.4s">
                                                <div class="footer-one__right-single">
                                                    <div class="title">
                                                        <h2>Contact</h2>
                                                    </div>
                                                    <div class="footer-one__right-single-contact">
                                                        <p> 
                                                            <br /> Lebu, Foziyana bldg, 4th floor<br />
                                                            Addis Ababa, Ethiopia</p>
                                                        <a href=" mailto:info.charot@gmail.com">info.charot@gmail.com</a>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* End Footer One Right Single */}
                                        </div>

                                        <div class="footer-one__right-bottom wow animated fadeInUp" data-wow-delay="0.1s">
                                            
                                            {/* Previous social links commented out for reference */}
                                            {/*
                                            <ul class="social-links">
                                                <li><Link to={process.env.PUBLIC_URL + `/`}><span class="icon-twitter"></span></Link></li>
                                                <li><Link to={process.env.PUBLIC_URL + `/`}><span class="icon-facebook"></span></Link></li>
                                                <li><Link to={process.env.PUBLIC_URL + `/`}><span class="icon-pinterest"></span></Link></li>
                                                <li><Link to={process.env.PUBLIC_URL + `/`}><span class="icon-instagram"></span></Link></li> 
                                            </ul>
                                            */}
                                            <ul class="social-links">
                                                <li><a href="https://t.me/charotecodoors" target="_blank" rel="noopener noreferrer"><span class="fab fa-telegram-plane"></span></a></li>
                                                <li><a href="https://wa.me/251908686868" target="_blank" rel="noopener noreferrer"><span class="fab fa-whatsapp"></span></a></li>
                                                <li><a href="https://www.tiktok.com/@charot.eco.doors?_t=ZM-8uhQZluVwrH&_r=1" target="_blank" rel="noopener noreferrer"><span class="fab fa-tiktok"></span></a></li>
                                                <li><a href="https://web.facebook.com/people/Charot-Eco-Doors/pfbid02HKC258FgsG2t2mNm3fqNi78Ttzb3sdkqW7kL4Hkf8qZTciRmZTV9fLTiTwAjonBQl/?rdid=EYOU075vyYWKlYWe&share_url=https%3A%2F%2Fweb.facebook.com%2Fshare%2F15guT785js%2F%3F_rdc%3D1%26_rdr" target="_blank" rel="noopener noreferrer"><span class="fab fa-facebook"></span></a></li>
                                            </ul>
                                           
                                         
                                            <div class="footer-one__right-bottom-contact">
                                                <div class="icon-box">
                                                    <span class="icon-phone-call"></span>
                                                </div>
                                                <div class="content-box">
                                                    <p>Call Anytime</p>
                                                    <h4><a href="tel:+251908686868">+25190-868-6868</a></h4>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                                {/* End Footer One Right */}
                            </div>
                        </div>
                    </div>


                    <div class="footer-one__bottom">
                        <div class="container">
                            <div class="bottom-inner">
                                <div class="copyright">
                                    <p>Copyright © 2025 charotecodoors. All Rights Reserved.</p>
                                </div>

                               
                            </div>
                        </div>
                    </div>

                </footer>
            </>
        )
    }
}