 import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const ImageSlider: React.FC = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <>
      <style>
        {`
          .slider-container {
            width: 100%;
            // max-width: 700px;
            margin: 50px auto;
            padding: 10px;
            background-color: #f5f5f5;
            border-radius: 10px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
          }

          .slider-img {
            width: 100%;
            height: auto;
            border-radius: 8px;
            transition: transform 0.4s ease-in-out;
          }

          .slider-img:hover {
            transform: scale(1.02);
          }
        `}
      </style>

      <div className="slider-container">
        <Slider {...settings}>
          <div>
            <img src="/public/lovable-uploads/1.jpg" alt="Slide 1" className="slider-img" />
          </div>
          <div>
            <img src="/public/lovable-uploads/2.jpg" className="slider-img" />
          </div>
          <div>
            <img src="/public/lovable-uploads/3.jpg" className="slider-img" />
          </div>
          <div>
            <img src="/public/lovable-uploads/4.jpg" className="slider-img" />
          </div>
        </Slider>
      </div>
    </>
  );
};

export default ImageSlider;
