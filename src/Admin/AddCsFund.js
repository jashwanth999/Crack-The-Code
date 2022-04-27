import { Button, Paper } from "@mui/material";
import { doc, setDoc } from "firebase/firestore";
import { StyleRoot } from "radium";
import React, { useState } from "react";
import { db } from "../Api/Firebase";
import { tools } from "../users/Helpers/EdtiorTools";

//<b style="fontSize:16px;">1.Long Term Scheduler (Job Scheduler) </b>
const data = [
  {
    name: "title",
    value: "Virtual Memory",
  },

  {
    name: "description",
    value: `- It is the separation of logical memory from physical memory. This separation provides large virtual memory for programmers when only small physical memory is available.
  
- System appears to have more memory than what actually exists.
`,
  },
  {
    name: "image",
    value:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ88X31izx0I9B4-UOF9yZLt0cY5xRCGFfh0w&usqp=CAU",
  },
];

const editors = ["T", "H", "D", "</>", "I"];
export default function AddCS() {
  const [addData, setAddData] = useState([]);
  const addProblem = () => {
    try {
      setDoc(
        doc(
          db,
          "CS-fundamentals",
          "Operating-Systems",
          "subtopics",
          "Virtual-Memory"
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
          <button onClick={addProblem}> add code</button>
          {data.map((x, index) => {
            return (
              <div style={{ textAlign: "left" }} key={index}>
                {tools[x.name](x.value)}
              </div>
            );
          })}
        </div>
        <div style={editorDiv}>
          <Paper style={{ backgroundColor: "black" }}>
            {editors.map((x, index) => (
              <Button style={toolNameBox} key={index}>
                {x}
              </Button>
            ))}
          </Paper>
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
