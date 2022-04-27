import { doc, setDoc } from "firebase/firestore";
import { StyleRoot } from "radium";
import React from "react";
import { db } from "../Api/Firebase";
import { tools } from "../users/Helpers/EdtiorTools";

//<b style="fontSize:16px;">1.Long Term Scheduler (Job Scheduler) </b>
const data = [
  {
    name: "title",
    value: "Critical Section Problem",
  },

  {
    name: "description",
    value: `The critical section is a code segment where the shared variables can be accessed. An atomic action is required in a critical section i.e. only one process can execute in its critical section at a time. All the other processes have to wait to execute in their critical sections.`,
  },
  {
    name: "image",
    value: "https://www.tutorialspoint.com/assets/questions/media/12659/Critical%20Section.PNG",
  },
  {
    name: "header",
    value: "Solution to the Critical Section Problem",
  },
  {
    name: "description",
    value: `<b style="fontSize:16px;">Mutual Exclusion</b>: Mutual exclusion implies that only one process can be inside the critical section at any time. If any other processes require the critical section, they must wait until it is free

<b style="fontSize:16px;">Progresst</b>: Progress means that if a process is not using the critical section, then it should not stop any other process from accessing it. In other words, any process can enter a critical section if it is free.

<b style="fontSize:16px;">Bounded Waiting</b>: Bounded waiting means that each process must have a limited waiting time. It should not wait endlessly to access the critical section.
`,
  },

];

export default function AddCS() {
  const addProblem = () => {
    try {
      setDoc(
        doc(
          db,
          "CS-fundamentals",
          "Operating-Systems",
          "subtopics",
          "Critical-Section-Problem"
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
