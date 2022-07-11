import React, { useContext, useState, useEffect } from "react";
import { getCookie } from "../../contexts/RequireAuth";

const UsersContext = React.createContext();
const UserContext = React.createContext();

export function useUsers() {
  return useContext(UsersContext);
}

export function useUser() {
  return useContext(UserContext);
}

export function UserProvider({ children }) {
  const [users, setUsers] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const getUsers = async() => {
    const res = await fetch("https://photocorner33.herokuapp.com/user/allUsers",{
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        token: "Bearer " + getCookie("token"),
      }
    });
    const data = await res.json();
    console.log(data);
    setUsers(data.data);
  };


  useEffect(() => {
    getUsers();
  }, []);

 
  useEffect(() => {
    getUsers();
  }, []);

  return (
    <UsersContext.Provider value={{ users, setUsers, isLoggedIn, setIsLoggedIn}}>
        {children}
    </UsersContext.Provider>
  );
}
