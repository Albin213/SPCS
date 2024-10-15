"use client"
import React, { useState, useEffect } from 'react';

function Offers() {
  const images = ['offers1.svg', 'offers2.svg'];
  const [currentIndex, setCurrentIndex] = useState(0);

  // Change image every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000);

    // Cleanup interval on component unmount
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="w-full h-full bg-[#F7F2F2] rounded-2xl">
      <div className="w-full h-[48px] rounded-t-2xl bg-[#E6E1E1]">
        <p className="text-base font-semibold text-[#313030] p-4">OFFERS</p>
      </div>
      <div className="w-full h-[352px]  relative">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`news${index + 1}`}
            className={`w-full h-full p-2 object-cover rounded-2xl absolute top-0 left-0 transition-opacity duration-1000 ease-in-out ${
              index === currentIndex ? 'opacity-100' : 'opacity-0'
            }`}
          />
        ))}
      </div>
    </div>
  );
}

export default Offers;
