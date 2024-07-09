import React from 'react'
import { useNavigate } from 'react-router-dom';

import './FrontPage.css'
import Lottie from 'react-lottie'
import animationData from './Animation - 1720154630509.json'

const FrontPage = () => {
 
const navigate=useNavigate(); 

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };

  return (
    <div className='mainpage-container'>
      <h1><u>Event Management</u></h1> 
       <div className='btn'>
       <button className='main-side' onClick={()=>navigate('/register')}>Sign up</button>
       <button className='main-side-btn' onClick={()=>navigate('/login')}>Log in</button>
       </div>
      <div className='main-sidenav'>
        <h2>A Good Event Planner..</h2>
        <ul className=" main-ul">
            <li>Coming up with a workable concept for the event </li>
            <li>Planning a marketing strategy </li>
            <li>Writing and finalizing the script for the event </li>
            <li>Working on the audio-visual production </li>
            <li>Obtaining necessary permits for hosting the event </li>
            
        </ul><br/>
        <br/>
        <button className='main-button' onClick={()=>navigate('/side')}>want to know more about?</button>
      </div>
      <div className='rightside-nav'>
      <Lottie 
	    options={defaultOptions}
        height={400}
        width={600}
      />
    </div>
       
    </div>
  )
}

export default FrontPage
