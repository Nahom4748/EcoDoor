import React, { lazy, Suspense } from "react";
import { Link } from "react-router-dom";

// Lazy load the logo component
const LogoTwo = lazy(() => import("../../common/header/LogoTwo.js"));

export default class FooterOne extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loaded: false
    };
  }

  componentDidMount() {
    // Load fonts asynchronously
    const fontLink = document.createElement("link");
    fontLink.href = "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css";
    fontLink.rel = "stylesheet";
    fontLink.onload = () => this.setState({ loaded: true });
    document.head.appendChild(fontLink);

    // Preload important resources
    const preloadLinks = [
      { href: "/assets/logo.png", as: "image" },
      // Add other important resources to preload
    ];

    preloadLinks.forEach(link => {
      const preloadLink = document.createElement("link");
      preloadLink.href = link.href;
      preloadLink.as = link.as;
      preloadLink.rel = "preload";
      document.head.appendChild(preloadLink);
    });
  }

  render() {
    const { loaded } = this.state;
    const publicUrl = process.env.PUBLIC_URL + "/";

    // Inline critical CSS for above-the-fold content
    const criticalStyles = {
      footer: {
        backgroundColor: "rgb(38, 117, 72)",
        paddingTop: "20px",
        marginTop: "-1px",
        color: "white",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
      },
      sectionTitle: {
        position: "relative",
        paddingBottom: "5px",
        marginBottom: "10px",
        display: "inline-block",
        fontSize: "18px",
        fontWeight: "600"
      },
      underline: {
        display: "flex",
        gap: "5px"
      },
      underlineBar: (width, color) => ({
        width: width,
        height: "3px",
        backgroundColor: color
      })
    };

    return (
      <footer
        className="footer-one"
        style={{
          paddingTop: "20px",
          marginTop: "-1px",
        }}
      >
        {/* Main Footer Section */}
        <div style={{ padding: "0" }}>
          <div className="container">
            <div className="row align-items-center">
              {/* Logo and About */}
              <div className="col-xl-3 col-lg-3 col-md-6">
                <div style={{ marginBottom: "20px" }}>
                  <Suspense fallback={<div style={{height: "50px"}}></div>}>
                    <LogoTwo />
                  </Suspense>
                </div>
                <div style={{ marginBottom: "15px" }}>
                  <h2 style={criticalStyles.sectionTitle}>About</h2>
                  <div style={criticalStyles.underline}>
                    <div style={criticalStyles.underlineBar("25px", "#ffcc00")}></div>
                    <div style={criticalStyles.underlineBar("15px", "#fff")}></div>
                    <div style={criticalStyles.underlineBar("10px", "#fff")}></div>
                  </div>
                </div>
                <p style={{ fontSize: "14px", marginBottom: "15px" }}>
                  At Charot Eco Doors, we specialize in crafting high-quality,
                  eco-friendly doors that blend durability, style, and
                  sustainability.
                </p>
                {loaded && (
                  <div style={{ display: "flex", gap: "10px" }}>
                    <a
                      href="https://t.me/charotecodoors"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Telegram"
                    >
                      <i className="fab fa-telegram-plane"></i>
                    </a>
                    <a
                      href="https://wa.me/251908686868"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="WhatsApp"
                    >
                      <i className="fab fa-whatsapp"></i>
                    </a>
                    <a
                      href="https://www.tiktok.com/@charot.eco.doors?_t=ZM-8uhQZluVwrH&_r=1"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="TikTok"
                    >
                      <i className="fab fa-tiktok"></i>
                    </a>
                    <a
                      href="https://web.facebook.com/people/Charot-Eco-Doors/pfbid02HKC258FgsG2t2mNm3fqNi78Ttzb3sdkqW7kL4Hkf8qZTciRmZTV9fLTiTwAjonBQl/"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Facebook"
                    >
                      <i className="fab fa-facebook"></i>
                    </a>
                  </div>
                )}
              </div>

              {/* Explore Section */}
              <div className="col-xl-3 col-lg-3 col-md-6">
                <div style={{ marginBottom: "15px" }}>
                  <h2 style={criticalStyles.sectionTitle}>Explore</h2>
                  <div style={criticalStyles.underline}>
                    <div style={criticalStyles.underlineBar("25px", "#ffcc00")}></div>
                    <div style={criticalStyles.underlineBar("15px", "#fff")}></div>
                    <div style={criticalStyles.underlineBar("10px", "#fff")}></div>
                  </div>
                </div>
                <ul style={{ padding: 0, listStyle: "none" }}>
                  {['High Durability', 'Eco-Friendly', 'Waterproof & Fire Retardant', 'Soundproof', 'Termite & Rot Resistant'].map((item) => (
                    <li key={item} style={{ marginBottom: "5px" }}>
                      <Link
                        to={process.env.PUBLIC_URL + `/services`}
                        style={{ color: "white", textDecoration: "none" }}
                      >
                        {item}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Contact Section */}
              <div className="col-xl-3 col-lg-3 col-md-6">
                <div style={{ marginBottom: "15px" }}>
                  <h2 style={criticalStyles.sectionTitle}>Contact Us</h2>
                  <div style={criticalStyles.underline}>
                    <div style={criticalStyles.underlineBar("25px", "#ffcc00")}></div>
                    <div style={criticalStyles.underlineBar("15px", "#fff")}></div>
                    <div style={criticalStyles.underlineBar("10px", "#fff")}></div>
                  </div>
                </div>
                <div>
                  <p style={{ fontSize: "14px", marginBottom: "10px" }}>
                    <i className="fas fa-map-marker-alt" style={{ marginRight: "5px" }}></i>
                    Lebu, Foziyana bldg, 4th floor
                    <br />
                    Addis Ababa, Ethiopia
                  </p>
                  <p style={{ fontSize: "14px", marginBottom: "10px" }}>
                    <i className="fas fa-phone-alt" style={{ marginRight: "5px" }}></i>
                    <a href="tel:+251908686868" style={{ color: "white" }}>
                      +251-90-868-6868
                    </a>
                  </p>
                  <p style={{ fontSize: "14px", marginBottom: "10px" }}>
                    <i className="fas fa-phone-alt" style={{ marginRight: "5px" }}></i>
                    <a href="tel:+251908676767" style={{ color: "white" }}>
                      +251-90-867-6767
                    </a>
                  </p>
                  <p style={{ fontSize: "14px" }}>
                    <i className="fas fa-envelope" style={{ marginRight: "5px" }}></i>
                    <a href="mailto:info.charot@gmail.com" style={{ color: "white" }}>
                      info.charot@gmail.com
                    </a>
                  </p>
                </div>
              </div>

              {/* Working Hours */}
              <div className="col-xl-3 col-lg-3 col-md-6">
                <div style={{ marginBottom: "15px" }}>
                  <h2 style={criticalStyles.sectionTitle}>Working Hours</h2>
                  <div style={criticalStyles.underline}>
                    <div style={criticalStyles.underlineBar("25px", "#ffcc00")}></div>
                    <div style={criticalStyles.underlineBar("15px", "#fff")}></div>
                    <div style={criticalStyles.underlineBar("10px", "#fff")}></div>
                  </div>
                </div>
                <div>
                  <p style={{ fontSize: "14px", marginBottom: "10px" }}>
                    <span style={{ display: "inline-block", width: "100px" }}>
                      Mon - Fri
                    </span>
                    8:30 AM - 5:00 PM
                  </p>
                  <p style={{ fontSize: "14px" }}>
                    <span style={{ display: "inline-block", width: "100px" }}>
                      Saturday
                    </span>
                    8:30 AM - 12:00 PM
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div style={{
          backgroundColor: "#6b4226",
          padding: "10px 0",
          marginTop: "20px",
        }}>
          <div className="container">
            <div className="row">
              <div className="col-12 text-center">
                <p style={{ margin: 0 }}>
                  Copyright © {new Date().getFullYear()} charotecodoors. All Rights Reserved.
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}
