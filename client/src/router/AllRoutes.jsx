import { Routes, Route } from "react-router-dom";
import { Home } from "../pages/Home";
import { About } from "../pages/About";
import { Contact } from "../pages/Contact";
import { Login } from "../pages/Login";
import { SignUp } from "../pages/SignUp";
import { Jobs } from "../pages/Jobs";
import { PrivateComponent } from "../privateRoute/privateComponent";
import { JobDetails } from "../pages/JobDetails";

export const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route
        path="/jobs"
        element={
          <PrivateComponent>
            <Jobs />
          </PrivateComponent>
        }
      ></Route>
      <Route path="/about" element={<About />}></Route>
      <Route path="/contact" element={<Contact />}></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/signup" element={<SignUp />}></Route>
      <Route path="/jobs/:id" element={<JobDetails />}></Route>
    </Routes>
  );
};
