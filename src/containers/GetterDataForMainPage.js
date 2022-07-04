import { connect } from "react-redux";
import fetchRandomActivity from "../action/fetchRandomActivity";
import Main from "../components/Main";

function mapStateToProps(state) {
  if (state.activity.length) console.log("start:", state.activity.at(-1).startTime, "stop:", state.activity.at(-1).stopTime);
  let activity = state.activity;

  let currentStartTime;
  let currentStopTime;
  let currentName = "";
  let isHistoryExists = false;

  if (activity.length) {
    if (Object.keys(activity.at(-1)).length < 4) currentName = activity.at(-1).randomActivityName;
    currentStartTime = activity.at(-1).startTime;
    currentStopTime = activity.at(-1).stopTime;
    isHistoryExists = activity.some((activityData) => Object.keys(activityData).length === 4);
  }

  return {
    startTime: currentStartTime,
    stopTime: currentStopTime,
    currentNameActivity: currentName,
    isHistoryExists: isHistoryExists,
    isLoading: state.other.isLoading,
  };
}

function mapDispatchToProps(dispatch) {
  return { fetchRandomActivity: () => dispatch(fetchRandomActivity()) };
}

const GetterDataForMainPage = connect(mapStateToProps, mapDispatchToProps)(Main);

export default GetterDataForMainPage;
