import React, { useRef, useEffect } from 'react';
import { motion, useAnimation, useInView } from "framer-motion";
import lightGallery from 'lightgallery';
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';
import { Container } from 'react-bootstrap';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';

const EcoDoorGallery = () => {
  const galleryRef = useRef(null);
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [controls, isInView]);

  const galleryItems = [
    { id: 1, src: "/assets/Product/photo_2.jpg", alt: "Modern eco-friendly wooden door" },
    { id: 2, src: "/assets/Product/photo_8.jpg", alt: "Contemporary glass door design" },
    { id: 3, src: "/assets/Product/photo_34.jpg", alt: "Sustainable entry door with side panels" },
    { id: 5, src: "/assets/Product/photo_12.jpg", alt: "Rustic wooden exterior door" },
    { id: 6, src: "/assets/Product/photo_28.jpg", alt: "Modern black steel frame door" },
    { id: 26, src: "/assets/Product/0066.jpg", alt: "Stylish eco-friendly front door" },
    { id: 8, src: "/assets/Product/0011111.jpg", alt: "Custom carved wooden door" },
    { id: 9, src: "/assets/Product/photo_0011.jpg", alt: "Sliding barn door design" },
    { id: 10, src: "/assets/Product/photo_0022.jpg", alt: "Frosted glass office door" },
    { id: 11, src: "/assets/Product/photo_0033.jpg", alt: "Energy efficient entry door" },
    { id: 12, src: "/assets/Product/photo_0044.jpg", alt: "Modern pivot door with wooden finish" },
    { id: 13, src: "/assets/Product/photo_0055.jpg", alt: "Stylish eco-friendly front door" },
    { id: 14, src: "/assets/Product/photo_0066.jpg", alt: "Contemporary sliding glass door" },
    { id: 16, src: "/assets/Product/photo_0088.jpg", alt: "Modern aluminum frame door"},
    { id: 17, src: "/assets/Product/photo_0099.jpg", alt: "Sleek modern front door" },
    { id: 18, src: "/assets/Product/photo_001011.jpg", alt: "Stylish eco-friendly patio door" },
    { id: 20, src: "/assets/Product/photo_001033.jpg", alt: "Elegant glass sliding door" },
    { id: 15, src: "/assets/Product/photo_0077.jpg", alt: "Elegant wooden double doors" },
    { id: 23, src: "/assets/Product/0022.jpg", alt: "Contemporary glass entry door" },
    { id: 24, src: "/assets/Product/0033.jpg", alt: "Sustainable wooden patio door" },
    { id: 25, src: "/assets/Product/0044.jpg", alt: "Modern aluminum sliding door" },
    { id: 26, src: "/assets/Product/0077.jpg", alt: "Stylish eco-friendly front door" },
    { id: 27, src: "/assets/Product/photo_8.jpg", alt: "Contemporary glass door design" },
    { id: 28, src: "/assets/Product/photo_34.jpg", alt: "Sustainable entry door with side panels" },
    { id: 29, src: "/assets/Product/photo_20.jpg", alt: "Minimalist interior eco door" },
    { id: 30, src: "/assets/Product/photo_33.jpg", alt: "Rustic wooden exterior door" },
    { id: 31, src: "/assets/Product/photo_31.jpg", alt: "Rustic wooden exterior door" },
    { id: 32, src: "/assets/Product/photo_23.jpg", alt: "Rustic wooden exterior door" },
    { id: 33, src: "/assets/Product/photo_10.jpg", alt: "Rustic wooden exterior door" },
    { id: 34, src: "/assets/Product/photo_9.jpg", alt: "Rustic wooden exterior door" },
  ];

  useEffect(() => {
    if (galleryRef.current) {
      const gallery = lightGallery(galleryRef.current, {
        selector: '.gallery-item',
        download: false,
        thumbnail: true,
        closable: true,
        escKey: true,
        closeOnTap: true,
        closeOnSwipe: true,
        showCloseIcon: true,
        mode: 'lg-slide',
        speed: 300,
        backdropDuration: 150,
        hideBarsDelay: 2000,
        cssEasing: 'cubic-bezier(0.25, 0, 0.25, 1)',
        mobileSettings: {
          controls: true,
          showCloseIcon: true,
          download: false
        },
        galleryId: 'eco-doors-gallery'
      });

      return () => {
        gallery.destroy();
      };
    }
  }, []);

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.05,
        duration: 0.6,
        ease: "easeOut"
      }
    })
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        when: "beforeChildren"
      }
    }
  };

  return (
    <>
      <Helmet>
        <title>Modern Eco-Friendly Doors | Premium Collection</title>
        <meta name="description" content="Browse our collection of beautifully crafted, sustainable doors with modern designs for every home" />
      </Helmet>

      <GalleryWrapper>
        <main className="eco-gallery-main" ref={ref}>
          <Container>
            <SectionHeader 
              initial={{ opacity: 0, y: -20 }}
              animate={controls}
              transition={{ duration: 0.6 }}
              variants={{
                visible: { opacity: 1, y: 0 },
                hidden: { opacity: 0, y: -20 }
              }}
            >
              <span className="section-subtitle">OUR PRODUCTS</span>
              <h1 className="section-title">High Quality Door Collection</h1>
              <Divider>
                <span className="middle"></span>
              </Divider>
              <p className="section-description">
                Sustainable & Stylish – Premium Eco Door Collection
              </p>
            </SectionHeader>
            
            <GalleryGrid 
              ref={galleryRef}
              variants={containerVariants}
              initial="hidden"
              animate={controls}
            >
              {galleryItems.map((item, i) => (
                <GalleryItemContainer
                  key={item.id}
                  custom={i}
                  variants={itemVariants}
                  whileHover={{ scale: 1.03, zIndex: 1 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <a href={item.src} className="gallery-item" aria-label={`View ${item.alt}`}>
                    <ImageContainer>
                      <ResponsiveImage
                        src={item.src}
                        alt={" "}
                        loading="lazy"
                      />
                      <ImageOverlay>
                        <ZoomIcon viewBox="0 0 24 24">
                          <path d="M15.5 14h-.79l-.28-.27a6.5 6.5 0 0 0 1.48-5.34c-.47-2.78-2.79-5-5.59-5.34a6.505 6.505 0 0 0-7.27 7.27c.34 2.8 2.56 5.12 5.34 5.59a6.5 6.5 0 0 0 5.34-1.48l.27.28v.79l4.25 4.25c.41.41 1.08.41 1.49 0 .41-.41.41-1.08 0-1.49L15.5 14zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
                        </ZoomIcon>
                      </ImageOverlay>
                    </ImageContainer>
                  </a>
                </GalleryItemContainer>
              ))}
            </GalleryGrid>
          </Container>
        </main>
      </GalleryWrapper>
    </>
  );
};

// Styled Components
const GalleryWrapper = styled.div`
  background-color: #f8f9fa;
  min-height: 100vh;
  padding: 2rem 0;
  font-family: 'Inter', sans-serif;
`;

const SectionHeader = styled(motion.section)`
  text-align: center;
  margin-bottom: 3rem;
  padding: 1rem 0;

  .section-subtitle {
    display: block;
    font-size: 1rem;
    font-weight: 600;
    color: #2e8b57;
    text-transform: uppercase;
    letter-spacing: 2px;
    margin-bottom: 0.5rem;
  }

  .section-title {
    font-size: clamp(1.8rem, 5vw, 2.5rem);
    font-weight: 700;
    color: #2a3439;
    margin-bottom: 1rem;
    line-height: 1.2;
  }

  .section-description {
    font-size: clamp(1rem, 2.5vw, 1.2rem);
    color: #4a5568;
    max-width: 700px;
    margin: 0 auto;
  }
`;

const Divider = styled.div`
  position: relative;
  height: 4px;
  width: 80px;
  margin: 1.5rem auto;
  background-color: rgba(46, 139, 87, 0.2);

  .middle {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    height: 100%;
    width: 40px;
    background-color: #2e8b57;
  }
`;

const GalleryGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 1.5rem;
  padding: 1rem;
  margin: 0 auto;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 1rem;
  }

  @media (max-width: 480px) {
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  }
`;

const GalleryItemContainer = styled(motion.div)`
  overflow: hidden;
  border-radius: 12px;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.08);
  background: white;
  will-change: transform;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  aspect-ratio: 1;
`;

const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  border-radius: 12px;
`;

const ResponsiveImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
  will-change: transform;

  ${GalleryItemContainer}:hover & {
    transform: scale(1.05);
  }
`;

const ImageOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: all 0.3s ease;
  border-radius: 12px;

  .gallery-item:hover & {
    opacity: 1;
  }
`;

const ZoomIcon = styled.svg`
  width: 40px;
  height: 40px;
  fill: white;
  opacity: 0.8;
  transition: all 0.3s ease;

  .gallery-item:hover & {
    opacity: 1;
    transform: scale(1.1);
  }

  @media (max-width: 768px) {
    width: 30px;
    height: 30px;
  }
`;

export default EcoDoorGallery;