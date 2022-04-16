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
  return (
    <div style={rootDiv}>
      <h2 style={{ color: "#3498DB" }}>{props.problemdata?.subTopicName}</h2>
      {props.problemdata?.description && (
        <>
          <h3 style={headerStyle}>Description</h3>
          <Paper elevation={0} style={descPaper}>
            <Typography style={{ whiteSpace: "pre-line" }}>
              {props.problemdata?.description}
            </Typography>
          </Paper>
        </>
      )}

      {props.problemdata?.image && (
        <div >
          <img
            style={{ objectFit: "contain", width: 340 }}
            alt=""
            src={props.problemdata.image}
          />
        </div>
      )}
      {props.problemdata?.exampleCodesList &&
        props.problemdata.exampleCodesList.map(
          (data, index) =>
            data.exampleCode &&
            data.output && (
              <div key={index}>
                <h3 style={headerStyle}>{data.exampleCodeName}</h3>
                {data.exampleCodeDescription && (
                  <Paper elevation={0} style={descPaper}>
                    <Typography style={{ whiteSpace: "pre-line" }}>
                      {data.exampleCodeDescription}
                    </Typography>
                  </Paper>
                )}

                <ExampleCode
                  lineNum={true}
                  code={data.exampleCode.code}
                  language={data.exampleCode.language}
                />
                <h4 style={output}>output:</h4>
                <ExampleCode
                  lineNum={false}
                  code={data.output.code}
                  language={data.output.language}
                />
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

const headerStyle = {
  margin: 10,
  borderLeft: "solid #2E86C1 4px",
  paddingTop: 0,
  paddingLeft: 5,
  paddingBottom: 0,
  textAlign: "left",
};
const output = {
  margin: 10,
  paddingTop: 0,
  paddingLeft: 5,
  paddingBottom: 0,
  textAlign: "left",
};
