import React from 'react'
import { useContext } from "react";
import UserContext from '../context/userContext';
import UserCard from './UserCard';


function Dashboard() {
    const {filtered,darkMode}=useContext(UserContext)
  return (
    <div>
        <div className={`flex flex-wrap gap-5 p-5 justify-center ${darkMode?'bg-gray-100':'bg-[#121212]'} `}>
        {
            filtered.map(user=>{
                return <UserCard key={user.id} user={user}></UserCard>
            })
        }
        </div>
    </div>
  )
}

export default Dashboard
