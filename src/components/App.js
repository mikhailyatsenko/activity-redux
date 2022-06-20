import React from "react";
import ActivityTracker from "../containers/ActivityTracker";
import GetterTimeForHistoryPage from "../containers/GetterTimeForHistoryPage";
import LocalStorageAndStoreConnector from "../containers/LocalStorageAndStoreConnector";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <LocalStorageAndStoreConnector />
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
