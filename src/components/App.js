import React from "react";
import ActivityTracker from "../containers/ActivityTracker";
import GetterDataForHistoryPage from "../containers/GetterDataForHistoryPage";
import LocalStorageAndStoreConnector from "../containers/LocalStorageAndStoreConnector";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <LocalStorageAndStoreConnector />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ActivityTracker />} />
          <Route path="/history" element={<GetterDataForHistoryPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
