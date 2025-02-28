import { useEffect, useState } from "react";
import { getApplications } from "../api/getAllJobs";
import { useAuth } from "../context/loginContext";
import { ApplicationCard } from "../components/ApplicationCard";
import { Navbar } from "../components/Navbar";

export const Applications = () => {
  const [applications, setApplications] = useState([]);
  const { userId } = useAuth();

  useEffect(() => {
    const fetchApplications = async () => {
      try {
        const temp = await getApplications(userId);
        setApplications(temp || []);
        console.log("Fetched Applications:", temp);
      } catch (error) {
        console.error("Error fetching applications:", error);
      }
    };
    fetchApplications();
  }, [userId]);
  return (
    <>
      <Navbar />
      {applications.length > 0 ? (
        <div className="flex gap-x-[10vw] gap-y-[2vw] m-2 flex-wrap mx-[5vw] mt-[2vw]">
          {applications.map(({ jobId, status }) => (
            <ApplicationCard
              key={jobId._id}
              jobImage={jobId.jobImage}
              _id={jobId._id}
              title={jobId.title}
              status={status}
            />
          ))}
        </div>
      ) : (
        <p>No applications found.</p>
      )}
    </>
  );
};
