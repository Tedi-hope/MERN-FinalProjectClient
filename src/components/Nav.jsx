import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import gymlogot from '../images/gymlogot.png';

const Nav = () => {
  const navigate=useNavigate();
  const [selectedValue, setSelectedValue]=useState('');

  const handleSelectChange=(e)=>{
   const value=e.target.value;
   if(value){
    navigate(value);
    setSelectedValue('');//Reset select value
   }
  };

  return (
    <div className="container-fluid px-5 py-2  max-w-full bg-darker text-white">
        <div className="flex justify-between items-center ">
          <div className="flex space-x-3">
             <img src={gymlogot} alt="gym logo" className="w-28 h-18 hover:scale-95" />
             <h2 className=" text-base font-bold uppercase mt-10">My WorkOut GYM</h2>
          </div>
          <div className="mx-2 text-base space-x-7">
            <Link to='/home' className="hover:text-orange-600 ">Home</Link>
            <Link to='/schedule' className="hover:text-orange-600 ">Gym Schedule</Link>
            <select name="auth" id="auth" value={selectedValue} onChange={handleSelectChange} className="text-black w-16 h-6 rounded-md ">
              <option value="">Select</option>
              <option value="/">Login</option>
              <option value="/signup">SignUp</option>
            </select>
          </div>
        </div>
    </div>
  )
}

export default Nav