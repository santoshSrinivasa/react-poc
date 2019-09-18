const globalstate = {
      search : "",
}
function reducer(state = globalstate, action) {
  switch (action.type) {
    case "LOGINDETAILS":
      console.log("state is",state);
      console.log("action", action)
      return {
        ...state,
      details : action.details
      }
      default:
        return state;
  }
}
export default reducer 


