import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Autoplay, FreeMode } from "swiper";
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/free-mode';
import "./ProductsPage.css"

const ProductsGallery = () => {
          let publicUrl = process.env.PUBLIC_URL+'/'

  // Product data with placeholder images
  const products = [
    { id: 1, image: publicUrl+"assets/images/product/pro01.jpg" },
    { id: 2, image: publicUrl+"assets/images/product/pro02.jpg" },
    { id: 3, image: publicUrl+"assets/images/product/pro03.jpg" },
    { id: 4, image:  publicUrl+"assets/images/product/pro04.jpg" },
    { id: 5, image: publicUrl+"assets/images/product/pro05.jpg" },
    { id: 6, image: publicUrl+"assets/images/product/pro06.jpg" },
    { id: 7, image: publicUrl+"assets/images/product/pro07.jpg" },
    { id: 8, image: publicUrl+"assets/images/product/pro08.jpg"}
  ];

  const [selectedImage, setSelectedImage] = useState(null);

  // Animation variants
  const item = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <div className="products-gallery">
      {/* Fullscreen Image Modal */}
      {selectedImage && (
        <motion.div 
          className="image-modal"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setSelectedImage(null)}
        >
          <motion.img
            src={selectedImage}
            alt="Enlarged product"
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 100 }}
          />
        </motion.div>
      )}

      {/* Main Gallery Grid */}
      <motion.div 
        className="gallery-grid"
        initial="hidden"
        animate="visible"
        variants={{
          visible: {
            transition: {
              staggerChildren: 0.1
            }
          }
        }}
      >
        {products.map((product, index) => (
          <motion.div 
            key={product.id}
            variants={item}
            className={`gallery-item ${index % 5 === 0 ? 'wide' : ''} ${index % 7 === 0 ? 'tall' : ''}`}
            onClick={() => setSelectedImage(product.image)}
            whileHover={{ scale: 0.98 }}
          >
            <img 
              src={product.image} 
              alt={`Product ${product.id}`}
              loading="lazy"
            />
          </motion.div>
        ))}
      </motion.div>

      {/* Horizontal Scroller */}
      <div className="gallery-scroller">
        <Swiper
          slidesPerView="auto"
          spaceBetween={20}
          freeMode={true}
          modules={[FreeMode, Autoplay]}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          className="swiper-scroller"
        >
          {products.map((product) => (
            <SwiperSlide key={`scroller-${product.id}`} className="scroller-slide">
              <img 
                src={product.image} 
                alt={`Product ${product.id}`}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Coverflow Carousel */}
      <div className="gallery-carousel">
        <Swiper
          effect={'coverflow'}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={'auto'}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 2,
            slideShadows: false,
          }}
          modules={[EffectCoverflow, Autoplay]}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
        >
          {products.map((product) => (
            <SwiperSlide key={`carousel-${product.id}`}>
              <img 
                src={product.image} 
                alt={`Product ${product.id}`}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default ProductsGallery;