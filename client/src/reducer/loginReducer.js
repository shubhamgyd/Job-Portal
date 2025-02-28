export const loginReducer = (state, {type, payload}) => {
  let appliedJobs = []
  switch(type) {
    case 'USERNAME':
      return {
        ...state, username: payload.username,
      }
    case "USERID":
      console.log(payload.id);
      return {
        ...state, userId: payload.id,
      }
    case "ADD JOB":
      appliedJobs = [...state.appliedJobs, payload.jobId]
      localStorage.setItem("appliedJobs", JSON.stringify(appliedJobs))
      return {
        ...state, appliedJobs: appliedJobs
      }
    case "DELETE JOB":
      appliedJobs = state.appliedJobs.filter(jobId => jobId != payload.jobId)
      localStorage.setItem("appliedJobs", JSON.stringify(appliedJobs))
      return {
        ...state, appliedJobs: appliedJobs
      }
    case "TOKEN":
      return {
        ...state, isLoggedIn: payload.value,
      }
    case "LOGOUT":
      localStorage.setItem("accessToken", JSON.stringify(""));
      return {
        ...state, isLoggedIn: payload.value,
      }
    default:
      return state
  }
}