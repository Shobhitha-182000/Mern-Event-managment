import React, { useState } from 'react';
import './Register.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Register = () => {
    const [formData, setFormData] = useState({
        username: '',
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
            const url = "http://localhost:3000/register";
            await axios.post(url, formData);
            toast.success('Registration successful! Redirecting to login...');
            setTimeout(() => {
                navigate("/login");
            }, 2000);
        } catch (error) {
            if (error.response && error.response.data && error.response.data.message) {
                toast.error(error.response.data.message);
            } else {
                toast.error('An error occurred during registration. Please try again.');
            }
        }
    };

    return (
        <div className="register-container">
            <ToastContainer />
            <h2 className="register-title">Register</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="username">Username:</label>
                    <input type="text" id="username" name="username" value={formData.username} onChange={handleChange} className="register-form-input" required />
                </div>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className="register-form-input" required />
                </div>
                <div>
                    <label htmlFor="password">Password:</label>
                    <input type="password" id="password" name="password" value={formData.password} onChange={handleChange} className="register-form-input" required />
                </div>
                <div>
                    {/* <label>Select :</label>
                     <select name='name'>
                        <option value="admin" className='option'>Admin</option>
                        <option value="admin" className='option'>Customer</option>
                     </select> */}
                </div>
                <button type="submit" className="register-submit">Register</button>
            </form>
        </div>
    );
};

export default Register;
