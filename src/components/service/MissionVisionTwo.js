import React from "react";
import { Link } from "react-router-dom";

export default class MissionVisionModern extends React.Component {
  componentDidMount() {
    if (typeof window !== 'undefined' && window.IntersectionObserver) {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate');
          }
        });
      }, { threshold: 0.1 });

      document.querySelectorAll('.mission-card').forEach(card => {
        observer.observe(card);
      });
    }
  }

  render() {
    let publicUrl = process.env.PUBLIC_URL + "/";
    const primaryColor = "#2E8B57";
    const darkGreen = "#0D4110";
    const primaryLight = "rgba(46, 139, 87, 0.2)";
    
    return (
      <section className="modern-mission-section">
        {/* Background Elements */}
        <div className="mission-bg-overlay"></div>
        <div className="mission-particles">
          <div className="particle particle-1"></div>
          <div className="particle particle-2"></div>
          <div className="particle particle-3"></div>
        </div>
        
        {/* Content */}
        <div className="mission-container">
          {/* Header Section */}
          <div className="mission-header">
            <div className="mission-tagline">
              <span className="mission-accent-line"></span>
              <h6>Our Foundation</h6>
            </div>
            <h2 className="mission-title">
              Building the future with <span>eco-smart solutions</span>
            </h2>
            <p className="mission-subtitle">
              Driven by innovation, sustainability, and a commitment to excellence
            </p>
          </div>

          {/* About Description */}
          <div className="mission-card about-card">
            <div className="card-inner">
              <div className="content">
                <p>
                  Charot is a family-owned manufacturer pioneering Eco Door 
                  products in Ethiopia. From our roots in the historic Merkato Market to our 
                  modern eco-conscious production, we combine tradition with innovation to 
                  create sustainable building solutions.
                </p>
              </div>
            </div>
          </div>

          {/* Grid Layout */}
          <div className="mission-grid">
            {/* Vision */}
            <div className="mission-card vision-card">
              <div className="card-inner">
                <div className="card-header">
                  <div className="icon-wrapper">
                    <i className="fas fa-eye"></i>
                  </div>
                  <h3>Our Vision</h3>
                </div>
                <p>
                  To lead Ethiopia's Eco Door market by 2030 through sustainable innovation 
                  and exceptional quality standards.
                </p>
                <div className="card-footer">
                  <span className="card-number">01</span>
                </div>
              </div>
            </div>

            {/* Mission */}
            <div className="mission-card mission-card">
              <div className="card-inner">
                <div className="card-header">
                  <div className="icon-wrapper">
                    <i className="fas fa-bullseye"></i>
                  </div>
                  <h3>Our Mission</h3>
                </div>
                <p>
                  To deliver eco-friendly Eco Door solutions that exceed expectations through 
                  innovation, quality craftsmanship, and professional service.
                </p>
                <div className="card-footer">
                  <span className="card-number">02</span>
                </div>
              </div>
            </div>

            {/* Core Values */}
            <div className="mission-card values-card">
              <div className="card-inner">
                <div className="card-header">
                  <div className="icon-wrapper">
                    <i className="fas fa-heart"></i>
                  </div>
                  <h3>Core Values</h3>
                </div>
                <ul className="values-list">
                  <li><i className="fas fa-check"></i> Sustainable Innovation</li>
                  <li><i className="fas fa-check"></i> Quality Craftsmanship</li>
                  <li><i className="fas fa-check"></i> Customer Focus</li>
                  <li><i className="fas fa-check"></i> Environmental Stewardship</li>
                </ul>
                <div className="card-footer">
                  <span className="card-number">03</span>
                </div>
              </div>
            </div>

            {/* Products */}
            <div className="mission-card products-card">
              <div className="card-inner">
                <div className="card-header">
                  <div className="icon-wrapper">
                    <i className="fas fa-cubes"></i>
                  </div>
                  <h3>Our Products</h3>
                </div>
                <p>
                  Premium Eco Door materials including doors, panels, and flooring - 
                  waterproof, fire-retardant, soundproof, and antibacterial.
                </p>
                <div className="card-footer">
                  <span className="card-number">04</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Modern CSS Styles */}
        <style jsx>{`
          .modern-mission-section {
            position: relative;
            padding: 120px 0;
            overflow: hidden;
            background:rgba(227, 240, 231, 0.44);
            color: ${darkGreen};
          }
          
          .mission-bg-overlay {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: radial-gradient(circle at 70% 30%, rgba(46, 139, 87, 0.1) 0%, transparent 60%);
            z-index: 0;
          }
          
          .mission-particles {
            position: absolute;
            width: 100%;
            height: 100%;
            top: 0;
            left: 0;
            z-index: 0;
          }
          
          .mission-particles .particle {
            position: absolute;
            border-radius: 50%;
            background: rgba(46, 139, 87, 0.1);
          }
          
          .particle-1 {
            width: 300px;
            height: 300px;
            top: -100px;
            right: -100px;
            animation: float 15s infinite ease-in-out;
          }
          
          .particle-2 {
            width: 200px;
            height: 200px;
            bottom: 50px;
            left: -50px;
            animation: float 18s infinite ease-in-out reverse;
          }
          
          .particle-3 {
            width: 150px;
            height: 150px;
            top: 40%;
            right: 20%;
            animation: float 12s infinite ease-in-out;
          }
          
          .mission-container {
            position: relative;
            max-width: 1200px;
            margin: 0 auto;
            padding: 0 20px;
            z-index: 1;
          }
          
          .mission-header {
            text-align: center;
            margin-bottom: 80px;
          }
          
          .mission-tagline {
            display: flex;
            align-items: center;
            justify-content: center;
            margin-bottom: 20px;
          }
          
          .mission-accent-line {
            display: inline-block;
            width: 40px;
            height: 2px;
            background: ${primaryColor};
            margin-right: 15px;
          }
          
          .mission-tagline h6 {
            font-size: 16px;
            font-weight: 600;
            color: ${primaryColor};
            text-transform: uppercase;
            letter-spacing: 2px;
            margin: 0;
          }
          
          .mission-title {
            font-size: clamp(32px, 5vw, 48px);
            font-weight: 700;
            line-height: 1.3;
            margin-bottom: 20px;
            color: ${darkGreen};
          }
          
          .mission-title span {
            color: ${primaryColor};
            position: relative;
          }
          
          .mission-title span::after {
            content: '';
            position: absolute;
            bottom: 5px;
            left: 0;
            width: 100%;
            height: 8px;
            background: rgba(46, 139, 87, 0.2);
            z-index: -1;
          }
          
          .mission-subtitle {
            font-size: 18px;
            color: ${darkGreen};
            opacity: 0.8;
            max-width: 600px;
            margin: 0 auto;
          }
          
          .mission-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
            gap: 30px;
            margin-top: 30px;
          }
          
          .mission-card {
            perspective: 1000px;
            transform-style: preserve-3d;
            opacity: 0;
            transform: translateY(30px);
            transition: all 0.6s cubic-bezier(0.16, 1, 0.3, 1);
          }
          
          .mission-card.animate {
            opacity: 1;
            transform: translateY(0);
          }
          
          .card-inner {
            position: relative;
            height: 100%;
            background: white;
            border-radius: 16px;
            overflow: hidden;
            padding: 40px;
            border: 1px solid rgba(46, 139, 87, 0.3);
            box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
            transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
            height: 100%;
            display: flex;
            flex-direction: column;
          }
          
          .mission-card:hover .card-inner {
            transform: translateY(-10px);
            box-shadow: 0 15px 30px rgba(46, 139, 87, 0.15);
            border-color: ${primaryColor};
          }
          
          .about-card .card-inner {
            grid-column: 1 / -1;
            background: rgba(46, 139, 87, 0.05);
            border: 1px solid rgba(46, 139, 87, 0.4);
          }
          
          .card-header {
            display: flex;
            align-items: center;
            margin-bottom: 25px;
          }
          
          .icon-wrapper {
            width: 60px;
            height: 60px;
            background: ${primaryLight};
            border-radius: 12px;
            display: flex;
            align-items: center;
            justify-content: center;
            margin-right: 20px;
            color: ${primaryColor};
            font-size: 24px;
            transition: all 0.3s ease;
          }
          
          .mission-card:hover .icon-wrapper {
            transform: translateY(-5px);
            background: rgba(46, 139, 87, 0.3);
            color: white;
          }
          
          .mission-card h3 {
            font-size: 22px;
            font-weight: 700;
            margin-bottom: 0;
            color: ${darkGreen};
          }
          
          .mission-card p {
            color: ${darkGreen};
            opacity: 0.9;
            line-height: 1.7;
            margin-bottom: 30px;
            flex-grow: 1;
          }
          
          .values-list {
            list-style: none;
            padding: 0;
            margin: 0 0 30px 0;
            flex-grow: 1;
          }
          
          .values-list li {
            margin-bottom: 12px;
            color: ${darkGreen};
            opacity: 0.9;
            display: flex;
            align-items: center;
          }
          
          .values-list li i {
            color: ${primaryColor};
            margin-right: 10px;
            font-size: 14px;
          }
          
          .card-footer {
            display: flex;
            justify-content: flex-end;
          }
          
          .card-number {
            width: 40px;
            height: 40px;
            background: rgba(46, 139, 87, 0.1);
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            color: ${primaryColor};
            font-weight: 700;
            font-size: 14px;
          }
          
          /* Animations */
          @keyframes float {
            0%, 100% {
              transform: translateY(0) rotate(0deg);
            }
            50% {
              transform: translateY(-20px) rotate(3deg);
            }
          }
          
          /* Delay animations for each card */
          .about-card { transition-delay: 0.1s; }
          .vision-card { transition-delay: 0.2s; }
          .mission-card { transition-delay: 0.3s; }
          .values-card { transition-delay: 0.4s; }
          .products-card { transition-delay: 0.5s; }
          
          /* Responsive Design */
          @media (max-width: 992px) {
            .modern-mission-section {
              padding: 80px 0;
            }
            
            .mission-header {
              margin-bottom: 60px;
            }
            
            .card-inner {
              padding: 30px;
            }
          }
          
          @media (max-width: 768px) {
            .mission-grid {
              grid-template-columns: 1fr;
              gap: 20px;
            }
            
            .mission-header {
              margin-bottom: 40px;
            }
          }
          
          @media (max-width: 576px) {
            .modern-mission-section {
              padding: 60px 0;
            }
            
            .card-inner {
              padding: 25px;
            }
            
            .icon-wrapper {
              width: 50px;
              height: 50px;
              font-size: 20px;
            }
          }
        `}</style>
      </section>
    );
  }
}