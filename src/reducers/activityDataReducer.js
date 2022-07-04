const defaultState = [];

function activityDataReducer(state = defaultState, action) {
  switch (action.type) {
    case "LS_TO_STORE":
      return [...state, ...action.localStorageData];

    case "SAVE_RANDOM_ACTIVITY":
      return [...state, { randomActivityName: action.randomActivityName }];

    case "SAVE_START_TIME":
      let newStateWithStartTime = [...state];
      newStateWithStartTime.at(-1).startTime = action.startTime;
      return newStateWithStartTime;

    case "SAVE_STOP_TIME":
      let newStateWithStopTime = JSON.parse(JSON.stringify(state));
      newStateWithStopTime.at(-1).stopTime = action.stopTime;
      return newStateWithStopTime;

    case "SAVE_COMMENT_ACTIVITY":
      let newStateWithComment = JSON.parse(JSON.stringify(state));
      newStateWithComment.at(-1).commentActivity = action.commentActivity;
      return newStateWithComment;

    case "CLEAR_HISTORY":
      return defaultState;

    default:
      return state;
  }
}

export default activityDataReducer;
