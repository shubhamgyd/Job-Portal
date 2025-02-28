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

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    setFormData({
      ...formData,
      [name]: type === "file" ? files[0] : value,
    });
  };

  const handleRoleChange = (e) => {
    setFormData({
      ...formData,
      role: e.target.value,
      companyName: "",
      location: "",
      website: "",
      industry: "",
      code: "",
      resume: null,
    });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    const formDataToSend = new FormData();
    Object.keys(formData).forEach((key) => {
      if (formData[key]) {
        formDataToSend.append(key, formData[key]);
      }
    });

    // Validating required fields
    const requiredFields =
      formData.role === "job_seeker"
        ? ["name", "email", "username", "password", "resume"]
        : ["name", "email", "username", "password", "companyName", "location", "website", "industry", "code"];

    const isValid = requiredFields.every((field) => formData[field]);
    if (!isValid) {
      alert("Please fill in all required fields.");
      return;
    }

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
          <h2 className="text-2xl font-semibold text-center text-gray-700">Sign Up</h2>
          
          <div className="flex flex-col">
            <label className="text-gray-600 font-medium">Name</label>
            <input
              name="name"
              type="text"
              placeholder="Enter your name..."
              className="border border-gray-300 p-2 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              onChange={handleChange}
              required
            />
          </div>
          
          <div className="flex flex-col">
            <label className="text-gray-600 font-medium">Email</label>
            <input
              name="email"
              type="email"
              placeholder="Enter your email..."
              className="border border-gray-300 p-2 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              onChange={handleChange}
              required
            />
          </div>
          
          <div className="flex flex-col">
            <label className="text-gray-600 font-medium">Username</label>
            <input
              name="username"
              type="text"
              placeholder="Enter your username..."
              className="border border-gray-300 p-2 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              onChange={handleChange}
              required
            />
          </div>
          
          <div className="flex flex-col">
            <label className="text-gray-600 font-medium">Password</label>
            <input
              name="password"
              type="password"
              placeholder="Enter your password..."
              className="border border-gray-300 p-2 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              onChange={handleChange}
              required
            />
          </div>
          
          <div className="flex flex-col">
            <label className="text-gray-600 font-medium">Role</label>
            <div className="flex gap-4">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  name="role"
                  type="radio"
                  value="job_seeker"
                  checked={formData.role === "job_seeker"}
                  onChange={handleRoleChange}
                  className="accent-blue-500"
                />
                Job Seeker
              </label>
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  name="role"
                  type="radio"
                  value="employer"
                  checked={formData.role === "employer"}
                  onChange={handleRoleChange}
                  className="accent-blue-500"
                />
                Employer
              </label>
            </div>
          </div>
          
          {formData.role === "employer" ? (
            <>
              <div className="flex flex-col gap-2">
                <label className="text-gray-600 font-medium">Company Name</label>
                <input
                  name="companyName"
                  type="text"
                  placeholder="Enter company name..."
                  className="border border-gray-300 p-2 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  onChange={handleChange}
                  required
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
                  required
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
                  required
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
                  required
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
                  required
                />
              </div>
            </>
          ) : (
            <div className="flex flex-col gap-2">
              <label className="text-gray-600 font-medium">Upload Resume</label>
              <input
                name="resume"
                type="file"
                className="border border-gray-300 p-2 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                onChange={handleChange}
                required
              />
            </div>
          )}

          <button type="submit" className="bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition-all">
            Sign Up
          </button>
        </form>
      </div>
    </>
  );
};
