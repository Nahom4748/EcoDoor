import React from 'react';

export default class FaqTwo extends React.Component {
    componentDidMount() {

        const $ = window.$;

        if ($(".odometer").length) {
            var odo = $(".odometer");
            odo.each(function () {
              $(this).appear(function () {
                var countNumber = $(this).attr("data-count");
                $(this).html(countNumber);
              });
            });
        }
        
        if ($('.accordion-box').length) {
            $(".accordion-box").on('click', '.acc-btn', function () {
        
              var outerBox = $(this).parents('.accordion-box');
              var target = $(this).parents('.accordion');
        
              if ($(this).hasClass('active') !== true) {
                $(outerBox).find('.accordion .acc-btn').removeClass('active');
              }
        
              if ($(this).next('.acc-content').is(':visible')) {
                return false;
              } else {
                $(this).addClass('active');
                $(outerBox).children('.accordion').removeClass('active-block');
                $(outerBox).find('.accordion').children('.acc-content').slideUp(300);
                target.addClass('active-block');
                $(this).next('.acc-content').slideDown(300);
              }
            });
        }
    
    }
    render(){
        let publicUrl = process.env.PUBLIC_URL+'/'
        return (
            <>
                <section className="faq-two">
                   <div className="sec-title-three text-center">
                  <div className="sec-title-three__tagline">
                    <h6>FAQ</h6>
                  </div>
                     {/* <h5 className="sec-title__title">Our Frequently Asked Question</h5> */}
                  <h2 className="sec-title-three__title">Our Frequently Asked Question</h2>
                </div>
                 
                    <div className="container">
                        <div className="row">
                             <div className="col-xl-5">
                                <div className="faq-two__content">
                                    <div className="faq-two__content-img">
                                        <img src={publicUrl+"assets/E-DoorPhotos/Frq.jpg"} alt="#" />
                                    </div>

                                    
                                </div>
                            </div>
                            {/* Start Faq Two Accordion */}
                            <div className="col-xl-7">
                                <div className="faq-two__accordion">
                                    <ul className="accordion-box">
                                        <li className="accordion block active-block">
                                            <div className="acc-btn active">
                                                <div className="icon-outer">
                                                    <i className="icon-plus-1"></i>
                                                </div>
                                                <h3>
                                                What is Eco Door ?
                                                </h3>
                                            </div>
                                            <div className="acc-content current">
                                                <p>Eco doors are made from a combination of recycled wood and plastic, offering durability, insulation, and resistance to moisture and termites.</p>
                                            </div>
                                        </li>

                                        <li className="accordion block">
                                            <div className="acc-btn">
                                                <div className="icon-outer">
                                                    <i className="icon-plus-1"></i>
                                                </div>
                                                <h3>
                                                   Can I see samples of the doors before purchasing?
                                                </h3>
                                            </div>
                                            <div className="acc-content">
                                                <p>Yes, we can provide samples for you to review before making your final decision</p>
                                            </div>
                                        </li>

                                        <li className="accordion block">
                                            <div className="acc-btn">
                                                <div className="icon-outer">
                                                    <i className="icon-plus-1"></i>
                                                </div>
                                                <h3>
                                             Are your doors customizable?
                                                </h3>
                                            </div>
                                            <div className="acc-content">
                                                <p>Our doors can be customized in various sizes, colors, and finishes to meet your specific design preferences and requirements.</p>
                                            </div>
                                        </li>

                                        <li className="accordion block">
                                            <div className="acc-btn">
                                                <div className="icon-outer">
                                                    <i className="icon-plus-1"></i>
                                                </div>
                                                <h3>
                                             Are your products environmentally friendly?
                                                </h3>
                                            </div>
                                            <div className="acc-content">
                                                <p>Absolutely! We are committed to sustainable practices, using eco-friendly materials in our manufacturing processes.</p>
                                            </div>
                                        </li>
                                                <li className="accordion block">
                                            <div className="acc-btn">
                                                <div className="icon-outer">
                                                    <i className="icon-plus-1"></i>
                                                </div>
                                                <h3>
                                             Are your doors waterproof?
                                                </h3>
                                            </div>
                                            <div className="acc-content">
                                                <p>Yes, our doors are waterproof, they provide excellent protection against moisture; making them suitable for bathrooms and kitchens.</p>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            {/* End Faq Two Accordion */}

                            {/* Start Faq Two Content */}
                           
                            {/* End Faq Two Content */}
                        </div>
                    </div>
                </section>
            </>
        )
    }
}