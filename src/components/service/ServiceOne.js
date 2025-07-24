import React from 'react';
import { Link } from 'react-router-dom';

export default class ServiceOne extends React.Component {
    render(){
        let publicUrl = process.env.PUBLIC_URL+'/'
        return (
          <>
            <section className="services-one">
              <div className="gradient-bg"></div>
              <div className="auto-container">
                <div className="sec-title text-center">
                  <div className="sec-title__tagline">
                    <span className="left"></span>
                    <h6>Exceptional Product Features</h6>
                    <span className="right"></span>
                  </div>
               <h2 className="sec-title_e">
  Discover the benefits of our eco-friendly doors.
</h2>
                </div>

                <div className="row">
                  {/* Start Services One Single */}
                  <div
                    className="col-xl-3 col-lg-6 col-md-6 wow fadeInLeft"
                    data-wow-delay="0ms"
                    data-wow-duration="1000ms"
                  >
                    <div className="services-one__single">
                      <div className="services-one__single-img">
                        <div
                          className="services-one__single-img-bg"
                          style={{
                            backgroundImage:
                              "url(" +
                              publicUrl +
                              "assets/images/shapes/services-v1-shape1.png)",
                          }}
                        ></div>
            
                        <img
                          src={
                            publicUrl +
                            "assets/images/services/uniqueTwo/Waterproof.png"
                          }
                          alt="Waterproof"
                        />
                      </div>

                      <div className="services-one__single-content text-center">
                        <h2>
                          <Link
                          >
                            Waterproof{" "}
                          </Link>
                        </h2>
                        <p>
                          Our WPC products are water and moisture resistant,
                          ensuring longevity in humid environments.
                        </p>
                      </div>
                    </div>
                  </div>
                  {/* End Services One Single */}

                  {/* Start Services One Single */}
                  <div
                    className="col-xl-3 col-lg-6 col-md-6 wow fadeInLeft"
                    data-wow-delay="100ms"
                    data-wow-duration="1000ms"
                  >
                    <div className="services-one__single">
                      <div className="services-one__single-img">
                        <div
                          className="services-one__single-img-bg"
                          style={{
                            backgroundImage:
                              "url(" +
                              publicUrl +
                              "assets/images/shapes/services-v1-shape1.png)",
                          }}
                        ></div>
                     
                        <img
                          src={
                            publicUrl +
                            "assets/images/services/uniqueTwo/Soundproof.png"
                          }
                          alt="Soundproof"
                        />
                      </div>

                      <div className="services-one__single-content text-center">
                        <h2>
                          <Link
                          >
                            Soundproof{" "}
                          </Link>
                        </h2>
                        <p>
                          Acoustic walls and doors absorb sounds, creating a
                          peaceful environment in your space.
                        </p>
                      </div>
                    </div>
                  </div>
                  {/* End Services One Single */}

                  {/* Start Services One Single */}
                  <div
                    className="col-xl-3 col-lg-6 col-md-6 wow fadeInRight"
                    data-wow-delay="0ms"
                    data-wow-duration="1000ms"
                  >
                    <div className="services-one__single">
                      <div className="services-one__single-img">
                        <div
                          className="services-one__single-img-bg"
                          style={{
                            backgroundImage:
                              "url(" +
                              publicUrl +
                              "assets/images/shapes/services-v1-shape1.png)",
                          }}
                        ></div>
                       
                        <img
                          src={
                            publicUrl +
                            "assets/images/services/uniqueTwo/Fire Retardant.png"
                          }
                          alt="Fire Retardant"
                        />
                      </div>

                      <div className="services-one__single-content text-center">
                        <h2>
                          <Link
                          >
                            Fire Retardant{" "}
                          </Link>
                        </h2>
                        <p>
                          Our WPC products have high fire resistance properties
                          for enhanced safety..
                        </p>
                      </div>
                    </div>
                  </div>
                  {/* End Services One Single */}

                  {/* Start Services One Single */}
                  <div
                    className="col-xl-3 col-lg-6 col-md-6 wow fadeInRight"
                    data-wow-delay="100ms"
                    data-wow-duration="1000ms"
                  >
                    <div className="services-one__single">
                      <div className="services-one__single-img">
                        <div
                          className="services-one__single-img-bg"
                          style={{
                            backgroundImage:
                              "url(" +
                              publicUrl +
                              "assets/images/shapes/services-v1-shape1.png)",
                          }}
                        ></div>
                  
                        <img
                          src={
                            publicUrl +
                            "assets/images/services/uniqueTwo/AntiBacterial.png"
                          }
                          alt="Anti-Bacterial"
                        />
                      </div>

                      <div className="services-one__single-content text-center">
                        <h2>
                          <Link
                            
                          >
                            Anti-Bacterial{" "}
                          </Link>
                        </h2>
                        <p>
                          Our products are clean and neat, preventing the growth
                          of bacteria for healthier spaces.
                        </p>
                      </div>
                    </div>
                  </div>
                  {/* End Services One Single */}
                </div>
              </div>
            </section>
          </>
        );
    }
}