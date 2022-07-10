import React from 'react'
import jwtdecode from 'jwt-decode'
import { deleteAllCookies, getCookie } from './RequireAuth';

let AuthContext = React.createContext();

export const useAuth = () => {
    return React.useContext(AuthContext);
  }

export default function AuthProvider({ children }) {
  let [user, setUser] = React.useState(undefined);

  const decodeToken = ()=> {
    // deleteAllCookies();
    const token = getCookie('token');
    // console.log(typeof(token));
    if (token) {
      try{
        const userDetails = jwtdecode(token);
       return  setUser(userDetails);
      }
      catch(err){
        console.log(err);
        setUser(null);
      }
    }
    setUser(null)
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
