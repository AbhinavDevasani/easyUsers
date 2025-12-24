import React from 'react'
import { useNavigate } from 'react-router'
function PageNotFound() {
    const navigate=useNavigate()
    function goToHome(){
        navigate("/")
    }
  return (
    <div className='flex flex-col justify-center items-center min-h-screen bg-gray-300'>
      <h1 className='text-[55px] font-semibold'>Page Not Found</h1>
      <button className='border-2 p-2 rounded-lg hover:bg-black hover:text-white' onClick={()=>goToHome()}>Go to Home Page</button>
    </div>
  )
}

export default PageNotFound
