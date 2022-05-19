import React, { useState, useEffect } from "react";
import { Button, Paper } from "@mui/material";
import { doc, setDoc } from "firebase/firestore";
import { StyleRoot } from "radium";
import { db } from "../Api/Firebase";
import { tools } from "../users/Helpers/EdtiorTools";
import parser from "html-react-parser";
import PortableText from "react-portable-text"
//<b style="fontSize:16px;">1.Long Term Scheduler (Job Scheduler) </b>

/*

  <button onClick={addProblem}> add code</button>
          {data.map((x, index) => {
            return (
              <div style={{ textAlign: "left" }} key={index}>
                {tools[x.name](x.value)}
              </div>
            );
          })}
 <div style={editorDiv}>
          <Paper style={{ backgroundColor: "black" }}>
            {editors.map((x, index) => (
              <Button style={toolNameBox} key={index}>
                {x}
              </Button>
            ))}
          </Paper>
        </div>


*/
const YourComponent = ({ portableTextContent }) => (
  <div>
    <PortableText
      // Pass in block content straight from Sanity.io
      content={portableTextContent}
      // Optionally override marks, decorators, blocks, etc. in a flat
      // structure without doing any gymnastics
      serializers={{
        h1: (props) => <h1 style={{ color: "red" }} {...props} />,
        li: ({ children }) => <li className="special-list-item">{children}</li>,
        someCustomType: YourComponent,
      }}
    />
  </div>
)
const bold = (value) => {
  return `<b> ${value} </b>`;
};
const data = [];

const editors = ["T", "H", "D", "</>", "I"];
export default function AddCS() {
  const [selected, setSelected] = useState("");

  useEffect(() => {
    const saveSelection = () => {
      setSelected(window.getSelection().toString());
    };
    document.addEventListener("mouseup", saveSelection);
    return () => document.removeEventListener("mouseup", saveSelection);
  }, []);

  const addProblem = () => {
    try {
      setDoc(
        doc(
          db,
          "CS-fundamentals",
          "Operating-Systems",
          "subtopics",
          "Page-Replacement-Algorithms"
        ),
        {
          timestamp: new Date(),
          data,
        }
      );
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <StyleRoot>
      <div style={{ display: "flex", flex: 1, flexDirection: "row" }}>
        <div style={leftDiv}></div>
        <div style={rightDiv}>

          {YourComponent}
        </div>
      </div>
    </StyleRoot>
  );
}
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
  flexDirection: "column",
  margin: 10,
  "@media (max-width: 600px)": {},
};

const toolNameBox = {
  padding: 2,
  fontWeight: "bold",
  color: "white",
};

const editorDiv = {
  position: "fixed",
  bottom: 0,
  display: "flex",
  justifyContent: "center",
  width: "100%",
};
