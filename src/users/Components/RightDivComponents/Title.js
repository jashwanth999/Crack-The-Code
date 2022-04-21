import React from "react";

export default function Title(props) {
  return (
    <>
      <h2 style={{ color: "#3498DB" }}>{props.problemData.problemName}</h2>
      <span
        style={{
          ...props.difficultSpan,
          backgroundColor: props.colorList[props.problemData.difficult],
        }}
      >
        {props.problemData.difficult}
      </span>
    </>
  );
}

