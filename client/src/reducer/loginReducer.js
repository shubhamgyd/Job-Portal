export const loginReducer = (state, {type, payload}) => {
  switch(type) {
    case 'USERNAME':
      return {
        ...state, username: payload.username,
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