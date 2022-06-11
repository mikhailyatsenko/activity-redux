import React from "react";
import { Link } from "react-router-dom";

function PageA(time) {
  return (
    <>
      <p>Time on Page "A"</p>
      <p>{time.timeOnPage}</p>
      <p>
        <Link to="/b">Page B</Link>
      </p>
      <Link to="/">Back to "Main"</Link>
    </>
  );
}

export default PageA;
