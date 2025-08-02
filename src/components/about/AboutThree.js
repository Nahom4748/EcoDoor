import React from "react";
import { Helmet } from "react-helmet"; // Alternative for managing meta tags in React

export default class AboutThree extends React.Component {
  componentDidMount() {
    const $ = window.$;

    if ($(".count-bar").length) {
      $(".count-bar").appear(
        function () {
          var el = $(this);
          var percent = el.data("percent");
          $(el).css("width", percent).addClass("counted");
        },
        {
          accY: -50,
        }
      );
    }

    if ($(".odometer").length) {
      var odo = $(".odometer");
      odo.each(function () {
        $(this).appear(function () {
          var countNumber = $(this).attr("data-count");
          $(this).html(countNumber);
        });
      });
    }
  }

  render() {
    let publicUrl = process.env.PUBLIC_URL + "/";
    const pageTitle = "About Charot Eco Doors | Ethiopian Eco-Friendly Door Manufacturer";
    const pageDescription = "Charot Eco Doors is a family-owned Ethiopian business manufacturing durable, stylish eco-friendly doors with 5+ years of industry experience.";
    const keywords = "Ethiopian doors, eco-friendly doors, durable doors, Charot Eco Doors, Addis Ababa door manufacturer, sustainable building materials";

    return (
      <>
        {/* SEO Meta Tags using react-helmet */}
        <Helmet>
          <title>{pageTitle}</title>
          <meta name="description" content={pageDescription} />
          <meta name="keywords" content={keywords} />
          <meta property="og:title" content={pageTitle} />
          <meta property="og:description" content={pageDescription} />
          <meta property="og:type" content="website" />
        </Helmet>

        <section className="about-three" aria-labelledby="about-company-heading">
          <div
            className="about-three__bg"
            style={{
              backgroundImage: `url(${publicUrl}assets/E-DoorPhotos/five.jpg)`,
            }}
            role="img"
            aria-label="Charot Eco Doors factory background"
          ></div>
          <div className="container">
            <div className="row">
              {/* Start About Three Counter */}
              <div className="col-xl-2 col-lg-3 col-md-4">
                <div className="about-three__counter">
                  <ul>
                    <li>
                      <h2>
                        <span className="odometer" data-count="5" aria-hidden="true">
                          00
                        </span>
                        <span className="sr-only">5</span>+ Years experience
                      </h2>
                      <h3>Satisfied Customers</h3>
                      <p>
                        Trusted by builders, architects and homeowners
                        <br /> across Ethiopia.
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
              {/* End About Three Counter */}

              {/* Start About Three Img */}
              <div className="col-xl-4 col-lg-5 col-md-7">
                <div className="about-three__img">
                  <div className="about-three__img-shape1">
                    <img
                      src={`${publicUrl}assets/images/shapes/about-v3-shape1.png`}
                      alt="Decorative shape"
                    />
                  </div>
                  <div className="inner">
                    <img
                      src={`${publicUrl}assets/E-DoorPhotos/telegram.jpg`}
                      alt="Charot Eco Doors product showcase"
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>
              {/* End About Three Img */}

              {/* Start About Three Content */}
              <div className="col-xl-6">
                <div className="about-three__content">
                  <div className="sec-title-three">
                    <div className="sec-title-three__tagline">
                      <h6>About company</h6>
                    </div>
                    <h1 id="about-company-heading" className="sec-title-three__title">
                      We're Here to Build
                      <br /> Beautiful Spaces.
                    </h1>
                  </div>

                  <div className="about-three__content-text1">
                    <p>
                      <strong>Charot Eco Doors</strong> is a proudly family-owned business rooted
                      in Ethiopia's rich trading history. Inspired by tradition
                      and powered by innovation, we manufacture <strong>eco-friendly doors</strong> and building products that elevate the standards of modern living in <strong>Addis Ababa</strong> and throughout Ethiopia.
                    </p>
                  </div>

                  <div className="about-three__content-text2">
                    <div className="row">
                      <div className="col-xl-6 col-lg-6 col-md-6">
                        <div className="single-box">
                          <ul>
                            <li>
                              <h6>
                                <span className="icon-tick"></span>
                                <strong>Durable, stylish Eco doors</strong> - Weather-resistant WPC construction
                              </h6>
                            </li>
                            <li>
                              <h6>
                                <span className="icon-tick"></span>
                                <strong>Smart solutions</strong> for homes & offices with modern designs
                              </h6>
                            </li>
                          </ul>
                        </div>
                      </div>

                      <div className="col-xl-6 col-lg-6 col-md-6">
                        <div className="single-box">
                          <ul>
                            <li>
                              <h6>
                                <span className="icon-tick"></span>
                                <strong>Eco-friendly manufacturing</strong> - Sustainable materials and processes
                              </h6>
                            </li>
                            <li>
                              <h6>
                                <span className="icon-tick"></span>
                                <strong>Locally Made</strong> with International Quality Standards
                              </h6>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* End About Three Content */}
            </div>
          </div>
        </section>
      </>
    );
  }
}