import React from 'react';
import { Link } from 'react-router-dom';

export default class OurCustomers extends React.Component {
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
                    <h6>Our Customers</h6>
                    <span className="right"></span>
                  </div>
                  <h5 className="sec-title__title">Ideal Customers</h5>
                </div>

                <div className="row">
                  {/* Start Services One Single */}
                  <div
                    className="col-xl-3 col-lg-6 col-md-6 wow fadeInLeft"
                    data-wow-delay="0ms"
                    data-wow-duration="1000ms"
                  >
                    <div className="services-one__single">
                      <div className="shape1">
                        <img
                          src={
                            publicUrl +
                            "assets/images/shapes/services-v1-shape2.png"
                          }
                          alt="#"
                        />
                      </div>
                      <div className="shape2">
                        <img
                          src={
                            publicUrl +
                            "assets/images/shapes/services-v1-shape3.png"
                          }
                          alt="#"
                        />
                      </div>
                      <div className="shape3">
                        <img
                          src={
                            publicUrl +
                            "assets/images/shapes/services-v1-shape4.png"
                          }
                          alt="#"
                        />
                      </div>
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
                            "assets/images/services/services-v1-img1.jpg"
                          }
                          alt="#"
                        />
                      </div>

                      <div className="services-one__single-content text-center">
                        <h2>
                          <Link
                            to={process.env.PUBLIC_URL + `/arbor-management`}
                          >
                            Real Estate{" "}
                          </Link>
                        </h2>
                        <p>
                          Eco-friendly, stylish doors that boost value and
                          sustainability.
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
                      <div className="shape1">
                        <img
                          src={
                            publicUrl +
                            "assets/images/shapes/services-v1-shape2.png"
                          }
                          alt="#"
                        />
                      </div>
                      <div className="shape2">
                        <img
                          src={
                            publicUrl +
                            "assets/images/shapes/services-v1-shape3.png"
                          }
                          alt="#"
                        />
                      </div>
                      <div className="shape3">
                        <img
                          src={
                            publicUrl +
                            "assets/images/shapes/services-v1-shape4.png"
                          }
                          alt="#"
                        />
                      </div>
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
                            "assets/images/services/services-v1-img2.jpg"
                          }
                          alt="#"
                        />
                      </div>

                      <div className="services-one__single-content text-center">
                        <h2>
                          <Link
                            to={process.env.PUBLIC_URL + `/arbor-management`}
                          >
                            Hotels{" "}
                          </Link>
                        </h2>
                        <p>
                          Create a premium guest experience with modern,
                          soundproof, and elegant eco doors.
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
                      <div className="shape1">
                        <img
                          src={
                            publicUrl +
                            "assets/images/shapes/services-v1-shape2.png"
                          }
                          alt="#"
                        />
                      </div>
                      <div className="shape2">
                        <img
                          src={
                            publicUrl +
                            "assets/images/shapes/services-v1-shape3.png"
                          }
                          alt="#"
                        />
                      </div>
                      <div className="shape3">
                        <img
                          src={
                            publicUrl +
                            "assets/images/shapes/services-v1-shape4.png"
                          }
                          alt="#"
                        />
                      </div>
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
                            "assets/images/services/services-v1-img3.jpg"
                          }
                          alt="#"
                        />
                      </div>

                      <div className="services-one__single-content text-center">
                        <h2>
                          <Link
                            to={process.env.PUBLIC_URL + `/arbor-management`}
                          >
                            Office Buildings{" "}
                          </Link>
                        </h2>
                        <p>
                          Modern, durable, and energy-efficient doors for
                          professional spaces.
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
                      <div className="shape1">
                        <img
                          src={
                            publicUrl +
                            "assets/images/shapes/services-v1-shape2.png"
                          }
                          alt="#"
                        />
                      </div>
                      <div className="shape2">
                        <img
                          src={
                            publicUrl +
                            "assets/images/shapes/services-v1-shape3.png"
                          }
                          alt="#"
                        />
                      </div>
                      <div className="shape3">
                        <img
                          src={
                            publicUrl +
                            "assets/images/shapes/services-v1-shape4.png"
                          }
                          alt="#"
                        />
                      </div>
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
                        {/* <div className="overlay-icon">
                          <div className="icon-box">
                            <span className="icon-gardening-1"></span>
                          </div>
                        </div> */}
                        <img
                          src={
                            publicUrl +
                            "assets/images/services/services-v1-img4.jpg"
                          }
                          alt="#"
                        />
                      </div>

                      <div className="services-one__single-content text-center">
                        <h2>
                          <Link
                            to={process.env.PUBLIC_URL + `/arbor-management`}
                          >
                            Home owners{" "}
                          </Link>
                        </h2>
                        <p>
                          Secure, stylish, and eco-conscious doors for every
                          home.
                        </p>
                      </div>
                    </div>
                  </div>
                  {/* End Services One Single Our Customers */}
                </div>
              </div>
            </section>
          </>
        );
    }
}