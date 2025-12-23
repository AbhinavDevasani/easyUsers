import React from 'react'
import { IoLogoAppleAr } from "react-icons/io5";
function Footer() {
  return (
    <div className='bg-black flex flex-col items-center text-white gap-3'>
      <div className='flex gap-2 items-center mt-2'>
        <IoLogoAppleAr className='text-[20px] '/>
        <p className='text-[20px] '>EasyUser</p>
      </div>
      <p>Your personalized user dashboard</p>
      <p>A personalized user dashboard designed to give quick access to key information, actions, and updates in one place</p>
      <p >© 2025 EasyUser. All rights reserved.</p>
    </div>
  )
}

export default Footer
