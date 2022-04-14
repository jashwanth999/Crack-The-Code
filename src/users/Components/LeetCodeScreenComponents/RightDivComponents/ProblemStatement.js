import { Paper, Typography } from "@mui/material";
import React from "react";

export default function ProblemStatement(props) {
  return (
    <>
      <h3 style={props.headerStyle}> Problem Statement</h3>
      <Paper style={props.statementDiv} elevation={0}>
        <Typography style={{ margin: 10, whiteSpace: "pre-line" }}>
          {props.problemData.problemStatement}
        </Typography>
      </Paper>
    </>
  );
}
