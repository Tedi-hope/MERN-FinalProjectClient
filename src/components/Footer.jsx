import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import gymlogot from '../images/gymlogot.png';

const Footer = () => {
  return (
    <div className="container-fluid px-5 py-12  max-w-full bg-darker text-white">
        <div className="flex justify-between items-center ">
          <div className="flex space-x-3">
             <img src={gymlogot} alt="gym logo" className="w-20 h-16 hover:scale-95" />
          </div>
          <div className="flex flex-col ">
           <Link to='/home'>Home</Link>
           <Link to='/schedule'>Schedule</Link>
          </div>
        </div>
    </div>
  )
}

export default Footer