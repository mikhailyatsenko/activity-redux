import initialState from "../store/initialState";

function time(state = initialState, action) {
  console.log(state);
  switch (action.type) {
    case "SET_TIME":
      return {
        ...state,
        time: action.timeOnLoad,
      };
    default:
      return state;
  }
}

export default time;
