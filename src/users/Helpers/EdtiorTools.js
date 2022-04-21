import Approachs from "../Components/RightDivComponents/Approachs";
import CenterImage from "./CenterImage";
import Editor from "./Editor";
import { colorList } from "./helpersData";
export const tools = {
  title: (value) => (
    <h2 style={{ color: "#3498DB", textAlign: "center" }}>{value}</h2>
  ),
  header: (value) => <h3 style={{ margin: 10 }}>{value}</h3>,
  description: (value) => (
    <Editor code={value} language={"text"} disabled={true} />
  ),
  image: (image) => <CenterImage image={image} />,
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
  fontSize: 14,
};

const complexityPaper = {
  backgroundColor: "#212F3C",
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
