import React from "react";
import ActivityTracker from "../containers/ActivityTracker";
import GetterTimeForHistoryPage from "../containers/GetterTimeForHistoryPage";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ActivityTracker />} />
          <Route path="/history" element={<GetterTimeForHistoryPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
