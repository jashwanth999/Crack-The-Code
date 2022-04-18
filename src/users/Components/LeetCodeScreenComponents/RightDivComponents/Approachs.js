import { Paper, Typography } from "@mui/material";
import React from "react";
import { colorList } from "../../../Helpers/helpersData";
import ExampleCode from "../../../Helpers/exampleCode";
import Tags from "./Tags";
import Editor from "../../../Helpers/Editor";
import CodeView from "../../../Helpers/CodeView";
import CodeTab from "../../../Helpers/CodeTab";
export default function Approachs(props) {
  return (
    <>
      {props.problemData.approachList?.map((data, index) => {
        return (
          <div style={{ textAlign: "left" }} key={index}>
            <h3 style={props.headerStyle}>
              Approach {index + 1} - {data.approachName}{" "}
            </h3>
            <Paper style={props.statementDiv} elevation={0}>
              <Typography style={{ padding: 5, whiteSpace: "pre-wrap" }}>
                {" "}
                {data.approachDescription}
              </Typography>
            </Paper>

            <Tags colorList={colorList} data={data} />
            <div style={{ margin: 10 }}>
              <CodeTab data={data} />
            </div>
            <Paper elevation={0} style={props.complexityPaper}>
              <h3 style={props.complexityTexts}>
                Time Complexity : {data.complexity.timeComplexity.toUpperCase()}
              </h3>
              <h3 style={props.complexityTexts}>
                Space Complexity : {data.complexity.spaceComplexity.toUpperCase()}
              </h3>
            </Paper>
          </div>
        );
      })}
    </>
  );
}
