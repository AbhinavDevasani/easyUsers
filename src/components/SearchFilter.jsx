import React from 'react'
import { useContext } from 'react'

import UserContext from '../context/UserContext'
function SearchFilter() {
    const {users,setFiltered,darkMode}=useContext(UserContext)
    
    const handleSearch = (e) => {
        const val = e.target.value.toLowerCase();
        setFiltered(users.filter(user => user.name.toLowerCase().includes(val)));
  };

  return (
    <div className='border h-[5vh] sm:h-[7vh] flex self-center '>
      <input onChange={handleSearch} placeholder='Search by name' className={` px-5 py-2 outline-none sm:w-[50vw] w-[40vw] ${darkMode?'text-black':'text-white'}`}/>
    </div>
  )
}

export default SearchFilter
