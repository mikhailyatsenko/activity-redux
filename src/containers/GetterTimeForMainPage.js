import { connect } from "react-redux";
import Main from "../components/Main";

function mapStateToProps(state) {
  return {
    startTime: state.startTime,
    stopTime: state.stopTime,
  };
}

const GetterTimeForMainPage = connect(mapStateToProps, null)(Main);

export default GetterTimeForMainPage;
