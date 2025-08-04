import React from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Pagination, Navigation, Autoplay } from "swiper/modules";

// Swiper CSS
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default class HeroTwo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activeIndex: 0
        };
        this.swiperRef = React.createRef();
    }

    render(){
        let publicUrl = process.env.PUBLIC_URL + '/';
        return (
            <>
                <section className="main-slider main-slider-two">
                    <Swiper 
                        modules={[EffectFade, Pagination, Navigation, Autoplay]}
                        loop={true}
                        slidesPerView={1}
                        effect="fade"
                        speed={1000}
                        autoplay={{
                            delay: 5000,
                            disableOnInteraction: false
                        }}
                        pagination={{
                            el: "#main-slider-pagination",
                            type: "bullets",
                            clickable: true
                        }}
                        navigation={{
                            nextEl: "#main-slider__swiper-button-next",
                            prevEl: "#main-slider__swiper-button-prev"
                        }}
                        className="swiper-container thm-swiper__slider"
                        onSwiper={(swiper) => {
                            this.swiperRef.current = swiper;
                        }}
                    >
                        {/* Slide 1 */}
                        <SwiperSlide className="swiper-slide">
                            <div className="image-layer" style={{
                                backgroundImage: `url(${publicUrl}assets/images/slides/three.jpg)`,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center center'
                            }}></div>
                            <div className="container">
                                <div className="main-slider-two__content">
                                    <div className="tagline">
                                        <p>Welcome to Charot Eco Doors</p>
                                    </div>
                                    <div className="title">
                                        <h2>High-Quality <br /> Eco Doors <br /> for Modern Spaces.</h2>
                                    </div>
                                    <div className="btn-box">
                                        <Link to={process.env.PUBLIC_URL + `/contact`} className="thm-btn">
                                            <span className="txt">Contact Us</span>
                                            <i className="fa fa-angle-double-right"></i>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>

                        {/* Slide 2 */}
                        <SwiperSlide className="swiper-slide">
                            <div className="image-layer" style={{
                                backgroundImage: `url(${publicUrl}assets/images/slides/four.jpg)`,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center center'
                            }}></div>
                            <div className="container">
                                <div className="main-slider-two__content">
                                    <div className="tagline">
                                        <p>Welcome to Charot Eco Doors</p>
                                    </div>
                                    <div className="title">
                                        <h2>High-Quality <br /> Doors Quick Fixes <br /> Long-Lasting Results</h2>
                                    </div>
                                    <div className="btn-box">
                                        <Link to={process.env.PUBLIC_URL + `/contact`} className="thm-btn">
                                            <span className="txt">Contact Us</span>
                                            <i className="fa fa-angle-double-right"></i>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>

                        {/* Slide 3 */}
                        <SwiperSlide className="swiper-slide">
                            <div className="image-layer" style={{
                                backgroundImage: `url(${publicUrl}assets/images/slides/five.jpg)`,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center center'
                            }}></div>
                            <div className="container">
                                <div className="main-slider-two__content">
                                    <div className="tagline">
                                        <p>Welcome to Charot Eco Doors</p>
                                    </div>
                                    <div className="title">
                                        <h2>Sustainable <br /> Door Solutions <br /> for Your Home</h2>
                                    </div>
                                    <div className="btn-box">
                                        <Link to={process.env.PUBLIC_URL + `/contact`} className="thm-btn">
                                            <span className="txt">Contact Us</span>
                                            <i className="fa fa-angle-double-right"></i>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>

                        {/* Slide 4 */}
                        <SwiperSlide className="swiper-slide">
                            <div className="image-layer" style={{
                                backgroundImage: `url(${publicUrl}assets/images/slides/five-five.jpg)`,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center center'
                            }}></div>
                            <div className="container">
                                <div className="main-slider-two__content">
                                    <div className="tagline">
                                        <p>Welcome to Charot Eco Doors</p>
                                    </div>
                                    <div className="title">
                                        <h2>Beautiful <br /> Durable Doors <br /> for Every Style</h2>
                                    </div>
                                    <div className="btn-box">
                                        <Link to={process.env.PUBLIC_URL + `/contact`} className="thm-btn">
                                            <span className="txt">Contact Us</span>
                                            <i className="fa fa-angle-double-right"></i>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>

                        {/* Slide 5 */}
                        <SwiperSlide className="swiper-slide">
                            <div className="image-layer" style={{
                                backgroundImage: `url(${publicUrl}assets/images/slides/seven.jpg)`,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center center'
                            }}></div>
                            <div className="container">
                                <div className="main-slider-two__content">
                                    <div className="tagline">
                                        <p>Welcome to Charot Eco Doors</p>
                                    </div>
                                    <div className="title">
                                        <h2>Beautiful <br /> Durable Doors <br /> for Every Style</h2>
                                    </div>
                                    <div className="btn-box">
                                        <Link to={process.env.PUBLIC_URL + `/contact`} className="thm-btn">
                                            <span className="txt">Contact Us</span>
                                            <i className="fa fa-angle-double-right"></i>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>

                        {/* Navigation buttons */}
                        <div className="main-slider__nav">
                            <div className="swiper-button-prev" id="main-slider__swiper-button-next">
                                <i className="icon-left-arrow"></i>
                            </div>
                            <div className="swiper-button-next" id="main-slider__swiper-button-prev">
                                <i className="icon-right-arrow"></i>
                            </div>
                        </div>
                    </Swiper>
                </section>
            </>
        )
    }
}
