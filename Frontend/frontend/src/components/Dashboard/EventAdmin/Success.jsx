import React from 'react';
import './Success.css';

const Success = () => {
    return (
        <div className="success-container">
            <h1>Thanks for Booking!</h1>
            <br/>
            <br/>
            <div className="tick-container">
                <svg className="tick-mark" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2 12l5 5L22 4" stroke="#4CAF50" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                 
            </div>
            <h3>We will get back you soon!!!!</h3>
        </div>
    );
}

export default Success;
