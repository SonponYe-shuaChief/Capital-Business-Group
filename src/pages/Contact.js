import React from 'react';
import '../assets/images/1.jpeg';

function Contact() {
  return (
    <div className="contact-bg contact-bg-img">
      <div className="contact-overlay"></div>
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
            <div className="map-embed">
              <iframe
                title="Google Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509374!2d144.9537363155047!3d-37.81627974202198!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d43f1f7f7b1%3A0x5045675218ce6e0!2s123%20Main%20St%2C%20Melbourne%20VIC%203000%2C%20Australia!5e0!3m2!1sen!2sus!4v1633072800000!5m2!1sen!2sus"
                width="100%"
                height="160"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
