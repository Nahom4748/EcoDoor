// import React from 'react';
// import {Link} from 'react-router-dom';
// import { Swiper, SwiperSlide } from "swiper/react";
// import { EffectFade, Pagination, Navigation } from "swiper";

// export default class HeroTwo extends React.Component {
//     render(){
//         let publicUrl = process.env.PUBLIC_URL+'/'
//         return (
//             <>
//                 <section className="main-slider main-slider-two">
//                     <Swiper 
//                         loop={true}
//                         slidesPerView={1}
//                         effect="fade"
//                         autoplay={{delay:   5000}}
//                         modules={[EffectFade, Pagination, Navigation]}
//                         pagination={{
//                             el: "#main-slider-pagination",
//                             type: "bullets",
//                             clickable: true
//                         }}
//                         navigation={{
//                             nextEl: "#main-slider__swiper-button-next",
//                             prevEl: "#main-slider__swiper-button-prev"
//                         }} 
//                         className="swiper-container thm-swiper__slider">
//                         <div className="swiper-wrapper">


//                             {/* Start Main Slider Two */}
//                             <SwiperSlide className="swiper-slide">
//                                 <div className="image-layer" style={{backgroundImage: 'url('+publicUrl+'assets/images/slides/slider-v3-img1.jpg)'}}></div>

//                                 <div className="container">
//                                     <div className="main-slider-two__content">
//                                         <div className="tagline">
//                                             <p>Welcome to Charot Eco Doors!</p>
//                                         </div>
//                                         <div className="title">
//                                             <h2>Eco Doors    <br />  Strong Stylish, <br /> and Sustainable.</h2>
//                                         </div>
//                                         <div className="btn-box">
//                                             <Link to={process.env.PUBLIC_URL + `/contact`} className="thm-btn">
//                                                 <span className="txt">Contucs Us</span>
//                                                 <i className="fa fa-angle-double-right"></i>
//                                             </Link>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </SwiperSlide>
//                             {/* End Main Slider Two */}

//                             {/* Start Main Slider Two */}
//                             <SwiperSlide className="swiper-slide">
//                                 <div className="image-layer" style={{backgroundImage: 'url('+publicUrl+'assets/images/slides/slider-v2-img2.jpg)'}}></div>

//                                 <div className="container">
//                                     <div className="main-slider-two__content">
//                                         <div className="tagline">
//                                             <p>Welcome to Charot Eco Doors</p>
//                                         </div>
//                                         <div className="title">
//                                             <h2>High-Quality    <br /> Eco Doors <br /> for Modern Spaces.</h2>
//                                         </div>
//                                         <div className="btn-box">
//                                             <Link to={process.env.PUBLIC_URL + `/contact`} className="thm-btn">
//                                                 <span className="txt">Contucs Us </span>
//                                                 <i className="fa fa-angle-double-right"></i>
//                                             </Link>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </SwiperSlide>
//                             {/* End Main Slider Two */}

//                             {/* Start Main Slider Two */}
//                             <SwiperSlide className="swiper-slide">
//                                 <div className="image-layer" style={{backgroundImage: 'url('+publicUrl+'assets/images/slides/slider-v2-img1.jpg)'}}></div>

//                                 <div className="container">
//                                     <div className="main-slider-two__content">
//                                         <div className="tagline">
//                                         <p>Welcome to Charot Eco Doors</p>
//                                         </div>
//                                         <div className="title">
//                                             <h2>High-Quality   <br /> Doors Quick Fixes <br /> Long-Lasting Results</h2>
//                                         </div>
//                                         <div className="btn-box">
//                                             <Link to={process.env.PUBLIC_URL + `/contact`} className="thm-btn">
//                                                 <span className="txt">Contact Us</span>
//                                                 <i className="fa fa-angle-double-right"></i>
//                                             </Link>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </SwiperSlide>
//                             {/* End Main Slider Two */}

//                         </div>

//                         {/* If we need navigation buttons */}
//                         <div className="main-slider__nav">
//                             <div className="swiper-button-prev" id="main-slider__swiper-button-next">
//                                 <i className="icon-left-arrow"></i>
//                             </div>
//                             <div className="swiper-button-next" id="main-slider__swiper-button-prev">
//                                 <i className="icon-right-arrow"></i>
//                             </div>
//                         </div>
//                     </Swiper>
//                 </section>
//             </>
//         )
//     }
// }


// ==========================================

import React from 'react';
import {Link} from 'react-router-dom';
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Pagination, Navigation, Autoplay } from "swiper";

export default class HeroTwo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            swiperInitialized: false
        };
    }

    componentDidMount() {
        // Set state to true once component mounts to ensure autoplay begins immediately
        this.setState({ swiperInitialized: true });
    }

    render(){
        let publicUrl = process.env.PUBLIC_URL+'/'
        return (
            <>
                <section className="main-slider main-slider-two">
                    <Swiper 
                        loop={true}
                        slidesPerView={1}
                        effect="fade"
                        speed={1000}
                        simulateTouch={true}
                        autoplay={{
                            delay: 3000,
                            disableOnInteraction: false,
                            pauseOnMouseEnter: false,
                            waitForTransition: true,
                            reverseDirection: false
                        }}
                        initialSlide={0}
                        roundLengths={true}
                        modules={[EffectFade, Pagination, Navigation, Autoplay]}
                        pagination={{
                            el: "#main-slider-pagination",
                            type: "bullets",
                            clickable: true
                        }}
                        navigation={{
                            nextEl: "#main-slider__swiper-button-next",
                            prevEl: "#main-slider__swiper-button-prev"
                        }}
                        onInit={() => {
                            console.log("Swiper initialized - autoplay should start");
                        }}
                        className="swiper-container thm-swiper__slider">
                        <div className="swiper-wrapper">


                            {/* Start Main Slider Two */}
                            <SwiperSlide className="swiper-slide">
                                <div className="image-layer" style={{backgroundImage: 'url('+publicUrl+'assets/images/slides/two-two.jpg)'}}></div>

                                <div className="container">
                                    <div className="main-slider-two__content">
                                        <div className="tagline">
                                            <p>Welcome to Charot Eco Doors!</p>
                                        </div>
                                        <div className="title">
                                            <h2>Eco Doors    <br />  Strong Stylish, <br /> and Sustainable.</h2>
                                        </div>
                                        <div className="btn-box">
                                            <Link to={process.env.PUBLIC_URL + `/contact`} className="thm-btn">
                                                <span className="txt">Contucs Us</span>
                                                <i className="fa fa-angle-double-right"></i>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            {/* End Main Slider Two */}

                            {/* Start Main Slider Two */}
                            <SwiperSlide className="swiper-slide">
                                <div className="image-layer" style={{backgroundImage: 'url('+publicUrl+'assets/images/slides/three.jpg)'}}></div>

                                <div className="container">
                                    <div className="main-slider-two__content">
                                        <div className="tagline">
                                            <p>Welcome to Charot Eco Doors</p>
                                        </div>
                                        <div className="title">
                                            <h2>High-Quality    <br /> Eco Doors <br /> for Modern Spaces.</h2>
                                        </div>
                                        <div className="btn-box">
                                            <Link to={process.env.PUBLIC_URL + `/contact`} className="thm-btn">
                                                <span className="txt">Contucs Us </span>
                                                <i className="fa fa-angle-double-right"></i>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            {/* End Main Slider Two */}

                            {/* Start Main Slider Two */}
                            <SwiperSlide className="swiper-slide">
                                <div className="image-layer" style={{backgroundImage: 'url('+publicUrl+'assets/images/slides/four.jpg)'}}></div>

                                <div className="container">
                                    <div className="main-slider-two__content">
                                        <div className="tagline">
                                        <p>Welcome to Charot Eco Doors</p>
                                        </div>
                                        <div className="title">
                                            <h2>High-Quality   <br /> Doors Quick Fixes <br /> Long-Lasting Results</h2>
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
                            {/* End Main Slider Two */}

                            {/* Start Main Slider Two */}
                            <SwiperSlide className="swiper-slide">
                                <div className="image-layer" style={{backgroundImage: 'url('+publicUrl+'assets/images/slides/five.jpg)'}}></div>

                                <div className="container">
                                    <div className="main-slider-two__content">
                                        <div className="tagline">
                                        <p>Welcome to Charot Eco Doors</p>
                                        </div>
                                        <div className="title">
                                            <h2>Sustainable   <br /> Door Solutions <br /> for Your Home</h2>
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
                            {/* End Main Slider Two */}

                            {/* Start Main Slider Two */}
                            <SwiperSlide className="swiper-slide">
                                <div className="image-layer" style={{backgroundImage: 'url('+publicUrl+'assets/images/slides/six.jpg)'}}></div>

                                <div className="container">
                                    <div className="main-slider-two__content">
                                        <div className="tagline">
                                        <p>Welcome to Charot Eco Doors</p>
                                        </div>
                                        <div className="title">
                                            <h2>Beautiful   <br /> Durable Doors <br /> for Every Style</h2>
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
                            {/* End Main Slider Two */}

                            {/* Start Main Slider Two */}
                            <SwiperSlide className="swiper-slide">
                                <div className="image-layer" style={{backgroundImage: 'url('+publicUrl+'assets/images/slides/eight-four.jpg)'}}></div>

                                <div className="container">
                                    <div className="main-slider-two__content">
                                        <div className="tagline">
                                        <p>Welcome to Charot Eco Doors</p>
                                        </div>
                                        <div className="title">
                                            <h2>Elegant Design   <br /> Premium Quality <br /> Eco-Friendly Materials</h2>
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
                            {/* End Main Slider Two */}

                            {/* Start Main Slider Two */}
                            <SwiperSlide className="swiper-slide">
                                <div className="image-layer" style={{backgroundImage: 'url('+publicUrl+'assets/images/slides/nine.jpg)'}}></div>

                                <div className="container">
                                    <div className="main-slider-two__content">
                                        <div className="tagline">
                                        <p>Welcome to Charot Eco Doors</p>
                                        </div>
                                        <div className="title">
                                            <h2>Modern Elegance   <br /> Timeless Quality <br /> Custom Solutions</h2>
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
                            {/* End Main Slider Two */}

                            {/* Start Main Slider Two */}
                            <SwiperSlide className="swiper-slide">
                                <div className="image-layer" style={{backgroundImage: 'url('+publicUrl+'assets/images/slides/nine-four.jpg)'}}></div>

                                <div className="container">
                                    <div className="main-slider-two__content">
                                        <div className="tagline">
                                        <p>Welcome to Charot Eco Doors</p>
                                        </div>
                                        <div className="title">
                                            <h2>Superior Craftsmanship   <br /> Modern Design <br /> Exceptional Durability</h2>
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
                            {/* End Main Slider Two */}

                        </div>

                        {/* If we need navigation buttons */}
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