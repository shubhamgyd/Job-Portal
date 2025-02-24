import { Navbar } from "../components/Navbar";
import { getJob } from "../api/getAllJobs";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import JobCard from "../components/Jobcard";
import { Link } from "react-router-dom";

export const JobDetails = () => {
  const [job, setJob] = useState(null);
  const { id } = useParams();

  const fetchJobDetails = async () => {
    try {
      const data = await getJob(id);
      setJob(data);
      console.log(data[0]);
    } catch (error) {
      console.error("Error fetching job details:", error);
    }
  };

  useEffect(() => {
    fetchJobDetails();
  }, [id]);

  if (!job) return <p>Loading...</p>;

  return (
    <>
      <Navbar />
      <div className="p-5">
        {job.map(
          ({
            _id,
            title,
            salary,
            typeOfEmployment,
            description,
            jobImage,
            location,
            createdAt,
          }) => (
            <div className="flex gap-4">
              <JobCard
                key={_id}
                id={_id}
                title={title}
                typeOfEmployment={typeOfEmployment}
                location={location}
                description={description}
                salary={salary}
                jobImage={jobImage}
                createdAt={createdAt}
              />
              <div className="flex items-center">
                <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-4 py-2 rounded-lg shadow-md transition-all">
                  <Link to={`/jobs/${_id}`}>Apply</Link>
                </button>
              </div>
            </div>
          )
        )}
      </div>
    </>
  );
};
