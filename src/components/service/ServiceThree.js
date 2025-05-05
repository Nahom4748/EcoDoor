import React from 'react';
import { Link } from 'react-router-dom';

export default class ServiceThree extends React.Component {
    render(){
        let publicUrl = process.env.PUBLIC_URL+'/'
        return (
            <>
                <section className="services-three">
                    <div className="shape2  wow slideInLeft" data-wow-delay="100ms" data-wow-duration="2500ms">
                        <img className="float-bob-y" src={publicUrl+"assets/images/shapes/services-v3-shape1.png"} alt="#" />
                    </div>
                    <div className="shape3 wow slideInRight" data-wow-delay="100ms" data-wow-duration="2500ms">
                        <img className="float-bob-y" src={publicUrl+"assets/images/shapes/services-v3-shape2.png"} alt="#" />
                    </div>
                    <div className="services-three__bg" style={{backgroundImage: 'url('+publicUrl+'assets/images/backgrounds/services-v3-bg.jpg)'}}></div>
                    <div className="container">
                        <div className="services-three__top">
                            <div className="sec-title-three">
                                <div className="sec-title-three__tagline">
                                    <h6>Our Core Values</h6>
                                </div>
                                <h2 className="sec-title-three__title">Built on Purpose.  <br /> Guided by Values. </h2>
                            </div>

                            <div className="services-three__top-text">
                                <p> At <strong>Charot Eco Doors</strong>, our mission goes beyond making doors. We stand for craftsmanship, sustainability, and integrity in every product and service we deliver.</p>
                            </div>
                        </div>


                        <div className="row">
                            {/* Start Services Three Single */}
                            <div className="col-xl-3 col-lg-6 col-md-6 wow animated fadeInUp" data-wow-delay="0.1s">
                                <div className="services-three__single">
                                    <div className="shape1"></div>
                                    <div className="services-three__single-icon">
                                        <div className="inner">
                                            <span className="icon-gardener-1"></span>
                                        </div>
                                        <div className="icon">
                                            <span>+</span>
                                        </div>
                                    </div>

                                    <div className="services-three__single-content">
                                        <div className="title">
                                            <h2><Link >Crafted with Care</Link></h2>
                                        </div>
                                        <p>We build every door with precision, detail, and pride in quality.</p>

                                        <div className="bottom-box">
                                        
                                            <div className="count-box">
                                                <span>01</span>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                            {/* End Services Three Single */}

                            {/* Start Services Three Single */}
                            <div className="col-xl-3 col-lg-6 col-md-6 wow animated fadeInUp" data-wow-delay="0.2s">
                                <div className="services-three__single">
                                    <div className="shape1"></div>
                                    <div className="services-three__single-icon">
                                        <div className="inner">
                                            <span className="icon-shovels"></span>
                                        </div>
                                        <div className="icon">
                                            <span>+</span>
                                        </div>
                                    </div>

                                    <div className="services-three__single-content">
                                        <div className="title">
                                            <h2><Link>Eco-Friendly</Link></h2>
                                        </div>
                                        <p>Sustainable materials and green practices are at our core.</p>

                                        <div className="bottom-box">
                                      
                                            <div className="count-box">
                                                <span>02</span>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                            {/* End Services Three Single */}

                            {/* Start Services Three Single */}
                            <div className="col-xl-3 col-lg-6 col-md-6 wow animated fadeInUp" data-wow-delay="0.3s">
                                <div className="services-three__single">
                                    <div className="shape1"></div>
                                    <div className="services-three__single-icon">
                                        <div className="inner">
                                            <span className="icon-agriculture"></span>
                                        </div>
                                        <div className="icon">
                                            <span>+</span>
                                        </div>
                                    </div>

                                    <div className="services-three__single-content">
                                        <div className="title">
                                            <h2><Link >Customer First</Link></h2>
                                        </div>
                                        <p>TWe listen, support, and deliver what matters most to you.</p>

                                        <div className="bottom-box">
                                         
                                            <div className="count-box">
                                                <span>03</span>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                            {/* End Services Three Single */}

                            {/* Start Services Three Single */}
                            <div className="col-xl-3 col-lg-6 col-md-6 wow animated fadeInUp" data-wow-delay="0.4s">
                                <div className="services-three__single">
                                    <div className="shape1"></div>
                                    <div className="services-three__single-icon">
                                        <div className="inner">
                                            <span className="icon-gardening"></span>
                                        </div>
                                        <div className="icon">
                                            <span>+</span>
                                        </div>
                                    </div>

                                    <div className="services-three__single-content">
                                        <div className="title">
                                            <h2><Link>Built on Trust</Link></h2>
                                        </div>
                                        <p>We’re honest, transparent, and committed to doing what’s right.</p>

                                        <div className="bottom-box">
                                           
                                            <div className="count-box">
                                                <span>04</span>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                            {/* End Services Three Single */}
                        </div>
                    </div>
                </section>
            </>
        )
    }
}