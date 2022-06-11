import React from "react";
import { Link } from "react-router-dom";

function Main() {
  return (
    <div>
      <Link to="a">Page A</Link>
      <Link to="b">Page B</Link>
    </div>
  );
}

export default Main;
