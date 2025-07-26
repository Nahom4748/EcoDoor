import React from "react";
import { Link } from "react-router-dom";

export default class Unique extends React.Component {
  render() {
    let publicUrl = process.env.PUBLIC_URL + "/";
    return (
      <section className="services-three">
        <div
          className="shape2 wow slideInLeft"
          data-wow-delay="100ms"
          data-wow-duration="2500ms"
        >
          {/* <img
            className="float-bob-y"
            src={publicUrl + "assets/images/shapmjhes/services-v3-shape1.png"}
            alt="#"
          /> */}
        </div>
        <div
          className="shape3 wow slideInRight"
          data-wow-delay="100ms"
          data-wow-duration="2500ms"
        >
          <img
            className="float-bob-y"
            src={publicUrl + "assets/images/shapes/servijces-v3-shape2.png"}
            alt="#"
          />
        </div>
        <div
          className="services-three__bg"
          style={{
            backgroundImage: `url(${publicUrl}assets/E-DoorPhotos/five.jpg)`,
          }}
        ></div>

        <div className="container">
          <div className="services-three__top">
            <div className="sec-title-three">
              <div className="sec-title-three__tagline">
                <h6>What makes us unique?</h6>
              </div>
              <h2 className="sec-title-three__title">
                Defined by <br /> Purpose and Values.
              </h2>
            </div>

            <div className="services-three__top-text">
              <p>
                At <strong>Charot Eco Doors</strong>, our uniqueness comes from
                our strong values and clear purpose. We deliver products built
                with care, respect for the environment, and trust.
              </p>
            </div>
          </div>

          <div className="row">
            {/* Waterproof */}
            <div
              className="col-xl-3 col-lg-6 col-md-6 wow animated fadeInUp"
              data-wow-delay="0.1s"
            >
              <div className="services-three__single">
                <div className="shape1"></div>
                <div className="services-three__single-icon">
                  <div className="inner">
                    <span className="fas fa-tint"></span>
                  </div>
                  <div className="icon">
                    <span>+</span>
                  </div>
                </div>
                <div className="services-three__single-content">
                  <div className="title">
                    <h2>
                      <Link to="#">Waterproof</Link>
                    </h2>
                  </div>
                  <p>Keeps water out to protect your stuff from getting wet.</p>
                  <div className="bottom-box">
                    <div className="count-box">
                      <span>01</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Soundproof */}
            <div
              className="col-xl-3 col-lg-6 col-md-6 wow animated fadeInUp"
              data-wow-delay="0.2s"
            >
              <div className="services-three__single">
                <div className="shape1"></div>
                <div className="services-three__single-icon">
                  <div className="inner">
                    <span className="fas fa-volume-mute"></span>
                  </div>
                  <div className="icon">
                    <span>+</span>
                  </div>
                </div>
                <div className="services-three__single-content">
                  <div className="title">
                    <h2>
                      <Link to="#">Soundproof</Link>
                    </h2>
                  </div>
                  <p>Blocks noise to make rooms quiet and calm.</p>
                  <div className="bottom-box">
                    <div className="count-box">
                      <span>02</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Fire Retardant */}
            <div
              className="col-xl-3 col-lg-6 col-md-6 wow animated fadeInUp"
              data-wow-delay="0.3s"
            >
              <div className="services-three__single">
                <div className="shape1"></div>
                <div className="services-three__single-icon">
                  <div className="inner">
                    <span className="fas fa-shield-alt"></span>
                  </div>
                  <div className="icon">
                    <span>+</span>
                  </div>
                </div>
                <div className="services-three__single-content">
                  <div className="title">
                    <h2>
                      <Link to="#">Fire Retardant</Link>
                    </h2>
                  </div>
                  <p>Made to stop fires from spreading and keep you safe.</p>
                  <div className="bottom-box">
                    <div className="count-box">
                      <span>03</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Antibacterial */}
            <div
              className="col-xl-3 col-lg-6 col-md-6 wow animated fadeInUp"
              data-wow-delay="0.4s"
            >
              <div className="services-three__single">
                <div className="shape1"></div>
                <div className="services-three__single-icon">
                  <div className="inner">
                    <span className="fas fa-vials"></span>
                  </div>
                  <div className="icon">
                    <span>+</span>
                  </div>
                </div>
                <div className="services-three__single-content">
                  <div className="title">
                    <h2>
                      <Link to="#">AntiBacterial</Link>
                    </h2>
                  </div>
                  <p>Helps stop germs and keeps things clean and safe.</p>
                  <div className="bottom-box">
                    <div className="count-box">
                      <span>04</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}