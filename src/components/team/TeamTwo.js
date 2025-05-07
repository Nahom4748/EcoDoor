import React from 'react';
import { Link } from 'react-router-dom';

export default class TeamTwo extends React.Component {
    render(){
        let publicUrl = process.env.PUBLIC_URL+'/'
        return (
          <>
            <section className="team-two">
              <div className="shape1 float-bob-y">
                <img
                  src={publicUrl + "assets/images/shapes/team-v2-shape1.png"}
                  alt="#"
                />
              </div>
              <div className="shape2 float-bob-y">
                <img
                  src={publicUrl + "assets/images/shapes/team-v2-shape2.png"}
                  alt="#"
                />
              </div>
              <div className="container">
                <div className="sec-title-three text-center">
                  <div className="sec-title-three__tagline">
                    <h6>Our Team</h6>
                  </div>
                  <h2 className="sec-title-three__title">Our expert members</h2>
                </div>
                <div className="row">
                  {/* Start Team Two Single */}
                  <div
                    className="col-xl-3 col-lg-6 col-md-6 wow fadeInLeft"
                    data-wow-delay="0ms"
                    data-wow-duration="1000ms"
                  >
                    <div className="team-two__single">
                      <div className="team-two__single-img">
                        <img
                          src={
                            publicUrl + "assets/images/team/team-v2-img1.jpg"
                          }
                          alt="#"
                        />
                 
                      </div>

                      <div className="team-two__single-content">
                        <h2>
                          <Link to={process.env.PUBLIC_URL + `/team-details`}>
                            Amanda Tim
                          </Link>
                        </h2>
                        <p>Supply Chain Coordinator</p>
                      </div>
                    </div>
                  </div>
                  {/* End Team Two Single */}
                  {/* Start Team Two Single */}
                  <div
                    className="col-xl-3 col-lg-6 col-md-6 wow fadeInLeft"
                    data-wow-delay="100ms"
                    data-wow-duration="1000ms"
                  >
                    <div className="team-two__single">
                      <div className="team-two__single-img">
                        <img
                          src={
                            publicUrl + "assets/images/team/team-v2-img2.jpg"
                          }
                          alt="#"
                        />
                  
                      </div>

                      <div className="team-two__single-content">
                        <h2>
                          <Link to={process.env.PUBLIC_URL + `/team-details`}>
                            Humbled Dow
                          </Link>
                        </h2>
                        <p>Eco Door Specialist</p>
                      </div>
                    </div>
                  </div>
                  {/* End Team Two Single */}

                  {/* Start Team Two Single */}
                  <div
                    className="col-xl-3 col-lg-6 col-md-6 wow fadeInRight"
                    data-wow-delay="0ms"
                    data-wow-duration="1000ms"
                  >
                    <div className="team-two__single">
                      <div className="team-two__single-img">
                        <img
                          src={
                            publicUrl + "assets/images/team/team-v2-img3.jpg"
                          }
                          alt="#"
                        />
              
                      </div>

                      <div className="team-two__single-content">
                        <h2>
                          <Link to={process.env.PUBLIC_URL + `/team-details`}>
                            Munia Anchor
                          </Link>
                        </h2>
                        <p>Sustainable Design Expert</p>
                      </div>
                    </div>
                  </div>
                  {/* End Team Two Single */}

                  {/* Start Team Two Single */}
                  <div
                    className="col-xl-3 col-lg-6 col-md-6 wow fadeInRight"
                    data-wow-delay="100ms"
                    data-wow-duration="1000ms"
                  >
                    <div className="team-two__single">
                      <div className="team-two__single-img">
                        <img
                          src={
                            publicUrl + "assets/images/team/team-v2-img4.jpg"
                          }
                          alt="#"
                        />
                
                      </div>

                      <div className="team-two__single-content">
                        <h2>
                          <Link to={process.env.PUBLIC_URL + `/team-details`}>
                            Albert Hopper
                          </Link>
                        </h2>
                        <p>Founder & Eco Visionary</p>
                      </div>
                    </div>
                  </div>
                  {/* End Team Two Single */}
                </div>
              </div>
            </section>
          </>
        );
    }
}