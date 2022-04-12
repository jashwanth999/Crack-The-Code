import React from "react";
import { Routes, Route } from "react-router-dom";
import AddLeetcode from "../../Admin/AddLeetcode";
import Home from "../Screens/Home";
import SolutionScreen from "../Screens/SolutionScreen";

export default function RoutesComponent() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/:name/:id" element={<SolutionScreen />} />
      <Route path="/Admin" element={<AddLeetcode />} />
    </Routes>
  );
}
