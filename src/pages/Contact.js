import React from 'react';
const bgImg = '/images/1.jpeg';

function Contact() {
  return (
    <div className="contact-bg contact-bg-img">
      <style>{`
        .contact-bg-img {
          position: relative;
          background: url(${bgImg}) center/cover no-repeat;
          background-attachment: fixed;
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
        }
        .contact-bg-img::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0; bottom: 0;
          width: 100%;
          height: 100%;
          background: rgba(10, 20, 40, 0.85);
          z-index: 1;
        }
        .contact-bg-img > * {
          position: relative;
          z-index: 2;
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
          font-size: 2.5rem;
          font-weight: bold;
          margin-bottom: 32px;
          text-align: center;
          margin-top: 48px;
        }
        .contact-main {
          display: flex;
          flex-direction: row;
          gap: 48px;
          max-width: 1100px;
          margin: 0 auto 48px auto;
          justify-content: center;
          align-items: stretch;
         width: 95%;
        }
        .contact-form {
          background: #f8fcff;
          border-radius: 24px;
          padding: 40px 40px;
          box-shadow: 0 8px 32px rgba(25,118,210,0.12);
          display: flex;
          flex-direction: column;
          gap: 28px;
          flex: 1;
          min-width: 340px;
          max-width: 520px;
          align-items: center;
          border: 1px solid #e3eaf5;
        }
            min-height: 420px;
        .form-title {
          font-size: 1.5rem;
          font-weight: bold;
          color: #E67E22;
          margin-bottom: 16px;
          text-align: center;
        }
        .form-input {
          border: 1px solid #636E72;
          border-radius: 10px;
          padding: 16px;
          font-size: 1.15rem;
          width: 100%;
          margin-bottom: 8px;
        }
        .btn.btn-primary {
          background: #E67E22;
          color: #fff;
          font-size: 1.15rem;
          padding: 16px 40px;
          border-radius: 10px;
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
          gap: 32px;
          flex: 1;
          min-width: 320px;
          max-width: 480px;
        }
            justify-content: stretch;
        .contact-info {
          background: #f4f6fa;
          color: #222;
          border-radius: 24px;
          padding: 48px 40px;
          box-shadow: 0 4px 16px rgba(25,118,210,0.10);
          border: 1px solid #e3eaf5;
        }
            min-height: 420px;
            display: flex;
            flex-direction: column;
            justify-content: center;
        .info-title {
          font-size: 1.3rem;
          font-weight: bold;
          margin-bottom: 12px;
          color: #1976D2;
        }
            font-size: 2rem;
            font-weight: 800;
            margin-bottom: 24px;
            text-align: left;
        .info-link {
          color: #1976D2;
          text-decoration: underline;
          transition: color 0.2s;
        }
        .info-link:hover {
          color: #E67E22;
        }
        .contact-map {
          background: #f8fcff;
          border-radius: 32px;
          padding: 30px 30px;
          box-shadow: 0 8px 32px rgba(25,118,210,0.12);
          max-width: 1400px;
            width: 95vw;
          margin: 0 auto 48px auto;
          border: 1px solid #e3eaf5;
        }
        .map-title {
          font-size: 1.5rem;
          font-weight: bold;
          margin-bottom: 18px;
          color: #1976D2;
        }
        .map-embed iframe {
          width: 100%;
          min-width: 300px;
            max-width: 95vw;
          height: 400px;
          border: none;
          border-radius: 18px;
        }
        @media (max-width: 900px) {
          .contact-main {
            flex-direction: column;
            align-items: center;
            max-width: 98vw;
          }
          .contact-form,
          .contact-info-group {
            min-width: 260px;
            max-width: 98vw;
          }
          .contact-map {
            max-width: 98vw;
            padding: 24px 8px;
          }
        }
      `}</style>
      <div className="contact-overlay"></div>
      <h1 className="contact-title">Contact / Book Service</h1>
      <div className="contact-main">
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
        {/* Contact Info */}
   
      </div>
     
    </div>
  );
}

export default Contact;
