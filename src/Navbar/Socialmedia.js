import React, { useEffect, useState, useRef } from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa';
import './Socialmedia.css';

const SocialMedia = () => {
  const [showTopBar, setShowTopBar] = useState(true);
  const lastScrollY = useRef(window.scrollY);

  useEffect(() => {
    const handleScroll = () => {
      const headerElement = document.querySelector('.header-container');
      if (!headerElement) return; 

      if (window.scrollY > lastScrollY.current && window.scrollY > 100) {
        setShowTopBar(false);
        headerElement.style.top = '0px'; 
      } else {
        setShowTopBar(true);
        headerElement.style.top = '50px'; 
      }
      lastScrollY.current = window.scrollY;
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`top-bar ${showTopBar ? 'visible' : 'hidden'}`}>
      <div className="contact-info">
        <span>📍 Guindy, Chennai</span>
        <span>📞 +91 97890 86627</span>
        <span>📧 info@westayclose.in</span>
        <span>🕒 Mon-Sat: 9:00 AM - 6:00 PM</span>
      </div>
      <div className="social-icons">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="icon">
          <FaFacebook size={20} />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="icon">
          <FaTwitter size={20} />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="icon">
          <FaInstagram size={20} />
        </a>
        <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer" className="icon">
          <FaLinkedin size={20} />
        </a>
        <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer" className="icon">
          <FaYoutube size={20} />
        </a>
      </div>
    </div>
  );
};

export default SocialMedia;
