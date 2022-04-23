import React from "react";
import AceEditor from "react-ace";
import "ace-builds/src-noconflict/ext-language_tools";
import "ace-builds/src-noconflict/mode-python";
import "ace-builds/src-noconflict/mode-java";
import "ace-builds/src-noconflict/mode-c_cpp";
import "ace-builds/src-noconflict/theme-monokai";

export default function CompilerEditor(props) {
  return (
    <AceEditor
      mode={props.lang === "cpp" ? "c_cpp" : props.lang}
      theme="monokai"
      onChange={props.onChange}
      name="Compiler"
      value={props.value[props.lang]}
      editorProps={{ $blockScrolling: true }}
      height="380px"
      fontSize={14}
      showPrintMargin={false}
      style={{ borderRadius: 4, margin: 10, minWidth: 300 }}
      width="100%"
    />
  );
}
