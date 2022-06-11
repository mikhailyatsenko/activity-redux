import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import saveTime from "../action";
import GetterTimeForMainPage from "./GetterTimeForMainPage";

function SetterTimePage() {
  const dispatch = useDispatch();
  let time = "";
  useEffect(() => {
    time = new Date().toString();
    dispatch(saveTime(time));
  }, []);

  return (
    <>
      <GetterTimeForMainPage />
    </>
  );
}

export default SetterTimePage;
