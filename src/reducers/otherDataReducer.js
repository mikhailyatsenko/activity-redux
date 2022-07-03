const defaultState = {
  isLoading: false,
};

function otherDataReducer(state = defaultState, action) {
  switch (action.type) {
    case "LOADING_TRUE":
      return { ...state, isLoading: true };

    case "LOADING_FALSE":
      return { ...state, isLoading: false };

    default:
      return state;
  }
}

export default otherDataReducer;
