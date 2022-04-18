import React, { useState } from "react";
import CodeEditor from "@uiw/react-textarea-code-editor";
import Tabs from "./Tabs";
import { Button, Paper } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { PropaneSharp } from "@mui/icons-material";
export default function ApproachComponent(props) {
  const [approachName, setApproachName] = useState(``);
  const [approachDescription, setApproachDescription] = useState(``);
  const [cppValue, setCppValue] = useState(``);
  const [javaValue, setJavaValue] = useState(``);
  const [pythonValue, setPythonValue] = useState(``);
  const [timeComplexity, setTimeComplexity] = useState(``);
  const [spaceComplexity, setSpaceComplexity] = useState(``);

  const [tags, setTags] = useState([]);
  const [tag, setTag] = useState("");

  const addTags = () => {
    if (tag) setTags([...tags, tag]);
  };
  const removeTags = (index) => {
    setTags((tag) => tag.filter((item, i) => i !== index));
  };
  const data = {
    approachName: approachName,
    approachDescription: approachDescription,
    cpp: cppValue,
    java: javaValue,
    python: pythonValue,
    complexity: {
      timeComplexity: timeComplexity,
      spaceComplexity: spaceComplexity,
    },
    tags: tags,
  };
  props.appoaches[props.index] = data;
  console.log(props.problemData);
  return (
    <Paper
      style={{
        padding: 15,
        display: "flex",
        flexDirection: "column",
        margin: 10,
        flex: 1,
        textAlign: "left",
        width: "90%",
      }}
    >
      <h4>
        Approach {props.index + 1} <span style={{ color: "red" }}>*</span>
      </h4>
      <div style={{ marginTop: 10, width: "70%" }}>
        <CodeEditor
          value={approachName}
          onChange={(e) => setApproachName(e.target.value)}
          language={""}
          placeholder="Add Approach Name"
          style={editorStyle}
        />
      </div>
      <div>
        <input
          placeholder="Add tags"
          value={tag}
          type="text"
          onChange={(e) => setTag(e.target.value)}
        />
        <Button onClick={addTags}>Add Tag</Button>
      </div>
      <br />
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {tags.map((x, index) => {
          return (
            <div
              key={index}
              style={{
                backgroundColor: "lightGrey",
                margin: 3,
                padding: 8,
                borderRadius: 5,
                display: "flex",
                alignItems: "center",
              }}
            >
              {" "}
              {x}{" "}
              <CloseIcon
                onClick={() => {
                  removeTags(index);
                }}
                style={{ color: "black", fontSize: 15, padding: 4 }}
              />
            </div>
          );
        })}
      </div>

      <div style={{ marginTop: 10, width: "70%" }}>
        <CodeEditor
          value={approachDescription}
          onChange={(e) => setApproachDescription(e.target.value)}
          language={""}
          placeholder="Add Approach description"
          style={editorStyle}
        />
      </div>

      <div style={{ width: "70%" }}>
        <Tabs
          cppValue={cppValue}
          javaValue={javaValue}
          pythonValue={pythonValue}
          setCppValue={setCppValue}
          setJavaValue={setJavaValue}
          setPythonValue={setPythonValue}
        />
      </div>
      <br />
      <input
        value={timeComplexity}
        onChange={(e) => setTimeComplexity(e.target.value)}
        placeholder="Time Complexity"
        type="text"
        style={{ width: "70%", height: 30, color: "black" }}
      />
      <br />
      <br />
      <input
        value={spaceComplexity}
        onChange={(e) => setSpaceComplexity(e.target.value)}
        placeholder="Space Complexity"
        type="text"
        style={{ width: "70%", height: 30, color: "black" }}
      />
      <br />
      <div style={{ width: "100%" }}>
        {props.index !== 0 && (
          <Button
            onClick={() => {
              props.removeApproach(props.index);
            }}
            variant="contained"
            color="secondary"
            style={{ float: "right", margin: 5 }}
          >
            {" "}
            remove Approach{" "}
          </Button>
        )}
        <Button
          onClick={() => {
            props.addApproach(props.index, data);
          }}
          variant="contained"
          style={{ float: "right", margin: 5 }}
        >
         
          New Approach
        </Button>
      </div>
    </Paper>
  );
}
const editorStyle = {
  fontSize: 14,
  borderRadius: 5,

  backgroundColor: "black",
  fontFamily:
    "ui-monospace,SFMono-Regular,SF Mono,Consolas,Liberation Mono,Menlo,monospace",
};
