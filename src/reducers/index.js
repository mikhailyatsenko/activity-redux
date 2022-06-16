import initialState from "../store/initialState";

function time(state = initialState, action) {
  switch (action.type) {
    case "SAVE_START_TIME":
      return {
        ...state,
        startTime: action.startTime,
      };
    case "SAVE_STOP_TIME":
      return {
        ...state,
        stopTime: action.stopTime,
      };
    default:
      return state;
  }
}

export default time;
