import React from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

export default function ImageSlider({ images }) {
  return (
    <Slide className="slider-product" duration={1000} transitionDuration={500}>
      {images.map((image, index) => (
        <div className="each-slide-effect" key={index}>
          <img
            className="each-slide-effect__img"
            src={image}
            alt={`Slide ${index}`}
          />
        </div>
      ))}
    </Slide>
  );
}
