import React from "react";
import { Routes, Route } from "react-router-dom";
import AddLeetcode from "../../Admin/AddLeetcode";
import ComputerScienceFundamentals from "../Screens/ComputerScienceFundamental";
import Home from "../Screens/Home";
import LeetCodeScreen from "../Screens/LeetCodeScreen";

export default function RoutesComponent() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/leetcode-solutions/:id" element={<LeetCodeScreen />} />
      <Route
        exact={true}
        path="/cs-fundamentals/:subjectName/:subTopicName"
        element={<ComputerScienceFundamentals />}
      />
      <Route path="/Admin" element={<AddLeetcode />} />
    </Routes>
  );
}
