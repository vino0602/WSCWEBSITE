import React from 'react';
import PropTypes from 'prop-types';
import './PackageCard.css';

const PackageCard = ({ price, title, description, isExpanded, onToggleExpand }) => {
  return (
    <div className={`package-card ${isExpanded ? 'expanded' : ''}`}>
      <h2 className="package-title">{title}</h2>
      <p className="package-price">{price}</p>

      {isExpanded ? (
        <>
          <ul className="package-description">
            {description.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
          

          <div>
          <a href="https://app.westayclose.in/login">
            <button className="pay-btn">Pay</button>
          </a>
        </div>


          <button className="read-less-btn" onClick={onToggleExpand}>
            Show Less
          </button>
        </>
      ) : (
        <button className="read-more-btn" onClick={onToggleExpand}>
          Read More
        </button>
      )}
    </div>
  );
};

PackageCard.propTypes = {
  price: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.arrayOf(PropTypes.string).isRequired,
  isExpanded: PropTypes.bool.isRequired,
  onToggleExpand: PropTypes.func.isRequired,
};

export default PackageCard;
