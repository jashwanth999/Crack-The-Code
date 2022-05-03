import React from "react";
import { Routes, Route } from "react-router-dom";
import AddCS from "../../Admin/AddCsFund";
import AddLeetcode from "../../Admin/AddLeetcode";
import TextEditor from "../../Admin/Editor";
import Compiler from "../../Compiler/Compiler";
import ComputerScienceFundamentals from "../Screens/ComputerScienceFundamental";
import CSsolutions from "../Screens/CSsoultions";
import Home from "../Screens/Home";
import LeetCodeScreen from "../Screens/LeetCodeScreen";
///:subjectName/:subTopicName
export default function RoutesComponent() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/leetcode-solutions/:id" element={<LeetCodeScreen />} />
        <Route
          exact={true}
          path="/cs-fundamentals"
          element={<ComputerScienceFundamentals />}
        />
        <Route
          exact={true}
          path="/cs-fundamentals/:subjectName/:subTopicName"
          element={<CSsolutions />}
        />
        <Route path="/Addleetcode" element={<AddLeetcode />} />
        <Route path="/Addcs" element={<AddCS />} />
        <Route path="/Compiler" element={<Compiler />} />
        <Route path="/Ad" element={<TextEditor />} />
      </Routes>
    </>
  );
}
