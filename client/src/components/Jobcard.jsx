import { FaMapMarkerAlt, FaClock, FaRupeeSign, FaCalendarAlt } from "react-icons/fa";
import { useState, useEffect } from "react";

const JobCard = ({title, salary, workExperience, typeOfEmployment, description, jobImage, location, createdAt}) => {
  const [date, setDate] = useState("");
  useEffect(() => {
    let temp = ""
    for (let i=0; i<10; i++) {
      temp += createdAt[i];
    }
    setDate(() => temp);
  }, [createdAt])
  return (
    <div className="max-w-lg border p-6 rounded-2xl shadow-lg flex gap-4 bg-white mb-8">
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
  );
};

export default JobCard;