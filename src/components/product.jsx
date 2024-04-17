import React, { useState } from 'react';
import productsData from './products.json';
import './styles/product.css';
import image2 from '../assets/image/product1.png';

const Product = () => {
  const [selectedProductId, setSelectedProductId] = useState(null);

  const handleShowDescription = (productId) => {
    setSelectedProductId(productId === selectedProductId ? null : productId);
  };

  return (
    <>
      <h1>Products</h1>
      <div className="productcontainer">
        <div>
          {selectedProductId !== null && (
            <div className='mainproduct'>
              <img src={image2} alt={productsData[selectedProductId].name} />
              <h2>{productsData[selectedProductId].name}</h2>
              <p>OMR ${productsData[selectedProductId].price} <del>${productsData[selectedProductId].price}</del></p>
              <button className='prodcartbutton' >ADD CART</button>

            </div>
          )}
        </div>
        <div className='productsub'>
          {productsData.map((product, index) => (
            <div className='itemprod' key={product.id}>
              <div>
                <img src={image2} alt={product.name} />
                <h2>{product.name}</h2>
                <p>OMR ${product.price} <del>${product.price}</del></p>
                <button onClick={() => handleShowDescription(index)}>Show</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Product;
