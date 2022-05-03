import { Editor } from "react-draft-wysiwyg";
import { EditorState, convertToRaw } from "draft-js";
import React, { useEffect, useState } from "react";
import { draftToHtml } from "./draft-to-html";
import parser from "html-react-parser";
import Code from "../users/Helpers/Code";
import { collection, doc, onSnapshot, query, setDoc } from "firebase/firestore";
import { db } from "../Api/Firebase";
import { tools } from "../users/Helpers/EdtiorTools";
function TextEditor() {
  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  const [probName, setProbName] = useState("");
  // const [blocks, setBlocks] = useState({});
  const onEditorStateChange = (value) => {
    setEditorState(value);
  };
  const blocks = draftToHtml(convertToRaw(editorState.getCurrentContent()));
  const addProblem = () => {
    try {
      setDoc(
        doc(
          db,
          "cs-fundamentals",
          "OOPS-Concept",
          "subtopics",
          probName.replace(/ /g, "-")
        ),
        {
          timestamp: new Date(),
          blocks: blocks,
          probName: probName,
        }
      );
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div style={{ display: "flex", flex: 1, flexDirection: "row" }}>
      <div style={leftDiv}></div>
      <div style={rightDiv}>
        <button onClick={addProblem}> POST </button>
        <br />
        <input
          value={probName}
          onChange={(e) => setProbName(e.target.value)}
          placeholder="Problem Name"
          type="text"
          style={{ width: "70%", height: 30, color: "black" }}
        />
        <br />

        <Editor
          editorState={editorState}
          wrapperClassName="demo-wrapper"
          editorClassName="demo-editor"
          onEditorStateChange={onEditorStateChange}
        />
        <div style={{ margin: 10 }}>
          {blocks.map((block, index) => {
            if (block.code) {
              return <Code code={block.val} language={"cpp"} />;
            } else {
              return (
                <p
                  style={{
                    textAlign: "left",
                    fontFamily:
                      "ui-monospace,SFMono-Regular,SF Mono,Consolas,Liberation Mono",
                  }}
                >
                  {" "}
                  {parser(block.val)}{" "}
                </p>
              );
            }
          })}
        </div>
      </div>
    </div>
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

export default TextEditor;
