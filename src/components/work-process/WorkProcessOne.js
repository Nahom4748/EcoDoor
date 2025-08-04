import React from "react";
import { Link } from "react-router-dom";

export default class WorkProcessOne extends React.Component {
  componentDidMount() {
    const $ = window.$;

    if ($(".masonary-layout").length) {
      $(".masonary-layout").isotope({
        layoutMode: "masonry",
      });
    }
    if ($(".post-filter").length) {
      $(".post-filter li")
        .children(".filter-text")
        .on("click", function () {
          var Self = $(this);
          var selector = Self.parent().attr("data-filter");
          $(".post-filter li").removeClass("active");
          Self.parent().addClass("active");
          $(".filter-layout").isotope({
            filter: selector,
            animationOptions: {
              duration: 500,
              easing: "linear",
              queue: false,
            },
          });
          return false;
        });
    }

    if ($(".post-filter.has-dynamic-filters-counter").length) {
      // var allItem = $('.single-filter-item').length;
      var activeFilterItem = $(".post-filter.has-dynamic-filters-counter").find(
        "li"
      );
      activeFilterItem.each(function () {
        var filterElement = $(this).data("filter");
        var count = $(".filter-layout").find(filterElement).length;
        $(this)
          .children(".filter-text")
          .append('<span class="count">' + count + "</span>");
      });
    }
  }
  render() {
    let publicUrl = process.env.PUBLIC_URL + "/";
    return (
      <>
        <section className="work-process-one">
          <div className="shape1"></div>
          <div className="shape2">
            <img
              src={
                publicUrl + "assets/images/shapes/work-process-v1-shape1.png"
              }
              alt="#"
            />
          </div>
          <div className="container">
            <div className="sec-title text-center">
              <div className="sec-title__tagline">
                <span className="left"></span>
                <h6>Work Process</h6>
                <span className="right"></span>
              </div>
              <h2 className="sec-title__title">
                Our Door Manufacturing Process
              </h2>
            </div>
            <div className="row filter-layout masonary-layout">
              {/* Start Work Process One Single */}
              <div
                className="col-xl-3 col-lg-3 col-md-6 wow fadeInLeft"
                data-wow-delay="0ms"
                data-wow-duration="1000ms"
              >
                <div className="work-process-one__single">
                  <div className="work-process-one__single-icon">
                    <div className="inner">
                      <span className="fas fa-clipboard-check text-green-600 text-3xl"></span>
                    </div>
                    <div className="count-box"></div>
                  </div>

                  <div className="work-process-one__single-content text-center">
                    <h2>
                      <Link to={process.env.PUBLIC_URL + `/arbor-management`}>
                        Assess the Requirements
                      </Link>
                    </h2>
                    {/* <p>
                          Simply free dumy text of <br /> the printing and amet{" "}
                          <br /> piscing
                        </p> */}
                    <p>
                      Evaluate the specific needs and preferences for your door
                      design before initiating the manufacturing process.
                    </p>
                  </div>
                </div>
              </div>
              {/* End Work Process One Single */}

              {/* Start Work Process One Single */}
              <div
                className="col-xl-3 col-lg-3 col-md-6 wow fadeInLeft"
                data-wow-delay="100ms"
                data-wow-duration="1000ms"
              >
                <div className="work-process-one__single style2 mt100">
                  <div className="work-process-one__single-icon">
                    <div className="inner">
                      <span className="fas fa-door-open text-white text-3xl"></span>
                    </div>
                    <div className="count-box"></div>
                  </div>

                  <div className="work-process-one__single-content text-center">
                    <h2>
                      <Link to={process.env.PUBLIC_URL + `/arbor-management`}>
                        Craft the Design
                      </Link>
                    </h2>
                    <p>
                      Create customized door designs that align with the style,
                      functionality, and quality you desire.
                    </p>
                  </div>
                </div>
              </div>
              {/* End Work Process One Single */}

              {/* Start Work Process One Single */}
              <div
                className="col-xl-3 col-lg-3 col-md-6 wow fadeInRight"
                data-wow-delay="0ms"
                data-wow-duration="1000ms"
              >
                <div className="work-process-one__single mt50">
                  <div className="work-process-one__single-icon">
                    <div className="inner">
                      <span className="fas fa-hammer text-white text-3xl"></span>
                    </div>
                    <div className="count-box"></div>
                  </div>

                  <div className="work-process-one__single-content text-center">
                    <h2>
                      <Link to={process.env.PUBLIC_URL + `/arbor-management`}>
                        Manufacture the Door
                      </Link>
                    </h2>
                    <p>
                      Utilize precise techniques and Sustainable materials to build
                      the door according to the approved design specifications.
                    </p>
                  </div>
                </div>
              </div>
              {/* End Work Process One Single */}

              {/* Start Work Process One Single */}
              <div
                className="col-xl-3 col-lg-3 col-md-6 wow fadeInRight"
                data-wow-delay="100ms"
                data-wow-duration="1000ms"
              >
                <div className="work-process-one__single style2">
                  <div className="work-process-one__single-icon">
                    <div className="inner">
                      <span className="fas fa-shipping-fast text-white text-3xl"></span>
                    </div>
                    <div className="count-box"></div>
                  </div>

                  <div className="work-process-one__single-content text-center">
                    <h2>
                      <Link to={process.env.PUBLIC_URL + `/arbor-management`}>
                        Finalize and Deliver
                      </Link>
                    </h2>
                    <p>
                      Ensure quality checks are performed before delivering the
                      finished door, ensuring it meets your expectations and is
                      ready for installation.
                    </p>
                  </div>
                </div>
              </div>
              {/* End Work Process One Single */}
            </div>
          </div>
        </section>
      </>
    );
  }
}
