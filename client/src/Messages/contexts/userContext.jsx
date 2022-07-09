import React, { useContext, useState, useEffect } from "react";
import jwt_decode from "jwt-decode";

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
  const [user, setUser] = useState({name: 'charles', id: 21323});


  const getUsers = async() => {
    const res = await fetch("https://photocorner33.herokuapp.com/user/allUsers",{
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        token: "Bearer " + JSON.parse(localStorage.getItem("token"))
      }
    });
    const data = await res.json();
    console.log(data.data);
    setUsers(data.data);
  };

  const getUser = async () => {
    try {
      const res = jwt_decode(localStorage.getItem("token"));
        setUser(res.needed);
        localStorage.setItem("userinfo", JSON.stringify(res.needed));
      
    } catch (error) {
      console.log(error.message.username);
      return false;
    }
  };

  useEffect(() => {
    getUser();
    getUsers();
  }, []);

 

  const fetchUsers = async () => {
    let arr=[]
    const res = await fetch("https://zamuka.herokuapp.com/api/user/");
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
    <UsersContext.Provider value={{ users, user, setUsers, setUser}}>
      <UserContext.Provider value={{ user}}>
        {children}
      </UserContext.Provider>
    </UsersContext.Provider>
  );
}
