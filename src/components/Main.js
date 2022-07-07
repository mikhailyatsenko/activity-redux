import React from "react";
import { Link } from "react-router-dom";

function Main(props) {
  return (
    <section className="height100 flex items-center">
      <div className="container mx-auto">
        {props.isLoading && !props.fetchedNameActivity && (
          <svg
            role="status"
            className="inline w-8 h-8 mr-2 text-gray-200 animate-spin fill-purple-500"
            viewBox="0 0 100 101"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
              fill="currentColor"
            />
            <path
              d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
              fill="currentFill"
            />
          </svg>
        )}

        {props.fetchedNameActivity && props.useFetchedActivity === props.usePersonalActivity && (
          <div onClick={props.closeModal} className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full" id="my-modal">
            <div id="modal-content" className="relative top-20 mx-auto p-5 border max-w-xl shadow-lg rounded-md bg-white">
              <div
                onClick={props.fetchRandomActivityHandler}
                className="mx-auto flex items-center justify-center mb-1 h-12 w-12 rounded-full bg-purple-100 hover:cursor-pointer hover:bg-purple-300"
              >
                <span className={`${props.isLoading && "animate-spin text-white"} material-icons text-gray-500`}>autorenew </span>
              </div>
              <div className="text-center">
                <h2 className="text-2xl pb-6 leading-6 font-medium text-gray-900">{props.fetchedNameActivity}</h2>

                <button
                  onClick={props.doFetchedActivityHandler}
                  className="px-4 mx-1 py-2 bg-purple-500 text-white  border border-purple-500 rounded-md hover:bg-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-300 font-medium disabled:bg-purple-200"
                >
                  Do this activity
                </button>
              </div>
            </div>
          </div>
        )}

        {props.useFetchedActivity && <h2 className="text-2xl pb-3 leading-6 font-medium text-gray-900">{props.fetchedNameActivity}</h2>}

        {props.usePersonalActivity && !props.timer && (
          <h2 className="text-2xl pb-3 leading-6 font-medium text-gray-900">Press "Start activity" button to begin personal activity</h2>
        )}

        <h1 className={`text-6xl py-3 align-middle text-purple-500 ${props.useFetchedActivity === props.usePersonalActivity && "text-gray-300"}`}>
          <span>{("0" + Math.floor((props.timer / 60000) % 60)).slice(-2)}:</span>
          <span>{("0" + Math.floor((props.timer / 1000) % 60)).slice(-2)}:</span>
          <span>{("0" + ((props.timer / 10) % 100)).slice(-2)}</span>
        </h1>

        <div className="flex justify-center">
          {props.useFetchedActivity !== props.usePersonalActivity ? (
            <button
              onClick={props.timer ? props.stopHandler : props.startHandler}
              className="px-4 py-2 bg-purple-500 text-white rounded-md hover:bg-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-300 font-medium disabled:bg-purple-200"
            >
              {props.timer ? "Stop" : "Start activity"}
            </button>
          ) : (
            <div>
              <button
                onClick={props.doPersonalActivityHandler}
                className="px-4 py-2 bg-purple-500 text-white rounded-md hover:bg-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-300 font-medium disabled:bg-purple-200"
              >
                Do any personal activity
              </button>
              <button onClick={props.fetchRandomActivityHandler} className="block text-purple-600 hover:text-purple-400 text-sm mx-auto">
                ...or <span className="font-semibold">suggest random activity</span>
              </button>
            </div>
          )}

          <div>
            {!props.timerOn && (
              <Link to="history">
                <button
                  disabled={!props.isHistoryExists}
                  id="ok-btn"
                  className="px-4 py-2 text-purple-500 hover:text-white border border-purple-500 hover:bg-purple-600 focus:ring-2 focus:outline-none focus:ring-purple-300 font-medium rounded-md disabled:border-gray-300 disabled:bg-gray-50 disabled:text-gray-300"
                >
                  Activity history
                </button>
              </Link>
            )}
          </div>
        </div>

        <div className="py-4">
          {props.startTime && props.timer ? (
            <p className={`font-extralight align-middle ${props.timerOn ? "animate-pulse" : null}`}>
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

      {props.stopTime && props.timer && !props.timerOn ? (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full" id="my-modal">
          <div className="relative top-20 mx-auto p-4 border max-w-xl shadow-lg rounded-md bg-white">
            <div className="mt-3 text-center">
              <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-purple-100">
                <svg className="h-6 w-6 text-purple-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
              </div>
              <h3 className="text-lg pt-2 leading-6 font-medium text-gray-900">Activity finished!</h3>
              <p className="text-sm text-gray-500">
                <strong>
                  {props.startTime} - {props.stopTime}
                </strong>
              </p>
              <form onSubmit={props.saveActivityHandler}>
                <div className="mt-2 px-7 py-3">
                  <input
                    className="border py-2 w-full px-3"
                    type="text"
                    placeholder={"Enter your personal activity name"}
                    defaultValue={props.useFetchedActivity ? props.fetchedNameActivity : ""}
                    id="activity"
                    required
                  />
                </div>
                <div className="items-center px-4 py-3">
                  <button
                    id="ok-btn"
                    className="px-4 py-2 bg-purple-500 text-white text-base font-medium rounded-md w-full shadow-sm hover:bg-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-300"
                  >
                    Save this activity
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
