import React from 'react';
import HeaderTwo from '../common/header/HeaderTwo';
import FooterOne from '../common/footer/FooterOne';
import ProductsPage from '../components/Products/ProductsPage';
import { motion } from 'framer-motion';
// Importing CSS for the Products page
import './Products.css'; // Ensure this file exists and contains necessary styles

const Products = () => {
  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <div className="products-wrapper">
      <HeaderTwo />
      
      <main className="products-main">
        {/* Hero Section */}
        {/* <section className="products-hero bg-dark text-white py-5">
          <div className="container">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeIn}
              className="text-center py-5"
            >
              <h1 className="display-4 fw-bold mb-3">Our Premium Products</h1>
              <p className="lead mb-4">
                Explore our range of eco-friendly doors designed to enhance your space
              </p>
            </motion.div>
          </div>
        </section> */}

        {/* Main Products Content */}
        <ProductsPage />
      </main>

      <FooterOne />
    </div>
  );
};

export default Products;