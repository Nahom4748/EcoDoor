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
        <ProductsPage />
      </main>

      <FooterOne />
    </div>
  );
};

export default Products;