import { Paper } from "@mui/material";
import ExampleCode from "./exampleCode";
import YoutubeEmbed from "./YoutubeEmbed";
import Title from "../Components/RightDivComponents/Title";
import ProblemStatement from "../Components/RightDivComponents/ProblemStatement";
import Approachs from "../Components/RightDivComponents/Approachs";
import ReactLoading from "react-loading";
import Tags from "../Components/RightDivComponents/Tags";
const colorList = {
  Medium: "#F39C12",
  Hard: "#E00E0E",
  Easy: "#27AE60",
  Array: "#EC7063",
  "Two Pointer": "#5499C7",
  "Hash Map": "#48C9B0",
  String: "#B03A2E ",
  "Number theory": "#34495E",
  "Linked List": "#8E44AD",
};
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
      <Title
        colorList={colorList}
        problemData={props.problemData}
        text={props.text}
        difficultSpan={difficultSpan}
      />
      <Tags colorList={colorList} problemData={props.problemData} />
      <ProblemStatement
        problemData={props.problemData}
        headerStyle={headerStyle}
        statementDiv={statementDiv}
      />

      {props.problemData.testCases && (
        <ExampleCode
          lineNum={false}
          code={props.problemData?.testCases?.code}
          language={props.problemData?.testCases?.language}
        />
      )}
      <br />
      <Approachs
        complexityDesc={complexityDesc}
        complexityPaper={complexityPaper}
        problemData={props.problemData}
        statementDiv={statementDiv}
        complexityTexts={complexityTexts}
        headerStyle={headerStyle}
      />
      <br />
      <h3 style={headerStyle}>Links</h3>
      <Paper style={youtubePaper} elevation={0}>
        <YoutubeEmbed link={props.problemData.links} />
      </Paper>

      <br />
    </div>
  );
}

const rootDiv = {
  display: "flex",
  flexDirection: "column",
  width: "98%",
};
const difficultSpan = {
  padding: 6,

  borderRadius: 5,
  color: "white",
  fontWeight: "bold",
  width: 70,
  margin: 10,
};
const statementDiv = {
  backgroundColor: "#ECF0F1",
  margin: 10,
  display: "flex",
  textAlign: "left",
};
const headerStyle = {
  margin: 10,
  borderLeft: "solid #2E86C1 4px",
  paddingTop: 0,
  paddingLeft: 5,
  paddingBottom: 0,
  textAlign: "left",
};

const complexityTexts = {
  textAlign: "left",
  paddingLeft: 10,
  margin: 3,
  color: "#04B687",
  fontSize: 17,
};

const complexityPaper = {
  backgroundColor: "#ECF0F1",
  margin: 10,
  display: "flex",
  textAlign: "left",
  flexDirection: "column",
  padding: 10,
};

const complexityDesc = {
  textAlign: "left",
  paddingLeft: 10,
  margin: 3,
  color: "black",
  fontSize: 14,
  fontWeight: "bold",
};

const youtubePaper = {
  backgroundColor: "#ECF0F1",
  margin: 10,
  display: "flex",
  padding: 10,

  alignItems: "center",
  justifyContent: "center",
};
