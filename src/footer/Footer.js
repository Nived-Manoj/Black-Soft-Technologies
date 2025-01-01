import React from 'react'; 
import { FaEnvelope, FaPhoneAlt, FaFacebook, FaInstagram, FaTwitter, FaWhatsapp,  } from 'react-icons/fa';
import './Footer.css';
import { FaLocationDot, FaXTwitter } from 'react-icons/fa6';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-logo">
          <h1>Black Soft Technologies</h1>
          <p className="footer-description">
            Driving innovation through creative strategies, we are dedicated to excellence, breaking boundaries, and connecting brilliance. Together, let's reshape the future of IT.
          </p>
        </div>
        <div className="footer-links">
          <h2>Services</h2>
          <div className="services-grid">
            <ul>
              <li>Website <br></br>Development</li>
              <li>Mobile App Development</li>
              <li>Digital Marketing</li>
              <li>Branding</li>
            </ul>
            <ul>
              <li>Logo Design</li>
              <li>Search Engine Optimization</li>
              <li>Testing Service</li>
              <li>Graphic Design</li>
            </ul>
          </div>
        </div>
        <div className="footer-contact">
          <h2>Contact</h2>
          <p>
            <FaLocationDot className="footer-icon" /> 
            Address: 
            <span>
              <a href="https://www.google.com/maps"> Suite 369, LR Towers, South Janatha Road, Palarivattom, Kochi, Kerala 682025</a>
            </span>
          </p>
          <p>
            <FaEnvelope className="footer-icon" /> 
            Email: <a href="mailto:blacksofttechnologies@gmail.com">blacksofttechnologies@gmail.com</a>
          </p>
          <p>
            <FaPhoneAlt className="footer-icon" /> 
            Phone: 
            <span>
              <a href="tel:+919961588563">+91 9961588563</a> | 
              <a href="tel:+919207205255">+91 9207205255</a>
            </span>
          </p>
          <p>
            <FaWhatsapp className="footer-icon" /> 
            <a href="https://wa.me/919544518563" target="_blank" rel="noopener noreferrer">
              Chat with us on WhatsApp
            </a>
          </p>
        </div>
        <div className="footer-social">
          <h2>Connect with Us</h2>
          <div className="social-icons">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaXTwitter /></a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Black Soft Technologies. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
