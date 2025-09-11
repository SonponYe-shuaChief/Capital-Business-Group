import React from 'react';
import '../assets/images/1.jpeg';

function Contact() {
  return (
    <div className="contact-bg contact-bg-img">
      <style>{`
        .contact-bg-img {
          position: relative;
          background: linear-gradient(rgba(10,61,98,0.7), rgba(10,61,98,0.7)), url('../assets/images/1.jpeg') center/cover no-repeat;
          background-attachment: fixed;
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }
        .contact-overlay {
          position: absolute;
          top: 0; left: 0; right: 0; bottom: 0;
          background: rgba(10, 10, 30, 0.55);
          z-index: 1;
        }
        .contact-bg-img > * {
          position: relative;
          z-index: 2;
        }
        .contact-title {
          color: #fff;
          text-shadow: 0 2px 16px rgba(10,61,98,0.18);
          font-size: 2.2rem;
          font-weight: bold;
          margin-bottom: 32px;
          text-align: center;
        }
        .contact-grid {
          display: flex;
          flex-wrap: wrap;
          gap: 48px;
          max-width: 1200px;
          margin: 0 auto;
          justify-content: center;
          align-items: center;
        }
        .contact-form {
          background: #fff;
          border-radius: 16px;
          padding: 40px 32px;
          box-shadow: 0 6px 32px rgba(10,61,98,0.18);
          display: flex;
          flex-direction: column;
          gap: 18px;
          flex: 1;
          min-width: 320px;
          max-width: 400px;
          align-items: center;
        }
        .form-title {
          font-size: 1.3rem;
          font-weight: bold;
          color: #E67E22;
          margin-bottom: 12px;
          text-align: center;
        }
        .form-input {
          border: 1px solid #636E72;
          border-radius: 8px;
          padding: 12px;
          font-size: 1.05rem;
          width: 100%;
          margin-bottom: 8px;
        }
        .btn.btn-primary {
          background: #E67E22;
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
        .contact-info-group {
          display: flex;
          flex-direction: column;
          gap: 24px;
          flex: 1;
          min-width: 320px;
          max-width: 400px;
        }
        .contact-info {
          background: #636E72;
          color: #fff;
          border-radius: 16px;
          padding: 32px 24px;
          box-shadow: 0 2px 8px rgba(99,110,114,0.18);
        }
        .info-title {
          font-size: 1.1rem;
          font-weight: bold;
          margin-bottom: 8px;
        }
        .info-link {
          color: #fff;
          text-decoration: underline;
          transition: color 0.2s;
        }
        .info-link:hover {
          color: #E67E22;
        }
        .contact-map {
          background: #fff;
          border-radius: 16px;
          padding: 32px 24px;
          box-shadow: 0 2px 8px rgba(99,110,114,0.18);
        }
        .map-title {
          font-size: 1.1rem;
          font-weight: bold;
          margin-bottom: 8px;
          color: #E67E22;
        }
        .map-embed iframe {
          width: 100%;
          height: 180px;
          border: none;
          border-radius: 8px;
        }
        @media (max-width: 900px) {
          .contact-grid {
            flex-direction: column;
            align-items: center;
            max-width: 98vw;
          }
          .contact-form,
          .contact-info-group {
            min-width: 260px;
            max-width: 98vw;
          }
        }
      `}</style>
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
