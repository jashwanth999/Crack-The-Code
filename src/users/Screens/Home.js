import { StyleRoot } from "radium";
import * as React from "react";
import FieldCard from "../Components/HomeComponents/FieldCard";
import "../../App.css";
export default function Home() {
  return (
    <StyleRoot>
      <div style={rootDiv}>
        <div style={leftDiv}></div>
        <div style={rightDiv}>
          <div style={leftCardDiv}>
            <FieldCard />
          </div>
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
  height: "100vh",
  textAlign: "left",
  backgroundColor: "#212F3C",
  "@media (max-width: 600px)": {
    display: "none",
  },
};
const rightDiv = {
  display: "flex",
  flex: 1,
  height: "100vh",
  overflowY: "scroll",
 
  "@media (max-width: 600)": {
    flex: 1,
  
  },
};

const leftCardDiv = {
  height: "auto",
  width: "100%",
  margin: 6,
  textAlign: "left",
  padding: 10,
};
