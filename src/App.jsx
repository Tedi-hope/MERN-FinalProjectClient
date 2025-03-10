import { useState } from 'react'
import './input.css'
//import Nav from './components/Nav'
import Home from './pages/Home'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './pages/Login'
import SignUp from './pages/SignUp'
import DeleteGymInfo from './pages/DeleteGymInfo'
import Schedule from './pages/Schedule'
import Footer from './components/Footer'

function App() {
  
  return (
    <>
     <BrowserRouter>
     <Routes>
       <Route path='/' element={<Login />} />
       <Route path='/home' element={<Home />} />
       <Route path='/signup' element={<SignUp />} />
       <Route path='/schedule' element={<Schedule />} />
       <Route path='/footer' />
       <Route path='/gym/delete/:id' element={<DeleteGymInfo />} />
     </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
