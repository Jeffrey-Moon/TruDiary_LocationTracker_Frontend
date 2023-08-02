import React from 'react';
import { Link } from 'react-router-dom';
import './Styles.css';  // Import the CSS

const Navbar = () => {
    return (
        <nav>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/login">Login</Link></li>
                <li><Link to="/register">Register</Link></li>
                <li><Link to="/map">Map</Link></li>
            </ul>
        </nav>
    );
};

export default Navbar;
