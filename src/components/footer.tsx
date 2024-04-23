import React from 'react';
import "./styles/footer.css";
import { Link } from 'react-router-dom';
import  logo from '../assets/image/logo.png';
import SVG from './allsvg.js';

function Footer() {
  return (
    <>
    <div className='footerbroder'>
    <div className="footerlogo">
      <Link to='/'><img src={logo} alt="Logo" /></Link>
      </div>
    <footer className="footer">
      
      <div className="section">
        <h4>CONNECTED WITH US</h4>
        <div>
        <Link to="/login"><SVG  caseValue='case3' /></Link>
        <Link to="/login"><SVG  caseValue='case6' /></Link>
        <Link to="/login"><SVG  caseValue='case7' /></Link>
        <Link to="/login"><SVG  caseValue='case3' /></Link>
        </div>
      </div>
      <div className="section2">
        <div><h4>IMPORTANT LINKS</h4>
      <div><Link to="#"> Terms & Conditions</Link>
      <Link to="#"> Privacy Policy</Link>
        <Link to="#"> Help & FAQs</Link>
        </div></div>
        

      </div>
      <span className='vlinefooter'/>
      <div className="section3">
      <SVG  caseValue='case4' />
        <h5>Helpline</h5>
        <Link to="tel:180045684788">1800 456 84788</Link>
      </div>
    </footer>
    <span className='hline'/>
    <h6 className='footerright'>Created by Nabeel hassan</h6>
    </div>
    </>
  );
}

export default Footer;
