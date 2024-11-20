import React, { useState, useEffect } from 'react';
import './imagecaurosel.css'; // Import your custom CSS
import image1 from './assets/image1.jpg';
import image2 from './assets/image2.jpg';
import image3 from './assets/image3.jpg';

const images = [image1, image2, image3];

const Imagecaurosel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change slide every 3 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="custom-carousel">
      {images.map((image, index) => (
        <div
          className={`carousel-item ${index === currentIndex ? 'active' : ''}`}
          key={index}
        >
          <img src={image} alt={`Slide ${index + 1}`} />
          <div className="custom-carousel-caption">
            <h3>Slide {index + 1} Label</h3>
            <p>Description for slide {index + 1}.</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Imagecaurosel;
