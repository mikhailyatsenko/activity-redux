import React, { useEffect, useState, useRef } from "react";
import { useDispatch } from "react-redux";
import saveStartTime from "../action/saveStartTime";
import saveStopTime from "../action/saveStopTime";
import saveCommentActivity from "../action/saveCommentActivity";
import GetterDataForMainPage from "./GetterDataForMainPage";

function ActivityTracker() {
  const dispatch = useDispatch();
  const intervalRef = useRef();
  const [timer, setTimer] = useState(0);
  const [timerOn, setTimerOn] = useState(false);

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

  function startHandler() {
    let startTime = "";
    startTime = new Date().toLocaleTimeString();
    dispatch(saveStartTime(startTime));
    setTimerOn(true);
  }

  function stopHandler() {
    setTimerOn(false);
    let stopTime = "";
    stopTime = new Date().toLocaleTimeString();
    dispatch(saveStopTime(stopTime));
  }

  function saveCommentHandler(event) {
    event.preventDefault();

    let commentActivity = event.target.comment.value;
    dispatch(saveCommentActivity(commentActivity));
    setTimer(0);
  }

  return (
    <>
      <GetterDataForMainPage
        startHandler={startHandler}
        stopHandler={stopHandler}
        saveCommentHandler={saveCommentHandler}
        timer={timer}
        timerOn={timerOn}
      />
    </>
  );
}

export default ActivityTracker;
