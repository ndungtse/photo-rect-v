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
  const [suggested, setSuggested] = useState([]);

  const getUsers = async() => {
    const res = await fetch("https://photocorner33.herokuapp.com/user/all",{
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        authorization: "Bearer " + getCookie("token"),
      }
    });
    const data = await res.json();
    console.log(data);
    setUsers(data.data);
  };

  const getSuggestedUsers = async() => {
    const res = await fetch("https://photocorner33.herokuapp.com/user/suggestedUsers",{
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        authorization: "Bearer " + getCookie("token"),
      }
    });
    const data = await res.json();
    console.log(data);
    setSuggested(data.users);
  }

  useEffect(() => {
    getUsers();
  }, []);

 useEffect(() => {
    getSuggestedUsers();
  }, []);

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <UsersContext.Provider value={{ users, setUsers, isLoggedIn, setIsLoggedIn, suggested}}>
        {children}
    </UsersContext.Provider>
  );
}
