import CodeEditor from "@uiw/react-textarea-code-editor";
import { StyleRoot } from "radium";
import React from "react";
export default function Editor(props) {
  // onChange={(evn) => setCode(evn.target.value)}
  return (
    <StyleRoot>
      <div style={{ margin: 10 }}>
        <CodeEditor
          value={props.code}
          language={props.language}
          placeholder=""
          padding={15}
          style={editorStyle}
        />
      </div>
    </StyleRoot>
  );
}
const editorStyle = {
  fontSize: "0.9rem",
  borderRadius: 5,
  minWidth: 250,
  overflowX: "scroll",
  backgroundColor: "#212F3C",
  fontFamily:
    "ui-monospace,SFMono-Regular,SF Mono,Consolas,Liberation Mono,Menlo,monospace",
  "@media (max-width: 600px)": {},
};
