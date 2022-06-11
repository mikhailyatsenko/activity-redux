import initialState from "../store/initialState";

function time(state = initialState, action) {
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
