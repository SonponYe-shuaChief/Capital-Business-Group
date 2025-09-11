import React from 'react';
import { motion } from 'framer-motion';

const products = [
  { id: 1, name: 'OEM Battery', price: '£120', image: require('../assets/images/1.jpeg'), category: 'Batteries' },
  { id: 2, name: 'Tyre Set', price: '£250', image: require('../assets/images/1.jpeg'), category: 'Tyres' },
  { id: 3, name: 'Brake Pads', price: '£60', image: require('../assets/images/1.jpeg'), category: 'Brakes' },
  { id: 4, name: 'Suspension Kit', price: '£180', image: require('../assets/images/1.jpeg'), category: 'Suspension' },
  { id: 5, name: 'Car Accessory Pack', price: '£40', image: require('../assets/images/1.jpeg'), category: 'Accessories' },
];

const cardVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.6 } },
};

function Shop() {
  return (
  <div className="shop-bg">
  <h1 className="shop-title">Shop Parts & Accessories</h1>
      {/* Categories & Search */}
      <div className="shop-controls">
        <select className="shop-select">
          <option value="">All Categories</option>
          <option value="Batteries">Batteries</option>
          <option value="Tyres">Tyres</option>
          <option value="Brakes">Brakes</option>
          <option value="Suspension">Suspension</option>
          <option value="Accessories">Accessories</option>
        </select>
        <input type="text" placeholder="Search products..." className="shop-search" />
      </div>
      {/* Product Grid */}
      <div className="shop-grid">
        {products.map(product => (
          <motion.div key={product.id} initial="hidden" whileInView="visible" variants={cardVariants} viewport={{ once: true }} className="shop-card">
            <img src={product.image} alt={product.name} className="shop-img" />
            <h3 className="shop-card-title">{product.name}</h3>
            <p className="shop-card-price">{product.price}</p>
            <button className="btn btn-primary">Add to Cart</button>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Shop;
