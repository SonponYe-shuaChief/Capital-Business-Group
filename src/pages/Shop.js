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
      <style>{`
        .shop-bg {
          background: #fff;
          padding: 48px 16px;
        }
        .shop-title {
          font-size: 2rem;
          font-weight: bold;
          color: #0A3D62;
          margin-bottom: 24px;
          text-align: center;
        }
        .shop-controls {
          display: flex;
          flex-wrap: wrap;
          gap: 16px;
          margin-bottom: 32px;
          justify-content: center;
          align-items: center;
        }
        .shop-select {
          border: 1px solid #636E72;
          border-radius: 6px;
          padding: 10px;
          font-size: 1rem;
        }
        .shop-search {
          border: 1px solid #636E72;
          border-radius: 6px;
          padding: 10px;
          font-size: 1rem;
          min-width: 200px;
        }
        .shop-grid {
          display: flex;
          flex-wrap: wrap;
          gap: 32px;
          justify-content: center;
        }
        .shop-card.shop-card-large {
          background: #f8f9fa;
          border-radius: 18px;
          padding: 48px 32px;
          box-shadow: 0 8px 32px rgba(230,126,34,0.18);
          display: flex;
          flex-direction: column;
          align-items: center;
          min-width: 260px;
          max-width: 340px;
          min-height: 320px;
          transition: box-shadow 0.2s, transform 0.2s;
        }
        .shop-card.shop-card-large:hover {
          box-shadow: 0 16px 48px rgba(230,126,34,0.22);
          transform: scale(1.04) translateY(-6px);
        }
        .shop-icon {
          margin-bottom: 18px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 4rem;
          color: #0f161fff;
          transition: transform 0.2s;
        }
        .shop-card-title {
          font-size: 1.3rem;
          font-weight: bold;
          color: #0A3D62;
          margin-bottom: 12px;
          text-align: center;
        }
        .shop-card-price {
          color: #636E72;
          margin-bottom: 16px;
          font-size: 1.1rem;
        }
        .btn.btn-primary {
          background: #182b50ff;
          color: #fff;
          font-size: 1.05rem;
          padding: 12px 32px;
          border-radius: 8px;
          font-weight: 600;
          border: none;
          cursor: pointer;
          box-shadow: 0 2px 8px rgba(230,126,34,0.12);
          transition: background 0.2s;
        }
        .btn.btn-primary:hover {
          background: #d35400;
        }
        .btn.btn-secondary {
          background: #fff;
          color: #0A3D62;
          border: 2px solid #E67E22;
          font-size: 0.9rem;
          padding: 4px 12px;
          border-radius: 8px;
          font-weight: 600;
          cursor: pointer;
          transition: background 0.2s, color 0.2s;
        }
        .btn.btn-secondary:hover {
          background: #E67E22;
          color: #fff;
        }
        .shop-cart {
          margin-top: 32px;
          background: #fff;
          border-radius: 12px;
          box-shadow: 0 2px 8px rgba(99,110,114,0.08);
          padding: 24px;
          max-width: 400px;
          margin-left: auto;
          margin-right: auto;
        }
      `}</style>
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
      <div className="shop-cart">
        <h2 style={{ fontSize: '1.2rem', fontWeight: 'bold', marginBottom: 12 }}>Cart</h2>
        {cart.length === 0 ? <p>Your cart is empty.</p> : (
          <ul style={{ listStyle: 'none', padding: 0 }}>
            {cart.map(item => (
              <li key={item.id} style={{ marginBottom: 8, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span>{item.name} x{item.qty}</span>
                <button className="btn btn-secondary" onClick={() => removeFromCart(item.id)}>Remove</button>
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
