import React, { useContext, useState, useEffect } from "react";
import jwt_decode from "jwt-decode";
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
    // console.log(data.data);
    setUsers(data.data);
  };


  useEffect(() => {
    getUsers();
  }, []);

 

  const fetchUsers = async () => {
    let arr=[]
    const res = await fetch("https://zamuka.herokuapp.com/api/users");
    const users = await res.json();
    
    for(let i=0; i<users.length; i++){
      const final = {
        id: users[i]._id,
        firstname: users[i].firstname,
        lastname: users[i].lastname,
      };
      arr = [...arr, final]
    }
    setUsers(arr);
  };
   
  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <UsersContext.Provider value={{ users, setUsers, isLoggedIn, setIsLoggedIn}}>
        {children}
    </UsersContext.Provider>
  );
}
