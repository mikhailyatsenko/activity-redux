import React from "react";
import { Link } from "react-router-dom";

function Main(props) {
  return (
    <section className="height100 flex items-center">
      <div className="container mx-auto">
        <h1 className="text-6xl mt-0 mb-2 align-middle">
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
          className="text-purple-500 hover:text-white border border-purple-500 hover:bg-purple-600 focus:ring-4 focus:outline-none focus:ring-purple-100 font-medium rounded-md text-sm px-5 py-2.5 text-center dark:border-purple-200 dark:text-purple-200 dark:hover:text-white dark:hover:bg-purple-300 dark:focus:ring-purple-700"
        >
          {props.timer ? "Stop" : "Start activity"}
        </button>
        {props.startTime ? (
          <p className="font-extralight align-middle">
            Activity started at <strong>{props.startTime}</strong>
          </p>
        ) : null}

        {props.stopTime ? (
          <p className="font-extralight align-middle">
            Activity stopped at <strong>{props.stopTime}</strong>
          </p>
        ) : null}

        {/* <Link to="a">Page A</Link>
        <Link to="b">Page B</Link> */}
      </div>
      {props.stopTime ? (
        <div
          class="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full"
          id="my-modal"
        >
          <div class="relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white">
            <div class="mt-3 text-center">
              <div class="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-purple-100">
                <svg
                  class="h-6 w-6 text-purple-700"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
              </div>
              <h3 class="text-lg leading-6 font-medium text-gray-900">
                Your activity is over!
              </h3>
              <p class="text-sm text-gray-500">
                <strong>
                  {props.startTime} - {props.stopTime}
                </strong>
              </p>

              <div class="mt-2 px-7 py-3">
                <input
                  className="border py-2 w-full h-10 px-3"
                  type="text"
                  placeholder="Enter activity name"
                  id="activity"
                />
              </div>
              <div class="items-center px-4 py-3">
                <button
                  id="ok-btn"
                  class="px-4 py-2 bg-purple-500 text-white text-base font-medium rounded-md w-full shadow-sm hover:bg-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-300"
                >
                  OK
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </section>
  );
}

export default Main;
