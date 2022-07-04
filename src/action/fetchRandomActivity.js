function fetchRandomActivity() {
  return async function (dispatch) {
    dispatch({ type: "LOADING_TRUE" });

    let response = await fetch("http://www.boredapi.com/api/activity/");
    let responseActivityObj = await response.json();

    dispatch({ type: "LOADING_FALSE" });

    let randomActivityName = responseActivityObj.activity;
    dispatch({ type: "SAVE_RANDOM_ACTIVITY", randomActivityName });
  };
}

export default fetchRandomActivity;
