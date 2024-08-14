import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer section">
      <div className="footer-content">
        <div className="footer-column">
          <p className="footer-text">DCT</p>
          <p className="footer-title">THINK BOLD</p>
        </div>
        <div className="footer-column">
          <ul className="footer-links">
            <li><a href="#who-we-are">Who We Are</a></li>
            <li><a href="#our-values">Values</a></li>
            <li><a href="#our-policies">Policies</a></li>
            <li><a href="#dct-guild">DCT Guild</a></li>
          </ul>
        </div>
        <div className="footer-column">
          <p className="footer-contact" style={{marginBottom:"10px",fontWeight:"bold"}}>OFFICE</p>
          <p className="footer-contact" style={{marginBottom:"15px"}}>(123) 456-7890</p>
          <p className="footer-contact" style={{fontWeight:"bold",marginBottom:"10px"}}>Mobile</p>
          <p className="footer-contact" style={{marginBottom:"15px"}}>(098) 765-4321</p>
          <p className="footer-contact" style={{marginBottom:"10px",fontWeight:"bold"}}>Email</p>
          <p className="footer-contact">info@yourcompany.com</p>
        </div>
        <div className="footer-column">
          <div className="social-icons">
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faTwitter} />
            </a>
          </div>
        </div>
      </div>
      <hr className="footer-line" />
      <p className="footer-copyright">2023 Your Company © DCT | PO Box 1352, Doha, Qatar</p>
    </footer>
  );
};

export default Footer;
