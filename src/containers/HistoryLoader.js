import { connect } from "react-redux";
import HistoryList from "../components/HistoryList";

function mapStateToProps(state) {
  return {
    timeOnPage: state.time,
  };
}

const HistoryLoader = connect(mapStateToProps, null)(HistoryList);

export default HistoryLoader;
