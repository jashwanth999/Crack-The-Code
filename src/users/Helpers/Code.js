import React from "react";
import CodeMirror from "@uiw/react-codemirror";
import "codemirror/keymap/sublime";
import "codemirror/theme/monokai.css";

export default function Code(props) {
  return (
    <div style={{ textAlign: "left", margin: 10 }}>
      <CodeMirror
        value={props.code}
       
        options={{
          theme: "monokai",
          keyMap: "sublime",
          mode: `${props.language}`,
          readOnly: `${props.disabled}`,
        }}
      />
    </div>
  );
}
