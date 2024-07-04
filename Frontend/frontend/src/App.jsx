 import React from 'react'
 import './App.css'
 import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Register from './components/signup/Register'
import Login from './components/Login/Login'
import Dashboard from './components/Dashboard/Dashboard'
import FrontPage from './components/frontPage/FrontPage'
 
 const App = () => {
   return (
      <BrowserRouter>
      <Routes>
      <Route path='/' element={<FrontPage/>}/>
       
        <Route path='/register' element={<Register/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/dashboard' element={<Dashboard/>}/>
      </Routes>
      </BrowserRouter>
   )
 }
 
 export default App
 