import { StyleRoot } from "radium";
import React from "react";
import { useNavigate } from "react-router-dom";
import LeftDrawer from "../Helpers/LeftDrawer";
import LeftDiv from "../Components/CSfundComponents/LeftDiv";
import { truncate } from "../Helpers/helpersData";
export default function ComputerScienceFundamentals() {
  const navigate = useNavigate();
  return (
    <StyleRoot>
      <div className="App" style={rootDiv}>
        <div className="leftDiv" style={leftDiv}>
          <LeftDiv
            title={"CS Fundamentals"}
            truncate={truncate}
            navigate={navigate}
          />
        </div>
        <div className="rightDiv" style={rightDiv}></div>
      </div>
      <LeftDrawer
        component={
          <LeftDiv
            title={"CS Fundamentals"}
            truncate={truncate}
            navigate={navigate}
          />
        }
      />
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
