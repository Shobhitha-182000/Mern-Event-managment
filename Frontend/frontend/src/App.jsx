 import React from 'react'
 import './App.css'
 import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Register from './components/signup/Register'
import Login from './components/Login/Login'
import Dashboard from './components/Dashboard/Dashboard'
import FrontPage from './components/frontPage/FrontPage'
import Sidebar from './components/Dashboard/Sidebar'
 
import AddEvent from './components/Dashboard/EventAdmin/AddEvent'
import DisplayEvent from './components/Dashboard/EventAdmin/DisplayEvent'
import UpdateEvent from './components/Dashboard/EventAdmin/UpdateEvent'
 
 const App = () => {
   return (
      <BrowserRouter>
      <Routes>
      <Route path='/' element={<FrontPage/>}/>
      <Route path='/side' element={<Sidebar/>}/>
      <Route path='/admin/save' element={<AddEvent/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/dashboard' element={<Dashboard/>}/>
        <Route path='/display' element={<DisplayEvent/>}/>
        <Route path='/edit/:id' element={<UpdateEvent/>}/>
        
      </Routes>
      </BrowserRouter>
   )
 }
 
 export default App
 