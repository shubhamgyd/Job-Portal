import { useContext, createContext } from "react";
import { useReducer } from "react";
import { loginReducer } from "../reducer/loginReducer";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const initialState = {
    username: JSON.parse(localStorage.getItem("accessToken") ?? "{}")?.username,
    userId: JSON.parse(localStorage.getItem("accessToken") ?? "{}")?.id,
    isLoggedIn: JSON.parse(localStorage.getItem("accessToken") ?? "{}")?.token
      ? true
      : false,
    appliedJobs: JSON.parse(localStorage.getItem("appliedJobs") ?? "[]"),
    role: JSON.parse(localStorage.getItem("accessToken") ?? "{}")?.role,
  };

  const [{ username, userId, isLoggedIn, appliedJobs, role }, dispatchLogin] =
    useReducer(loginReducer, initialState);

  return (
    <AuthContext.Provider
      value={{ username, userId, isLoggedIn, appliedJobs, role, dispatchLogin }}
    >
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => useContext(AuthContext);

export { useAuth, AuthProvider };
