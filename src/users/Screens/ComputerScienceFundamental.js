import { StyleRoot } from "radium";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import "../../App.css";
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "../../Api/Firebase";
import { useDispatch } from "react-redux";
import { drawerListAction } from "../../Api/actions";
import LeftDrawer from "../Helpers/LeftDrawer";

function truncate(string, length) {
  if (string.length > length) return string.substring(0, length) + "...";
  else return string;
}
export default function ComputerScienceFundamentals() {
  const navigate = useNavigate();
  const [problemsList, setProblemsList] = useState([]);

  return (
    <StyleRoot>
      <div className="App" style={rootDiv}>
        <div className="leftDiv" style={leftDiv}></div>
        <div className="rightDiv" style={rightDiv}></div>
      </div>
      <LeftDrawer title={"Computer Science Fundamentals"} />

    </StyleRoot>
  );
}
const rootDiv = {
  display: "flex",
  flexDirection: "row",
  flex: 1,
};
const leftDiv = {
  display: "flex",
  flex: 0.25,
  backgroundColor: "#212F3C",
  height: "90vh",
  flexDirection: "column",
  textAlign: "left",
  overflowY: "scroll",
  "@media (max-width: 600px)": {
    display: "none",
  },
};
const rightDiv = {
  display: "flex",
  flex: 1,
  backgroundColor: "white",
  height: "90vh",
  overflow: "auto",
  "@media (max-width: 600px)": {},
};
