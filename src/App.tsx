import React, { useEffect, useState, CSSProperties } from "react";
import { Dashboard } from "./pages/Dashboard";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";
import BuildPage from "./pages/Builder";
import Resume from "./pages/Resume";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/resume/:id" element={<Resume />}></Route>
          <Route path="/" element={<Dashboard />} />
          <Route path="/build" element={<BuildPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
