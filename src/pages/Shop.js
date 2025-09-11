import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaCarBattery, FaCarSide, FaCarCrash, FaCogs, FaToolbox } from 'react-icons/fa';

const products = [
  { id: 1, name: 'OEM Battery', price: '£120', icon: <FaCarBattery size={64} color="#E67E22" />, category: 'Batteries' },
  { id: 2, name: 'Tyre Set', price: '£250', icon: <FaCarSide size={64} color="#E67E22" />, category: 'Tyres' },
  { id: 3, name: 'Brake Pads', price: '£60', icon: <FaCarCrash size={64} color="#E67E22" />, category: 'Brakes' },
  { id: 4, name: 'Suspension Kit', price: '£180', icon: <FaCogs size={64} color="#E67E22" />, category: 'Suspension' },
  { id: 5, name: 'Car Accessory Pack', price: '£40', icon: <FaToolbox size={64} color="#E67E22" />, category: 'Accessories' },
];

const cardVariants = {
  hidden: { opacity: 0, scale: 0.95, y: 30 },
  visible: { opacity: 1, scale: 1.08, y: 0, boxShadow: '0 8px 32px rgba(230,126,34,0.18)', transition: { duration: 0.5 } },
  hover: { scale: 1.12, boxShadow: '0 16px 48px rgba(230,126,34,0.22)', transition: { duration: 0.2 } },
};

function Shop() {
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('');
  const [cart, setCart] = useState([]);

  const filteredProducts = products.filter(product => {
    const matchesCategory = category ? product.category === category : true;
    const matchesSearch = product.name.toLowerCase().includes(search.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const addToCart = (product) => {
    setCart(prev => {
      const exists = prev.find(item => item.id === product.id);
      if (exists) {
        return prev.map(item => item.id === product.id ? { ...item, qty: item.qty + 1 } : item);
      }
      return [...prev, { ...product, qty: 1 }];
    });
  };

  const removeFromCart = (id) => {
    setCart(prev => prev.filter(item => item.id !== id));
  };

  const handleCheckout = () => {
    alert('Checkout not implemented.');
  };

  return (
    <div className="shop-bg">
      <h1 className="shop-title">Shop Parts & Accessories</h1>
      {/* Categories & Search */}
      <div className="shop-controls">
        <select className="shop-select" value={category} onChange={e => setCategory(e.target.value)}>
          <option value="">All Categories</option>
          <option value="Batteries">Batteries</option>
          <option value="Tyres">Tyres</option>
          <option value="Brakes">Brakes</option>
          <option value="Suspension">Suspension</option>
          <option value="Accessories">Accessories</option>
        </select>
        <input type="text" placeholder="Search products..." className="shop-search" value={search} onChange={e => setSearch(e.target.value)} />
      </div>
      {/* Product Grid */}
      <div className="shop-grid">
        {filteredProducts.map(product => (
          <motion.div
            key={product.id}
            initial="hidden"
            whileInView="visible"
            whileHover="hover"
            variants={cardVariants}
            viewport={{ once: true }}
            className="shop-card shop-card-large"
          >
            <div className="shop-icon">{product.icon}</div>
            <h3 className="shop-card-title">{product.name}</h3>
            <p className="shop-card-price">{product.price}</p>
            <button className="btn btn-primary" onClick={() => addToCart(product)}>Add to Cart</button>
          </motion.div>
        ))}
      </div>
      {/* Cart */}
      <div className="shop-cart" style={{ marginTop: 32, background: '#fff', borderRadius: 12, boxShadow: '0 2px 8px rgba(99,110,114,0.08)', padding: 24, maxWidth: 400, marginLeft: 'auto', marginRight: 'auto' }}>
        <h2 style={{ fontSize: '1.2rem', fontWeight: 'bold', marginBottom: 12 }}>Cart</h2>
        {cart.length === 0 ? <p>Your cart is empty.</p> : (
          <ul style={{ listStyle: 'none', padding: 0 }}>
            {cart.map(item => (
              <li key={item.id} style={{ marginBottom: 8, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span>{item.name} x{item.qty}</span>
                <button className="btn btn-secondary" style={{ fontSize: '0.9rem', padding: '4px 12px' }} onClick={() => removeFromCart(item.id)}>Remove</button>
              </li>
            ))}
          </ul>
        )}
        {cart.length > 0 && <button className="btn btn-primary" style={{ marginTop: 16 }} onClick={handleCheckout}>Checkout</button>}
      </div>
    </div>
  );
}

export default Shop;
