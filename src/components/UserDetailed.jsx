import React from 'react'
import { useParams } from 'react-router'
import UserContext from '../context/userContext'
import { useContext } from 'react'
import { FaMapPin } from "react-icons/fa";
import { FaBuilding } from "react-icons/fa";
import { FaQuoteLeft } from "react-icons/fa";
import { MdBusinessCenter } from "react-icons/md";
import { TbWorld } from "react-icons/tb";
import { IoArrowBackSharp } from "react-icons/io5";
import { useNavigate } from 'react-router';
function UserDetailed() {
    const {id}=useParams()
    const navigate=useNavigate()
    const {users}=useContext(UserContext)
    const user = users.find((user) => user.id === Number(id));
    function goToDash(){
        navigate("/")
    }
  return (
    <div>
        
    <div className='p-5   gap-5 flex flex-wrap items-strech justify-center'>
        <div className='bg-white shadow-lg rounded-lg p-6 w-[40%]'>
            <p className='text-[25px] font-[600]'>User Details</p>
            <div className='flex mt-2 gap-2'>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
                    <path fill-rule="evenodd" d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z" clip-rule="evenodd" />
                </svg>
                <p><span className='text-[18px] '>Name</span>: {user.name}</p>
            </div>
            <div className='flex mt-2 gap-2'>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
                    <path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z" />
                    <path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z" />
                </svg>

                <p><span className='text-[18px] '>Email: </span>: {user.email}</p>
            </div>
            <div className='flex mt-2 gap-2'>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
                    <path fill-rule="evenodd" d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z" clip-rule="evenodd" />
                </svg>

                <p><span className='text-[18px] '>Phone: </span>: {user.phone}</p>
            </div>
        </div>
        <div className='bg-white shadow-lg rounded-lg p-6 w-[40%]'>
            <p className='text-[25px] font-[600]'>Address & Geo Location</p>
            <div className='flex mt-2 gap-2'>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
                    <path fill-rule="evenodd" d="m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" clip-rule="evenodd" />
                </svg>
                <p><span className='text-[18px] '>Street</span>: {user.address.street}</p>
            </div>
            <div className='flex mt-2 gap-2'>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
                <path fill-rule="evenodd" d="M4.5 2.25a.75.75 0 0 0 0 1.5v16.5h-.75a.75.75 0 0 0 0 1.5h16.5a.75.75 0 0 0 0-1.5h-.75V3.75a.75.75 0 0 0 0-1.5h-15ZM9 6a.75.75 0 0 0 0 1.5h1.5a.75.75 0 0 0 0-1.5H9Zm-.75 3.75A.75.75 0 0 1 9 9h1.5a.75.75 0 0 1 0 1.5H9a.75.75 0 0 1-.75-.75ZM9 12a.75.75 0 0 0 0 1.5h1.5a.75.75 0 0 0 0-1.5H9Zm3.75-5.25A.75.75 0 0 1 13.5 6H15a.75.75 0 0 1 0 1.5h-1.5a.75.75 0 0 1-.75-.75ZM13.5 9a.75.75 0 0 0 0 1.5H15A.75.75 0 0 0 15 9h-1.5Zm-.75 3.75a.75.75 0 0 1 .75-.75H15a.75.75 0 0 1 0 1.5h-1.5a.75.75 0 0 1-.75-.75ZM9 19.5v-2.25a.75.75 0 0 1 .75-.75h4.5a.75.75 0 0 1 .75.75v2.25a.75.75 0 0 1-.75.75h-4.5A.75.75 0 0 1 9 19.5Z" clip-rule="evenodd" />
                </svg>
                <p><span className='text-[18px] '>Apt</span>: {user.address.suite}</p>
            </div>
            <p><span className='text-[18px] ml-8'>City</span>: {user.address.city}</p>
            <p><span className='text-[18px] ml-8'>Zipcode</span>: {user.address.zipcode}</p>
            <div className='flex mt-2 gap-2'>
                <FaMapPin className='text-[25px]' />
                <p><span className='text-[18px] '>Latitude</span>: {user.address.geo.lat}</p>
            </div>
            <div className='flex mt-2 gap-2'>
                <FaMapPin className='text-[25px]' />
                <p><span className='text-[18px] '>Longitude</span>: {user.address.geo.lng}</p>
            </div>
        </div>
        <div className='bg-white shadow-lg rounded-lg p-6 w-[40%]'>
            <p className='text-[25px] font-[600]'>Contributions</p>
            <div className='flex mt-2 gap-2'>
                <TbWorld className='text-[25px]'/>
                <a href={`${user.website}`} className='text-blue-500'><span className='text-[18px] text-black'>Web Application</span>: {user.website}</a>
            </div>
            
        </div>
        <div className='bg-white shadow-lg rounded-lg p-6 w-[40%]'>
            <p className='text-[25px] font-[600]'>Company Details</p>
            <div className='flex mt-2 gap-2'>
                <FaBuilding className='text-[25px]'/>
                <p><span className='text-[18px] '>Company Name</span>: {user.company.name}</p>
            </div>
            <div className='flex mt-2 gap-2'>
                <FaQuoteLeft className='text-[25px]'/>
                <p><span className='text-[18px] '>Catch Phrase</span>: {user.company.catchPhrase}</p>
            </div>
            <div className='flex mt-2 gap-2'>
                <MdBusinessCenter className='text-[25px]'/>
                <p><span className='text-[18px] '>Business</span>: {user.company.bs}</p>
            </div>
        </div>
    </div>
        <div className='flex mt-2 gap-2 justify-center cursor-pointer ' onClick={()=>goToDash()}>
                <IoArrowBackSharp className='text-[25px]'/>
                <p>Back to Dashboard</p>
        </div>
    </div>
  )
}

export default UserDetailed
