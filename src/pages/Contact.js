import React from 'react';

function Contact() {
  return (
  <div className="contact-bg">
  <h1 className="contact-title">Contact / Book Service</h1>
  <div className="contact-grid">
        {/* Booking Form */}
        <form className="contact-form">
          <h2 className="form-title">Book a Service</h2>
          <input type="text" placeholder="Name" className="form-input" required />
          <input type="email" placeholder="Email" className="form-input" required />
          <input type="tel" placeholder="Phone" className="form-input" required />
          <input type="text" placeholder="Vehicle Details" className="form-input" required />
          <textarea placeholder="Service Request" className="form-input" rows={3} required />
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
        {/* Contact Info & Map */}
        <div className="contact-info-group">
          <div className="contact-info">
            <h2 className="info-title">Contact Info</h2>
            <p>Phone: <a href="tel:+1234567890" className="info-link">+1 234 567 890</a></p>
            <p>Email: <a href="mailto:info@capitalbusinessgroup.com" className="info-link">info@capitalbusinessgroup.com</a></p>
            <p>Address: 123 Main Street, City, Country</p>
          </div>
          <div className="contact-map">
            <h2 className="map-title">Find Us</h2>
            <div className="map-embed">Google Map Embed</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
