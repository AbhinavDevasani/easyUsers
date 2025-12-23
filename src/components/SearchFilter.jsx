import React from 'react'
import { useContext } from 'react'

import UserContext from '../context/userContext'
function SearchFilter() {
    const {users,setFiltered}=useContext(UserContext)
    
    const handleSearch = (e) => {
        const val = e.target.value.toLowerCase();
        setFiltered(users.filter(user => user.name.toLowerCase().includes(val)));
  };

  return (
    <div className='border '>
      <input onChange={handleSearch} placeholder='Search by name' className='px-5 py-2 outline-none w-[50vw]'/>
    </div>
  )
}

export default SearchFilter
