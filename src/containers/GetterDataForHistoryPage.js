import { connect } from "react-redux";
import HistoryList from "../components/HistoryList";
import clearHistory from "../action/clearHistory";
import removeActivityFromHistory from "../action/removeActivityFromHistory";

function mapStateToProps(state) {
  return {
    activityData: state,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    clearHistory: () => dispatch(clearHistory()),
    removeActivityFromHistory: (index) => dispatch(removeActivityFromHistory(index)),
  };
}

const GetterDataForHistoryPage = connect(mapStateToProps, mapDispatchToProps)(HistoryList);

export default GetterDataForHistoryPage;
