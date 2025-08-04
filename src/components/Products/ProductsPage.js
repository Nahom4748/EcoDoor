import React, { useRef, useEffect, useState } from 'react';
import { motion, useAnimation, useInView, AnimatePresence } from "framer-motion";
import { Container } from 'react-bootstrap';
import { Helmet } from 'react-helmet';
import styled, { createGlobalStyle } from 'styled-components';
import { FiClock, FiX } from 'react-icons/fi';

// Global style for when modal is open
const GlobalStyle = createGlobalStyle`
  body {
    overflow: ${props => props.modalOpen ? 'hidden' : 'auto'};
  }
`;

// Styled Components
const GalleryWrapper = styled.div`
  background-color: #f8f9fa;
  min-height: 100vh;
  padding: 4rem 0;
  font-family: 'Inter', sans-serif;
  position: relative;
  overflow: hidden;
`;

const AutoScrollGallery = styled.div`
  position: relative;
  width: 100%;
  margin: 4rem 0;
  overflow: hidden;
`;

const ScrollTrack = styled(motion.div)`
  display: flex;
  gap: 2rem;
  will-change: transform;
  padding: 1rem 0;
`;

const ScrollItem = styled.div`
  flex: 0 0 auto;
  width: 350px;
  height: 500px;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08);
  position: relative;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  
  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 12px 28px rgba(0, 0, 0, 0.15);
    
    .zoom-icon {
      opacity: 1;
      transform: scale(1);
    }
  }
  
  @media (max-width: 1024px) {
    width: 300px;
    height: 430px;
  }
  
  @media (max-width: 768px) {
    width: 250px;
    height: 360px;
  }
  
  @media (max-width: 480px) {
    width: 200px;
    height: 290px;
  }
`;

const ScrollImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
`;

const ZoomIcon = styled.div`
  position: absolute;
  top: 20px;
  right: 20px;
  background: rgba(255, 255, 255, 0.9);
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  transition: all 0.3s ease;
  opacity: 0;
  transform: scale(0.8);
  z-index: 2;
  
  svg {
    color: #2e8b57;
    font-size: 20px;
  }
  
  &:hover {
    background: #2e8b57;
    
    svg {
      color: white;
    }
  }
`;

const SectionHeader = styled(motion.section)`
  text-align: center;
  margin-bottom: 4rem;
  padding: 1rem 0;

  .section-subtitle {
    display: block;
    font-size: 1rem;
    font-weight: 600;
    color: #2e8b57;
    text-transform: uppercase;
    letter-spacing: 2px;
    margin-bottom: 1rem;
  }

  .section-title {
    font-size: clamp(2rem, 6vw, 3rem);
    font-weight: 700;
    color: #2a3439;
    margin-bottom: 1.5rem;
    line-height: 1.2;
  }

  .section-description {
    font-size: clamp(1.1rem, 2.8vw, 1.3rem);
    color: #4a5568;
    max-width: 800px;
    margin: 0 auto;
    line-height: 1.6;
  }
`;

const Divider = styled.div`
  position: relative;
  height: 4px;
  width: 100px;
  margin: 2rem auto;
  background-color: rgba(46, 139, 87, 0.2);

  .middle {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    height: 100%;
    width: 50px;
    background-color: #2e8b57;
  }
`;

const ModalOverlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.95);
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
`;

const ModalContent = styled.div`
  position: relative;
  max-width: 90%;
  max-height: 90%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ModalImage = styled.img`
  max-width: 100%;
  max-height: 90vh;
  object-fit: contain;
  border-radius: 8px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
`;

const CloseButton = styled.button`
  position: absolute;
  top: -50px;
  right: 0;
  background: rgba(255, 255, 255, 0.9);
  border: none;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  padding: 0;
  outline: none;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  transition: all 0.3s ease;
  color: #2e8b57;
  z-index: 1001;

  &:hover {
    background: #2e8b57;
    transform: scale(1.1);
    color: white;
  }

  @media (max-width: 768px) {
    top: -60px;
    right: -10px;
    width: 40px;
    height: 40px;
  }
`;

// Main Component
const EcoDoorGallery = () => {
  const controls = useAnimation();
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.1 });
  const topTrackRef = useRef(null);
  const bottomTrackRef = useRef(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  const galleryItems = [
    { id: 1, src: "/assets/Product/photo_2.jpg", alt: "Modern eco-friendly wooden door" },
    { id: 2, src: "/assets/Product/photo_8.jpg", alt: "Contemporary glass door design" },
    { id: 3, src: "/assets/Product/photo_34.jpg", alt: "Sustainable entry door with side panels" },
    { id: 4, src: "/assets/Product/photo_16.jpg", alt: "Minimalist interior eco door" },
    { id: 5, src: "/assets/Product/photo_12.jpg", alt: "Rustic wooden exterior door" },
    { id: 6, src: "/assets/Product/photo_28.jpg", alt: "Modern black steel frame door" },
    { id: 7, src: "/assets/Product/photo_30.jpg", alt: "French patio eco doors" },
    { id: 8, src: "/assets/Product/photo_18.jpg", alt: "Custom carved wooden door" },
    { id: 9, src: "/assets/Product/photo_0011.jpg", alt: "Sliding barn door design" },
    { id: 10, src: "/assets/Product/photo_0022.jpg", alt: "Frosted glass office door" },
    { id: 11, src: "/assets/Product/photo_0033.jpg", alt: "Elegant double entry doors" },
    { id: 12, src: "/assets/Product/photo_0044.jpg", alt: "Contemporary pivot door" },
    { id: 13, src: "/assets/Product/photo_0055.jpg", alt: "Eco-friendly bi-fold doors" },
    { id: 14, src: "/assets/Product/photo_0066.jpg", alt: "Modern front door with sidelights" },
    { id: 15, src: "/assets/Product/photo_0077.jpg", alt: "Stylish wooden door with transom" },
    { id: 16, src: "/assets/Product/photo_0088.jpg", alt: "Sleek aluminum door design" },
    { id: 17, src: "/assets/Product/photo_0099.jpg", alt: "Artistic wooden door with glass" },
    { id: 18, src: "/assets/Product/photo_0010.jpg", alt: "Contemporary eco-friendly door" },
    { id: 19, src: "/assets/Product/photo_001011.jpg", alt: "Modern front door with glass panels" },
    { id: 20, src: "/assets/Product/photo_001022.jpg", alt: "Rustic wooden barn door" },
    { id: 21, src: "/assets/Product/photo_001033.jpg", alt: "Elegant double door entry" },
    { id: 22, src: "/assets/Product/photo_001044.jpg", alt: "Sustainable sliding patio door" },
    { id: 23, src: "/assets/Product/photo_001055.jpg", alt: "Custom carved wooden door design" },
    { id: 24, src: "/assets/Product/photo_001066.jpg", alt: "Modern glass office door" },
  ];

  // Double the items for seamless looping
  const doubledItems = [...galleryItems, ...galleryItems];

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [controls, isInView]);

  // Faster auto-scroll animation
  useEffect(() => {
    const speed = 60; // Increased from 35 to 60 for faster scrolling
    let animationFrameId;
    let startTime;
    let progress = 0;

    const animateScroll = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      progress = (elapsed / 1000) * speed;

      if (topTrackRef.current) {
        topTrackRef.current.style.transform = `translateX(-${progress}px)`;
      }
      if (bottomTrackRef.current) {
        bottomTrackRef.current.style.transform = `translateX(${progress}px)`;
      }

      // Reset progress when it exceeds the width of one set of items
      if (progress > galleryItems.length * 370) {
        progress = 0;
        startTime = timestamp;
      }

      animationFrameId = requestAnimationFrame(animateScroll);
    };

    animationFrameId = requestAnimationFrame(animateScroll);

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [galleryItems.length]);

  const handleImageClick = (item) => {
    setSelectedImage(item);
    setModalOpen(true);
  };

  const closeModal = (e) => {
    e.stopPropagation(); // Prevent event bubbling to overlay
    setModalOpen(false);
    setSelectedImage(null);
  };

  // Close modal when clicking outside image
  const handleOverlayClick = () => {
    setModalOpen(false);
    setSelectedImage(null);
  };

  // Close modal with ESC key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        closeModal(e);
      }
    };

    if (modalOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [modalOpen]);

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

  const modalVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
  };

  return (
    <>
      <GlobalStyle modalOpen={modalOpen} />
      <Helmet>
        <title>Modern Eco-Friendly Doors | Premium Collection</title>
        <meta name="description" content="Browse our collection of beautifully crafted, sustainable doors with modern designs for every home" />
      </Helmet>

      <GalleryWrapper ref={containerRef}>
        <main className="eco-gallery-main">
          <Container>
            {/* <SectionHeader 
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
            </SectionHeader> */}


              <div className="sec-title text-center">
              <div className="sec-title__tagline">
                <span className="left"></span>
                <h6>OUR PRODUCTS</h6>
                <span className="right"></span>
              </div>
              <h5 className="sec-title__title">Sustainable & Stylish – Premium Eco Door Collection</h5>
            </div>
            
            {/* Top auto-scrolling gallery (left to right) */}
            <AutoScrollGallery>
              <ScrollTrack 
                ref={topTrackRef}
                variants={containerVariants}
                initial="hidden"
                animate={controls}
                style={{ width: `${galleryItems.length * 370}px` }}
              >
                {doubledItems.map((item, i) => (
                  <ScrollItem 
                    key={`top-${item.id}-${i}`}
                    onClick={() => handleImageClick(item)}
                  >
                    <ScrollImage
                      src={item.src}
                      alt={item.alt}
                      loading="lazy"
                    />
                    <ZoomIcon className="zoom-icon">
                      <FiClock />
                    </ZoomIcon>
                  </ScrollItem>
                ))}
              </ScrollTrack>
            </AutoScrollGallery>

            {/* Bottom auto-scrolling gallery (right to left) */}
            <AutoScrollGallery>
              <ScrollTrack 
                ref={bottomTrackRef}
                variants={containerVariants}
                initial="hidden"
                animate={controls}
                style={{ 
                  width: `${galleryItems.length * 370}px`,
                  flexDirection: 'row-reverse'
                }}
              >
                {doubledItems.map((item, i) => (
                  <ScrollItem 
                    key={`bottom-${item.id}-${i}`}
                    onClick={() => handleImageClick(item)}
                  >
                    <ScrollImage
                      src={item.src}
                      alt={item.alt}
                      loading="lazy"
                    />
                    <ZoomIcon className="zoom-icon">
                      <FiClock />
                    </ZoomIcon>
                  </ScrollItem>
                ))}
              </ScrollTrack>
            </AutoScrollGallery>
          </Container>
        </main>

        {/* Fullscreen Image Modal */}
        <AnimatePresence>
          {modalOpen && (
            <ModalOverlay
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={modalVariants}
              onClick={handleOverlayClick}
            >
              <ModalContent onClick={(e) => e.stopPropagation()}>
                <ModalImage
                  src={selectedImage?.src}
                  alt={selectedImage?.alt}
                />
                <CloseButton 
                  onClick={closeModal} 
                  aria-label="Close image"
                  className="close-button"
                >
                  <FiX size={24} />
                </CloseButton>
              </ModalContent>
            </ModalOverlay>
          )}
        </AnimatePresence>
      </GalleryWrapper>
    </>
  );
};

export default EcoDoorGallery;