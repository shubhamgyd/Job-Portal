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