import React from 'react';

function Contact() {
  return (
    <div className="bg-white py-12 px-4">
      <h1 className="text-3xl font-bold text-[#0A3D62] mb-6 text-center">Contact / Book Service</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {/* Booking Form */}
        <form className="bg-[#f8f9fa] rounded-lg p-6 shadow-md flex flex-col gap-4">
          <h2 className="text-xl font-bold mb-2 text-[#E67E22]">Book a Service</h2>
          <input type="text" placeholder="Name" className="border p-2 rounded" required />
          <input type="email" placeholder="Email" className="border p-2 rounded" required />
          <input type="tel" placeholder="Phone" className="border p-2 rounded" required />
          <input type="text" placeholder="Vehicle Details" className="border p-2 rounded" required />
          <textarea placeholder="Service Request" className="border p-2 rounded" rows={3} required />
          <button type="submit" className="bg-[#E67E22] text-white px-4 py-2 rounded font-semibold hover:bg-[#d35400] transition">Submit</button>
        </form>
        {/* Contact Info & Map */}
        <div className="flex flex-col gap-4 justify-center">
          <div className="bg-[#636E72] text-white rounded-lg p-6 shadow-md">
            <h2 className="text-lg font-bold mb-2">Contact Info</h2>
            <p>Phone: <a href="tel:+1234567890" className="underline">+1 234 567 890</a></p>
            <p>Email: <a href="mailto:info@capitalbusinessgroup.com" className="underline">info@capitalbusinessgroup.com</a></p>
            <p>Address: 123 Main Street, City, Country</p>
          </div>
          <div className="bg-[#f8f9fa] rounded-lg p-6 shadow-md">
            <h2 className="text-lg font-bold mb-2">Find Us</h2>
            <div className="w-full h-40 bg-gray-300 flex items-center justify-center rounded">Google Map Embed</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
