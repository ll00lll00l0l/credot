import React from 'react';
import './styles/banner.css';
import image1 from '../assets/image/homebanner.png';

const Banner = () => {
  return (
    <div className="banner">
      <img src={image1} className="banner-image" alt="Banner" />
    </div>
  );
};

export default Banner;
