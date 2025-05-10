
import React from "react";
import { Link } from "react-router-dom";

export default class MissionVisionTwo extends React.Component {
  render() {
    let publicUrl = process.env.PUBLIC_URL + "/";
    return (
      <>
        <section className="services-two">
          <div
            className="services-two__bg"
            style={{
              backgroundImage:
                "url(" +
                publicUrl +
                "assets/images/backgrounds/services-v2-bg.jpg)",
            }}
          ></div>
          <div
            className="services-two__bg2"
            style={{
              backgroundImage:
                "url(" +
                publicUrl +
                "assets/images/shapes/services-v2-shape22.png)",
            }}
          ></div>
          <div
            className="shape1 wow slideInLeft"
            data-wow-delay="100ms"
            data-wow-duration="2500ms"
          >
            <img
              className="float-bob-y"
              src={publicUrl + "assets/images/shapes/services-v2-shape33.png"}
              alt="#"
            />
          </div>
          <div
            className="shape2 wow slideInRight"
            data-wow-delay="100ms"
            data-wow-duration="2500ms"
          >
            <img
              className="float-bob-y"
              src={publicUrl + "assets/images/shapes/services-v2-shape44.png"}
              alt="#"
            />
          </div>
          <div className="container">
            <div className="sec-title style2 text-center">
              <div className="sec-title__tagline center">
                <div className="img-box">
                  <img
                    src={
                      publicUrl + "assets/images/resources/sec-title-img.png"
                    }
                    alt="#"
                  />
                </div>
                <h6>About Charot</h6>
              </div>
              <h2 className="sec-title__title">
                Charot pioneers eco-smart WPC solutions built on experience,
                sustainability, and integrity.
              </h2>
            </div>

            <div className="row">
              {/* About Description */}
              <div className="col-12">
                <div className="services-two__single">
                  <div className="services-two__single-inner">
                    <div className="services-two__single-content">
                      <div
                        className="services-two__single-content-bg"
                        style={{
                          backgroundImage:
                            "url(" +
                            publicUrl +
                            "assets/images/shapes/services-v2-shape1.png)",
                        }}
                      ></div>
                      <p>
                        Charot is a family-owned trading and manufacturing
                        company rooted in decades of commercial experience,
                        originating from the historic Merkato Market in Addis
                        Ababa. Evolving from a traditional wholesale business to
                        a forward-looking enterprise, Charot now pioneers the
                        production of WPC (Wood-Plastic Composite) products in
                        Ethiopia—addressing the rising demand in construction,
                        especially residential real estate and interior design.
                        <br />
                        <br />
                        Inspired by the traditional healing plant Charot (
                        <em>Ocimum Lamiifolium</em>), the company symbolizes
                        solutions, innovation, and sustainability. Our
                        operations are built on contemporary business practices
                        and environmentally conscious manufacturing with zero
                        waste.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Vision */}
              <div
                className="col-xl-4 col-lg-6 wow fadeInLeft"
                data-wow-delay="0ms"
                data-wow-duration="1500ms"
              >
                <div className="services-two__single">
                  <div className="services-two__single-inner">
                    <div className="services-two__single-content">
                      <div
                        className="services-two__single-content-bg"
                        style={{
                          backgroundImage:
                            "url(" +
                            publicUrl +
                            "assets/images/shapes/services-v2-shape1.png)",
                        }}
                      ></div>
                      <h2>
                        <Link>Vision</Link>
                      </h2>
                      <p>
                        To be the leading provider of WPC products in Ethiopia
                        and the East African market by 2030.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Mission */}
              <div
                className="col-xl-4 col-lg-6 wow fadeInRight"
                data-wow-delay="100ms"
                data-wow-duration="1500ms"
              >
                <div className="services-two__single">
                  <div className="services-two__single-inner">
                    <div className="services-two__single-content">
                      <div
                        className="services-two__single-content-bg"
                        style={{
                          backgroundImage:
                            "url(" +
                            publicUrl +
                            "assets/images/shapes/services-v2-shape1.png)",
                        }}
                      ></div>
                      <h2>
                        <Link>Mission</Link>
                      </h2>
                      <p>
                        To deliver high-quality, innovative, and eco-friendly
                        WPC solutions that meet customer expectations through
                        timely and professional service.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Core Values */}
              <div
                className="col-xl-4 col-lg-6 wow fadeInLeft"
                data-wow-delay="200ms"
                data-wow-duration="1500ms"
              >
                <div className="services-two__single">
                  <div className="services-two__single-inner">
                    <div className="services-two__single-content">
                      <div
                        className="services-two__single-content-bg"
                        style={{
                          backgroundImage:
                            "url(" +
                            publicUrl +
                            "assets/images/shapes/services-v2-shape1.png)",
                        }}
                      ></div>
                      <h2>
                        <Link>Core Values</Link>
                      </h2>
                      <p>
                        ✔ Integrity <br />
                        ✔ Professionalism <br />
                        ✔ Customer Satisfaction <br />
                        ✔ Environmental Responsibility <br />
                        ✔ Ethics <br />✔ Endurance
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Products & Services */}
              <div
                className="col-xl-6 col-lg-6 wow fadeInRight"
                data-wow-delay="0ms"
                data-wow-duration="1500ms"
              >
                <div className="services-two__single">
                  <div className="services-two__single-inner">
                    <div className="services-two__single-content">
                      <div
                        className="services-two__single-content-bg"
                        style={{
                          backgroundImage:
                            "url(" +
                            publicUrl +
                            "assets/images/shapes/services-v2-shape1.png)",
                        }}
                      ></div>
                      <h2>
                        <Link>Products & Services</Link>
                      </h2>
                      <p>
                        Charot offers durable, stylish, and sustainable WPC
                        materials for homes, offices, and hotels—including
                        doors, panels, cabinetry, flooring, and partitions. Our
                        products are waterproof, fire-retardant, soundproof,
                        scratch-resistant, antibacterial, and customizable in
                        design.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Location */}
              <div
                className="col-xl-6 col-lg-6 wow fadeInLeft"
                data-wow-delay="100ms"
                data-wow-duration="1500ms"
              >
                <div className="services-two__single">
                  <div className="services-two__single-inner">
                    <div className="services-two__single-content">
                      <div
                        className="services-two__single-content-bg"
                        style={{
                          backgroundImage:
                            "url(" +
                            publicUrl +
                            "assets/images/shapes/services-v2-shape1.png)",
                        }}
                      ></div>
                      <h2>
                        <Link>Location</Link>
                      </h2>
                      <p>
                        <strong>Factory:</strong> Tatek Industrial City, Oromia
                        Region (near Addis Ababa)
                        <br />
                        <strong>HQ:</strong> 4th Floor, Foziana Building, Lebu,
                        Addis Ababa (opposite Lebu Commercial Market)
                        <br />
                        <strong>Tel:</strong> +251 118 547 858
                        <br />
                        <strong>Mob:</strong> +251 908 686 868
                        <br />
                        <strong>Email/Website:</strong> [To be added]
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
}
