import { Routes, Route } from "react-router-dom";
import { Home } from "../pages/Home";
import { About } from "../pages/About";
import { Applications } from "../pages/Applications";
import { Login } from "../pages/Login";
import { SignUp } from "../pages/SignUp";
import { Jobs } from "../pages/Jobs";
import { PrivateComponent } from "../privateRoute/privateComponent";
import { JobDetails } from "../pages/JobDetails";
import { UserApplications } from "../pages/UserApplications";
import { PostJob } from "../pages/PostJob";
import { useAuth } from "../context/loginContext";
import { useEffect } from "react";

export const AllRoutes = () => {
  useEffect(() => {
    const { role } = useAuth();
  }, [])
  return role == "job_seeker" ? (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/jobs" element={<Jobs />}></Route>
      <Route path="/about" element={<About />}></Route>
      <Route
        path="/applications"
        element={
          <PrivateComponent>
            <Applications />
          </PrivateComponent>
        }
      ></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/signup" element={<SignUp />}></Route>
      <Route
        path="/jobs/:id"
        element={
          <PrivateComponent>
            <JobDetails />
          </PrivateComponent>
        }
      ></Route>
    </Routes>
  ) : (
    <Routes>
      <Route path="/" element={<UserApplications />}></Route>
      <Route path="/postJob" element={<PostJob />}></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/signup" element={<SignUp />}></Route>
    </Routes>
  );
};
