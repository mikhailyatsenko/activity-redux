import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import setTime from "../action";
import GetterTimeForPageB from "./GetterTimeForPageB";

function SetterTimePageB() {
  const dispatch = useDispatch();
  let time = "";
  useEffect(() => {
    time = new Date().toString();
    dispatch(setTime(time));
  }, []);

  return (
    <>
      <GetterTimeForPageB />
    </>
  );
}

export default SetterTimePageB;
