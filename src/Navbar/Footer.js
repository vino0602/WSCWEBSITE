import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom"; 


const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-content">
        
        <div className="footer-logo-section">
          <h1 className="footer-logo">WeStayClose</h1>
          <p className="footer-text">
            Empower patients through education and advocacy, fostering a more transparent and accessible healthcare environment.
          </p>
        </div>

        <div className="footer-links-section">
          <h3>About Us</h3>
          <ul>
            <li><a href="#About">About</a></li>
            <li><a href="#Ourservices">Services</a></li>
            <li><a href="/Ourteam">OurTeam</a></li>
          </ul>
        </div>

        <div className="footer-links-section">
          <h3>Privacy</h3>
          <ul>
            <li><Link to="/privacy-policy" className="footer-text">Privacy Policy</Link></li> 
            <li><Link to="/terms-and-conditions" className="footer-text">Terms And Condition</Link></li> 
          </ul>
        </div>

        <div className="footer-links-section">
          <h3>Contact Us</h3>
          <ul>
            <li className="footer-text">A-28, 1st Floor, Thiru-vi-ka Industrial Estate, Guindy, Chennai-600 032.</li>
            <li className="footer-text">Registered Office: Livmo Pvt. Ltd., No. 36/3, Otheri Road, Swamy Nagar, Otteri, Vellore - 632 002.</li>
            <li className="footer-text">info@westayclose.in</li>
            <li className="footer-text">+91 97890 86627</li>
          </ul>
        </div>

        <div className="footer-links-section app-section">
          <h3>Get the App</h3>
          <div className="app-links">
         <a href="https://play.google.com/store" target="_blank" rel="noopener noreferrer">
        
         </a>
         </div>
        <div className="app-links">
       <a href="https://www.apple.com/app-store/" target="_blank" rel="noopener noreferrer">
    
  </a>
</div>
        </div>
      </div>
      <div className="footer-copyright">
        <p>Copyright © 2024 - All rights reserved By <span className="font-bold">WeStayClose</span></p>
      </div>
    </div>
  );
};

export default Footer;
