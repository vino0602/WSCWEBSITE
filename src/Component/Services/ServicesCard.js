import React from 'react';
import './ServicesCard.css'; 
const ServicesCard = ({ icon, title, description, link }) => {
  return (
    <div className="service-card">
      <div className="icon-container">{icon}</div>
      <h3 className="service-title">{title}</h3>
      <p className="service-description">{description}</p>
      <a href={link} className="learn-more"> 
        Learn more
      </a>
    </div>
  );
};

export default ServicesCard;
