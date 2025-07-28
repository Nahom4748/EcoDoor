import React from "react";
import { Link } from "react-router-dom";

export default class ServiceTwo extends React.Component {
  render() {
    let publicUrl = process.env.PUBLIC_URL + "/";
    
    const services = [
      {
        title: "Customer-First Approach",
        description: "Our team is trained to serve you with care, honesty, and respect.",
        image: "assets/images/services/Services Images3.png",
        icon: "fa fa-user-tie"
      },
      {
        title: "High-Quality Products",
        description: "We provide strong, long-lasting WPC products at fair prices.",
        image: "assets/images/services/Service Images6.png",
        icon: "fa fa-award"
      },
      {
        title: "Product Installation",
        description: "We don't just make the products — we install them for you, too.",
        image: "assets/images/services/Service Images11.png",
        icon: "fa fa-tools"
      },
      {
        title: "After-Sales Support",
        description: "Even after installation, we stay in touch to make sure you're happy.",
        image: "assets/images/services/Service Images19.png",
        icon: "fa fa-headset"
      },
      {
        title: "Growing Services",
        description: "We are always working to expand our services and reach more customers.",
        image: "assets/images/services/Service Images26.png",
        icon: "fa fa-chart-line"
      },
      {
        title: "Win-Win Relationships",
        description: "Your satisfaction is our success - we believe in growing together.",
        image: "assets/images/services/Service Images30.png",
        icon: "fa fa-handshake"
      }
    ];

    return (
      <section className="modern-services-section">
        {/* Subtle background pattern */}
        <div className="background-pattern"></div>
        
        {/* Content container */}
        <div className="container">
          {/* Section header */}
          <div className="section-header center">
            <span className="section-subtitle">OUR EXPERTISE</span>
            <h2 className="section-title">Premium Services</h2>
            <div className="divider">
              <span className="middle"></span>
            </div>
            <p className="section-description">
              We deliver exceptional service at every stage of your project
            </p>
          </div>

          {/* Services grid */}
          <div className="services-grid">
            {services.map((service, index) => (
              <div className="service-card" key={index}>
                <div className="card-inner">
                  {/* Image container with perfect fit */}
                  <div className="image-container">
                    <div className="image-wrapper">
                      <img 
                        src={publicUrl + service.image} 
                        alt={service.title}
                        loading="lazy"
                        style={{ objectPosition: 'center' }}
                      />
                    </div>
                  </div>
                  
                  {/* Content with floating icon */}
                  <div className="card-content">
                    <div className="service-icon">
                      <i className={service.icon}></i>
                    </div>
                    <h3>{service.title}</h3>
                    <p>{service.description}</p>
                    <Link to="/Products" className="service-link">
                      Learn More <i className="fas fa-arrow-right"></i>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Modern CSS styles */}
        <style jsx>{`
          .modern-services-section {
            position: relative;
            padding: 100px 0;
            overflow: hidden;
            background-color: #f8fafc;
          }
          
          .background-pattern {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: radial-gradient(circle at 10% 20%, rgba(72, 187, 120, 0.05) 0%, transparent 20%),
                        radial-gradient(circle at 90% 80%, rgba(72, 187, 120, 0.05) 0%, transparent 20%);
            z-index: 0;
          }
          
          .container {
            position: relative;
            z-index: 1;
            max-width: 1200px;
            margin: 0 auto;
            padding: 0 20px;
          }
          
          .section-header {
            text-align: center;
            margin-bottom: 60px;
          }
          
          .section-subtitle {
            display: block;
            font-size: 14px;
            letter-spacing: 2px;
            text-transform: uppercase;
            color: #48BB78;
            margin-bottom: 10px;
            font-weight: 600;
          }
          
          .section-title {
            font-size: 42px;
            font-weight: 700;
            margin-bottom: 20px;
            line-height: 1.2;
            color: #2D3748;
          }
          
          .divider {
            display: flex;
            justify-content: center;
            margin-bottom: 20px;
          }
          
          .divider .middle {
            display: block;
            width: 80px;
            height: 3px;
            background: #48BB78;
            border-radius: 3px;
          }
          
          .section-description {
            max-width: 700px;
            margin: 0 auto;
            font-size: 18px;
            line-height: 1.6;
            color: #718096;
          }
          
          .services-grid {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
            gap: 30px;
          }
          
          .service-card {
            perspective: 1000px;
            height: 100%;
          }
          
          .card-inner {
            position: relative;
            width: 100%;
            height: 100%;
            transition: all 0.4s ease;
            transform-style: preserve-3d;
            border-radius: 12px;
            overflow: hidden;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
            background: white;
          }
          
          .service-card:hover .card-inner {
            transform: translateY(-5px);
            box-shadow: 0 15px 35px rgba(0, 0, 0, 0.12);
          }
          
          .image-container {
            position: relative;
            height: 250px;
            overflow: hidden;
          }
          
          .image-wrapper {
            width: 100%;
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            background: #f1f5f9;
          }
          
          .image-container img {
            max-width: 100%;
            max-height: 100%;
            width: auto;
            height: auto;
            object-fit: contain;
          }
          
          .card-content {
            padding: 30px;
            position: relative;
            border-top: 1px solid #EDF2F7;
          }
          
          .service-icon {
            position: absolute;
            top: -25px;
            left: 30px;
            width: 50px;
            height: 50px;
            background: #48BB78;
            border-radius: 12px;
            display: flex;
            align-items: center;
            justify-content: center;
            color: white;
            font-size: 20px;
            box-shadow: 0 8px 20px rgba(72, 187, 120, 0.3);
            transition: all 0.3s ease;
          }
          
          .service-card:hover .service-icon {
            transform: translateY(-5px);
            background: #38A169;
          }
          
          .card-content h3 {
            font-size: 22px;
            font-weight: 700;
            margin: 15px 0 10px;
            color: #2D3748;
          }
          
          .card-content p {
            font-size: 16px;
            line-height: 1.6;
            color: #4A5568;
            margin-bottom: 20px;
          }
          
          .service-link {
            display: inline-flex;
            align-items: center;
            font-weight: 600;
            color: #48BB78;
            text-decoration: none;
            transition: all 0.3s;
          }
          
          .service-link i {
            margin-left: 8px;
            transition: transform 0.3s;
            font-size: 14px;
          }
          
          .service-link:hover {
            color: #2F855A;
          }
          
          .service-link:hover i {
            transform: translateX(5px);
          }
          
          /* Responsive styles */
          @media (max-width: 1199px) {
            .services-grid {
              grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
            }
          }
          
          @media (max-width: 991px) {
            .section-title {
              font-size: 36px;
            }
            
            .image-container {
              height: 220px;
            }
          }
          
          @media (max-width: 767px) {
            .modern-services-section {
              padding: 80px 0;
            }
            
            .section-header {
              margin-bottom: 40px;
            }
            
            .section-title {
              font-size: 32px;
            }
            
            .section-description {
              font-size: 16px;
            }
            
            .services-grid {
              grid-template-columns: 1fr;
              gap: 40px;
            }
          }
          
          @media (max-width: 575px) {
            .section-title {
              font-size: 28px;
            }
            
            .service-icon {
              width: 45px;
              height: 45px;
              font-size: 18px;
              top: -22px;
              border-radius: 10px;
            }
            
            .card-content {
              padding: 25px 20px;
            }
            
            .card-content h3 {
              font-size: 20px;
            }
          }
        `}</style>
      </section>
    );
  }
}