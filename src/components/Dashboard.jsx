import React from 'react'
import { useContext } from "react";
import UserContext from '../context/userContext';
import UserCard from './UserCard';
import CreateUserForm from './CreateUser';

function Dashboard() {
    const {filtered,isOpen,setIsOpen}=useContext(UserContext)
   
    
  return (
    <div>
        
        {
                isOpen && <CreateUserForm setIsOpen={(setIsOpen)}/>
            }
        <div className='flex flex-wrap gap-5 p-5 justify-center'>
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
