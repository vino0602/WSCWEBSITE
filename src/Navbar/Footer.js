import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-content">
        
        {/* About Section */}
        <div className="footer-logo-section">
          <h1 className="footer-logo">WeStayClose</h1>
          <p className="footer-text">
            Empower patients through education and advocacy, fostering a more transparent and accessible healthcare environment.
          </p>
        </div>

        {/* About Us Links */}
        <div className="footer-links-section">
          <h3>About Us</h3>
          <ul>
            <li><a href="#about">About</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#our-team">Our Team</a></li>
          </ul>
        </div>

        {/* Services Links */}
        <div className="footer-links-section">
          <h3>Services</h3>
          <ul>
            <li><a href="#lab-test">Lab Test</a></li>
            <li><a href="#health-check">Health Check</a></li>
            <li><a href="#heart-health">Heart Health</a></li>
          </ul>
        </div>

        {/* Contact Us Section */}
        <div className="footer-links-section">
          <h3>Contact Us</h3>
          <ul>
            <li className="footer-text">A-28, 1st Floor, Thiru-vi-ka Industrial Estate, Guindy, Chennai-600 032.</li>
            <li className="footer-text">Registered Office: Livmo Pvt. Ltd., No. 36/3, Otheri Road, Swamy Nagar, Otteri, Vellore - 632 002.</li>
            <li className="footer-text">info@westayclose.in</li>
            <li className="footer-text">+91 97890 86627</li>
          </ul>
        </div>
      </div>

      {/* Footer Copyright */}
      <div className="footer-copyright">
        <p>Copyright © 2024 - All rights reserved By <span className="font-bold">WeStayClose</span></p>
      </div>
    </div>
  );
};

export default Footer;
