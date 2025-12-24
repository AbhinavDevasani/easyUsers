import React from 'react'
import { useContext } from "react";
import UserContext from '../context/userContext';
import UserCard from './UserCard';


function Dashboard() {
    const {filtered,darkMode}=useContext(UserContext)
  return (
    <div>

      <div className={`${darkMode?'bg-gray-300':'bg-[#121212]'} text-center min-h-screen`}>
          {filtered.length===0?
          <div className='flex flex-col items-center min-h-screen justify-center'>
            <img src="https://res.cloudinary.com/dudjdf428/image/upload/v1754130805/Group_7394_fuha3y.png" className='md:w-[35vw] w-[80vw] mt-5'/>
            <p className='text-[30px] font-[600] text-gray-500'>User Not Found!</p>
          </div>
          :<div>
            <p className={`text-[30px] font-[600] ${darkMode?'':'text-gray-200'}`}>User's Dashboard</p>
            <div className={`flex flex-wrap gap-5 p-5 justify-center  `}>
              
            {
                filtered.map(user=>{
                    return <UserCard key={user.id} user={user}></UserCard>
                })
            }
            </div>
          </div>}
          
        </div>
    </div>
  )
}

export default Dashboard
