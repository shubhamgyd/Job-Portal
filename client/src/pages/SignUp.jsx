// import { useState } from "react";
// import { Navbar } from "../components/Navbar";

// export const SignUp = () => {

//   const [role, setRole] = useState(false);
//   const handleRole = (e) => {
//     console.log(e);
//     console.log(e.target.value)
//     console.log(e.target.active);
//       if (e.target.value=="job_seeker"){
//         setRole(false)
//       } else {
//         setRole(true)
//       }
//   }
//   return (
//     <>
//       <Navbar />
//       <div>
//         <form>
//           <h2>SignUp</h2>
//           <div>
//             <label>Name:</label>
//             <input name="name" type="text" placeholder="Enter your name..."></input>
//           </div>
//           <div>
//             <label>Email:</label>
//             <input name="email" type="email" placeholder="Enter your email..."></input>
//           </div>
//           <div>
//             <label>Username:</label>
//             <input name="username" type="text" placeholder="Enter the username..."></input>
//           </div>
//           <div>
//             <label>Password:</label>
//             <input name="password" type="password" placeholder="Enter the password..."></input>
//           </div>
//           <div>
//             <label>Role:</label>
//             <input name="role" type="radio" onChange={handleRole} value="job_seeker"></input>
//             <input name="role" type="radio" onChange={handleRole} value="employer"></input>
//           </div>
//           {
//             role ? <div>
//               <div>
//                 <label>Company Name:</label>
//                 <input name="companyName" type="text" placeholder="Enter the company name..."></input>
//               </div>
//               <div>
//                 <label>Location:</label>
//                 <input name="location" type="text" placeholder="Enter the location..."></input>
//               </div>
//               <div>
//                 <label>Website</label>
//                 <input name="website" type="text" placeholder="Enter the company web url"></input>
//               </div>
//               <div>
//                 <label>Industry</label>
//                 <input name="industry" type="text" placeholder="Enter the type of industry"></input>
//               </div>
//               <div>
//                 <label>Code</label>
//                 <input name="code" type="text" placeholder="Enter the code"></input>
//               </div>
//             </div> : <div><label>Resume:</label> <input name="resume" type="file"></input></div>
//           }
//         </form>
//       </div>
//     </>
//   );
// };

import { useState } from "react";
import { Navbar } from "../components/Navbar";

export const SignUp = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    username: "",
    password: "",
    role: "job_seeker",
    companyName: "",
    location: "",
    website: "",
    industry: "",
    code: "",
    resume: null,
  });
  const [role, setRole] = useState(false);

  const handleRole = (e) => {
    setRole(e.target.value === "employer");
    setFormData({ ...formData, role: e.target.value });
  };

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    let temp = { ...formData, [name]: type == "file" ? files[0] : value };
    setFormData(temp);
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const formDataToSend = new FormData();
    Object.keys(formData).forEach((key) => {
      if (formData[key]) {
        formDataToSend.append(key, formData[key]);
      }
    });
    try {
      const response = await fetch("http://localhost:5000/api/users/register", {
        method: "POST",
        body: formDataToSend,
      });

      const result = await response.json();
      if (response.ok) {
        alert("Signup successful!");
      } else {
        alert(result.message);
      }
    } catch (error) {
      console.error("Error:", error.message);
    }
  };

  return (
    <>
      <Navbar />
      <div className="flex justify-center items-center min-h-screen bg-gray-100">
        <form
          className="bg-white shadow-lg rounded-2xl p-6 w-[30vw] flex flex-col gap-4 border border-gray-200 m-2"
          onSubmit={handleFormSubmit}
        >
          <h2 className="text-2xl font-semibold text-center text-gray-700">
            Sign Up
          </h2>

          {/* Name */}
          <div className="flex flex-col">
            <label className="text-gray-600 font-medium">Name</label>
            <input
              name="name"
              type="text"
              placeholder="Enter your name..."
              className="border border-gray-300 p-2 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              onChange={handleChange}
            />
          </div>

          {/* Email */}
          <div className="flex flex-col">
            <label className="text-gray-600 font-medium">Email</label>
            <input
              name="email"
              type="email"
              placeholder="Enter your email..."
              className="border border-gray-300 p-2 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              onChange={handleChange}
            />
          </div>

          {/* Username */}
          <div className="flex flex-col">
            <label className="text-gray-600 font-medium">Username</label>
            <input
              name="username"
              type="text"
              placeholder="Enter your username..."
              className="border border-gray-300 p-2 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              onChange={handleChange}
            />
          </div>

          {/* Password */}
          <div className="flex flex-col">
            <label className="text-gray-600 font-medium">Password</label>
            <input
              name="password"
              type="password"
              placeholder="Enter your password..."
              className="border border-gray-300 p-2 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              onChange={handleChange}
            />
          </div>

          {/* Role Selection */}
          <div className="flex flex-col">
            <label className="text-gray-600 font-medium">Role</label>
            <div className="flex gap-4">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  name="role"
                  type="radio"
                  onChange={handleRole}
                  value="job_seeker"
                  className="accent-blue-500"
                />
                Job Seeker
              </label>
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  name="role"
                  type="radio"
                  onChange={handleRole}
                  value="employer"
                  className="accent-blue-500"
                />
                Employer
              </label>
            </div>
          </div>

          {/* Conditional Fields Based on Role */}
          {role ? (
            <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-2">
                <label className="text-gray-600 font-medium">
                  Company Name
                </label>
                <input
                  name="companyName"
                  type="text"
                  placeholder="Enter company name..."
                  className="border border-gray-300 p-2 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  onChange={handleChange}
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-gray-600 font-medium">Location</label>
                <input
                  name="location"
                  type="text"
                  placeholder="Enter company location..."
                  className="border border-gray-300 p-2 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  onChange={handleChange}
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-gray-600 font-medium">Website</label>
                <input
                  name="website"
                  type="text"
                  placeholder="Enter company website URL..."
                  className="border border-gray-300 p-2 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  onChange={handleChange}
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-gray-600 font-medium">Industry</label>
                <input
                  name="industry"
                  type="text"
                  placeholder="Enter industry type..."
                  className="border border-gray-300 p-2 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  onChange={handleChange}
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-gray-600 font-medium">Code</label>
                <input
                  name="code"
                  type="text"
                  placeholder="Enter company code..."
                  className="border border-gray-300 p-2 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  onChange={handleChange}
                />
              </div>
            </div>
          ) : (
            <div className="flex flex-col gap-2">
              <label className="text-gray-600 font-medium">Upload Resume</label>
              <input
                name="resume"
                type="file"
                className="border border-gray-300 p-2 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                onChange={handleChange}
              />
            </div>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            className="bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition-all"
          >
            Sign Up
          </button>
        </form>
      </div>
    </>
  );
};
