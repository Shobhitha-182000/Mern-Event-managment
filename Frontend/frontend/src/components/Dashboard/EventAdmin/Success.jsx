import React from 'react';
import './Success.css';
import Lottie from 'react-lottie';
import animationData from './Animation - 1720433990174.json';

const Success = () => {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    };
    
    return (
        <div className="success-container">
            <h1>Thanks for Booking!</h1>
            <br/>
            <br/>
            <Lottie className='lottie-an' options={defaultOptions} />
            {/* <h1>Your application has been received.</h1> */}
        </div>
    );
}

export default Success;
