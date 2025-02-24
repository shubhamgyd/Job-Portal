import axios from "axios";

const BaseURL = "http://localhost:5000/api/";

export const getAllJobs = async (jobs) => {
  try {
    let url = BaseURL + jobs;
    const { data } = await axios.get(url);
    return data;
  } catch (error) {
    console.error(error.message);
  }
};

export const getJob = async (jobId) => {
  try {
    let url = BaseURL + "jobs/" + jobId;
    const { data } = await axios.get(url);
    console.log(data);
    return data;
  } catch (error) {
    console.error(error.message);
  }
};
