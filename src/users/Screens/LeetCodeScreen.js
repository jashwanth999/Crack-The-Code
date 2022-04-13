import { StyleRoot } from "radium";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import LeftDiv from "../Helpers/LeftDiv";
import RightDiv from "../Helpers/RightDiv";
import "../../App.css";
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "../../Api/Firebase";
import { useDispatch, useSelector } from "react-redux";
import { drawerListAction } from "../../Api/actions";
import LeftDrawer from "../Helpers/LeftDrawer";
//import LeftDrawer from "../Helpers/LeftDrawer";
function truncate(string, length) {
  if (string.length > length) return string.substring(0, length) + "...";
  else return string;
}
export default function SolutionScreen() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const problemsList = useSelector((state) => state.list.list);

  useEffect(() => {
    const unsub = onSnapshot(
      collection(db, "leetcode-solutions"),
      (snapshot) => {
        dispatch(
          drawerListAction(snapshot.docs.map((doc) => doc.data().problemName))
        );
      }
    );
    return unsub;
  }, [dispatch]);
  return (
    <StyleRoot>
      <div className="App" style={rootDiv}>
        <div className="leftDiv" style={leftDiv}>
          <LeftDiv
            list={problemsList}
            navigate={navigate}
            truncate={truncate}
            title={"Leetcode Problems"}
          />
        </div>
        <div className="rightDiv" style={rightDiv}>
          <RightDiv />
        </div>
      </div>
      <LeftDrawer title={"Leetcode Problems"} />
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
  justifyContent: "center",
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
