import { StyleRoot } from "radium";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import LeftDiv from "../Helpers/LeftDiv";
import RightDiv from "../Helpers/RightDiv";
import "../../App.css";
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "../../Api/Firebase";
import { useDispatch } from "react-redux";
import { drawerListAction } from "../../Api/actions";
//import LeftDrawer from "../Helpers/LeftDrawer";
function truncate(string, length) {
  if (string.length > length) return string.substring(0, length) + "...";
  else return string;
}
export default function SolutionScreen() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [problemsList, setProblemsList] = useState([]);

  useEffect(() => {
    const unsub = onSnapshot(
      collection(db, "leetcode-solutions"),
      (snapshot) => {
        setProblemsList(snapshot.docs.map((doc) => doc.data().problemName));
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
          />
        </div>
        <div className="rightDiv" style={rightDiv}>
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
 
};
const leftDiv = {
  display: "flex",
  flex: 0.25,
  backgroundColor: "#212F3C",
  height: "100vh",
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
  height: "100vh",
  overflow: "auto",
  "@media (max-width: 600px)": {},
};
