import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Booking from '../pages/Booking'
import CreateEvent from '../pages/CreateEvent'
import Dashboard from '../pages/dashboard'
import Details from '../pages/details'
import Events from '../pages/Event'
import Home from '../pages/Home'
import Login from '../pages/Login'
import Register from '../pages/Register'
import Allrequest from '../pages/request'


const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/booking" element={<Booking/>}/>
        <Route path="/events" element={<Events/>}/>
        <Route path="/createevent" element={<CreateEvent/>}/>
        <Route path="/details" element={<Details/>}/>
        <Route path="/dashboard" element={<Dashboard/>}/>
        <Route path="/request" element={<Allrequest/>}/>
        <Route path="*" element={<h1>404 Not Found</h1>}/>
      </Routes>
    </div>
  )
}

export default AllRoutes;
