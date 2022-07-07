import { connect } from "react-redux";
import Main from "../components/Main";

function mapStateToProps(state) {
  let currentStartTime;
  let currentStopTime;
  let isHistoryExists = false;

  if (state.length) {
    currentStartTime = state.at(-1).startTime;
    currentStopTime = state.at(-1).stopTime;
    isHistoryExists = state.some((activityData) => Object.keys(activityData).length === 3);
  }

  return {
    startTime: currentStartTime,
    stopTime: currentStopTime,
    isHistoryExists: isHistoryExists,
  };
}

const GetterDataForMainPage = connect(mapStateToProps, null)(Main);

export default GetterDataForMainPage;
