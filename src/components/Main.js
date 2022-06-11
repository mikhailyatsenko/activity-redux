import React from "react";
import { Link } from "react-router-dom";

function Main(time) {
  return (
    <div>
      <p>Time saved: {time.timeOnPage}</p>
      <Link to="a">Page A</Link>
      <Link to="b">Page B</Link>
    </div>
  );
}

export default Main;
