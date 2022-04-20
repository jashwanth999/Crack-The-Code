import { Paper } from "@mui/material";
import React from "react";
import { colorList } from "../../../Helpers/helpersData";
//import ExampleCode from "../../../Helpers/exampleCode";
import Tags from "./Tags";
import Editor from "../../../Helpers/Editor";
// import CodeView from "../../../Helpers/CodeView";

import CodeTab from "../../../Helpers/CodeTab";
import CenterImage from "../../../Helpers/CenterImage";
export default function Approachs(props) {
  return (
    <>
      {props.problemData.approachList?.map((data, index) => {
        return (
          <div style={{ textAlign: "left" }} key={index}>
            <h3 style={props.headerStyle}>
              Approach {index + 1} - {data.approachName}{" "}
            </h3>
            <Tags colorList={colorList} data={data} />

            <Editor
              code={data.approachDescription}
              language={"text"}
              disabled={true}
            />
            {data.image && <CenterImage image={data.image} />}

            <div style={{ margin: 10 }}>
              <CodeTab data={data} />
            </div>
            <Paper elevation={0} style={props.complexityPaper}>
              <h4 style={props.complexityTexts}>
                Time Complexity : {data.complexity.timeComplexity.toUpperCase()}
              </h4>
              <h4 style={props.complexityTexts}>
                Space Complexity :{" "}
                {data.complexity.spaceComplexity.toUpperCase()}
              </h4>
            </Paper>
          </div>
        );
      })}
    </>
  );
}
