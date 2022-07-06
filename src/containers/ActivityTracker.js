import React, { useEffect, useState, useRef } from "react";
import { useDispatch } from "react-redux";
import saveStartTime from "../action/saveStartTime";
import saveStopTime from "../action/saveStopTime";
import saveNameActivity from "../action/saveNameActivity";
// import saveFetchedNameActivity from "../action/saveFetchedNameActivity";
import GetterDataForMainPage from "./GetterDataForMainPage";

function ActivityTracker() {
  const dispatch = useDispatch();
  const intervalRef = useRef();
  const [timer, setTimer] = useState(0);
  const [timerOn, setTimerOn] = useState(false);
  const [fetchedNameActivity, setFetchedNameActivity] = useState("");
  const [useFetchedActivity, setUseFetchedActivity] = useState(false);
  const [usePersonalActivity, setUsePersonalActivity] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

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

  function saveActivityHandler(event) {
    event.preventDefault();

    let nameActivity = event.target.activity.value;
    dispatch(saveNameActivity(nameActivity));
    setTimer(0);
    setFetchedNameActivity("");
    setUseFetchedActivity(false);
    setUsePersonalActivity(false);
  }

  async function fetchRandomActivityHandler() {
    setIsLoading(true);
    let response = await fetch("http://www.boredapi.com/api/activity/");
    let responseActivityObj = await response.json();
    setIsLoading(false);
    setFetchedNameActivity(responseActivityObj.activity);
  }

  function doFetchedActivityHandler() {
    setUseFetchedActivity(true);
  }

  function doPersonalActivityHandler() {
    setUsePersonalActivity(true);
  }

  return (
    <>
      <GetterDataForMainPage
        startHandler={startHandler}
        stopHandler={stopHandler}
        saveActivityHandler={saveActivityHandler}
        fetchRandomActivityHandler={fetchRandomActivityHandler}
        doFetchedActivityHandler={doFetchedActivityHandler}
        doPersonalActivityHandler={doPersonalActivityHandler}
        useFetchedActivity={useFetchedActivity}
        usePersonalActivity={usePersonalActivity}
        fetchedNameActivity={fetchedNameActivity}
        timer={timer}
        timerOn={timerOn}
        isLoading={isLoading}
      />
    </>
  );
}

export default ActivityTracker;
