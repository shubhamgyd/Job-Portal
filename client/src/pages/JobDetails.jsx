import { Navbar } from "../components/Navbar";
import { getJob, jobApply, jobApplyDelete } from "../api/getAllJobs";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import JobCard from "../components/Jobcard";
import { Link } from "react-router-dom";
import { useAuth } from "../context/loginContext";

export const JobDetails = () => {
  const [job, setJob] = useState(null);
  const { id } = useParams();
  const {userId, appliedJobs, dispatchLogin} = useAuth();
  const [applied, setApplied] = useState(false);

  const fetchJobDetails = async () => {
    try {
      const data = await getJob(id);
      setJob(data);
    } catch (error) {
      console.error("Error fetching job details:", error);
    }
  };

  const handleApplyButton = async (jobId) => {
    console.log(appliedJobs)
    try {
      if (!applied) {
        const data = await jobApply(userId, jobId);
        setApplied((prev) => !prev);
        dispatchLogin(
          {
            type: "ADD JOB",
            payload: {
              jobId
            }
          }
        )
      } else {
        const data = await jobApplyDelete(userId, jobId);
        setApplied((prev) => !prev);
        dispatchLogin({
          type: "DELETE JOB",
          payload: {
            jobId
          }
        })
      }
    } catch (error) {
      console.error("Error applying for job:", error);
    }
  }

  useEffect(() => {
    fetchJobDetails();
  }, [id]);

  useEffect(() => {
    setApplied(appliedJobs.includes(id)); // Sync `applied` state with `appliedJobs`
  }, [appliedJobs, id]);
  
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
                <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-4 py-2 rounded-lg shadow-md transition-all" onClick={() => handleApplyButton(_id)}>
                  <Link to={`/jobs/${_id}`}>{
                    applied ? "Applied" : "Apply"
                  }</Link>
                </button>
              </div>
            </div>
          )
        )}
      </div>
    </>
  );
};
