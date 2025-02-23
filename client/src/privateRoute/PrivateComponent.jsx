import { useAuth } from "../context/loginContext"
import { Navigate } from "react-router-dom";
export const PrivateComponent = ({children}) => {
  const {isLoggedIn} = useAuth();
  return isLoggedIn ? children : <Navigate to="/login" />
}