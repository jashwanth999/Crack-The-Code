import { Paper, Typography } from "@mui/material";
import React from "react";
import { colorList } from "../../../Helpers/helpersData";
import ExampleCode from "../../../Helpers/exampleCode";
import Tags from "./Tags";
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
              <ExampleCode
                lineNum={false}
                language={"text"}
                code={data.approachDescription}
              />
            </Paper>

            <Tags colorList={colorList} problemData={props.problemData} />
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
