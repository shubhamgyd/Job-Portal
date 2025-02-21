import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <div className="flex justify-between border-b-2 bg-sky-200 text-lg font-medium h-[3rem] items-center !px-6 w-full">
      <div>JOB LOGO</div>
      <ol className="flex justify-between gap-12">
          <li><Link to="/">HOME</Link></li>
        
        
          <li><Link to="/jobs">JOBS</Link></li>
        
        
          <li><Link to="/contact">CONTACT</Link></li>
        
        
          <li><Link to="/about">ABOUT</Link></li>
        
      </ol>
      <div className="flex justify-between gap-2">
        <button><Link to="/login">LOGIN</Link></button>
        <button><Link to="/signup">SIGNUP</Link></button>
      </div>
    </div>
  );
};
