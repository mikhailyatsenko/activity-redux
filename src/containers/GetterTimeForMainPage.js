import { connect } from "react-redux";
import Main from "../components/Main";

function mapStateToProps(state) {
  let currentStartTime;
  let currentStopTime;
  let currentName;
  let isHistoryExists = false;
  if (state.length) {
    currentStartTime = state[state.length - 1].startTime;
    currentStopTime = state[state.length - 1].stopTime;
    isHistoryExists = Object.keys(state[0]).length === 3;
  }

  return {
    startTime: currentStartTime,
    stopTime: currentStopTime,
    nameActivity: currentName,
    isHistoryExists: isHistoryExists,
  };
}

const GetterTimeForMainPage = connect(mapStateToProps, null)(Main);

export default GetterTimeForMainPage;
