import { useState, useEffect } from "react";
import JobCard from "../components/Jobcard";
import { Navbar } from "../components/Navbar";
import { SiderbarFilter } from "../components/SidebarFilter";
import { getAllJobs } from "../api/getAllJobs";
import { SearchInput } from "../components/SearchInput";
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
  const onSearchInputChange = (event) => {
    setQuery(event.target.value);
  };

  useEffect(() => {
    if (query) {
      setFilteredJobs(
        jobs.filter((job) =>
          job.title.toLowerCase().includes(query.toLowerCase())
        )
      );
    } else {
      setFilteredJobs(jobs);
    }
  }, [query, jobs]);

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

  const handleFilterClick = (value) => {
    setQuery(value);
  };

  useEffect(() => {
    let updatedJobs = [...jobs];

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
  }, [location, salary, jobs, dateOfPosting, typeOfEmployment]);

  return (
    <div className="jobs-container">
      <div className="navbar-container">
        <Navbar />
      </div>
      <div className="job-search">
        <SearchInput handleFilterClick={handleFilterClick}/>
      </div>
      <div className="sidebar-container">
        <SiderbarFilter
          handleFilterChange={handleFilterChange}
          handleFilterClick={handleFilterClick}
        />
      </div>
      <div className="job-listings">
        {filteredJobs.map(
          ({
            title,
            salary,
            typeOfEmployment,
            description,
            jobImage,
            location,
            createdAt,
          }) => (
            <JobCard
              title={title}
              typeOfEmployment={typeOfEmployment}
              location={location}
              description={description}
              salary={salary}
              jobImage={jobImage}
              createdAt={createdAt}
            />
          )
        )}
      </div>
    </div>
  );
};
