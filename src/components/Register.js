// eslint-disable-next-line
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // Import the useNavigate hook
import './Styles.css'; // Import the CSS file

const Register = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate(); // Initialize the useNavigate hook

    const handleRegister = async event => {
        event.preventDefault();
        // Make a request to your backend to register the user
        try {
            const response = await axios.post(`http://localhost:3000/api/register`, {
                name: name,
                email: email,
                password: password
                // Add other fields as necessary
            });
            // Handle the response
            // If registration is successful, navigate to another page using useNavigate hook
            navigate('/some-other-page');
        } catch (error) {
            // Handle the error
        }
    }

    return (
        <div className="form-container">
            <h2>Register</h2>
            <form onSubmit={handleRegister}>
                <input type="text" name="name" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
                <input type="email" name="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                <input type="password" name="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                <button type="submit">Register</button>
            </form>
        </div>
    );
};

export default Register;
