import ReactLoading from "react-loading";
import Code from "../Helpers/Code";
import parser from "html-react-parser";
import { Paper, Typography } from "@mui/material";
import Editor from "../Helpers/Editor";
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
  if (props.screen === "cs")
    return (
      <div style={{ width: "99%" }}>
        <h2 style={{ color: "#3498DB", textAlign: "center" }}>
          {props.problemData?.probName}
        </h2>
        <Paper
          elevation={0}
          style={{
            margin: 10,
            padding: 8,
           
          }}
        >
          {props.problemData &&
            props.problemData.blocks.map((block, index) => {
              if (block.code) {
                return <Code key={index} code={block.val} language={"cpp"} />;
              } else if (block.output) {
                return  <Editor code={block.val} language={"text"} disabled={true} />
              } else {
                return (
                  <Paper elevation={0} key={index}>
                    <Typography
                      style={{
                        textAlign: "left",
                      }}
                    >
                      {parser(block.val)}
                    </Typography>
                  </Paper>
                );
              }
            })}
        </Paper>
        <br />
      </div>
    );
  else
    return (
      <div style={rootDiv}>
        {props.problemData &&
          props.problemData.map((x, index) => {
            return (
              <div style={{ textAlign: "left" }} key={index}>
                {props.tools[x.name](x.value)}
              </div>
            );
          })}
      </div>
    );
}

const rootDiv = {
  display: "flex",
  flexDirection: "column",
  width: "98%",
};
