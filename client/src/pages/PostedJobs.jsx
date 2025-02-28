import { useState, useEffect } from "react"
import { JobPostedCard } from "../components/JobPostedCard"
import { Navbar } from "../components/Navbar"
import { useAuth } from "../context/loginContext"
import { getJobsPostedByEmployer } from "../api/getAllJobs"

export const PostedJobs = () => {

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
    <div className="flex flex-wrap p-4 gap-4">
      {jobsPosted.map(({_id, title, jobImage}) => (
        <JobPostedCard key={_id} id={_id} jobImage={jobImage} title={title}/>
      ))}
    </div>
    </>
  )
}