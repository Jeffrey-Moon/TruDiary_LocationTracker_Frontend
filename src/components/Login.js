// eslint-disable-next-line
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // Import the useNavigate hook
import './Styles.css'; // Import the CSS

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate(); // Initialize the useNavigate hook

    const handleLogin = async event => {
        event.preventDefault();
        // Make a request to your backend to log in the user
        try {
            const response = await axios.post(`http://localhost:3000/api/login`, {
                email: email,
                password: password
            });
            // Handle the response
            // If login is successful, navigate to another page using useNavigate hook
            navigate('/some-other-page');
        } catch (error) {
            // Handle the error
        }
    }

    return (
        <div className="form-container">
            <h2>Login</h2>
            <form onSubmit={handleLogin}>
                <input type="email" name="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                <input type="password" name="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                <button type="submit">Login</button>
            </form>
        </div>
    );
};

export default Login;
