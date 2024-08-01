import React, { useState, useEffect } from 'react';

const Slider = () => {
  const images = [
     'Image/8.png','Image/15.png','Image/10.png','Image/11.png', 'Image/17.png','Image/9.png',  'Image/1.png', 'Image/2.png', 'Image/3.png', 'Image/4.png', 'Image/5.png', 'Image/6.png', 'Image/7.png', 'Image/13.png', 'Image/14.png',  'Image/16.png', 'Image/12.png', 
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="slider-container">
      {images.map((image, index) => (
        <div
          key={image}
          className={`slider-item ${index === currentIndex ? 'active' : ''}`}
        >
          <img src={process.env.PUBLIC_URL + '/' + image} alt={`Slide ${index + 1}`} />
        </div>
      ))}
    </div>
  );
};

export default Slider;
