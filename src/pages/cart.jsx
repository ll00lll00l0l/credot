import React, { useState } from "react";
import Cartbanner from '../components/cartbanner'
const Cart = () => {
  const [cartItems, setCartItems] = useState([]);



  const removeFromCart = (productId) => {
    setCartItems(cartItems.filter((item) => item.id !== productId));
  };

  return (
    <>
    <Cartbanner/>
    <div className="bodymargin">
      <h1>Cart</h1>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {cartItems.map((item) => (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>${item.price}</td>
              <td>
                <button onClick={() => removeFromCart(item.id)}>Remove</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <h2>Total: ${cartItems.reduce((acc, item) => acc + item.price, 0)}</h2>
      </div>
    </>
  );
};

export default Cart;
