import React, { useState } from 'react';
import './Login.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const url = "http://localhost:3000/login";
            const { data: res } = await axios.post(url, formData);
            console.log(res);  
            
            localStorage.setItem('token', res.token);
            toast.success('Login successful! Redirecting to dashboard...');
            setTimeout(() => {
                navigate("/side");  
            }, 2000);
        } catch (error) {
            console.error('Error logging in:', error);
            if (error.response && error.response.data && error.response.data.message) {
                toast.error(error.response.data.message);
            } else {
                toast.error('An error occurred during login. Please try again.');
            }
        }
    };

    return (
        <div className="login-container">
            <ToastContainer />
            <h2 className="login-title">Login</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className="login-form-input" required />
                </div>
                <div>
                    <label htmlFor="password">Password:</label>
                    <input type="password" id="password" name="password" value={formData.password} onChange={handleChange} className="login-form-input" required />
                </div>
                <button type="submit" className="login-submit">Login</button>
            </form>
        </div>
    );
};

export default Login;
