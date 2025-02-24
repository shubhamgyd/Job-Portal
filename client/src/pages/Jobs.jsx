import { useState, useEffect } from "react";
import JobCard from "../components/Jobcard";
import { Navbar } from "../components/Navbar";
import { SiderbarFilter } from "../components/SidebarFilter";
import { getAllJobs } from "../api/getAllJobs";
import { SearchInput } from "../components/SearchInput";
import { Link } from "react-router-dom";
export const Jobs = () => {
  let [jobs, setJobs] = useState([]);
  let [filteredJobs, setFilteredJobs] = useState([]);
  const [query, setQuery] = useState("");
  const [location, setLocation] = useState(null);
  const [salary, setSalary] = useState(null);
  const [dateOfPosting, setDateOfPosting] = useState(null);
  const [typeOfEmployment, setTypeOfEmployment] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        let Jobs = await getAllJobs("jobs");
        setJobs(Jobs);
        setFilteredJobs(Jobs);
      } catch (e) {
        console.log(e);
      }
    })();
  }, []);

  // Search Input
  const handleSearchInputChange = (value) => {
    setQuery(value);
  };

  const handleFilterChange = (event) => {
    const { name, value } = event.target;
    if (name === "location") {
      setLocation(value);
    } else if (name === "salary") {
      setSalary(value);
    } else if (name === "dateOfPosting") {
      setDateOfPosting(value);
    } else if (name === "typeOfEmployment") {
      setTypeOfEmployment(value);
    }
  };

  useEffect(() => {
    let updatedJobs = [...jobs];

    if (query) {
      updatedJobs = updatedJobs.filter((job) =>
        job.title.toLowerCase().includes(query.toLowerCase())
      );
    }

    if (location) {
      updatedJobs = updatedJobs.filter(
        (job) => job.location.toLowerCase() === location.toLowerCase()
      );
    }
    if (salary) {
      updatedJobs = updatedJobs.filter((job) => job.salary[0] >= salary[0]);
    }
    if (dateOfPosting) {
      updatedJobs = updatedJobs.filter((job) => {
        const today = new Date();
        let todayMonth = today.getMonth() + 1;
        let todayDate = today.getDate();
        let todayYear = today.getFullYear();
        let jobMonth = Number(job.createdAt.substr(5, 2));
        let jobDate = Number(job.createdAt.substr(8, 2));
        let jobYear = Number(job.createdAt.substr(0, 4));
        let days = 0;
        // console.log(jobMonth, todayMonth, today)
        days += Math.abs(todayMonth - jobMonth) * 30;
        days += Math.abs(todayDate - jobDate);
        days += Math.abs(todayYear - jobYear) * 365;
        // console.log(dateOfPosting, days)
        if (days <= dateOfPosting) {
          return job;
        }
      });
    }
    if (typeOfEmployment) {
      updatedJobs = updatedJobs.filter(
        (job) => job.typeOfEmployment === typeOfEmployment
      );
    }

    setFilteredJobs(updatedJobs);
  }, [location, salary, jobs, dateOfPosting, typeOfEmployment, query]);

  return (
    <div className="jobs-container">
      <div className="navbar-container">
        <Navbar />
      </div>
      <div className="job-search">
        <SearchInput handleSearchInputChange={handleSearchInputChange} />
      </div>
      <div className="sidebar-container">
        <SiderbarFilter handleFilterChange={handleFilterChange} />
      </div>
      <div className="job-listings">
        <div className="flex flex-col gap-8">
          {filteredJobs.map(
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
                    <Link to={`/jobs/${_id}`}>Job Details</Link>
                  </button>
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
};
