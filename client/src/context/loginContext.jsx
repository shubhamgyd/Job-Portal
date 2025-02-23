import {useContext, createContext} from "react";
import { useReducer } from "react";
import { loginReducer } from "../reducer/loginReducer";


const AuthContext = createContext();

const AuthProvider = ({children}) => {
  const initialState = {
    username: "",
    isLoggedIn: (JSON.parse(localStorage.getItem("accessToken"))?.token) ? true : false
  }
  const [{username, isLoggedIn}, dispatchLogin] = useReducer(loginReducer, initialState)

  return <AuthContext.Provider value={{username, isLoggedIn, dispatchLogin}}>
    {children}
  </AuthContext.Provider>
}

const useAuth = () => useContext(AuthContext);

export {useAuth, AuthProvider};