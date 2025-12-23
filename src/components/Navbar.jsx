import React from "react";
import UserContext from "../context/userContext";
import { useContext } from "react";
import SearchFilter from "./SearchFilter";

import { IoLogoAppleAr } from "react-icons/io5";
import { useNavigate } from "react-router";
function Navbar() {
  const { setIsOpen, isOpen,darkMode,setDarkMode } = useContext(UserContext);
  
  const navigate = useNavigate();
  function goToDash() {
    navigate("/");
  }
  function toggleMode() {
    setDarkMode(!darkMode);
  }

  return (
    <div className="sticky top-0 z-25 w-full">
      <div className="flex flex-col sm:flex-row sm:justify-between sm:p-4 sm:backdrop-blur-md gap-3">
        <div
          className="flex gap-2 items-center cursor-pointer"
          onClick={() => goToDash()}
        >
          <IoLogoAppleAr className="sm:text-[30px] " />
          <p className="sm:text-[25px] ">EasyUser</p>
        </div>
        <SearchFilter />
        <div className="sm:flex sm:justify-end sm:gap-3 ">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="border-2 p-2 px-5  hover:bg-black hover:text-white rounded-lg w-full sm:w-auto mt-2 sm:mt-0"
          >
            <span className="sm:text-[18px] font-[600] ">+</span> Create new
            user
          </button>
          {darkMode ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="size-10 mt-1 border-2 cursor-pointer hover:bg-black hover:text-white"
              onClick={() => toggleMode()}
            >
              <path
                fill-rule="evenodd"
                d="M9.528 1.718a.75.75 0 0 1 .162.819A8.97 8.97 0 0 0 9 6a9 9 0 0 0 9 9 8.97 8.97 0 0 0 3.463-.69.75.75 0 0 1 .981.98 10.503 10.503 0 0 1-9.694 6.46c-5.799 0-10.5-4.7-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 0 1 .818.162Z"
                clip-rule="evenodd"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="size-10 border-2 mt-1 cursor-pointer hover:bg-black hover:text-white"
              onClick={() => toggleMode()}
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
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
