import React from 'react'
import UserContext from '../context/userContext';
import { useContext } from 'react';
import SearchFilter from './SearchFilter';
import CreateUserForm from './CreateUser';
import { IoLogoAppleAr } from "react-icons/io5";
function Navbar() {
     const {setIsOpen,isOpen}=useContext(UserContext)
  return (
    <div className='sticky top-0 z-25 w-full'>
    <div className='flex justify-between p-4 backdrop-blur-md '>
        <div className='flex gap-2 items-center'>
            <IoLogoAppleAr className='text-[30px] '/>
            <p className='text-[25px]'>EasyUser</p>
        </div>
        <div className='flex justify-end gap-2 '>
        
            <SearchFilter/>

            
            <button onClick={() =>setIsOpen(!isOpen)} className='border-2 p-2 '>Create new user</button>
        </div>
    </div>
    </div>
  )
}

export default Navbar
