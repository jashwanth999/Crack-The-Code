import { StyleRoot } from "radium";
import React from "react";
import { useNavigate } from "react-router-dom";
import LeftDiv from "../Helpers/LeftDiv";
import RightDiv from "../Helpers/RightDiv";

//import LeftDrawer from "../Helpers/LeftDrawer";
function truncate(string, length) {
  if (string.length > length) return string.substring(0, length) + "...";
  else return string;
}
const list = [
  "1 Two Sum",
  "2 Three Sum",
  "4 Longest Common Subsequence",
  "5 Longest Common Substring",
  "1 Two Sum",
  "2 Three Sum",
  "4 Longest Common Subsequence",
  "5 Longest Common Substring",
  "1 Two Sum",
  "2 Three Sum",
  "4 Longest Common Subsequence",
  "5 Longest Common Substring",
  "1 Two Sum",
  "2 Three Sum",
  "4 Longest Common Subsequence",
  "5 Longest Common Substring",
  "1 Two Sum",
  "2 Three Sum",
  "4 Longest Common Subsequence",
  "5 Longest Common Substring",
  "2 Three Sum",
  "4 Longest Common Subsequence",
  "5 Longest Common Substring",
  "2 Three Sum",
  "4 Longest Common Subsequence",
  "5 Longest Common Substring",
  "2 Three Sum",
  "4 Longest Common Subsequence",
  "5 Longest Common Substring",
  "2 Three Sum",
  "4 Longest Common Subsequence",
  "5 Longest Common Substring",
];

export default function SolutionScreen() {
  const navigate = useNavigate();
  return (
    <StyleRoot>
      <div className="App" style={rootDiv}>
        <div style={leftDiv}>
          <LeftDiv list={list} navigate={navigate} truncate={truncate} />
        </div>
        <div style={rightDiv}>
          <RightDiv />
        </div>
      </div>
    </StyleRoot>
  );
}
const rootDiv = {
  display: "flex",
  flexDirection: "row",
  flex: 1,
  "::-webkit-scrollbar": {
    display: "none",
  },
};
const leftDiv = {
  display: "flex",
  flex: 0.25,
  backgroundColor: "#212F3C",
  height: "100vh",
  flexDirection: "column",
  textAlign: "left",
  overflowY: "scroll",
  "@media (max-width: 500px)": {
    display: "none",
  },
};
const rightDiv = {
  display: "flex",
  flex: 1,
  backgroundColor: "white",
  height: "100vh",
  overflowY: "scroll",
  "@media (max-width: 500px)": {},
};
