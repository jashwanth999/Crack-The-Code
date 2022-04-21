import { doc, setDoc } from "firebase/firestore";
import { StyleRoot } from "radium";
import React from "react";
import { db } from "../Api/Firebase";
import { tools } from "../users/Helpers/EdtiorTools";
// import TextEditor from "../users/Helpers/TextEditor";
// import MarkDown from "../users/Helpers/MarkDownEditor";

const data = [
  {
    name: "title",
    value: "Process",
  },
  {
    name: "description",
    value:
      "A process is basically a program in execution. The execution of a process must progress in a sequential fashion.",
  },
  {
    name: "image",
    value:
      "https://media.geeksforgeeks.org/wp-content/cdn-uploads/gq/2015/06/process.png",
  },
  {
    name: "header",
    value: "States of Process",
  },
  {
    name: "description",
    value: `1. New: Newly Created Process (or) being-created process.

2. Ready: After creation process moves to Ready state, i.e. the process is ready for execution.

3. Run: Currently running process in CPU (only one process at a time can be under execution in a single processor.

4. Wait (or Block): When a process requests I/O access.

5. Complete (or Terminated): The process completed its execution.

6. Suspended Ready: When the ready queue becomes full, some processes are moved to suspended ready state

7. Suspended Block: When waiting queue becomes full.`,
  },
  {
    name: "image",
    value:
      "https://media.geeksforgeeks.org/wp-content/cdn-uploads/gq/2015/06/process-states1.png",
  },
];
export default function AddCS() {
  const addProblem = () => {
    try {
      setDoc(
        doc(db, "CS-fundamentals", "Operating-Systems", "subtopics", "Process"),
        {
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
