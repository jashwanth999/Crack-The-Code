import { Paper } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ExampleCode from "./exampleCode";
import YoutubeEmbed from "./YoutubeEmbed";
import { db } from "../../Api/Firebase";
import { doc, onSnapshot } from "firebase/firestore";
import Title from "../Components/RightDivComponents/Title";
import ProblemStatement from "../Components/RightDivComponents/ProblemStatement";
import Approachs from "../Components/RightDivComponents/Approachs";
const colorList = {
  Medium: "#F39C12",
  Hard: "#E00E0E",
  Easy: "#27AE60",
};
export default function RightDiv() {
  const [problemData, setProblemData] = useState("");
  const { id } = useParams();
  const text = id.replace(/ /g, " ");

  useEffect(() => {
    if (id) {
      const unsub = onSnapshot(doc(db, "leetcode-solutions", id), (doc) => {
        setProblemData(doc.data());
      });
      return unsub;
    }
  }, [id]);
  const transformedText = `${text[0]}. ${text.substring(2).replace(/-/g, " ")}`;
 

  return (
    <div style={rootDiv}>
      <Title
        colorList={colorList}
        problemData={problemData}
        text={transformedText}
        difficultSpan={difficultSpan}
      />
      <ProblemStatement
        problemData={problemData}
        headerStyle={headerStyle}
        statementDiv={statementDiv}
      />

      {problemData.testCases && (
        <ExampleCode
          lineNum={false}
          code={problemData?.testCases?.code}
          language={problemData?.testCases?.language}
        />
      )}
      <br />
      <Approachs
        complexityDesc={complexityDesc}
        complexityPaper={complexityPaper}
        problemData={problemData}
        statementDiv={statementDiv}
        complexityTexts={complexityTexts}
        headerStyle={headerStyle}
      />
      <br />
      <h3 style={headerStyle}>Links</h3>
      <Paper style={youtubePaper} elevation={0}>
        <YoutubeEmbed link={problemData.links} />
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
