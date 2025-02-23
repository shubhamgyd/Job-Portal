import { FaMapMarkerAlt, FaClock, FaRupeeSign, FaCalendarAlt } from "react-icons/fa";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const JobCard = ({id, title, salary, workExperience, typeOfEmployment, description, jobImage, location, createdAt}) => {
  const [date, setDate] = useState("");
  useEffect(() => {
    let temp = ""
    for (let i=0; i<10; i++) {
      temp += createdAt[i];
    }
    setDate(() => temp);
  }, [createdAt])
  return (
    <div className="flex gap-4">
    <div className="max-w-lg border p-6 rounded-2xl shadow-lg flex bg-white">
      <div className="flex-shrink-0 h-full">
        <img src={jobImage} alt="Code Developer Logo" className="w-20 h-16" />
      </div>
      <div>
        <h2 className="text-2xl font-bold">{title}</h2>
        <div className="flex items-center gap-4 text-gray-600 my-2 text-sm">
          <span className="flex items-center gap-1"><FaMapMarkerAlt /> {location}</span>
          <span className="flex items-center gap-1"><FaClock />{typeOfEmployment}</span>
          <span className="flex items-center gap-1"><FaRupeeSign /> {salary}</span>
          <span className="flex items-center gap-1"><FaCalendarAlt /> {date}</span>
        </div>
        <p className="text-gray-700 mt-2 text-justify">{description}
        </p>
      </div>
    </div>
    <div className="flex items-center">
       <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-4 py-2 rounded-lg shadow-md transition-all">
         <Link to={`/jobs/${id}`}>Apply</Link>
       </button>
    </div>
    </div>
    // <div className="flex justify-between items-center w-[36vw] border p-6 rounded-2xl shadow-lg bg-white mb-8">
    //   {/* Job Image */}
    //   <div className="flex-shrink-0">
    //     <img src={jobImage} alt="Job Logo" className="w-20 h-16 rounded-md" />
    //   </div>

    //   {/* Job Details */}
    //   <div className="flex-1 px-4">
    //     <h2 className="text-xl font-bold text-gray-800">{title}</h2>
    //     <div className="flex items-center gap-4 text-gray-600 my-2 text-sm">
    //       <span className="flex items-center gap-1"><FaMapMarkerAlt /> {location}</span>
    //       <span className="flex items-center gap-1"><FaClock /> {typeOfEmployment}</span>
    //       <span className="flex items-center gap-1"><FaRupeeSign /> {salary}</span>
    //       <span className="flex items-center gap-1"><FaCalendarAlt /> {date}</span>
    //     </div>
    //     <p className="text-gray-700 mt-2 text-justify">{description}</p>
    //   </div>

    //   {/* Apply Button */}
    //   {/* <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-4 py-2 rounded-lg shadow-md transition-all">
    //     Apply
    //   </button> */}
    // </div>
  );
};

export default JobCard;