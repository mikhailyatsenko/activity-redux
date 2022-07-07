import React from "react";
import { Link } from "react-router-dom";

function HistoryList(props) {
  return (
    <section className="height100 flex items-center">
      <div className="container mx-auto">
        <h1 className="text-5xl align-middle">Hisory of your activity:</h1>

        <div className="flex justify-center pt-5">
          <ul className="bg-white rounded-lg text-gray-900 w-full md:w-[640px]">
            {props.activityData.map((item, index) => (
              <li key={index} className="px-6 py-2 justify-between border-b border-gray-200 w-full flex items-center hover:bg-purple-50">
                <div className="basis-1/3 text-xs md:text-base">
                  <strong>"{item.nameActivity}"</strong>
                </div>
                <div className="basis-1/3 text-xs md:text-base">
                  {item.startTime} — {item.stopTime}
                </div>
                <span
                  onClick={() => props.removeActivityFromHistory(index)}
                  className="material-icons basis-1/3 text-gray-700 cursor-pointer hover:text-purple-800 focus:ring-2 focus:ring-purple-300"
                >
                  remove_circle
                </span>
              </li>
            ))}
          </ul>
        </div>
        {Boolean(props.activityData.length) && (
          <div className="block pt-1">
            <button className="text-gray-500 hover:text-purple-600 font-bold underline" onClick={props.clearHistory}>
              Clear history
            </button>
          </div>
        )}
        <Link to="/">
          <button className="px-4 my-5 py-2 bg-purple-500 text-white rounded-md hover:bg-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-300 font-medium">
            Back to "Main"
          </button>
        </Link>
      </div>
    </section>
  );
}

export default HistoryList;
