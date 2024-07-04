import React from 'react'
import './FrontPage.css'

const FrontPage = () => {
  return (
    <div className='mainpage-container'>
      <h1><u>Event Management</u></h1> 
       <div className='btn'>
       <button className='main-side'>Sign up</button>
       <button className='main-side-btn'>Log in</button>
       </div>
      <div className='main-sidenav'>
        <h2>A Good Event Planner..</h2>
        <ul className=" main-ul">
            <li>Coming up with a workable concept for the event </li>
            <li>Planning a marketing strategy </li>
            <li>Writing and finalizing the script for the event </li>
            <li>Working on the audio-visual production </li>
            <li>Obtaining necessary permits for hosting the event </li>
            <li>Getting insurance </li>
            <li>Selecting and booking a venue </li>
            <li>Designing the floor plan for booths and other facilities </li>
            <li>Complying with health and safety standards </li>
            <li>Contacting and negotiating service rates with various vendors </li>
            <li>Inviting speakers and entertainers </li>
            <li>Arranging transportation and accommodation for guests </li>
        </ul><br/>
        <br/>
        <button className='main-button'>Do You want to know more about this Just click</button>

      </div>
       
    </div>
  )
}

export default FrontPage
