// import React from 'react'

// function News() {
//   return (
//     <div className="w-full h-full bg-[#E8E2E2] rounded-2xl ">
//         <div className="w-full h-[51px] rounded-t-2xl bg-[#4B4848]">
//             <p className="text-base font-semibold text-[#E8E2E2] p-4">NEWS</p>
//         </div>
//         <div className="w-full h-[309px] p-2  ">
//             <img src="news1.svg" alt="news1" className="w-full h-full  object-cover rounded-2xl" />
//             <img src="news2.svg" alt="news2" className="w-full h-full  object-cover rounded-2xl" />
//             <img src="news3.svg" alt="news3" className="w-full h-full  object-cover rounded-2xl" />

//         </div>
//     </div>
//   )
// }

// export default News

"use client"
import React, { useState, useEffect } from 'react';

function News() {
  const images = ['news1.svg', 'news2.svg', 'news3.svg'];
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
    <div className="w-full h-full bg-[#E8E2E2] rounded-2xl">
      <div className="w-full h-[51px] rounded-t-2xl bg-[#4B4848]">
        <p className="text-base font-semibold text-[#E8E2E2] p-4">NEWS</p>
      </div>
      <div className="w-full h-[309px]  relative">
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

export default News;
