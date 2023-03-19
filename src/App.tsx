import React, { useEffect, useState, CSSProperties } from "react";
import { Dashboard } from "./pages/Dashboard";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";
import BuildPage from "./pages/Builder";
import { Resumes } from "./pages/Resumes";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/resume/:id" element={<Resumes />}></Route>
          <Route path="/" element={<Dashboard />} />
          <Route path="/build" element={<BuildPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
