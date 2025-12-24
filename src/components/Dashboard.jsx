import React from 'react'
import { useContext } from "react";
import UserContext from '../context/UserContext';
import UserCard from './UserCard';


function Dashboard() {
    const {filtered,darkMode,currentPage,setCurrentPage,usersPage,loading}=useContext(UserContext)
    const limit=currentPage*usersPage
    const skip=limit-usersPage
    const currentUsers=filtered.slice(skip,limit)
    const totalPages = Math.ceil(filtered.length / usersPage)
  return (
    <div>

      {
        loading ? 
        <div className='h-screen flex items-center justify-center'>
          <div className="w-8 h-8 border-4 border-gray-300 border-t-black rounded-full animate-spin"></div>
        </div>
        :
        <div className={`${darkMode?'bg-gray-300':'bg-[#121212]'} text-center min-h-screen`}>
          {filtered.length===0?
          <div className='flex flex-col items-center min-h-screen justify-center'>
            <img src="https://res.cloudinary.com/dudjdf428/image/upload/v1754130805/Group_7394_fuha3y.png" className='md:w-[35vw] w-[80vw] mt-5'/>
            <p className='text-[30px] font-semibold text-gray-500'>User Not Found!</p>
          </div>
          :<div>
            <p className={`text-[30px] font-semibold ${darkMode?'':'text-gray-200'}`}>User's Dashboard</p>
            <div className={`flex flex-wrap gap-5 p-5 justify-center  `}>
              
            {
                currentUsers.map(user=>{
                    return <UserCard key={user.id} user={user}></UserCard>
                })
            }
            </div>
          </div>}
          <div className="flex justify-center gap-3 md:my-6">
              <button
                disabled={currentPage === 1}
                onClick={() => setCurrentPage(currentPage - 1)}
                className={`border-2 p-2 rounded-lg hover:bg-black hover:text-white ${darkMode?'':'text-white'}`}
              >
                Prev
              </button>

              <span className={`font-bold mt-2 ${darkMode?'text-black':'text-white'}`}>{currentPage}</span>

              <button
                disabled={currentPage === totalPages}
                onClick={() => setCurrentPage(currentPage + 1)}
                className={`border-2 p-2 rounded-lg hover:bg-black hover:text-white ${darkMode?'':'text-white'}`}
              >
                Next
              </button>
          </div> 
        </div>
      }
    </div>
  )
}

export default Dashboard
