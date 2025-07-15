import React from "react";
import { Link } from "react-router-dom";

export default class ServiceTwo extends React.Component {
  render() {
    let publicUrl = process.env.PUBLIC_URL + "/";
    return (
      <>
        <section className="services-two">
          <div
            className="services-two__bg"
            style={{
              backgroundImage:
                "url(" + publicUrl + "assets/E-DoorPhotos/five-five.jpg)",
            }}
          ></div>
          <div className="services-two__bg2"></div>

          <div
            className="shape2 wow slideInRight"
            data-wow-delay="100ms"
            data-wow-duration="2500ms"
          ></div>
          <div className="container">
            <div className="sec-title style2 text-center">
              <div className="sec-title__tagline center">
                <div className="img-box"></div>
                <h6>Our Services</h6>
              </div>
              <h2 className="sec-title__title">We Provide Most Services</h2>
            </div>

            <div className="row">
              {/* Start Services Two Single */}
              <div
                className="col-xl-4 col-lg-6 wow fadeInLeft"
                data-wow-delay="0ms"
                data-wow-duration="1500ms"
              >
                <div className="services-two__single">
                  <div className="services-two__single-inner">
                    <div className="services-two__single-img">
                      <div className="inner">
                        <img
                          src={
                            publicUrl +
                            "assets/images/services/services-v2-img1.jpg"
                          }
                          alt="#"
                        />
                      </div>
                    </div>

                    <div className="services-two__single-content">
                      <h2>
                        <Link>
                          Customer-First <br /> Approach
                        </Link>
                      </h2>
                      <p>
                        Our team is trained to serve you with care, honesty, and
                        respect.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              {/* End Services Two Single */}

              {/* Start Services Two Single */}
              <div
                className="col-xl-4 col-lg-6 wow fadeInRight"
                data-wow-delay="100ms"
                data-wow-duration="1500ms"
              >
                <div className="services-two__single">
                  <div className="services-two__single-inner">
                    <div className="services-two__single-img">
                      <div className="inner">
                        <img
                          src={
                            publicUrl +
                            "assets/images/services/services-v2-img2.jpg"
                          }
                          alt="#"
                        />
                      </div>
                    </div>

                    <div className="services-two__single-content">
                      <h2>
                        <Link>
                          High-Quality <br /> Products
                        </Link>
                      </h2>
                      <p>
                        We provide strong, long-lasting WPC products at fair
                        prices.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              {/* End Services Two Single */}

              {/* Start Services Two Single */}
              <div
                className="col-xl-4 col-lg-6 wow fadeInLeft"
                data-wow-delay="200ms"
                data-wow-duration="1500ms"
              >
                <div className="services-two__single">
                  <div className="services-two__single-inner">
                    <div className="services-two__single-img">
                      <div className="inner">
                        <img
                          src={
                            publicUrl +
                            "assets/images/services/services-v2-img3.jpg"
                          }
                          alt="#"
                        />
                      </div>
                    </div>

                    <div className="services-two__single-content">
                      <h2>
                        <Link>
                          Product <br /> Installation
                        </Link>
                      </h2>
                      <p>
                        We don’t just make the products — we install them for
                        you, too.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              {/* End Services Two Single */}

              {/* Start Services Two Single */}
              <div
                className="col-xl-4 col-lg-6 wow fadeInLeft"
                data-wow-delay="0ms"
                data-wow-duration="1500ms"
              >
                <div className="services-two__single">
                  <div className="services-two__single-inner">
                    <div className="services-two__single-img">
                      <div className="inner">
                        <img
                          src={
                            publicUrl +
                            "assets/images/services/services-v2-img4.jpg"
                          }
                          alt="#"
                        />
                      </div>
                    </div>

                    <div className="services-two__single-content">
                      <h2>
                        <Link>
                          After-Sales <br /> Support
                        </Link>
                      </h2>
                      <p>
                        Even after installation, we stay in touch to make sure
                        you’re happy with the results.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              {/* End Services Two Single */}

              {/* Start Services Two Single */}
              <div
                className="col-xl-4 col-lg-6 wow fadeInRight"
                data-wow-delay="100ms"
                data-wow-duration="1500ms"
              >
                <div className="services-two__single">
                  <div className="services-two__single-inner">
                    <div className="services-two__single-img">
                      <div className="inner">
                        <img
                          src={
                            publicUrl +
                            "assets/images/services/services-v2-img5.jpg"
                          }
                          alt="#"
                        />
                      </div>
                    </div>

                    <div className="services-two__single-content">
                      <h2>
                        <Link>
                          Growing
                          <br /> Services
                        </Link>
                      </h2>
                      <p>
                        We are always working to expand our services and reach
                        more customers and areas.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              {/* End Services Two Single */}

              {/* Start Services Two Single */}
              <div
                className="col-xl-4 col-lg-6 wow fadeInLeft"
                data-wow-delay="200ms"
                data-wow-duration="1500ms"
              >
                <div className="services-two__single">
                  <div className="services-two__single-inner">
                    <div className="services-two__single-img">
                      <div className="inner">
                        <img
                          src={
                            publicUrl +
                            "assets/images/services/services-v2-img6.jpg"
                          }
                          alt="#"
                        />
                      </div>
                    </div>

                    <div className="services-two__single-content">
                      <h2>
                        <Link>
                          Win-Win <br /> Relationships
                        </Link>
                      </h2>
                      <p>
                        We believe in growing together with our customers — your
                        satisfaction is our success.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              {/* End Services Two Single */}
            </div>
          </div>
        </section>
      </>
    );
  }
}
