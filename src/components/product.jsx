import React, { useState } from "react";
import productsData from "./products.json";
import "./styles/product.css";
import image2 from "../assets/image/product1.png";
import { IoIosAddCircle } from "react-icons/io";
import { HashLink as Link } from "react-router-hash-link";

const Product = () => {
  const [selectedProductId, setSelectedProductId] = useState(null);
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (productId) => {
    const item = productsData.find((product) => product.id === productId);
    setCartItems([...cartItems, item]);
  };

  const handleShowDescription = (productId) => {
    setSelectedProductId(productId === selectedProductId ? null : productId);
  };

  return (
    <>
      <h1>Products</h1>
      <div className="productcontainer">
        <div>
          {selectedProductId !== null && (
            <div id="product" className="mainproduct">
              <img src={image2} alt={productsData[selectedProductId].name} />
              <h2>{productsData[selectedProductId].name}</h2>
              <p>
                OMR ${productsData[selectedProductId].price}  
                <del>${productsData[selectedProductId].price}</del>
              </p>
              <button onClick={() => addToCart(selectedProductId)} className="prodcartbutton">ADD CART</button>
            </div>
          )}
        </div>
        <div className="productsub">
          {productsData.map((product, index) => (
            <div className="itemprod" key={product.id}>
              <div className="iteamstyles">
                <span><img src={image2} alt={product.name} width={100} height={130} />
                <Link
                  to="#product"
                  smooth
                  className="showbuttom"
                  onClick={() => handleShowDescription(index)}
                >
                  <IoIosAddCircle size={40} style={{ color: selectedProductId === index ? "#1AA5C3" : "#B9B9B9" }} />
                </Link></span>
                <h2>{product.name}</h2>
                <p>
                  OMR ${product.price} <del>${product.price}</del>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Product;
