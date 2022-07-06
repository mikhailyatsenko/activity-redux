import { connect } from "react-redux";
import Main from "../components/Main";

function mapStateToProps(state) {
  console.log(state);
  let currentStartTime;
  let currentStopTime;
  // let currentName;
  let isHistoryExists = false;
  if (state.length) {
    // if (Object.keys(state.at(-1)).length < 3) currentName = state.at(-1).nameActivity;
    // currentName = state.at(-1).nameActivity;

    currentStartTime = state.at(-1).startTime;
    currentStopTime = state.at(-1).stopTime;
    isHistoryExists = state.some((activityData) => Object.keys(activityData).length === 3);
  }

  return {
    startTime: currentStartTime,
    stopTime: currentStopTime,
    // currentNameActivity: currentName,
    isHistoryExists: isHistoryExists,
  };
}

const GetterDataForMainPage = connect(mapStateToProps, null)(Main);

export default GetterDataForMainPage;
