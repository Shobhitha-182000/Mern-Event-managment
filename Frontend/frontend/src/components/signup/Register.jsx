import React from 'react';
import './Register.css';

const Register = () => {
    return (
        <div className="register-form-container">
            <div className="register-container">
                <h2 className="register-title">Register</h2>
                <form>
                    <div>
                        <label htmlFor="username">Username:</label>
                        <input type="text" id="username" name="username" className="register-form-input" required />
                    </div>
                    <div>
                        <label htmlFor="email">Email:</label>
                        <input type="email" id="email" name="email" className="register-form-input" required />
                    </div>
                    <div>
                        <label htmlFor="password">Password:</label>
                        <input type="password" id="password" name="password" className="register-form-input" required />
                    </div>
                    <button type="submit" className="register-submit">Register</button>
                    <div className="login-btn">
                        <p>Already have an account? <a href="/login">Click here</a></p>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Register;
