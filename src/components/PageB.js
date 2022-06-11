import React from "react";
import { Link } from "react-router-dom";

function PageB(time) {
  return (
    <>
      <p>Time on Page "B"</p>
      <p>{time.timeOnPage}</p>
      <p>
        <Link to="/a">Page A</Link>
      </p>
      <Link to="/">Back to "Main"</Link>
    </>
  );
}

export default PageB;
