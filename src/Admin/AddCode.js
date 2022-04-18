import React, { useState } from "react";
import CodeEditor from "@uiw/react-textarea-code-editor";
import ApproachComponent from "./ApproachComponent";
import { doc, setDoc } from "firebase/firestore";
import { db } from "../Api/Firebase";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { Button } from "@mui/material";
export default function AddCode() {
  // const [lang, setLang] = useState("cpp");

  const [difficult, setDifficult] = useState(`Easy`);

  const handleChange = (event) => {
    setDifficult(event.target.value);
  };

  const [appoaches, setApproaches] = useState([{}]);
  const [probNumber, setProbNumber] = useState();
  const [probName, setProbName] = useState(``);

  const [probStatement, setProbStatement] = useState(``);
  const [testCases, setTestCases] = useState(``);

  const addApproach = (index, data) => {
   // appoaches[index] = data;

    setApproaches([...appoaches, {}]);
  };

  const removeApproach = (index) => {
    if (appoaches.length === 1) {
      return alert("atleast one approach should be there");
    }
    setApproaches((approaches) => approaches.filter((item, i) => i !== index));
  };

  const problemData = {
    problemName: probName,
    no: Number(probNumber),
    difficult: difficult,
    problemStatement: probStatement,
    testCases: testCases,
    approachList: appoaches,
    links: "https://youtube.com/embed/dRUpbt8vHpo",
    timestamp: new Date(),
  };
  const post = () => {
    if (!probName || !probNumber || probStatement)
      try {
        setDoc(
          doc(db, "leetcode-sols", probName.replace(/ /g, "-")),
          problemData
        );
      } catch (error) {
        alert(error.message);
      }
  };
  console.log(problemData);
  return (
    <div style={rootDiv}>
      <h3> Add data</h3>
      <div style={{ textAlign: "left", width: "90%" }}>
        <h4>
          Problem number <span style={{ color: "red" }}>*</span>
        </h4>
        <input
          value={probNumber}
          onChange={(e) => setProbNumber(e.target.value)}
          placeholder="Problem Number"
          type="number"
          style={{ width: "70%", height: 30, color: "black" }}
        />
        <br />
        <br />
        <Box sx={{ width: 120 }}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Difficulty</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={difficult}
              label="Difficulty"
              onChange={handleChange}
            >
              <MenuItem value={"Easy"}>Easy</MenuItem>
              <MenuItem value={"Medium"}>Medium</MenuItem>
              <MenuItem value={"Hard"}>Hard</MenuItem>
            </Select>
          </FormControl>
        </Box>

        <h4>
          Problem name <span style={{ color: "red" }}>*</span>
        </h4>
        <input
          value={probName}
          onChange={(e) => setProbName(e.target.value)}
          placeholder="Problem Name"
          type="text"
          style={{ width: "70%", height: 30, color: "black" }}
        />

        <h4>
          Problem Statement <span style={{ color: "red" }}>*</span>
        </h4>
        <div style={{ marginTop: 10, width: "70%" }}>
          <CodeEditor
            value={probStatement}
            onChange={(e) => setProbStatement(e.target.value)}
            language={""}
            placeholder="Add Problem statement"
            style={editorStyle}
          />
        </div>

        <h4>
          Test Cases <span style={{ color: "red" }}>*</span>{" "}
        </h4>
        <div style={{ marginTop: 10, width: "70%" }}>
          <CodeEditor
            value={testCases}
            onChange={(e) => setTestCases(e.target.value)}
            language={""}
            placeholder="Paste all sample test cases"
            style={editorStyle}
          />
        </div>
      </div>

      {appoaches.map((x, index) => {
        return (
          <ApproachComponent
            key={index}
            index={index}
            addApproach={addApproach}
            removeApproach={removeApproach}
            appoaches={appoaches}
            problemData={problemData}
          />
        );
      })}
      <br />
      <Button variant="contained" onClick={post}>
        {" "}
        Post
      </Button>
    </div>
  );
}

const editorStyle = {
  fontSize: 14,
  borderRadius: 5,

  backgroundColor: "black",
  fontFamily:
    "ui-monospace,SFMono-Regular,SF Mono,Consolas,Liberation Mono,Menlo,monospace",
};
const rootDiv = {
  padding: 20,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  flex: 1,
};
