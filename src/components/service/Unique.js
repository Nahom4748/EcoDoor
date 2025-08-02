import React from "react";
import { Link } from "react-router-dom";
import "./unique.css";

export default class Unique extends React.Component {
  componentDidMount() {
    // Initialize animations when component mounts
    this.initAnimations();
  }

  initAnimations() {
    // Add intersection observer for scroll animations
    if (typeof window !== "undefined" && window.IntersectionObserver) {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate');
          }
        });
      }, { threshold: 0.1 });

      document.querySelectorAll('.feature-card').forEach(card => {
        observer.observe(card);
      });
    }
  }

  render() {
    let publicUrl = process.env.PUBLIC_URL + "/";
    
    const features = [
      {
        id: 1,
        title: "Waterproof",
        description: "Eco-friendly water-resistant coating protects against moisture without harmful chemicals",
        icon: "fas fa-tint",
        color: "#2e8b57"
      },
      {
        id: 2,
        title: "Soundproof",
        description: "Sustainable sound insulation using recycled materials for peaceful spaces",
        icon: "fas fa-volume-mute",
        color: "#3a7ca5"
      },
      {
        id: 3,
        title: "Fire Retardant",
        description: "Natural fire-resistant treatments for safety without toxic additives",
        icon: "fas fa-fire-extinguisher",
        color: "#d1495b"
      },
      {
        id: 4,
        title: "AntiBacterial",
        description: "Plant-based antimicrobial protection for healthier indoor environments",
        icon: "fas fa-shield-virus",
        color: "#6a4c93"
      },
      {
        id: 5,
    title: "Termite Proof",
  description: "Eco-conscious borate treatment prevents insect damage safely",
  icon: "fas fa-shield-alt", // Suggests protection and defense against damage
  color: "#8f7e4f"
      },
      {
      id: 6,
  title: "No Cracking",
  description: "Sustainable composite materials prevent cracking and warping",
  icon: "fas fa-tools", // better fit than 'fa-hard-hat'
  color: "#4a6fa5"
      },
      {
    id: 7,
  title: "Formaldehyde-Free",
  description: "Zero VOC emissions for truly healthy indoor air quality",
  icon: "fas fa-wind", // Suggests clean air movement
  color: "#4b8f8c"
      },
      {
        id: 8,
        title: "Fungiproof",
        description: "Natural mold-resistant treatments for humid climates",
        icon: "fas fa-seedling",
        color: "#7d9d6a"
      }
    ];

    return (
      <section className="unique-features">
        {/* Animated background elements */}
        <div className="floating-shapes">
          <div className="shape shape-1"></div>
          <div className="shape shape-2"></div>
          <div className="shape shape-3"></div>
        </div>

        <div className="container">
          <div className="section-header">
            <div className="section-tagline">
              <span className="tagline-line"></span>
              <h6>What makes our eco doors unique?</h6>
              <span className="tagline-line"></span>
            </div>
            <h2 className="section-title">
              <span>Sustainable Innovation </span>
              <span className="highlight">Without Compromise</span>
            </h2>
            <p className="section-description">
              At Charot Eco Doors, we redefine green living with doors that combine environmental responsibility with exceptional performance. Our eco-conscious manufacturing delivers beauty, durability and peace of mind.
            </p>
          </div>

          <div className="features-grid">
            <div className="row">
              {features.map((feature) => (
                <div 
                  key={feature.id}
                  className="col-xl-3 col-lg-4 col-md-6 col-sm-6 feature-column"
                >
                  <div 
                    className="feature-card"
                    style={{ '--feature-color': feature.color }}
                  >
                    <div className="card-border"></div>
                    <div className="feature-icon">
                      <i className={feature.icon}></i>
                    </div>
                    <div className="feature-content">
                      <h3>{feature.title}</h3>
                      <p>{feature.description}</p>
                    </div>
                    <div className="feature-number">0{feature.id}</div>
                    <div className="hover-effect"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

      <div className="certification-badges">
  <div className="badge">
    <div className="badge-icon">
      <i className="fas fa-leaf"></i> {/* Eco-friendly */}
    </div>
    <span>Eco-friendly materials</span>
  </div>
  <div className="badge">
    <div className="badge-icon">
      <i className="fas fa-door-closed"></i> {/* Doors (Style/Durability) */}
    </div>
    <span>Durable, stylish Eco doors</span>
  </div>
  <div className="badge">
    <div className="badge-icon">
      <i className="fas fa-user-check"></i> {/* Experience/Verified */}
    </div>
    <span>5+ Years experience</span>
  </div>
</div>

        </div>
      </section>
    );
  }
}