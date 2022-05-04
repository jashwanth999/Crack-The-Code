import Approachs from "../Components/RightDivComponents/Approachs";
import CenterImage from "./CenterImage";
import CodeTab from "./CodeTab";
import Editor from "./Editor";
import Code from "../Helpers/Code";
import { colorList } from "./helpersData";
import parser from "html-react-parser";
import { Paper } from "@mui/material";
export const tools = {
  title: (value) => (
    <h2 style={{ color: "#3498DB", textAlign: "center" }}>{value}</h2>
  ),
  header: (value) => <h3 style={{ margin: 10 }}>{value}</h3>,
  description: (value) => (
    <Paper elevation={0} style={editorStyle}>
      <p style={textStyle}>{parser(value)}</p>
    </Paper>
  ),
  image: (image) => <CenterImage image={image} />,
  code: (value) => <CodeTab data={value} />,
  onlycpp: (value) => <Code lineNum={true} language={"cpp"} code={value} />,
};

export const leetcodeTools = {
  title: (value) => (
    <h2 style={{ color: "#3498DB", textAlign: "center" }}>{value}</h2>
  ),
  difficult: (value) => (
    <span
      style={{
        ...difficultSpan,
        backgroundColor: colorList[value],
      }}
    >
      {value}
    </span>
  ),
  description: (value) => (
    <Editor code={value} language={"text"} disabled={true} />
  ),
  image: (image) => <CenterImage image={image} />,
  approaches: (value) => (
    <Approachs
      complexityDesc={complexityDesc}
      complexityPaper={complexityPaper}
      approaches={value}
      statementDiv={statementDiv}
      complexityTexts={complexityTexts}
      headerStyle={headerStyle}
    />
  ),
};

const textStyle = {
  fontFamily: "Arial",
  lineHeight: 1.6,
  fontSize: 15,
};
const editorStyle = {
  padding: 6,
  paddingTop: 0,
  paddingBottom: 0,
  borderRadius: 5,
  backgroundColor: "white",
  color: "black",
  overflow: "auto",
  lineHeight: 0,
  margin: 10,
};

export const homeTools = {
  title: (value) => (
    <h2 style={{ color: "#3498DB", textAlign: "center" }}>{value}</h2>
  ),
  description: (value) => (
    <Editor code={value} language={"text"} disabled={true} />
  ),
};

// styles

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
  paddingTop: 0,
  paddingLeft: 5,
  paddingBottom: 0,
  textAlign: "left",
  textDecoration: "underline",
  textUnderlineOffset: 1,
};

const complexityTexts = {
  textAlign: "left",
  paddingLeft: 10,
  margin: 3,
  color: "#04B687",
  fontSize: 14,
};

const complexityPaper = {
  backgroundColor: "#f7f9faf2",
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
