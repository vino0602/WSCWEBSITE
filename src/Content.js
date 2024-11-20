// src/TwoColumnPage.js

import React from 'react';
import './Content.css';
import leftImage from './assets/img.jpg';  // Replace with your image path

const Content = () => {
  return (
    <div className="two-column-container">
      <div className="content-wrapper">
        {/* Left side with image */}
        <div className="right-content">
          <div className="image-wrapper">
            <img src={leftImage} alt="right Content" className="content-image" />
          </div>
        </div>
        
        {/* Right side with content */}
        <div className="left-content">
          <h2 className="content-title">Quality Medical Care Delivered At The <span className="highlight">Comfort of Your Home</span></h2>
          <p className="content-text">
            WeStayClose delivers quality care with compassion. We bring quality medical care into our patients' homes and aim to make primary healthcare not only more accessible but also more affordable and accountable to our patient's needs.
          </p>
    
        </div>
      </div>
    </div>
  );
};

export default Content;
