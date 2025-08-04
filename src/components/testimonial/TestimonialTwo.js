import React from 'react';

export default class TestimonialTwo extends React.Component {
    componentDidMount() {

        const $ = window.$;
        
        if ($(".testimonial-two__carousel").length) {
            $(".testimonial-two__carousel").owlCarousel({
              loop: true,
              margin: 30,
              nav: false,
              smartSpeed: 500,
              autoHeight: false,
              autoplay: true,
              dots: true,
              autoplayTimeout: 10000,
              navText: [
                '<span class="fa fa-angle-left"></span>',
                '<span class="fa fa-angle-right"></span>',
              ],
              responsive: {
                0: {
                  items: 1,
                },
                768: {
                  items: 1,
                },
                992: {
                  items: 2,
                },
                1200: {
                  items: 2,
                },
              },
            });
        }
    
    }
    render(){
        let publicUrl = process.env.PUBLIC_URL+'/'
        return (
            <>
                <section className="testimonilas-two">
                    <div className="testimonilas-two__pattern" style={{backgroundImage: 'url('+publicUrl+'assets/images/pattern/testimonilas-v2-pattern.png)'}}></div>
                    <div className="testimonilas-two__bg" style={{backgroundImage: 'url('+publicUrl+'assets//E-DoorPhotos/footer1.JPG)'}}></div>
                    <div className="container">

                        <div className="sec-title style2">
                            <div className="sec-title__tagline">
                              
                                <h6>Our Testimonials</h6>
                            </div>
                            <h2 className="sec-title__title">
                                People Say About Us</h2>
                            <p className="text">Reliable & Sustainable
 </p>
                        </div>
                        <div className="row">
                            <div className="col-xl-12">
                                <div className="testimonilas-two__inner">

                                    <div className="owl-carousel owl-theme thm-owl__carousel testimonial-two__carousel">

                                        {/* Start Testimonilas Two Single */}
                                        <div className="testimonilas-two__single">
                                            <div className="testimonilas-two__single-top">
                                                <p>“ The best doors I've ever installed! Charot's craftsmanship and attention to sustainability make them my top choice for every project.
                                                Previous.”</p>
                                            </div>

                                            <div className="testimonilas-two__single-bottom">
                                                <div className="left-box">
                                                    <div className="img-box">
                                                        
                                                        <div className="icon-box">
                                                            <span className="icon-quote-1"></span>
                                                        </div>
                                                    </div>

                                                    <div className="text-box">
                                                        <h3>Home Builder</h3>
                                                    </div>
                                                </div>

                                                <div className="right-box">
                                                   
                                                </div>
                                            </div>
                                        </div>
                                        {/* End Testimonilas Two Single */}

                                        {/* Start Testimonilas Two Single */}
                                        <div className="testimonilas-two__single">
                                            <div className="testimonilas-two__single-top">
                                                <p>“ Charot doors add elegance and durability to any space. Their eco-conscious approach makes them a perfect choice for modern homes.”</p>
                                            </div>

                                            <div className="testimonilas-two__single-bottom">
                                                <div className="left-box">
                                                    <div className="img-box">
                                                      
                                                        <div className="icon-box">
                                                            <span className="icon-quote-1"></span>
                                                        </div>
                                                    </div>

                                                    <div className="text-box">
                                                        <h3>Interior Designer
                                                        </h3>
                                                     
                                                    </div>
                                                </div>

                                                <div className="right-box">
                                                
                                                </div>
                                            </div>
                                        </div>
                                        {/* End Testimonilas Two Single */}


                                        {/* Start Testimonilas Two Single */}
                                        <div className="testimonilas-two__single">
                                            <div className="testimonilas-two__single-top">
                                                <p>“ Charot Door Manufacturer exceeded my expectations! Their eco-friendly doors are durable, stylish, and energy-efficient. Highly recommended for quality craftsmanship and sustainability.”</p>
                                            </div>

                                            <div className="testimonilas-two__single-bottom">
                                                <div className="left-box">
                                                    <div className="img-box">
                                                       
                                                        <div className="icon-box">
                                                            <span className="icon-quote-1"></span>
                                                        </div>
                                                    </div>

                                                    <div className="text-box">
                                                        <h3>Business Owner</h3>
                                                    </div>
                                                </div>

                                                <div className="right-box">
                                               
                                                </div>
                                            </div>
                                        </div>
                                        {/* End Testimonilas Two Single */}


                                        {/* Start Testimonilas Two Single */}
                                  
                                        {/* End Testimonilas Two Single */}

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </>
        )
    }
}