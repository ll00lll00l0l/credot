import React from 'react';
import  logo from '../assets/image/logo.png';
import SVG from './allsvg.js';
import "./styles/navbar.css";
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className="navbar ">
            <div className="navbar-logo">
                <Link to='/home'><img src={logo} alt="Logo" /></Link>
                
            </div>
            <div className="navbar-menu">
                <Link to="/"><SVG  caseValue='case1' /></Link>
                <span className='vline'/>
                <Link to="/cart"><SVG  caseValue='case2' /></Link>
            </div>
        </div>
    );
};

export default Navbar;
