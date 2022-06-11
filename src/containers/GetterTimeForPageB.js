import { connect } from "react-redux";
import PageB from "../components/PageB";

function mapStateToProps(state) {
  return {
    timeOnPage: state.time,
  };
}

const GetterTimeForPageB = connect(mapStateToProps, null)(PageB);

export default GetterTimeForPageB;
