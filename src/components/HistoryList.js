import React from "react";
import { Link } from "react-router-dom";

function HistoryList(props) {
  console.log(props);
  return (
    <section className="height100 flex items-center">
      <div className="container mx-auto">
        <h1 className="text-5xl align-middle">Hisory of your activity:</h1>

        <div className="flex justify-center py-5">
          <ul className="bg-white rounded-lg w-96 text-gray-900">
            {props.activityData.map((item) => (
              <li className="px-6 py-2 border-b border-gray-200 w-full">
                <strong>{item.nameActivity}</strong>: {item.startTime} —
                {item.stopTime}
              </li>
            ))}
          </ul>
        </div>

        <Link to="/">
          <button className="px-4 py-2  bg-purple-500 text-white rounded-md hover:bg-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-300 font-medium">
            Back to "Main"
          </button>
        </Link>
      </div>
    </section>
  );
}

export default HistoryList;
