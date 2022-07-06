import { connect } from "react-redux";
import HistoryList from "../components/HistoryList";
import clearHistory from "../action/clearHistory";

function mapStateToProps(state) {
  return {
    activityData: state,
  };
}

function mapDispatchToProps(dispatch) {
  return { clearHistory: () => dispatch(clearHistory()) };
}

const GetterDataForHistoryPage = connect(mapStateToProps, mapDispatchToProps)(HistoryList);

export default GetterDataForHistoryPage;
