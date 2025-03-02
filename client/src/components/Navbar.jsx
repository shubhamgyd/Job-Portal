import { Link } from "react-router-dom";
import { useAuth } from "../context/loginContext";

export const Navbar = () => {
  const {isLoggedIn, role, dispatchLogin} = useAuth();
  const handleLogout = () => {
    dispatchLogin(
      {
        type: "LOGOUT",
        payload: {
          value: false,
        }
      }
    )
  }
  return (
    <div className="flex justify-between border-b-2 bg-sky-200 text-lg font-medium h-[3rem] items-center !px-6 w-full">
      <div>JOB LOGO</div>
      {
        role==="job_seeker" ? 
      <ol className="flex justify-between gap-12">
          <li><Link to="/">HOME</Link></li>
        
        
          <li><Link to="/jobs">JOBS</Link></li>
        
        
          <li><Link to="/applications">APPLICATIONS</Link></li>
        
      </ol> :
      <ol className="flex justify-between gap-12">
        <li><Link to="/postJob">POST JOB</Link></li>
        <li><Link to="/">APPLICATIONS</Link></li>
      </ol>
      }
      <div className="flex justify-between gap-2">
        {isLoggedIn ? <button onClick={handleLogout}>LOGOUT</button>:
        <><button><Link to="/login">LOGIN</Link></button>
        <button><Link to="/signup">SIGNUP</Link></button></>}
      </div>
    </div>
  );
};
