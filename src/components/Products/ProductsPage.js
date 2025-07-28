import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "./ProductsPage.css"; // Assuming you have a CSS file for styling
import {
  FiZoomIn,
  FiHeart,
  FiX,
  FiChevronLeft,
  FiChevronRight,
} from "react-icons/fi";

const ProductsGallery = () => {
  const publicUrl = process.env.PUBLIC_URL + "/";

  const products = [
    {
      id: 1,
      image: "/assets/Product/photo_2.jpg",
      title: "Modern Oak Door",
      category: "Front Doors",
      price: "$499",
    },
    {
      id: 2,
      image: "/assets/Product/photo_8.jpg",
      title: "Glass Panel Design",
      category: "Patio Doors",
      price: "$599",
    },
    {
      id: 3,
      image: "/assets/Product/photo_34.jpg",
      title: "Rustic Barn Door",
      category: "Sliding Doors",
      price: "$649",
    },
    {
      id: 4,
      image: "/assets/Product/photo_16.jpg",
      title: "Minimalist Black",
      category: "Front Doors",
      price: "$549",
    },
    {
      id: 5,
      image: "/assets/Product/photo_12.jpg",
      title: "French Patio Doors",
      category: "Double Doors",
      price: "$1,299",
    },
    {
      id: 6,
      image: "/assets/Product/photo_28.jpg",
      title: "Traditional Panel",
      category: "Interior Doors",
      price: "$429",
    },
    {
      id: 7,
      image: "/assets/Product/photo_30.jpg",
      title: "Industrial Steel",
      category: "Commercial Doors",
      price: "$799",
    },
    {
      id: 8,
      image: "/assets/Product/photo_18.jpg",
      title: "Custom Carved",
      category: "Artisan Doors",
      price: "$899",
    },
  ];

  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [favorites, setFavorites] = useState([]);
  const [activeFilter, setActiveFilter] = useState("All");

  const categories = ["All", ...new Set(products.map((p) => p.category))];
  const filteredProducts =
    activeFilter === "All"
      ? products
      : products.filter((p) => p.category === activeFilter);

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const staggerContainer = {
    visible: { transition: { staggerChildren: 0.1 } },
  };

  return (
    <div className="modern-gallery-container">
      <section className="gallery-hero">
        <motion.div
          className="hero-content"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h1>Premium Door Collection</h1>
          <p>
            Step into style with our beautifully crafted, modern eco doors.
          </p>
        </motion.div>
      </section>

      <motion.div
        className="gallery-grid"
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
      >
        {filteredProducts.map((product) => (
          <motion.div
            key={product.id}
            className="gallery-item"
            variants={fadeIn}
            whileHover={{ scale: 1.02 }}
            onClick={() => {
              setSelectedImage(product.image);
              setSelectedProduct(product);
            }}
            style={{ cursor: "pointer" }}
          >
            <div className="image-container">
              <img src={product.image} alt={product.title} loading="lazy" />
              <div className="image-overlay">
                <button
                  className="zoom-btn"
                  onClick={() => setSelectedImage(product.image)}
                >
                  <FiZoomIn />
                </button>
                <button
                  className={`favorite-btn ${
                    favorites.includes(product.id) ? "active" : ""
                  }`}
                  onClick={(e) => {
                    e.stopPropagation();
                    setFavorites((prev) =>
                      prev.includes(product.id)
                        ? prev.filter((id) => id !== product.id)
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

      <div className="featured-carousel-section">
        <h2>Customer Favorites</h2>
        <Swiper
          slidesPerView={1}
          spaceBetween={20}
          navigation={{ nextEl: ".carousel-next", prevEl: ".carousel-prev" }}
          modules={[Navigation, Autoplay]}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="featured-carousel"
        >
          {products
            .filter((p) => parseInt(p.price.replace(/[^0-9]/g, "")) > 500)
            .map((product) => (
              <SwiperSlide key={`featured-${product.id}`}>
                <div className="featured-item">
                  <img src={product.image} alt={product.title} />
                </div>
              </SwiperSlide>
            ))}
          <button className="carousel-nav carousel-prev">
            <FiChevronLeft />
          </button>
          <button className="carousel-nav carousel-next">
            <FiChevronRight />
          </button>
        </Swiper>
      </div>

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
              className="modal-content full-centered"
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.95 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="close-btn"
                onClick={() => setSelectedImage(null)}
              >
                <FiX />
              </button>
              <div className="modal-image">
                <img src={selectedImage} alt={selectedProduct.title} />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ProductsGallery;
