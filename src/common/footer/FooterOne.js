import React from "react";
import { Link } from "react-router-dom";
import LogoTwo from "../../common/header/LogoTwo.js";

export default class FooterOne extends React.Component {
  render() {
    let publicUrl = process.env.PUBLIC_URL + "/";

    // Style for the professional underlines
    const sectionTitleStyle = {
      position: "relative",
      paddingBottom: "5px",
      marginBottom: "10px",
      display: "inline-block",
      fontSize: "18px",
      fontWeight: "600",
    };

    return (
      <>
        <footer
          className="footer-one"
          style={{
            backgroundColor: "#2E8B57",
            paddingTop: "20px",
            marginTop: "-1px",
          }}
        >
          {/* Main Footer Section */}
          <div className="footer" style={{ padding: "0" }}>
            <div className="container">
              <div className="row align-items-center">
                {/* Logo and About */}
                <div
                  className="col-xl-3 col-lg-3 col-md-6 wow animated fadeInUp"
                  data-wow-delay="0.1s"
                >
                  <div className="footer-widget__single mb-4 mb-md-0">
                    <div className="logo-box" style={{ marginBottom: "20px" }}>
                      <LogoTwo />
                    </div>
                    <div style={{ marginBottom: "15px" }}>
                      <h2 className="text-white" style={sectionTitleStyle}>
                        About
                      </h2>
                      <div style={{ display: "flex", gap: "5px" }}>
                        <div
                          style={{
                            width: "25px",
                            height: "3px",
                            backgroundColor: "#ffcc00",
                          }}
                        ></div>
                        <div
                          style={{
                            width: "15px",
                            height: "3px",
                            backgroundColor: "#fff",
                          }}
                        ></div>
                        <div
                          style={{
                            width: "10px",
                            height: "3px",
                            backgroundColor: "#fff",
                          }}
                        ></div>
                      </div>
                    </div>
                    <p className="mt-2 text-white" style={{ fontSize: "14px" }}>
                      At Charot Eco Doors, we specialize in crafting
                      high-quality, eco-friendly doors that blend durability,
                      style, and sustainability.
                    </p>
                    <ul className="social-links d-flex mt-2">
                      <li>
                        <a
                          href="https://t.me/charotecodoors"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="me-2"
                          style={{ color: "#fff" }}
                        >
                          <span className="fab fa-telegram-plane"></span>
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://wa.me/251908686868"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="me-2"
                          style={{ color: "#fff" }}
                        >
                          <span className="fab fa-whatsapp"></span>
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://www.tiktok.com/@charot.eco.doors?_t=ZM-8uhQZluVwrH&_r=1"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="me-2"
                          style={{ color: "#fff" }}
                        >
                          <span className="fab fa-tiktok"></span>
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://web.facebook.com/people/Charot-Eco-Doors/pfbid02HKC258FgsG2t2mNm3fqNi78Ttzb3sdkqW7kL4Hkf8qZTciRmZTV9fLTiTwAjonBQl/"
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{ color: "#fff" }}
                        >
                          <span className="fab fa-facebook"></span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Explore Section */}
                <div
                  className="col-xl-3 col-lg-3 col-md-6 wow animated fadeInUp"
                  data-wow-delay="0.2s"
                >
                  <div className="footer-widget__single mb-4 mb-md-0">
                    <div style={{ marginBottom: "15px" }}>
                      <h2 className="text-white" style={sectionTitleStyle}>
                        Explore
                      </h2>
                      <div style={{ display: "flex", gap: "5px" }}>
                        <div
                          style={{
                            width: "25px",
                            height: "3px",
                            backgroundColor: "#ffcc00",
                          }}
                        ></div>
                        <div
                          style={{
                            width: "15px",
                            height: "3px",
                            backgroundColor: "#fff",
                          }}
                        ></div>
                        <div
                          style={{
                            width: "10px",
                            height: "3px",
                            backgroundColor: "#fff",
                          }}
                        ></div>
                      </div>
                    </div>
                    <div className="footer-widget__links">
                      <ul
                        className="footer-links-list"
                        style={{ padding: 0, listStyle: "none" }}
                      >
                        <li style={{ marginBottom: "5px" }}>
                          <Link
                            to={process.env.PUBLIC_URL + `/services`}
                            className="text-white"
                          >
                            High Durability
                          </Link>
                        </li>
                        <li style={{ marginBottom: "5px" }}>
                          <Link
                            to={process.env.PUBLIC_URL + `/services`}
                            className="text-white"
                          >
                            Eco-Friendly
                          </Link>
                        </li>
                        <li style={{ marginBottom: "5px" }}>
                          <Link
                            to={process.env.PUBLIC_URL + `/services`}
                            className="text-white"
                          >
                            Waterproof & Fire Retardant
                          </Link>
                        </li>
                        <li style={{ marginBottom: "5px" }}>
                          <Link
                            to={process.env.PUBLIC_URL + `/services`}
                            className="text-white"
                          >
                            Soundproof
                          </Link>
                        </li>
                        <li style={{ marginBottom: "5px" }}>
                          <Link
                            to={process.env.PUBLIC_URL + `/services`}
                            className="text-white"
                          >
                            Termite & Rot Resistant
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Contact Section */}
                <div
                  className="col-xl-3 col-lg-3 col-md-6 wow animated fadeInUp"
                  data-wow-delay="0.3s"
                >
                  <div className="footer-widget__single mb-4 mb-md-0">
                    <div style={{ marginBottom: "15px" }}>
                      <h2 className="text-white" style={sectionTitleStyle}>
                        Contact Us
                      </h2>
                      <div style={{ display: "flex", gap: "5px" }}>
                        <div
                          style={{
                            width: "25px",
                            height: "3px",
                            backgroundColor: "#ffcc00",
                          }}
                        ></div>
                        <div
                          style={{
                            width: "15px",
                            height: "3px",
                            backgroundColor: "#fff",
                          }}
                        ></div>
                        <div
                          style={{
                            width: "10px",
                            height: "3px",
                            backgroundColor: "#fff",
                          }}
                        ></div>
                      </div>
                    </div>
                    <div className="footer-contact-info">
                      <p
                        className="text-white mb-2"
                        style={{ fontSize: "14px" }}
                      >
                        <i className="fas fa-map-marker-alt me-2"></i>
                        Lebu, Foziyana bldg, 4th floor
                        <br />
                        Addis Ababa, Ethiopia
                      </p>
                      <p
                        className="text-white mb-2"
                        style={{ fontSize: "14px" }}
                      >
                        <i className="fas fa-phone-alt me-2"></i>
                        <a href="tel:+251908686868" className="text-white">
                          +251-90-868-6868
                        </a>
                      </p>
                      <p
                        className="text-white mb-2"
                        style={{ fontSize: "14px" }}
                      >
                        <i className="fas fa-phone-alt me-2"></i>
                        <a href="tel:+251908676767" className="text-white">
                          +251-90-867-6767
                        </a>
                      </p>
                      <p className="text-white" style={{ fontSize: "14px" }}>
                        <i className="fas fa-envelope me-2"></i>
                        <a
                          href="mailto:info.charot@gmail.com"
                          className="text-white"
                        >
                          info.charot@gmail.com
                        </a>
                      </p>
                    </div>
                  </div>
                </div>

                {/* Working Hours */}
                <div
                  className="col-xl-3 col-lg-3 col-md-6 wow animated fadeInUp"
                  data-wow-delay="0.4s"
                >
                  <div className="footer-widget__single">
                    <div style={{ marginBottom: "15px" }}>
                      <h2 className="text-white" style={sectionTitleStyle}>
                        Working Hours
                      </h2>
                      <div style={{ display: "flex", gap: "5px" }}>
                        <div
                          style={{
                            width: "25px",
                            height: "3px",
                            backgroundColor: "#ffcc00",
                          }}
                        ></div>
                        <div
                          style={{
                            width: "15px",
                            height: "3px",
                            backgroundColor: "#fff",
                          }}
                        ></div>
                        <div
                          style={{
                            width: "10px",
                            height: "3px",
                            backgroundColor: "#fff",
                          }}
                        ></div>
                      </div>
                    </div>
                    <div className="working-hours">
                      <p
                        className="text-white mb-2"
                        style={{ fontSize: "14px" }}
                      >
                        <span
                          className="d-inline-block"
                          style={{ width: "100px" }}
                        >
                          Mon - Fri
                        </span>
                        8:30 AM - 5:00 PM
                      </p>
                      <p
                        className="text-white mb-0"
                        style={{ fontSize: "14px" }}
                      >
                        <span
                          className="d-inline-block"
                          style={{ width: "100px" }}
                        >
                          Saturday
                        </span>
                        8:30 AM - 12:00 PM
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Footer Bottom */}
          <div
            className="footer-bottom"
            style={{
              backgroundColor: "#6b4226",
              padding: "10px 0",
              marginTop: "20px",
            }}
          >
            <div className="container">
              <div className="row">
                <div className="col-12 text-center">
                  <p className="text-white mb-0">
                    Copyright © 2025 charotecodoors. All Rights Reserved.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </>
    );
  }
}
