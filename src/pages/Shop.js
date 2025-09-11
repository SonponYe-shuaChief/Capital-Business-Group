import React from 'react';
import { motion } from 'framer-motion';

const products = [
  { id: 1, name: 'OEM Battery', price: '£120', image: '', category: 'Batteries' },
  { id: 2, name: 'Tyre Set', price: '£250', image: '', category: 'Tyres' },
  { id: 3, name: 'Brake Pads', price: '£60', image: '', category: 'Brakes' },
  { id: 4, name: 'Suspension Kit', price: '£180', image: '', category: 'Suspension' },
  { id: 5, name: 'Car Accessory Pack', price: '£40', image: '', category: 'Accessories' },
];

const cardVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.6 } },
};

function Shop() {
  return (
    <div className="bg-white py-12 px-4">
      <h1 className="text-3xl font-bold text-[#0A3D62] mb-6 text-center">Shop Parts & Accessories</h1>
      {/* Categories & Search */}
      <div className="flex flex-col md:flex-row gap-4 mb-8 justify-center items-center">
        <select className="border p-2 rounded">
          <option value="">All Categories</option>
          <option value="Batteries">Batteries</option>
          <option value="Tyres">Tyres</option>
          <option value="Brakes">Brakes</option>
          <option value="Suspension">Suspension</option>
          <option value="Accessories">Accessories</option>
        </select>
        <input type="text" placeholder="Search products..." className="border p-2 rounded w-full md:w-64" />
      </div>
      {/* Product Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {products.map(product => (
          <motion.div key={product.id} initial="hidden" whileInView="visible" variants={cardVariants} viewport={{ once: true }} className="bg-[#f8f9fa] rounded-lg p-6 shadow-md flex flex-col items-center">
            <div className="w-24 h-24 bg-gray-300 rounded mb-4 flex items-center justify-center">Img</div>
            <h3 className="font-bold text-lg mb-2 text-[#0A3D62]">{product.name}</h3>
            <p className="text-[#636E72] mb-2">{product.price}</p>
            <button className="bg-[#E67E22] text-white px-4 py-2 rounded font-semibold hover:bg-[#d35400] transition">Add to Cart</button>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Shop;
