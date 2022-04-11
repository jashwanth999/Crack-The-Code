import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../Screens/Home";
import SolutionScreen from "../Screens/SolutionScreen";

export default function RoutesComponent() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:name/:id" element={<SolutionScreen />} />
      </Routes>
    </Router>
  );
}
