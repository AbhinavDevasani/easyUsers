import { useEffect, useState } from "react";
import UserContext from "./UserContext";
import axios from "axios";

export const UserProvider = ({ children }) => {
  const [users, setUsers] = useState(() => {
    const storedUsers = localStorage.getItem("users")
    return storedUsers ? JSON.parse(storedUsers) : []
  })
  const [isOpen,setIsOpen] = useState(false)
  const [filtered, setFiltered] = useState(users)
  const [darkMode, setDarkMode] = useState(true)
  const [hamBurger,setHamBurger]=useState(true)
  const [currentPage, setCurrentPage] = useState(1)
  const [usersPage,setUsersPage]=useState(0)
  const [loading,setLoading]=useState(false)
  useEffect(() => {
    
    if (users.length === 0) {
      const getData = async () => {
        setLoading(true)
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/users"
        );
        setUsers(response.data)
        setFiltered(response.data)
        setLoading(false)
      }
      getData()
      
    }
  }, [users.length])

  useEffect(() => {
  const reSize = () => {
    const perPage = window.innerWidth >= 768 ? 6 : 3;

    setUsersPage((prev) => {
      if (prev !== perPage) {
        setCurrentPage(1)
        return perPage
      }
      return prev
    })
  }

  reSize();
  window.addEventListener("resize", reSize)
  return () => window.removeEventListener("resize", reSize)
}, [])


  useEffect(() => {
    localStorage.setItem("users", JSON.stringify(users));
  }, [users])
  
  return (
    <UserContext.Provider value={{ users, setUsers, filtered, setFiltered,isOpen,setIsOpen,darkMode,setDarkMode,hamBurger,setHamBurger,currentPage,setCurrentPage,usersPage,setUsersPage,loading }}>
      {children}
    </UserContext.Provider>
  )
}
