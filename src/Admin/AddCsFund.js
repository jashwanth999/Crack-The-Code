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
    value: "Encapsulation",
  },

  {
    name: "description",
    value: `Encapsulation is defined as wrapping up of data and information under a single unit. 

In Object Oriented Programming, Encapsulation is defined as binding together the data and the functions that manipulates them.`,
  },
  {
    name: "onlycpp",
    value: `#include <bits/stdc++.h>
using namespace std;
  
class Encapsulation
{
    private:
        // data hidden from outside world
        int x;
          
    public:
        // function to set value of 
        // variable x
        void set(int a)
        {
            x =a;
        }  
        // function to return value of
        // variable x
        int get()
        {
            return x;
        }
  };
      
// main function
int main()
{
  Encapsulation obj;
  
  obj.set(5);
  
  cout<<obj.get();
  return 0;
}`,
  },
  {
    name: "header",
    value: `output:`,
  },
  {
    name: "description",
    value: `5`,
  },
  {
    name: "description",
    value: `In the above program the variable x is made private. This variable can be accessed and manipulated only using the functions get() and set() which are present inside the class. Thus we can say that here, the variable x and the functions get() and set() are binded together which is nothing but encapsulation.`,
  },
];

export default function AddCS() {
  const addProblem = () => {
    try {
      setDoc(
        doc(
          db,
          "CS-fundamentals",
          "OOPS-Concept",
          "subtopics",
          "Encapsulation"
        ),
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
