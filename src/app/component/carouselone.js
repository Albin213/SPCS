"use client"
import React, { useState, useEffect } from 'react';

function Carouselone() {
  const images = ['img1.svg', 'img2.svg', 'img3.svg'];
  const [currentIndex, setCurrentIndex] = useState(0);

  // Change image every 2 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 1500);

    // Cleanup interval on component unmount
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="w-full h-full relative overflow-hidden rounded-2xl">
      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`img${index + 1}`}
            className="w-full h-full object-cover rounded-2xl flex-shrink-0"
          />
        ))}
      </div>
    </div>
  );
}

export default Carouselone;
