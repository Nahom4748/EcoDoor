import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "./sty.css";

export default function RecentProjects() {
  const [activeProject, setActiveProject] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  let publicUrl = process.env.PUBLIC_URL + '/';
  
  // Sample project data with multiple images
  const projects = [
    {
      id: 1,
      title: "Halbulalo Realstate",
      description: "A full residential project in Addis Ababa featuring eco-friendly doors and furniture by Charot Eco Doors Company.",
      images: [
        "assets/images/project/pro001.jpg",
        "assets/images/project/10002.jpg",
      ],
      link: "/project-details/halbulalo-real-estate",
      features: [
        "Eco-friendly materials",
        "Custom door designs",
        "Sustainable furniture",
        "Modern architecture"
      ]
    },
    {
      id: 2,
      title: "Amesco Apartment Realstate",
      description: "Modern apartments in Addis Ababa with custom eco-doors and stylish interiors, completed by Charot Eco Doors Company.",
      images: [
        "assets/images/project/10001.png",
        "assets/images/project/10003.jpg",
      ],
      link: "/project-details/amesco-apartment",
      features: [
        "Contemporary design",
        "Energy efficient solutions",
        "Premium eco-doors",
        "Smart space utilization"
      ]
    }
  ];

  const openProjectGallery = (project) => {
    setActiveProject(project);
    setCurrentImageIndex(0);
    document.body.style.overflow = 'hidden'; // Prevent scrolling when gallery is open
  };

  const closeGallery = () => {
    setActiveProject(null);
    document.body.style.overflow = 'auto'; // Re-enable scrolling
  };

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => 
      (prevIndex + 1) % activeProject.images.length
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => 
      (prevIndex - 1 + activeProject.images.length) % activeProject.images.length
    );
  };

  return (
    <>
      <section className="recent-projects">
        <div className="container">
          <div className="section-header text-center">
            <h6 className="section-subtitle">Our Work</h6>
            <h2 className="section-title">Our Recent Projects</h2>
            <p className="section-description">
              Explore our latest projects showcasing sustainable and innovative solutions
            </p>
          </div>

          <div className="projects-grid">
            <div className="row">
              {projects.map((project) => (
                <div key={project.id} className="col-lg-6 col-md-12 mb-4">
                  <div 
                    className="project-card"
                    onClick={() => openProjectGallery(project)}
                  >
                    <div className="project-image">
                      <img 
                        src={publicUrl + project.images[0]} 
                        alt={project.title} 
                        className="img-fluid"
                      />
                      <div className="image-count-badge">
                        {project.images.length} photos
                      </div>
                    </div>
                    <div className="project-content">
                      <h3 className="project-title">{project.title}</h3>
                      <p className="project-description">{project.description}</p>
                      <div className="project-features">
                        {project.features.slice(0, 3).map((feature, index) => (
                          <span key={index} className="feature-tag">{feature}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Project Gallery Overlay - Simplified version */}
      {activeProject && (
        <div className="project-gallery-overlay" onClick={closeGallery}>
          <div className="gallery-container" onClick={(e) => e.stopPropagation()}>
            <button className="close-gallery" onClick={closeGallery}>
              &times;
            </button>
            
            <div className="gallery-image-container">
              <img 
                src={publicUrl + activeProject.images[currentImageIndex]} 
                alt={`${activeProject.title} - ${currentImageIndex + 1}`}
                className="gallery-image"
              />
              
              <button className="nav-button prev-button" onClick={(e) => {
                e.stopPropagation();
                prevImage();
              }}>
                &lt;
              </button>
              
              <button className="nav-button next-button" onClick={(e) => {
                e.stopPropagation();
                nextImage();
              }}>
                &gt;
              </button>
              
              <div className="image-counter">
                {currentImageIndex + 1} / {activeProject.images.length}
              </div>
            </div>
            
            <div className="gallery-content">
              <h3>{activeProject.title}</h3>
              <p>{activeProject.description}</p>
             
            </div>
          </div>
        </div>
      )}
    </>
  );
}