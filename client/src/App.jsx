import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import Signup from './pages/Signup';
import Signin from './pages/Signin';
import AboutUs from './pages/AboutUs';
import Events from './pages/Events';
import ContactUs from './pages/ContactUs';


const App = () => {
  return (
   <BrowserRouter>
   <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/sign-in" element={<Signin/>}/>
    <Route path="/sign-up" element={<Signup/>}/>
    <Route path="/about" element={<AboutUs/>}/>
    <Route path="/events" element={<Events/>}/>
    <Route path="/contact" element={<ContactUs/>}/>
   </Routes>
   </BrowserRouter>
  )
}

export default App
