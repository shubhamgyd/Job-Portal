import { useState, useEffect } from "react"
import { JobPostedCard } from "../components/JobPostedCard"
import { Navbar } from "../components/Navbar"
import { useAuth } from "../context/loginContext"
import { getJobsPostedByEmployer } from "../api/getAllJobs"

export const UserApplications = () => {

  const [jobsPosted, setJobsPosted] = useState([]);
  const {userId} = useAuth();

  useEffect(() => {
    const fetchJobsPosted = async () => {
      const jobs = await getJobsPostedByEmployer(userId);
      setJobsPosted(jobs);
    }
    fetchJobsPosted();
  }, [])

  return (
    <>
    <Navbar />
    <div className="mt-2 flex flex-wrap">
      {/* {
        jobsPosted.map(({title, jobImage}) => {
          <JobPostedCard title={title} jobImage={jobImage}/>
        })
      } */}
      {jobsPosted.map(({_id, title, jobImage}) => (
        <JobPostedCard key={_id} jobImage={jobImage} title={title}/>
      ))}
    </div>
    </>
  )
}