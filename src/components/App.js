import React from "react";
import SetterTimePageA from "../containers/SetterTimePageA";
import SetterTimePageB from "../containers/SetterTimePageB";
import Main from "./Main";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/a" element={<SetterTimePageA />} />
          <Route path="/b" element={<SetterTimePageB />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
