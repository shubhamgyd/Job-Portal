import axios from "axios";

const BaseURL = "http://localhost:5000/api/";

export const getAllJobs = async () => {
  try {
    let url = `${BaseURL}jobs`;
    const { data } = await axios.get(url);
    return data;
  } catch (error) {
    console.error(error.message);
  }
};

export const getJob = async (jobId) => {
  try {
    let url = `${BaseURL}jobs/${jobId}`;
    const { data } = await axios.get(url);
    return data;
  } catch (error) {
    console.error(error.message);
  }
};

export const jobApply = async (userId, jobId) => {
  try {

    let url = `${BaseURL}applications/`;
    const { data } = await axios.post(
      url,
      { userId, jobId },
      { headers: { "Content-Type": "application/json" } }
    );

    console.log("Application Response:", data);
    return data;
  } catch (error) {
    console.error("Job application failed:", error.response?.data || error.message);
  }
};


export const jobApplyDelete = async (userId, jobId) => {
  try {
    let url = `${BaseURL}applications/`;
    const { data } = await axios.delete(url, {
      data: { userId, jobId },
      headers: { "Content-Type": "application/json" },
    });
    console.log(data);
    return data;
  } catch (error) {
    console.error("Job application deletion failed:", error.response?.data || error.message);
    throw new Error(error.response?.data?.message || "Failed to delete job application");
  }
};

export const getApplications = async (userId) => {
  try {
    let url = `${BaseURL}applications/myApplications/${userId}`
    const {data} = await axios.get(url)
    return data;

  }catch (error) {
    console.error("Job applications failed:", error.response?.data || error.message);
  }
}

export const getJobsPostedByEmployer = async (userId) => {
  try {
    let url = `${BaseURL}jobs/jobsPosted/${userId}`
    const {data} = await axios.get(url);
    return data;
  } catch (error) {
    console.error("Job posted by employer fetching failed:", error.response?.data || error.message);
  }
}

export const getUserApplications = async (jobId) => {
  try {
    let url = `http://localhost:5000/api/applications/${jobId}`
    const {data} = await axios.get(url);
    return data;
  } catch (error) {
    console.error("Failed to fetch the user applications:", error.response?.data || error.message);
  }
}

export const updateApplicationStatus = async ({jobId, userId, status}) => {
  try {
    let url = `http://localhost:5000/api/applications/updateStatus`
    const {data} = await axios.put(url, { jobId, userId, status});
    return data;
  } catch (error) {
    console.error("Failed to update the status of applicant: ", error.response?.data || error.message);
  }
}