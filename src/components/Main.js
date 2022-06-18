import React from "react";
import { Link } from "react-router-dom";

function Main(props) {
  console.log(props);
  return (
    <section className="height100 flex items-center">
      <div className="container mx-auto">
        <h1 className="text-6xl py-3 align-middle">
          <span>
            {("0" + Math.floor((props.timer / 60000) % 60)).slice(-2)}:
          </span>
          <span>
            {("0" + Math.floor((props.timer / 1000) % 60)).slice(-2)}:
          </span>
          <span>{("0" + ((props.timer / 10) % 100)).slice(-2)}</span>
        </h1>
        <button
          onClick={props.timer ? props.stopHandler : props.startHandler}
          className="px-4 py-2 text-purple-500 hover:text-white border border-purple-500 hover:bg-purple-600 focus:ring-2 focus:outline-none focus:ring-purple-300 font-medium rounded-md"
        >
          {props.timer ? "Stop" : "Start activity"}
        </button>

        <Link to="history">
          <button
            disabled={!props.isHistoryExists}
            id="ok-btn"
            className="px-4 py-2 bg-purple-500 text-white rounded-md hover:bg-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-300 font-medium disabled:bg-purple-200"
          >
            Activity history
          </button>
        </Link>
        <div className="py-4">
          {props.startTime && props.timer ? (
            <p
              className={`font-extralight align-middle ${
                props.timerOn ? "animate-pulse" : null
              }`}
            >
              Activity started at <strong>{props.startTime}</strong>
            </p>
          ) : null}

          {props.stopTime && props.timer ? (
            <p className="font-extralight align-middle">
              Activity stopped at <strong>{props.stopTime}</strong>
            </p>
          ) : null}
        </div>
      </div>
      {props.stopTime && props.timer ? (
        <div
          className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full"
          id="my-modal"
        >
          <div className="relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white">
            <div className="mt-3 text-center">
              <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-purple-100">
                <svg
                  className="h-6 w-6 text-purple-700"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
              </div>
              <h3 className="text-lg leading-6 font-medium text-gray-900">
                Your activity is over!
              </h3>
              <p className="text-sm text-gray-500">
                <strong>
                  {props.startTime} - {props.stopTime}
                </strong>
              </p>
              <form onSubmit={props.saveActivityHandler}>
                <div className="mt-2 px-7 py-3">
                  <input
                    className="border py-2 w-full h-10 px-3"
                    type="text"
                    placeholder="Enter activity name"
                    id="activity"
                    required
                  />
                </div>
                <div className="items-center px-4 py-3">
                  <button
                    id="ok-btn"
                    className="px-4 py-2 bg-purple-500 text-white text-base font-medium rounded-md w-full shadow-sm hover:bg-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-300"
                  >
                    OK
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      ) : null}
    </section>
  );
}

export default Main;
