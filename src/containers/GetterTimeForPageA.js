import { connect } from "react-redux";
import PageA from "../components/PageA";

function mapStateToProps(state) {
  return {
    timeOnPage: state.time,
  };
}

const GetterTimeForPageA = connect(mapStateToProps, null)(PageA);

export default GetterTimeForPageA;
