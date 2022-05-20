import React from "react";
import CodeMirror from "@uiw/react-codemirror";
import "codemirror/keymap/sublime";
import "codemirror/theme/monokai.css";
import "codemirror/theme/dracula.css";
import "codemirror/theme/material.css";
export default function Code(props) {
  return (
    <div style={{ textAlign: "left", margin: 10 }}>
      <CodeMirror
        value={props.code}
        options={{
          theme: "dracula",
          keyMap: "sublime",
          mode: `${props.language}`,
          readOnly: `${props.disabled}`,
          lineNumbers: false,
        }}
      />
    </div>
  );
}
