import React from 'react'
import jwtdecode from 'jwt-decode'
import { deleteAllCookies, getCookie } from './RequireAuth';

let AuthContext = React.createContext();

export const useAuth = () => {
    return React.useContext(AuthContext);
  }

export default function AuthProvider({ children }) {
  let [user, setUser] = React.useState(undefined);

  const decodeToken = async()=> {
    const token =  getCookie('token');
    if (token) {
      try{
        const userDetails = await jwtdecode(token);
        const userd = await getUserById(userDetails.userid);
        console.log(userd);
       return setUser(userd);
      }
      catch(err){
        console.log(err);
       return setUser(null);
      }
    }
    return setUser(null);
  }
  React.useEffect(() => {
    decodeToken();
  }, [])


  let value = { user };

  return (
    <>{user!==undefined&&(
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
     )}</>
  );
}

export const getUserById = async (id) => {
  const res = await fetch(`https://photocorner33.herokuapp.com/user/getUserByID/${id}`,{
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      authorization: "Bearer " + getCookie("token"),
    }
  });
  const data = await res.json();
  console.log(data);
  return data.user;
}
