import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaCarBattery, FaCarSide, FaCarCrash, FaCogs, FaToolbox } from 'react-icons/fa';

const products = [
  { id: 1, name: 'OEM Battery', price: '£120', icon: <FaCarBattery size={64} color="#182b50" />, category: 'Batteries' },
  { id: 2, name: 'Tyre Set', price: '£250', icon: <FaCarSide size={64} color="#182b50" />, category: 'Tyres' },
  { id: 3, name: 'Brake Pads', price: '£60', icon: <FaCarCrash size={64} color="#182b50" />, category: 'Brakes' },
  { id: 4, name: 'Suspension Kit', price: '£180', icon: <FaCogs size={64} color="#182b50" />, category: 'Suspension' },
  { id: 5, name: 'Car Accessory Pack', price: '£40', icon: <FaToolbox size={64} color="#182b50" />, category: 'Accessories' },
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
          background: linear-gradient(135deg, #f8fafc 0%, #e0e7ff 100%);
          min-height: 100vh;
          padding: 48px 16px;
        }
        .shop-title {
          font-size: 2.5rem;
          font-weight: bold;
          color: #E67E22;
          margin-bottom: 32px;
          text-align: center;
          letter-spacing: 2px;
          text-shadow: 0 2px 16px rgba(10,61,98,0.12);
        }
        .shop-controls {
          display: flex;
          flex-wrap: wrap;
          gap: 16px;
          margin-bottom: 40px;
          justify-content: center;
          align-items: center;
        }
        .shop-select, .shop-search {
          border: 2px solid #E67E22;
          border-radius: 10px;
          padding: 12px;
          font-size: 1.1rem;
          background: #fff8f0;
          color: #0A3D62;
          box-shadow: 0 2px 8px rgba(230,126,34,0.08);
          outline: none;
          transition: border 0.2s, box-shadow 0.2s;
        }
        .shop-select:focus, .shop-search:focus {
          border: 2px solid #182b50;
          box-shadow: 0 4px 16px rgba(25,118,210,0.10);
        }
        .shop-grid {
          display: flex;
          flex-wrap: wrap;
          gap: 40px;
          justify-content: center;
        }
        .shop-card.shop-card-large {
          background: linear-gradient(120deg, #fff 60%, #fbeee6 100%);
          border-radius: 22px;
          padding: 56px 36px;
          box-shadow: 0 8px 32px rgba(230,126,34,0.18), 0 2px 8px rgba(25,118,210,0.06);
          display: flex;
          flex-direction: column;
          align-items: center;
          min-width: 260px;
          max-width: 340px;
          min-height: 320px;
          transition: box-shadow 0.2s, transform 0.2s, background 0.2s;
          border: 2px solid #E67E22;
        }
        .shop-card.shop-card-large:hover {
          box-shadow: 0 16px 48px rgba(230,126,34,0.28), 0 4px 16px rgba(25,118,210,0.10);
          transform: scale(1.06) translateY(-8px);
          background: linear-gradient(120deg, #fffbe6 40%, #ffe5d0 100%);
        }
        .shop-icon {
          margin-bottom: 18px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 4rem;
          color: #E67E22;
          filter: drop-shadow(0 2px 8px #e67e2233);
          transition: transform 0.2s, color 0.2s;
        }
        .shop-card-title {
          font-size: 1.4rem;
          font-weight: bold;
          color: #182b50;
          margin-bottom: 12px;
          text-align: center;
          letter-spacing: 1px;
        }
        .shop-card-price {
          color: #E67E22;
          margin-bottom: 16px;
          font-size: 1.15rem;
          font-weight: 600;
        }
        .btn.btn-primary {
          background: linear-gradient(90deg, #E67E22 60%, #182b50 100%);
          color: #fff;
          font-size: 1.08rem;
          padding: 14px 36px;
          border-radius: 10px;
          font-weight: 700;
          border: none;
          cursor: pointer;
          box-shadow: 0 2px 8px rgba(230,126,34,0.12);
          transition: background 0.2s, box-shadow 0.2s;
        }
        .btn.btn-primary:hover {
          background: linear-gradient(90deg, #182b50 60%, #E67E22 100%);
          box-shadow: 0 4px 16px rgba(25,118,210,0.10);
        }
        .btn.btn-secondary {
          background: #fff8f0;
          color: #E67E22;
          border: 2px solid #E67E22;
          font-size: 1rem;
          padding: 6px 16px;
          border-radius: 8px;
          font-weight: 600;
          cursor: pointer;
          transition: background 0.2s, color 0.2s, border 0.2s;
        }
        .btn.btn-secondary:hover {
          background: #E67E22;
          color: #fff;
          border: 2px solid #182b50;
        }
        .shop-cart {
          margin-top: 40px;
          background: linear-gradient(120deg, #fff 60%, #e0e7ff 100%);
          border-radius: 16px;
          box-shadow: 0 2px 8px rgba(99,110,114,0.10);
          padding: 32px;
          max-width: 420px;
          margin-left: auto;
          margin-right: auto;
          border: 2px solid #E67E22;
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
