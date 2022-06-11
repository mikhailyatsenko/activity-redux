import { connect } from "react-redux";
import Main from "../components/Main";

function mapStateToProps(state) {
  return {
    timeOnPage: state.time,
  };
}

const GetterTimeForMainPage = connect(mapStateToProps, null)(Main);

export default GetterTimeForMainPage;
