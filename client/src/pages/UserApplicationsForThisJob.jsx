import { useEffect, useState } from "react";
import {
  getUserApplications,
  updateApplicationStatus,
} from "../api/getAllJobs";
import { useParams } from "react-router-dom";
import { Navbar } from "../components/Navbar";

export const UserApplicationsForThisJob = () => {
  const [userApplications, setUserApplications] = useState([]);
  const { id: jobId } = useParams();

  useEffect(() => {
    const fetchUserApplications = async () => {
      try {
        const temp = await getUserApplications(jobId);
        setUserApplications(temp);
      } catch (error) {
        console.error("Error fetching applications:", error);
      }
    };
    fetchUserApplications();
  }, [jobId]);

  const handleStatusChange = async (applicantId, status) => {
    try {
      await updateApplicationStatus({ jobId, userId: applicantId, status });

      setUserApplications((prev) =>
        prev.map((app) =>
          app.userId._id === applicantId ? { ...app, status } : app
        )
      );
    } catch (error) {
      console.error("Error updating status:", error);
    }
  };

  return (
    <>
      <Navbar />
      <div className="flex flex-col p-4 gap-2">
      {userApplications.map((application) => (
        <div
          key={application._id}
          className="border-2 border-black-500 flex justify-between w-[60vw] m-auto p-4 rounded-lg"
        >
          <div className="flex flex-col">
            <div>
              <strong>Name:</strong> {application.userId.name}
            </div>
            <div>
              <strong>Email:</strong> {application.userId.email}
            </div>
            <div>
              <strong>Resume:</strong>{" "}
              {application.userId.resume ? (
                <a
                  href={`${application.userId.resume}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 underline"
                >
                  View Resume
                </a>
              ) : (
                "No Resume Uploaded"
              )}
            </div>
          </div>
          <div>
            <div>
              <strong>Status</strong>
            </div>
            <div>
              <input
                id={`accepted-${application._id}`}
                name={`status-${application._id}`}
                type="radio"
                checked={application.status === "accepted"}
                onChange={() =>
                  handleStatusChange(application.userId._id, "accepted")
                }
              />
              <label htmlFor={`accepted-${application._id}`} className="ml-1">
                Accepted
              </label>
            </div>
            <div>
              <input
                id={`rejected-${application._id}`}
                name={`status-${application._id}`}
                type="radio"
                checked={application.status === "rejected"}
                onChange={() =>
                  handleStatusChange(application.userId._id, "rejected")
                }
              />
              <label htmlFor={`rejected-${application._id}`} className="ml-1">
                Rejected
              </label>
            </div>
          </div>
        </div>
      ))}
      </div>
    </>
  );
};
