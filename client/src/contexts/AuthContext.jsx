import React from 'react'
import jwtdecode from 'jwt-decode'

let AuthContext = React.createContext();

export const useAuth = () => {
    return React.useContext(AuthContext);
  }

export default function AuthProvider({ children }) {
  let [user, setUser] = React.useState(null);

  const decodeToken = ()=> {
    try{
        const userDetails = jwtdecode(localStorage.getItem('token'));
        setUser(userDetails);
    }
    catch(err){
        console.log(err)
    }
  }
  // let signin = (newUser, callback) => {
  //   return fakeAuthProvider.signin(() => {
  //     setUser(newUser);
  //     callback();
  //   });
  // };

  // let signout = (callback) => {
  //   return fakeAuthProvider.signout(() => {
  //     setUser(null);
  //     callback();
  //   });
  // };

  React.useEffect(() => {
    decodeToken();
  }, [])


  let value = { user };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
