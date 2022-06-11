import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import setTime from "../action";
import GetterTimeForPageA from "./GetterTimeForPageA";

function SetterTimePageA() {
  const dispatch = useDispatch();
  let time = "";
  useEffect(() => {
    time = new Date().toString();
    dispatch(setTime(time));
  }, []);

  return (
    <>
      <GetterTimeForPageA />
    </>
  );
}

export default SetterTimePageA;
