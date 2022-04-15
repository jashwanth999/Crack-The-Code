import { Paper, Typography } from "@mui/material";
import React from "react";
import ExampleCode from "../../Helpers/exampleCode";
import ReactLoading from "react-loading";
export default function RightDiv(props) {
  if (props.loading)
    return (
      <div
        style={{ ...rootDiv, justifyContent: "center", alignItems: "center" }}
      >
        <ReactLoading
          height={55}
          width={55}
          type={"spinningBubbles"}
          color="rgb(0, 30, 60)"
        />
      </div>
    );

  console.log(props.problemdata);
  return (
    <div style={rootDiv}>
      <h3 style={{ color: "#3498DB" }}>{props.problemdata?.subTopicName}</h3>

      <h3 style={headerStyle}>Description</h3>
      <Paper elevation={0} style={descPaper}>
        <Typography style={{ whiteSpace: "pre-line" }}>
          {props.problemdata?.description}
        </Typography>
      </Paper>
      <h3 style={headerStyle}>Example Code</h3>
      {props.problemdata?.exampleCode && (
        <ExampleCode
          lineNum={true}
          code={props.problemdata?.exampleCode?.code}
          language={props.problemdata?.exampleCode?.language}
        />
      )}

      <h3 style={headerStyle}>Output</h3>

      {props.problemdata?.output && (
        <ExampleCode
          lineNum={false}
          code={props.problemdata?.output?.code}
          language={props.problemdata?.output?.language}
        />
      )}
    </div>
  );
}
const descPaper = {
  backgroundColor: "#ECF0F1",
  margin: 10,
  display: "flex",
  textAlign: "left",
  padding: 10,
};

const rootDiv = {
  display: "flex",
  flexDirection: "column",
  width: "98%",
};

const headerStyle = {
  margin: 10,
  borderLeft: "solid #2E86C1 4px",
  paddingTop: 0,
  paddingLeft: 5,
  paddingBottom: 0,
  textAlign: "left",
};
