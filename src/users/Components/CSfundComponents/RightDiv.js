import { Paper, Typography } from "@mui/material";
import React from "react";
//import ExampleCode from "../../Helpers/exampleCode";
import ReactLoading from "react-loading";
import Editor from "../../Helpers/Editor";
import Code from "../../Helpers/Code";
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
  return (
    <div style={rootDiv}>
      {props.problemdata?.description && (
        <>
          <h3 style={{ color: "#3498DB", margin: 10 }}>
            {props.problemdata?.subTopicName}
          </h3>
          <Editor
            code={props.problemdata?.description}
            language={"text"}
            disabled={true}
          />
        </>
      )}

      {props.problemdata?.exampleCodesList &&
        props.problemdata.exampleCodesList.map(
          (data, index) =>
            data.exampleCode &&
            data.output && (
              <div key={index}>
                {data.exampleCodeDescription && (
                  <Paper elevation={0} style={descPaper}>
                    <Typography style={{ whiteSpace: "pre-line" }}>
                      {data.exampleCodeDescription}
                    </Typography>
                  </Paper>
                )}
                <div style={{}}>
                  {" "}
                  <Code
                    lineNum={true}
                    code={data.exampleCode.code}
                    language={data.exampleCode.language}
                    disabled={true}
                  />
                  <Editor
                    lineNum={false}
                    code={"text"}
                    language={data.output.language}
                    disabled={true}
                  />
                </div>
              </div>
            )
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

// const headerStyle = {
//   margin: 10,
//   borderLeft: "solid #2E86C1 4px",
//   paddingTop: 0,
//   paddingLeft: 5,
//   paddingBottom: 0,
//   textAlign: "left",
// };
// const output = {
//   margin: 10,
//   paddingTop: 0,
//   paddingLeft: 5,
//   paddingBottom: 0,
//   textAlign: "left",
// };
