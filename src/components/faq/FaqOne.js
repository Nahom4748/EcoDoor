import React from 'react';

export default class FaqOne extends React.Component {
    componentDidMount() {

        const $ = window.$;
        
        if ($('.count-bar').length) {
            $('.count-bar').appear(function () {
              var el = $(this);
              var percent = el.data('percent');
              $(el).css('width', percent).addClass('counted');
            }, {
              accY: -50
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
        return (
          <>
            <section className="faq-one">
              <div className="shape1"></div>
              <div className="container">
                <div className="row">
                  {/* Start Faq One Progress */}
                  <div className="col-xl-6 col-lg-6">
                    <div className="faq-one__progress">
                      <div className="sec-title">
                        <div className="sec-title__tagline">
                          <h6>Our FAQ</h6>
                          <span className="right"></span>
                        </div>
                        <h2 className="sec-title__title">
                          Our Frequently Asked <br /> Some Question
                        </h2>
                      </div>

                      {/* Start Faq One Progress Single */}
                      <div className="faq-one__progress-single">
                        <h4 className="faq-one__progress-title">
                          Product Durability & Quality
                        </h4>
                        <div className="bar">
                          <div
                            className="bar-inner count-bar"
                            data-percent="95%"
                          >
                            <div className="count-text">95%</div>
                          </div>
                        </div>
                      </div>
                      {/* End Faq One Progress Single */}

                      {/* Start Faq One Progress Single */}
                      <div className="faq-one__progress-single">
                        <h4 className="faq-one__progress-title">
                          Eco-Friendly Manufacturing
                        </h4>
                        <div className="bar">
                          <div
                            className="bar-inner count-bar"
                            data-percent="90%"
                          >
                            <div className="count-text">90%</div>
                          </div>
                        </div>
                      </div>
                      {/* End Faq One Progress Single */}

                      {/* Start Faq One Progress Single */}
                      <div className="faq-one__progress-single mb0">
                        <h4 className="faq-one__progress-title">
                          Customer Satisfaction
                        </h4>
                        <div className="bar">
                          <div
                            className="bar-inner count-bar"
                            data-percent="85%"
                          >
                            <div className="count-text">85%</div>
                          </div>
                        </div>
                      </div>
                      {/* End Faq One Progress Single */}
                    </div>
                  </div>
                  {/* End Faq One Progress */}

                  {/* Start Faq One Accordion */}
                  <div className="col-xl-6 col-lg-6">
                    <div className="faq-one__accordion">
                      <ul className="accordion-box">
                        <li className="accordion block active-block">
                          <div className="acc-btn active">
                            <div className="icon-outer">
                              <i className="icon-up-arrow"></i>
                            </div>
                            <h3>What is Eco Door ?</h3>
                          </div>
                          <div className="acc-content current">
                            <p>
                              Eco doors are made from a combination of recycled
                              wood and plastic, offering durability, insulation,
                              and resistance to moisture and termites.
                            </p>
                          </div>
                        </li>

                        <li className="accordion block">
                          <div className="acc-btn">
                            <div className="icon-outer">
                              <i className="icon-up-arrow"></i>
                            </div>
                            <h3>
                              Can I see samples of the doors before purchasing?
                            </h3>
                          </div>
                          <div className="acc-content">
                            <p>
                              Yes, we can provide samples for you to review
                              before making your final decision
                            </p>
                          </div>
                        </li>

                        <li className="accordion block">
                          <div className="acc-btn">
                            <div className="icon-outer">
                              <i className="icon-up-arrow"></i>
                            </div>
                            <h3>Are your doors customizable?</h3>
                          </div>
                          <div className="acc-content">
                            <p>
                              Our doors can be customized in various sizes,
                              colors, and finishes to meet your specific design
                              preferences and requirements.
                            </p>
                          </div>
                        </li>

                        <li className="accordion block">
                          <div className="acc-btn">
                            <div className="icon-outer">
                              <i className="icon-up-arrow"></i>
                            </div>
                            <h3>Are your products environmentally friendly?</h3>
                          </div>
                          <div className="acc-content">
                            <p>
                              Absolutely! We are committed to sustainable
                              practices, using eco-friendly materials in our
                              manufacturing processes.
                            </p>
                          </div>
                        </li>

                        <li className="accordion block">
                          <div className="acc-btn">
                            <div className="icon-outer">
                              <i className="icon-up-arrow"></i>
                            </div>
                            <h3>Are your doors waterproof?</h3>
                          </div>
                          <div className="acc-content">
                            <p>
                              Yes, our doors are waterproof, they provide
                              excellent protection against moisture; making them
                              suitable for bathrooms and kitchens.
                            </p>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                  {/* End Faq One Accordion */}
                </div>
              </div>
            </section>
          </>
        );
    }
}