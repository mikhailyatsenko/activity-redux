import React, { useEffect, useState, useRef } from "react";
import { useDispatch } from "react-redux";
import saveStartTime from "../action/saveStartTime";
import saveStopTime from "../action/saveStopTime";
import GetterTimeForMainPage from "./GetterTimeForMainPage";

function ActivityTracker() {
  const dispatch = useDispatch();
  let startTime = "";
  let stopTime = "";

  const intervalRef = useRef();

  const [timer, setTimer] = useState(0);
  const [timerOn, setTimerOn] = useState(false);

  function startHandler() {
    startTime = new Date().toLocaleTimeString();
    dispatch(saveStartTime(startTime));
    setTimerOn(true);
  }

  useEffect(() => {
    if (timerOn) {
      const intervalId = setInterval(() => {
        setTimer((prevTimer) => prevTimer + 10);
      }, 10);
      intervalRef.current = intervalId;
    } else {
      clearInterval(intervalRef.current);
    }
  }, [timerOn]);

  function stopHandler() {
    setTimerOn(false);
    stopTime = new Date().toLocaleTimeString();
    dispatch(saveStopTime(stopTime));
  }

  // function saveActivityHandler() {
  //   dispatch(saveStopTime(stopTime));
  //   setTimer(0);
  // }

  return (
    <>
      <GetterTimeForMainPage
        startHandler={startHandler}
        stopHandler={stopHandler}
        timer={timer}
      />
    </>
  );
}

export default ActivityTracker;