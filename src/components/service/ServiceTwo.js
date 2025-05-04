import React from 'react';
import { Link } from 'react-router-dom';

export default class ServiceTwo extends React.Component {
    render(){
        let publicUrl = process.env.PUBLIC_URL+'/'
        return (
            <>
                <section className="services-two">
                    <div className="services-two__bg" style={{backgroundImage: 'url('+publicUrl+'assets/images/backgrounds/services-v2-bg.jpg)'}}></div>
                    <div className="services-two__bg2" style={{backgroundImage: 'url('+publicUrl+'assets/images/shapes/services-v2-shape22.png)'}}></div>
                    <div className="shape1 wow slideInLeft" data-wow-delay="100ms" data-wow-duration="2500ms">
                        <img className="float-bob-y" src={publicUrl+"assets/images/shapes/services-v2-shape33.png"} alt="#" />
                    </div>
                    <div className="shape2 wow slideInRight" data-wow-delay="100ms" data-wow-duration="2500ms">
                        <img className="float-bob-y" src={publicUrl+"assets/images/shapes/services-v2-shape44.png"} alt="#" />
                    </div>
                    <div className="container">
                        <div className="sec-title style2 text-center">
                            <div className="sec-title__tagline center">
                                <div className="img-box"><img src={publicUrl+"assets/images/resources/sec-title-img.png"} alt="#" /></div>
                                <h6>Our Services</h6>
                            </div>
                            <h2 className="sec-title__title">
                            At Charot, we make and deliver smart solutions for better living.</h2>
                        </div>

                        <div className="row">
                            {/* Start Services Two Single */}
                            <div className="col-xl-4 col-lg-6 wow fadeInLeft" data-wow-delay="0ms" data-wow-duration="1500ms">
                                <div className="services-two__single">
                                    <div className="services-two__single-inner">
                                        <div className="services-two__single-img">
                                            <div className="inner">
                                                <img src={publicUrl+"assets/images/services/services-v2-img1.jpg"} alt="#" />
                                            </div>
                                            <div className="icon-box">
                                                <span className="icon-shovels1"></span>
                                            </div>
                                        </div>

                                        <div className="services-two__single-content">
                                            <div className="services-two__single-content-bg" style={{backgroundImage: 'url('+publicUrl+'assets/images/shapes/services-v2-shape1.png)'}}>
                                            </div>
                                            <h2><Link >Customized WPC <br /> Solutions</Link></h2>
                                            <p>We provide tailored Wood-Plastic Composite (WPC) products that meet the unique requirements of residential, commercial, and hospitality projects.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* End Services Two Single */}

                            {/* Start Services Two Single */}
                            <div className="col-xl-4 col-lg-6 wow fadeInRight" data-wow-delay="100ms" data-wow-duration="1500ms">
                                <div className="services-two__single">
                                    <div className="services-two__single-inner">
                                        <div className="services-two__single-img">
                                            <div className="inner">
                                                <img src={publicUrl+"assets/images/services/services-v2-img2.jpg"} alt="#" />
                                            </div>
                                            <div className="icon-box">
                                                <span className="icon-lawn-mower11"></span>
                                            </div>
                                        </div>

                                        <div className="services-two__single-content">
                                            <div className="services-two__single-content-bg" style={{backgroundImage: 'url('+publicUrl+'assets/images/shapes/services-v2-shape1.png)'}}>
                                            </div>
                                            <h2><Link>Comprehensive Product <br /> Support</Link></h2>
                                            <p>Our expert team offers full support from product selection to installation guidance, ensuring a smooth and satisfying experience.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* End Services Two Single */}

                            {/* Start Services Two Single */}
                            <div className="col-xl-4 col-lg-6 wow fadeInLeft" data-wow-delay="200ms" data-wow-duration="1500ms">
                                <div className="services-two__single">
                                    <div className="services-two__single-inner">
                                        <div className="services-two__single-img">
                                            <div className="inner">
                                                <img src={publicUrl+"assets/images/services/services-v2-img3.jpg"} alt="#" />
                                            </div>
                                            <div className="icon-box">
                                                <span className="icon-agriculture1"></span>
                                            </div>
                                        </div>

                                        <div className="services-two__single-content">
                                            <div className="services-two__single-content-bg" style={{backgroundImage: 'url('+publicUrl+'assets/images/shapes/services-v2-shape1.png)'}}></div>
                                            <h2><Link >After-Sales <br /> Service</Link></h2>
                                            <p>We stay connected with our clients even after installation, ensuring long-term satisfaction and addressing any future needs or questions.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* End Services Two Single */}

                            {/* Start Services Two Single */}
                            <div className="col-xl-4 col-lg-6 wow fadeInLeft" data-wow-delay="0ms" data-wow-duration="1500ms">
                                <div className="services-two__single">
                                    <div className="services-two__single-inner">
                                        <div className="services-two__single-img">
                                            <div className="inner">
                                                <img src={publicUrl+"assets/images/services/services-v2-img4.jpg"} alt="#" />
                                            </div>
                                            <div className="icon-box">
                                                <span className="icon-gardening-11"></span>
                                            </div>
                                        </div>

                                        <div className="services-two__single-content">
                                            <div className="services-two__single-content-bg" style={{backgroundImage: 'url('+publicUrl+'assets/images/shapes/services-v2-shape11.png)'}}></div>
                                            <h2><Link >Sustainable Manufacturing <br /> Practices</Link></h2>
                                            <p>Our operations are 100% eco-friendly, with a zero-waste production system that supports environmental conservation.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* End Services Two Single */}

                            {/* Start Services Two Single */}
                            <div className="col-xl-4 col-lg-6 wow fadeInRight" data-wow-delay="100ms" data-wow-duration="1500ms">
                                <div className="services-two__single">
                                    <div className="services-two__single-inner">
                                        <div className="services-two__single-img">
                                            <div className="inner">
                                                <img src={publicUrl+"assets/images/services/services-v2-img5.jpg"} alt="#" />
                                            </div>
                                            <div className="icon-box">
                                                <span className="icon-pruning-shears1"></span>
                                            </div>
                                        </div>

                                        <div className="services-two__single-content">
                                            <div className="services-two__single-content-bg" style={{backgroundImage: 'url('+publicUrl+'assets/images/shapes/services-v2-shape1.png)'}}></div>
                                            <h2><Link>Quality <br /> Assurance</Link></h2>
                                            <p>Every Charot product goes through strict quality control processes,  aesthetics, and customer satisfaction.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* End Services Two Single */}

                            {/* Start Services Two Single */}
                            <div className="col-xl-4 col-lg-6 wow fadeInLeft" data-wow-delay="200ms" data-wow-duration="1500ms">
                                <div className="services-two__single">
                                    <div className="services-two__single-inner">
                                        <div className="services-two__single-img">
                                            <div className="inner">
                                                <img src={publicUrl+"assets/images/services/services-v2-img6.jpg"} alt="#" />
                                            </div>
                                            <div className="icon-box">
                                                <span className="icon-planting1"></span>
                                            </div>
                                        </div>

                                        <div className="services-two__single-content">
                                            <div className="services-two__single-content-bg" style={{backgroundImage: 'url('+publicUrl+'assets/images/shapes/services-v2-shape1.png)'}}></div>
                                            <h2><Link >Client-Centered <br /> Approach</Link></h2>
                                            <p>We believe in building lasting partnerships based on trust, loyalty, and a shared commitment to excellence.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* End Services Two Single */}
                        </div>
                    </div>
                </section>
            </>
        )
    }
}