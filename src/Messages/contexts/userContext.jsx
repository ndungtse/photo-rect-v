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
  const [user, setUser] = useState("");

  useEffect(() => {
    fetchUsers();
  }, []);

  const deCode = () => {
    try {
      const res = jwt_decode(localStorage.getItem("user"));
      if (res._id) {
        const user = {
          name: res.name,
          id: res._id,
        };
        localStorage.setItem("userinfo", JSON.stringify(user));
        return true;
      }
    } catch (error) {
      console.log(error.message);
      return false;
    }
  };

  const getUser = async () => {
    try {
      const res = jwt_decode(localStorage.getItem("user"));
      if (res._id) {
        const res1 = await fetch(`https://zamuka.herokuapp.com/api/user/${res._id}`);
        const user1 = await res1.json();
        const final = {
          id: user1._id,
          firstname: user1.firstname,
          lastname: user1.lastname
        }
        setUser(final);
      }
    } catch (error) {
      console.log(error.message);
      return false;
    }
  };

  useEffect(() => {
    getUser();
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

  return (
    <UsersContext.Provider value={{ users, user, setUsers, setUser }}>
      <UserContext.Provider value={{ user, deCode }}>
        {children}
      </UserContext.Provider>
    </UsersContext.Provider>
  );
}
