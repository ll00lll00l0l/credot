import React from "react";
import { Route, Routes } from 'react-router-dom';
import Home from "./pages/home";
import Product from "./pages/product";
import Cart from "./pages/cart";
import Login from "./pages/login";
import Order from "./pages/order";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import './index.css';


function App() {
  return (
    <>
      <div >
        {/* Navbar */}
        <div className='bodymargin'>
          <Navbar />
        </div>
        
        {/* Page content */}
        <main>
          <Routes>
            <Route path="/" element={< Login/>} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/product" element={<Product />} />
            <Route path="/home" element={< Home/>} />
            <Route path="/order" element={<Order />} />

          </Routes>
        </main>
      </div>
      
      {/* Footer */}
      <div className="bodymargin">
        <Footer />
      </div>
    </>
  );
}

export default App;
