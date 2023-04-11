import React from "react";
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./Components/LoginPage";
import Home from "./Components/Home";
import Posts from "./Components/Posts";
function App() {
  const [indIdData, setIndIdData] = useState([]);
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route
            path="/home"
            element={<Home indIdData={indIdData} setIndIdData={setIndIdData} />}
          />
          <Route
            path="/posts/:Id"
            element={
              <Posts indIdData={indIdData} setIndIdData={setIndIdData} />
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
