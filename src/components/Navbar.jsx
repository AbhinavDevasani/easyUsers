import React from "react";
import UserContext from "../context/UserContext";
import { useContext } from "react";
import SearchFilter from "./SearchFilter";
import { IoLogoAppleAr } from "react-icons/io5";
import { useNavigate } from "react-router";
import { GiHamburgerMenu } from "react-icons/gi";
function Navbar() {
  const { setIsOpen, isOpen, darkMode, setDarkMode,hamBurger,setHamBurger } =useContext(UserContext);
  const navigate = useNavigate();
  function goToDash() {
    navigate("/");
  }
  function toggleMode() {
    setDarkMode(!darkMode);
  }
  function hamMode(){
    setHamBurger(!hamBurger)
  }
  return (
    <div className={`sticky top-0 z-25 w-full ${darkMode?'':'bg-gray-500/80'}`}>
      <div className="flex flex-col gap-3 p-3 md:flex-row md:justify-between md:p-4  bg-white/30 shadow backdrop-blur-md ">
        
      <div className={`flex justify-between md:justify-start ${darkMode?'':'text-white'}`}>
        <div
          className="flex gap-2 items-center cursor-pointer justify-center md:justify-start"
          onClick={goToDash}
        >
          <IoLogoAppleAr className="text-[24px] sm:text-[30px]" />
          <p className="text-[20px] sm:text-[25px]">EasyUser</p>
        </div>
        <GiHamburgerMenu className="mt-2 md:hidden block" onClick={()=>hamMode()}/>
      </div>
        
        <div className={`w-full md:w-auto md:block ${hamBurger?'hidden':'block'} ${darkMode?'':'text-white'}`}>
          <SearchFilter />
        </div>

        
        <div className="flex  gap-2 md:flex-row sm:justify-end sm:gap-3">
          
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`border-2 p-2 px-5 hover:bg-black hover:text-white rounded-lg w-full md:w-auto ${hamBurger?'hidden':'block'} md:block ${darkMode?'':'text-white'}`}
          >
            <span className="text-[18px] font-semibold">+</span> Create new user
          </button>

          
          {darkMode ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className={`size-10 border-2 rounded-full p-1 cursor-pointer hover:bg-black hover:text-white self-center md:self-auto mt-1 ${hamBurger?'hidden':'block'} md:block ${darkMode?'':'text-white'}`}
              onClick={toggleMode}
            >
              <path
                fillRule="evenodd"
                d="M9.528 1.718a.75.75 0 0 1 .162.819A8.97 8.97 0 0 0 9 6a9 9 0 0 0 9 9 8.97 8.97 0 0 0 3.463-.69.75.75 0 0 1 .981.98 10.503 10.503 0 0 1-9.694 6.46c-5.799 0-10.5-4.7-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 0 1 .818.162Z"
                clipRule="evenodd"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className={`size-10 border-2 rounded-full p-1 cursor-pointer hover:bg-black hover:text-white self-center sm:self-auto mt-1 ${hamBurger?'hidden':'block'} md:block ${darkMode?'':'text-white'}`}
              onClick={toggleMode}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
              />
            </svg>
          )}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
