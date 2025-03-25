import React from 'react';
import { Link } from 'react-router-dom';

export default class WhyChooseOne extends React.Component {
    componentDidMount() {

        const $ = window.$;

        if ($(".tabs-box").length) {
            $(".tabs-box .tab-buttons .tab-btn").on("click", function (e) {
              e.preventDefault();
              var target = $($(this).attr("data-tab"));
        
              if ($(target).is(":visible")) {
                return false;
              } else {
                target
                  .parents(".tabs-box")
                  .find(".tab-buttons")
                  .find(".tab-btn")
                  .removeClass("active-btn");
                $(this).addClass("active-btn");
                target
                  .parents(".tabs-box")
                  .find(".tabs-content")
                  .find(".tab")
                  .fadeOut(0);
                target
                  .parents(".tabs-box")
                  .find(".tabs-content")
                  .find(".tab")
                  .removeClass("active-tab");
                $(target).fadeIn(300);
                $(target).addClass("active-tab");
              }
            });
        }

        if ($('.masonary-layout').length) {
            $('.masonary-layout').isotope({
              layoutMode: 'masonry'
            });
          }
          if ($('.post-filter').length) {
            $('.post-filter li').children('.filter-text').on('click', function () {
              var Self = $(this);
              var selector = Self.parent().attr('data-filter');
              $('.post-filter li').removeClass('active');
              Self.parent().addClass('active');
              $('.filter-layout').isotope({
                filter: selector,
                animationOptions: {
                  duration: 500,
                  easing: 'linear',
                  queue: false
                }
              });
              return false;
            });
          }
      
          if ($('.post-filter.has-dynamic-filters-counter').length) {
            // var allItem = $('.single-filter-item').length;
            var activeFilterItem = $('.post-filter.has-dynamic-filters-counter').find('li');
            activeFilterItem.each(function () {
              var filterElement = $(this).data('filter');
              var count = $('.filter-layout').find(filterElement).length;
              $(this).children('.filter-text').append('<span class="count">' + count + '</span>');
            });
          };
          
    }
    render(){
        let publicUrl = process.env.PUBLIC_URL+'/'
        return (
            <>
                <section className="why-choose-one">
                    <div className="shape1"></div>
                    <div className="shape2"><img src={publicUrl+"assets/images/shapes/why-choose-v1-shape1.png"} alt="#" /></div>
                    <div className="shape3"><img src={publicUrl+"assets/images/shapes/why-choose-v1-shape2.png"} alt="#" /></div>
                    <div className="why-choose-one__bg" style={{backgroundImage: 'url('+publicUrl+'assets/images/pattern/why-choose-v1-pattern.png)'}}></div>
                    <div className="container">
                        <div className="sec-title text-center">
                           
                            <h2 className="sec-title__title">Why Choose Us</h2>
                        </div>

                        <div className="row">
                            <div className="col-xl-12">
                                <div className="why-choose-one__inner">
                                    <div className="why-choose-one__tab-box tabs-box">

                                        <div className="row filter-layout masonary-layout">
                                            {/* Start Why Choose One Tab Button */}
                                            <div className="col-xl-4">
                                                <ul className="tab-buttons clearfix list-unstyled">
                                                    <li data-tab="#services" className="tab-btn wow fadeInLeft"
                                                        data-wow-delay="100ms" data-wow-duration="1000ms">Eco-Friendly 
                                                    </li>
                                                    <li data-tab="#environmental" className="tab-btn active-btn wow fadeInLeft"
                                                        data-wow-delay="200ms" data-wow-duration="1000ms">Durability & Security</li>
                                                    <li data-tab="#support" className="tab-btn wow fadeInLeft"
                                                        data-wow-delay="300ms" data-wow-duration="1000ms">Customer Satisfaction
                                                    </li>
                                                </ul>
                                            </div>
                                            {/* Start Why Choose One Tab Button */}


                                            {/* Start Why Choose One Tab Content */}
                                            <div className="col-xl-8">
                                                <div className="tabs-content">

                                                    {/* Start Tab */}
                                                    <div className="tab" id="services">
                                                        <div className="tabs-content__inner">
                                                            <div className="tabs-content__inner-bg" style={{backgroundImage: 'url('+publicUrl+'assets/images/resources/why-choose-v1-img1.jpg)'}}></div>
                                                            <div className="tabs-content__list clearfix">
                                                                <ul className="clearfix">
                                                                    <li>
                                                                        <div className="inner text-center">
                                                                            <div className="icon-box">
                                                                                <span className="icon-gardening"></span>
                                                                            </div>
                                                                            <h4><Link to={process.env.PUBLIC_URL + `/`}>Sustainably <br />Materials</Link></h4>
                                                                        </div>
                                                                    </li>

                                                                    <li className="mt30">
                                                                        <div className="inner text-center">
                                                                            <div className="icon-box">
                                                                                <span className="icon-farmer"></span>
                                                                            </div>
                                                                            <h4><Link to={process.env.PUBLIC_URL + `/`}>Non-Toxic & <br />  Safe Finishes</Link></h4>
                                                                        </div>
                                                                    </li>

                                                                    <li>
                                                                        <div className="inner text-center">
                                                                            <div className="icon-box">
                                                                                <span className="icon-shovels"></span>
                                                                            </div>
                                                                            <h4><Link to={process.env.PUBLIC_URL + `/`}>Efficient  <br /> Design</Link></h4>
                                                                        </div>
                                                                    </li>

                                                                    <li className="mt30">
                                                                        <div className="inner text-center">
                                                                            <div className="icon-box">
                                                                                <span className="icon-pruning-shears"></span>
                                                                            </div>
                                                                            <h4><Link to={process.env.PUBLIC_URL + `/`}> Recycling <br /> Reduction </Link></h4>
                                                                        </div>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    {/* End Tab */}

                                                    {/* Start Tab */}
                                                    <div className="tab active-tab" id="environmental">
                                                        <div className="tabs-content__inner">
                                                            <div className="tabs-content__inner-bg" style={{backgroundImage: 'url('+publicUrl+'assets/images/resources/why-choose-v1-img2.jpg)'}}></div>
                                                            <div className="tabs-content__list clearfix">
                                                                <ul className="clearfix">
                                                                    <li>
                                                                        <div className="inner text-center">
                                                                            <div className="icon-box">
                                                                                <span className="icon-gardening"></span>
                                                                            </div>
                                                                            <h4><Link to={process.env.PUBLIC_URL + `/ `}>Long-Term  <br /> Strength</Link></h4>
                                                                        </div>
                                                                    </li>

                                                                    <li className="mt30">
                                                                        <div className="inner text-center">
                                                                            <div className="icon-box">
                                                                                <span className="icon-farmer"></span>
                                                                            </div>
                                                                            <h4><Link to={process.env.PUBLIC_URL + `/ `}>Safe for All  <br /> Environments</Link></h4>
                                                                        </div>
                                                                    </li>

                                                                    <li>
                                                                        <div className="inner text-center">
                                                                            <div className="icon-box">
                                                                                <span className="icon-shovels"></span>
                                                                            </div>
                                                                            <h4><Link to={process.env.PUBLIC_URL + `/ `}>Fire-Rated &  <br /> Safety</Link></h4>
                                                                        </div>
                                                                    </li>

                                                                    <li className="mt30">
                                                                        <div className="inner text-center">
                                                                            <div className="icon-box">
                                                                                <span className="icon-pruning-shears"></span>
                                                                            </div>
                                                                            <h4><Link to={process.env.PUBLIC_URL + `/ `}> Long-Term   <br /> Cost Savings</Link></h4>
                                                                        </div>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    {/* End Tab */}

                                                    {/* Start Tab */}
                                                    <div className="tab" id="support">
                                                        <div className="tabs-content__inner">
                                                            <div className="tabs-content__inner-bg"style={{backgroundImage: 'url('+publicUrl+'assets/images/resources/why-choose-v1-img3.jpg)'}}></div>
                                                            <div className="tabs-content__list clearfix">
                                                                <ul className="clearfix">
                                                                    <li>
                                                                        <div className="inner text-center">
                                                                            <div className="icon-box">
                                                                                <span className="icon-gardening"></span>
                                                                            </div>
                                                                            <h4><Link to={process.env.PUBLIC_URL + `/ `}>Expert<br />  Guidance</Link></h4>
                                                                        </div>
                                                                    </li>

                                                                    <li className="mt30">
                                                                        <div className="inner text-center">
                                                                            <div className="icon-box">
                                                                                <span className="icon-farmer"></span>
                                                                            </div>
                                                                            <h4><Link to={process.env.PUBLIC_URL + `/ `}>Meet Your    <br /> Needs</Link></h4>
                                                                        </div>
                                                                    </li>

                                                                    <li>
                                                                        <div className="inner text-center">
                                                                            <div className="icon-box">
                                                                                <span className="icon-shovels"></span>
                                                                            </div>
                                                                            <h4><Link to={process.env.PUBLIC_URL + `/ `}>Support &  <br /> Maintenance</Link></h4>
                                                                        </div>
                                                                    </li>

                                                                    <li className="mt30">
                                                                        <div className="inner text-center">
                                                                            <div className="icon-box">
                                                                                <span className="icon-pruning-shears"></span>
                                                                            </div>
                                                                            <h4><Link to={process.env.PUBLIC_URL + `/ `}>Long-Term   <br /> Relationship</Link></h4>
                                                                        </div>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    {/* End Tab */}

                                                </div>
                                            </div>
                                            {/* End Why Choose One Tab Content */}
                                        </div>
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