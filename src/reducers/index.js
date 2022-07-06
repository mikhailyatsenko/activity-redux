let defaultState = [];

function activity(state = defaultState, action) {
  switch (action.type) {
    case "LS_TO_STORE":
      return [...state, ...action.localStorageData];

    // case "SAVE_FETCHED_NAME_ACTIVITY":
    //   return [...state, { nameActivity: action.fetchedNameActivity }];

    case "SAVE_START_TIME":
      return [...state, { startTime: action.startTime }];

    case "SAVE_STOP_TIME":
      let newStateWithStopTime = [...state];
      newStateWithStopTime.at(-1).stopTime = action.stopTime;
      return newStateWithStopTime;

    case "SAVE_NAME_ACTIVITY":
      let newStateWithName = [...state];
      newStateWithName.at(-1).nameActivity = action.nameActivity;
      return newStateWithName;

    case "CLEAR_HISTORY":
      return defaultState;

    default:
      return state;
  }
}

export default activity;
