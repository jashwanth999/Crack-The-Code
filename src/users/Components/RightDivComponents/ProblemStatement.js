import React from "react";
import Editor from "../../Helpers/Editor";
export default function ProblemStatement(props) {
  return (
    <>
      <h3 style={props.headerStyle}> Problem Statement</h3>
      <Editor
        code={props.problemData.problemStatement}
        language={"text"}
        disabled={true}
      />
    </>
  );
}
