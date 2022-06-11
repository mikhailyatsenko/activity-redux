import React from "react";
import SetterTimePage from "../containers/SetterTimePage";
import GetterTimeForPageA from "../containers/GetterTimeForPageA";
import GetterTimeForPageB from "../containers/GetterTimeForPageB";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SetterTimePage />} />
          <Route path="/a" element={<GetterTimeForPageA />} />
          <Route path="/b" element={<GetterTimeForPageB />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
