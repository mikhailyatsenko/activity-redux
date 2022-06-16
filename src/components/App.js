import React from "react";
import ActivityTracker from "../containers/ActivityTracker";
import HistoryLoader from "../containers/HistoryLoader";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ActivityTracker />} />
          <Route path="/history" element={<HistoryLoader />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
