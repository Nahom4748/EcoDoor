import React from "react";

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
    return (
      <>
        <section className="about-three">
          <div
            className="about-three__bg"
            style={{
              backgroundImage:
                "url(" +
                publicUrl +
                "assets/E-DoorPhotos/five.jpg )",
            }}
          ></div>
          <div className="container">
            <div className="row">
              {/* Start About Three Counter */}
              <div className="col-xl-2 col-lg-3 col-md-4">
                <div className="about-three__counter">
                  <ul>
                    <li>
                      <h2>
                        <span className="odometer" data-count="5 ">
                          00
                        </span>
                         Years experience
                      </h2>
                      <h3>Satisfied Customers</h3>
                      <p>
                        Trusted by builders, architects and homeowners
                        <br /> across Ethiopia.
                      </p>
                    </li>

                    {/* <li>
    <h2><span className="odometer" data-count="99">00</span>%</h2>
    <h3>Project Success Rate</h3>
    <p>Delivering quality WPC doors with  <br /> precision and care.</p>
  </li> */}
                  </ul>
                </div>
              </div>
              {/* End About Three Counter */}

              {/* Start About Three Img */}
              <div className="col-xl-4 col-lg-5 col-md-7 ">
                <div className="about-three__img">
                  <div className="about-three__img-shape1">
                    <img
                      src={
                        publicUrl + "assets/images/shapes/about-v3-shape1.png"
                      }
                      alt="#"
                    />
                  </div>
                  <div className="inner ">
                    <img
                      src={publicUrl + "assets/E-DoorPhotos/telegram.jpg"}
                      alt="#"
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
                    <h2 className="sec-title-three__title">
                      We’re Here to Build
                      <br /> Beautiful Spaces.
                    </h2>
                  </div>

                  <div className="about-three__content-text1">
                    <p>
                      Charot Eco Doors is a proudly family-owned business rooted
                      in Ethiopia’s rich trading history. Inspired by tradition
                      and powered by innovation, we manufacture eco-friendly WPC
                      products that elevate the standards of modern living.
                    </p>
                  </div>

                  <div className="about-three__content-text2">
                    <div className="row">
                      <div className="col-xl-6 col-lg-6 col-md-6">
                        <div className="single-box">
                          <ul>
                            <li>
                              <h6>
                                <span className="icon-tick"></span>Durable,
                                stylish Eco doors
                              </h6>
                            </li>
                            <li>
                              <h6>
                                <span className="icon-tick"></span>Smart
                                solutions for homes & offices
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
                                <span className="icon-tick"></span>Eco-friendly
                                manufacturing
                              </h6>
                            </li>
                            <li>
                              <h6>
                                <span className="icon-tick"></span>Locally Made
                                with Global Standards
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
