import React from "react";
import { Routes, Route } from "react-router-dom";
import AddCS from "../../Admin/AddCsFund";
import AddLeetcode from "../../Admin/AddLeetcode";
import Compiler from "../../Compiler/Compiler";
import ComputerScienceFundamentals from "../Screens/ComputerScienceFundamental";
import Home from "../Screens/Home";
import LeetCodeScreen from "../Screens/LeetCodeScreen";
import CTCNavBar from "./CTCNavBar";
export default function RoutesComponent() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/leetcode-solutions/:id" element={<LeetCodeScreen />} />
        <Route
          exact={true}
          path="/cs-fundamentals/:subjectName/:subTopicName"
          element={<ComputerScienceFundamentals />}
        />
        <Route path="/Addleetcode" element={<AddLeetcode />} />
        <Route path="/Addcs" element={<AddCS />} />
        <Route path="/Compiler" element={<Compiler />} />
      </Routes>
    </>
  );
}
