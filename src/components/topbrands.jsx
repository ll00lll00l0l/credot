import React from 'react';
import './styles/brand.css';
import image1 from '../assets/image/brand1.png';
import image2 from '../assets/image/brand2.png';
import image3 from '../assets/image/brand3.png';
import image4 from '../assets/image/brand4.png';
import image5 from '../assets/image/brand5.png';
import image6 from '../assets/image/brand6.png';
import image7 from '../assets/image/brand7.png';

const Brand = () => {
  return (
    <><div className="brandbroder  ">
      <h2 className="brand-heading">Top Brands
      <span className='hline'/>
</h2>
      <div className="brand-images">
        <img src={image1} className="brand-image" alt="Brand 1" />
        <img src={image2} className="brand-image" alt="Brand 2" />
        <img src={image3} className="brand-image" alt="Brand 3" />
        <img src={image4} className="brand-image" alt="Brand 3" />
        <img src={image5} className="brand-image" alt="Brand 3" />
        <img src={image6} className="brand-image" alt="Brand 3" />
        <img src={image7} className="brand-image" alt="Brand 3" />
        <img src={image3} className="brand-image" alt="Brand 3" />
        <img src={image4} className="brand-image" alt="Brand 3" />
        <img src={image5} className="brand-image" alt="Brand 3" />
        <img src={image6} className="brand-image" alt="Brand 3" />
        <img src={image7} className="brand-image" alt="Brand 3" />
      </div>

    </div>
    <span className='hline'/>

    </>
  );
};

export default Brand;
