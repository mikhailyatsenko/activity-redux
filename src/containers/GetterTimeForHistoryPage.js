import { connect } from "react-redux";
import HistoryList from "../components/HistoryList";

function mapStateToProps(state) {
  console.log(state);

  return {
    activityData: state,
  };
}

const GetterTimeForHistoryPage = connect(mapStateToProps, null)(HistoryList);

export default GetterTimeForHistoryPage;
