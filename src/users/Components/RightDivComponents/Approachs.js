import { Paper, Typography } from "@mui/material";
import React from "react";
import ExampleCode from "../../Helpers/exampleCode";
export default function Approachs(props) {
  return (
    <>
      {props.problemData.approachList?.map((data, index) => {
        return (
          <div key={index}>
            <h3 style={props.headerStyle}>
              Approach {index + 1} - {data.approachName}{" "}
            </h3>
            <Paper style={props.statementDiv} elevation={0}>
              <Typography style={{ margin: 10 }}>
                {data.approachDescription}
                <br />
              </Typography>
            </Paper>
            <ExampleCode
              lineNum={true}
              language={data.language}
              code={data.code}
            />
            <Paper elevation={0} style={props.complexityPaper}>
              <h3 style={props.complexityTexts}>
                Time Complexity : {data.complexity.timeComplexity}
              </h3>
              <Typography style={props.complexityDesc}>
                {data.complexity.timeDesc}
              </Typography>

              <h3 style={props.complexityTexts}>
                Space Complexity : {data.complexity.spaceComplexity}
              </h3>

              <Typography style={props.complexityDesc}>
                {data.complexity.spaceDesc}
              </Typography>
            </Paper>
          </div>
        );
      })}
    </>
  );
}
