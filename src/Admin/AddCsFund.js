import React, { useState, useEffect } from "react";
import { Button, Paper } from "@mui/material";
import { doc, setDoc } from "firebase/firestore";
import { StyleRoot } from "radium";
import { db } from "../Api/Firebase";
import { tools } from "../users/Helpers/EdtiorTools";
import parser from "html-react-parser";
//<b style="fontSize:16px;">1.Long Term Scheduler (Job Scheduler) </b>

const bold = (value) => {
  return `<b> ${value} </b>`;
};
const data = [
  {
    name: "title",
    value: "Page Replacement Algorithms",
  },

  {
    name: "description",
    value: `- The Page Replacement Algorithm decides which memory page is to be replaced. The process of replacement is sometimes called swap out or write to disk.
  
- These algorithms aim to reduce the number of page faults.`,
  },
  {
    name: "header",
    value: "Algorithms",
  },
  {
    name: "description",
    value: `<b style="fontSize:16px;text-decoration:underline;text-underline-offset: 2px;">First In First Out (FIFO)</b>

-In this algorithm, the operating system keeps track of all pages in the memory in a queue, the oldest page is in the front of the queue.

- When a page needs to be replaced,the page in the front of the queue is selected for removal.


<b style="fontSize:16px;text-decoration:underline;text-underline-offset: 2px;">Optimal Page Replacement</b>

- This algorithm replaces the page which will not be referred for so long in future, i.e., the pages in the memory which are going to be referred farthest in the future are replaced.


<b style="fontSize:16px;text-decoration:underline;text-underline-offset: 2px;">Least Recently Used (LRU)</b>

- This algorithm keeps track of page usage over a short period of time. It works on the idea that the pages that have been most heavily used in the past are most likely to be used heavily in the future too.`,
  },
];

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
