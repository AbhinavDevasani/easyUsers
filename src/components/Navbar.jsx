import React from 'react'
import UserContext from '../context/userContext';
import { useContext } from 'react';
import SearchFilter from './SearchFilter';
import CreateUserForm from './CreateUser';
import { IoLogoAppleAr } from "react-icons/io5";
import { useNavigate } from 'react-router';
function Navbar() {
     const {setIsOpen,isOpen}=useContext(UserContext)
     const navigate=useNavigate()
     function goToDash(){
        navigate("/")
     }
  return (
    <div className='sticky top-0 z-25 w-full'>
    <div className='flex justify-between p-4 backdrop-blur-md '>
        <div className='flex gap-2 items-center cursor-pointer' onClick={()=>goToDash()}>
            <IoLogoAppleAr className='text-[30px] '/>
            <p className='text-[25px]'>EasyUser</p>
        </div>
        <SearchFilter/>
        <div className='flex justify-end gap-2 '>
        
            

            
            <button onClick={() =>setIsOpen(!isOpen)} className='border-2 p-2 px-5  hover:bg-black hover:text-white rounded-lg'><span className='text-[18px] font-[600]'>+</span> Create new user</button>
        </div>
    </div>
    </div>
  )
}

export default Navbar
