import React from 'react';
import { useNavigate } from 'react-router-dom';
import './AboutUsPage.css';
import aboutImage from '../../assets/aboutus2.jpg'; 
import aboutImage2 from '../../assets/aboutus.jpg';

const AboutUsPage = () => {
  const navigate = useNavigate();
  const handleCardClick = (path) => {
    navigate(path);
  };
  return (
    <div className="about-us-container">
      <div className="about-us-content">
        <div className="about-us-image-container">
          <img src={aboutImage} alt="About Us" className="about-us-image" />
          <img src={aboutImage2} alt="About Us Extra" className="about-us-image-2" />
        </div>
        <div className="about-us-text">
          <h2 className="about-us-heading">About Us</h2>
          <p>
            WeStayClose is dedicated to providing personalized care to our clients.
            Our mission is to deliver quality healthcare and support services directly to your doorstep, ensuring comfort and convenience.
          </p>
          <p>
            Our personalized support services are designed to save you time and alleviate the stress of navigating the healthcare system, allowing you to focus on what matters most - caring for your family and friends.
          </p>
          <button
            className="btn-primary" 
            type="button"
            onClick={() => handleCardClick('/aboutus')}
          >
            Read more
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutUsPage;
