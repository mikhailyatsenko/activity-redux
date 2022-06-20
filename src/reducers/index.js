import initialState from "../store/initialState";

function activity(state = initialState, action) {
  switch (action.type) {
    case "LS_TO_STORE":
      return [...state, ...action.localStorageData];

    case "SAVE_START_TIME":
      return [...state, { startTime: action.startTime }];

    case "SAVE_STOP_TIME":
      let newStateWithStopTime = JSON.parse(JSON.stringify(state));
      newStateWithStopTime[newStateWithStopTime.length - 1].stopTime = action.stopTime;
      return newStateWithStopTime;

    case "SAVE_NAME_ACTIVITY":
      let newStateWithName = JSON.parse(JSON.stringify(state));
      newStateWithName[newStateWithName.length - 1].nameActivity = action.nameActivity;
      return newStateWithName;

    default:
      return state;
  }
}

export default activity;
