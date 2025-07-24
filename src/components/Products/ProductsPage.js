import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import { FiZoomIn, FiHeart, FiX, FiChevronLeft, FiChevronRight } from "react-icons/fi";
import "./ProductsPage.css";

const ProductsGallery = () => {
  const publicUrl = process.env.PUBLIC_URL + '/';

  // Product data with only images
  const products = [
    { id: 1, image: "/assets/Product/photo_2.jpg" },
    { id: 2, image: "/assets/Product/photo_17.jpg" },
    { id: 3, image: "/assets/Product/photo_9.jpg" },
    { id: 4, image: "/assets/Product/photo_16.jpg" },
    { id: 5, image: "/assets/Product/photo_12.jpg" },
    { id: 6, image: "/assets/Product/photo_7.jpg" },
    { id: 7, image: "/assets/Product/photo_8.jpg" },
    { id: 8, image: "/assets/Product/photo_18.jpg" }
  ];

  const [selectedImage, setSelectedImage] = useState(null);
  const [favorites, setFavorites] = useState([]);

  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  const staggerContainer = {
    visible: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <div className="modern-gallery-container">
      {/* Hero Section */}
      <section className="gallery-hero">
        <motion.div 
          className="hero-content"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h1>Premium Door Collection</h1>
          <p>Discover our handcrafted doors blending modern design with timeless craftsmanship</p>
        </motion.div>
      </section>

      {/* Main Gallery Grid */}
      <motion.div
        className="gallery-grid"
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
      >
        {products.map(product => (
          <motion.div
            key={product.id}
            className="gallery-item"
            variants={fadeIn}
            whileHover={{ scale: 0.98 }}
          >
            <div className="image-container">
              <img
                src={product.image}
                alt=""
                loading="lazy"
              />
              <div className="image-overlay">
                <button 
                  className="zoom-btn"
                  onClick={() => setSelectedImage(product.image)}
                >
                  <FiZoomIn />
                </button>
                <button 
                  className={`favorite-btn ${favorites.includes(product.id) ? "active" : ""}`}
                  onClick={(e) => {
                    e.stopPropagation();
                    setFavorites(prev => 
                      prev.includes(product.id) 
                        ? prev.filter(id => id !== product.id) 
                        : [...prev, product.id]
                    );
                  }}
                >
                  <FiHeart />
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Featured Carousel */}
      <div className="featured-carousel-section">
        <h2>Customer Favorites</h2>
        <Swiper
          slidesPerView={1}
          spaceBetween={20}
          navigation={{
            nextEl: '.carousel-next',
            prevEl: '.carousel-prev',
          }}
          modules={[Navigation, Autoplay]}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 }
          }}
          className="featured-carousel"
        >
          {products.map(product => (
            <SwiperSlide key={`featured-${product.id}`}>
              <div className="featured-item">
                <img src={product.image} alt="" />
              </div>
            </SwiperSlide>
          ))}
          <button className="carousel-nav carousel-prev"><FiChevronLeft /></button>
          <button className="carousel-nav carousel-next"><FiChevronRight /></button>
        </Swiper>
      </div>

      {/* Image Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="image-modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
          >
            <motion.div 
              className="modal-content"
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.95 }}
              onClick={e => e.stopPropagation()}
            >
              <button 
                className="close-btn"
                onClick={() => setSelectedImage(null)}
              >
                <FiX />
              </button>
              <img src={selectedImage} alt="" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ProductsGallery;