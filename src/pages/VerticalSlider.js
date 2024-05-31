import React from 'react';
import './Slider.css'; 

function VerticalLoopSlider({ images }) {
  return (
    <div className="w-[80%] overflow-hidden h-[150vh]">
      <div className="slider-track flex flex-col gap-6">
        {images.map((image, index) => (
          <img
            key={index}
            className=""
            src={image}
            alt={`Image ${index + 1}`}
          />
        ))}
        {/* duplicate */}
        {images.map((image, index) => (
          <img
            key={index}
            className="slider-image"
            src={image}
            alt={`Image ${index + 1}`}
          />
        ))}
      </div>
      <div className="slider-track">
        {images.map((image, index) => (
          <img
            key={index}
            className="slider-image"
            src={image}
            alt={`Image ${index + 1}`}
          />
        ))}
        {/* dupe */}
        {images.map((image, index) => (
          <img
            key={index}
            className="slider-image"
            src={image}
            alt={`Image ${index + 1}`}
          />
        ))}
      </div>
      <div className="slider-track">
        {images.map((image, index) => (
          <img
            key={index}
            className="slider-image"
            src={image}
            alt={`Image ${index + 1}`}
          />
        ))}
        {/* dupe */}
        {images.map((image, index) => (
          <img
            key={index}
            className="slider-image"
            src={image}
            alt={`Image ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

export default VerticalLoopSlider;
