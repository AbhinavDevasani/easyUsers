import { useEffect, useState } from "react";
import UserContext from "./userContext";
import axios from "axios";

export const UserProvider = ({ children }) => {
  const [users, setUsers] = useState(() => {
    const storedUsers = localStorage.getItem("users");
    return storedUsers ? JSON.parse(storedUsers) : [];
  });
  const [isOpen,setIsOpen] = useState(false)
  const [filtered, setFiltered] = useState(users);
  const [darkMode, setDarkMode] = useState(true);
  useEffect(() => {
    if (users.length === 0) {
      const getData = async () => {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/users"
        );
        setUsers(response.data);
        setFiltered(response.data);
      };
      getData();
    }
  }, []);

  
  useEffect(() => {
    localStorage.setItem("users", JSON.stringify(users));
  }, [users]);

  return (
    <UserContext.Provider value={{ users, setUsers, filtered, setFiltered,isOpen,setIsOpen,darkMode,setDarkMode }}>
      {children}
    </UserContext.Provider>
  );
};
