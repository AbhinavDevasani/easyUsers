import React from 'react'
import { IoLogoAppleAr } from "react-icons/io5";
import { useNavigate } from 'react-router';
import { useContext } from 'react';
import UserContext from '../context/UserContext';
function Home() {
    const navigate=useNavigate()
    const {darkMode}=useContext(UserContext)
    function goToDash(){
        navigate("/dashboard")
    }
  return (
    <div className={` flex flex-col justify-center items-center min-h-screen ${darkMode?'bg-gray-300 text-black':'bg-[#121212] text-gray-300'} text-center gap-5`}>
        <IoLogoAppleAr className="text-[60px] sm:text-[100px] " />
      <p className='md:text-[30px] font-semibold text-[25px]'>Manage Users. Find Faster. Work Smarter.</p>
      <p className='md:text-[25px] font-[400] text-[15px]'>Easily search, view, and add users in one place.<br/> clean dashboard designed for speed, simplicity, and control.</p>
      <div className='flex'>
            <button className='border-2 p-3 rounded-lg hover:bg-black hover:text-white' onClick={()=>goToDash()}>Get Started</button>
      </div>
    </div>
  )
}

export default Home
