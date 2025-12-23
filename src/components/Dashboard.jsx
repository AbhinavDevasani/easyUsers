import React from 'react'
import { useContext } from "react";
import UserContext from '../context/userContext';
import UserCard from './UserCard';


function Dashboard() {
    const {filtered}=useContext(UserContext)
   
    
  return (
    <div>
        
        
        <div className='flex flex-wrap gap-5 p-5 justify-center bg-gray-100'>
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
