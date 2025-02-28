import { useState } from "react";
import { Navbar } from "../components/Navbar";
import { useAuth } from "../context/loginContext";

export const PostJob = () => {
  const { userId } = useAuth();
  const [formData, setFormData] = useState({
    title: "",
    salary: "",
    typeOfEmployment: "",
    description: "",
    location: "",
    jobImage: "",
    postedBy: userId,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    let temp = { ...formData, [name]: value };
    setFormData(temp);
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
    const formDataToSend = {}
    let cnt = 0;
    Object.keys(formData).forEach((key) => {
      if (formData[key]) {
        cnt += 1;
        formDataToSend[key] = formData[key];
      }
    });
    try {
      const response = await fetch("http://localhost:5000/api/jobs", {
        method: "POST",
        body: JSON.stringify(formDataToSend),
        headers: {"Content-Type": "application/json"}
      });

      const result = await response.json();
      if (response.ok) {
        alert("Job Posted Successfully!");
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
          onSubmit={handleFormSubmit}
          className="bg-white shadow-lg rounded-2xl p-6 w-[30vw] flex flex-col gap-4 border border-gray-200 m-2"
        >
          <h2 className="text-2xl font-semibold text-center text-gray-700">
            Posting A Job
          </h2>
          <div className="flex flex-col">
            <label className="text-gray-600 font-medium">Title:</label>
            <input
              name="title"
              type="text"
              placeholder="Enter the title..."
              className="border border-gray-300 p-2 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              onChange={handleChange}
            />
          </div>
          <div className="flex flex-col">
            <label className="text-gray-600 font-medium">Salary: </label>
            <input
              name="salary"
              type="text"
              placeholder="Enter the salary.."
              className="border border-gray-300 p-2 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              onChange={handleChange}
            />
          </div>
          <div className="flex flex-col">
            <label className="text-gray-600 font-medium">
              Type Of Employment:
            </label>
            <input
              name="typeOfEmployment"
              type="text"
              placeholder="Enter the Type of Employment"
              className="border border-gray-300 p-2 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              onChange={handleChange}
            />
          </div>
          <div className="flex flex-col">
            <label className="text-gray-600 font-medium">Description: </label>
            <textarea
              name="description"
              type="text"
              placeholder="Enter the description"
              className="border border-gray-300 p-2 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              onChange={handleChange}
            />
          </div>
          <div className="flex flex-col">
            <label className="text-gray-600 font-medium">Location: </label>
            <input
              name="location"
              type="text"
              placeholder="Enter the location"
              className="border border-gray-300 p-2 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              onChange={handleChange}
            />
          </div>
          <div className="flex flex-col">
            <label className="text-gray-600 font-medium">Job Image: </label>
            <input
              name="jobImage"
              type="text"
              placeholder="Enter the link for the Job Image"
              className="border border-gray-300 p-2 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              onChange={handleChange}
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition-all"
          >
            Post Job
          </button>
        </form>
      </div>
    </>
  );
};
