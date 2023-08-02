// HomePage.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Styles.css'; // Import the CSS

const HomePage = () => {
    return (
        <div className="home-container">
            <h1 className="home-title">Welcome to Our App!</h1>
            <p className="home-description">This is a sample description of what our app does. Navigate using the buttons below or the navbar above.</p>
            <Link to="/login" className="home-button">Login</Link>
            <Link to="/register" className="home-button">Register</Link>
        </div>
    );
};

export default HomePage;
