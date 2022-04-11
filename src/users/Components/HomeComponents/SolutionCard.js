import * as React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import { StyleRoot } from "radium/lib";
import { Button, Typography } from "@mui/material";

export default function SolutionCard() {
  return (
    <StyleRoot>
      <Box
        sx={{
          display: "flex",

          flexWrap: "wrap",
          "& > :not(style)": {
            m: 1,
            width: "100%",
          },
        }}
      >
        <Paper style={paper} elevation={3}>
          <div style={headDiv}>
            <img
              style={image}
              alt=""
              src="https://leetcode.com/_next/static/images/logo-dark-c96c407d175e36c81e236fcfdd682a0b.png"
            />
            <h2> Leetcode solutions</h2>
          </div>
          <Typography style={{ padding: 10 }}>
            LeetCode is one of the most well-known online judge platforms that
            you can use to practice your programming skills by solving coding
            questions. LeetCode is one of the most well-known online judge
            platforms that you can use to practice your programming skills by
            solving coding questions.
          </Typography>
          <Button
            href="/leetcode-solutions/1-Two-sum"
            style={{
              backgroundColor: "rgb(0, 30, 60)",
              color: "white",
              borderTopLeftRadius: 0,
              borderTopRightRadius: 0,
            }}
            variant="text"
          >
            {" "}
            Let's Go
          </Button>
        </Paper>
      </Box>
    </StyleRoot>
  );
}
const paper = {
  display: "flex",
  flexDirection: "column",
};

const headDiv = {
  display: "flex",
  flex: 1,
  alignItems: "center",
  justifyContent: "center",
};

const image = {
  heigth: 20,
  width: 30,
  objectFit: "contain",
  borderRadius: 5,
  padding: 4,
  marginRight: 3,
  backgroundColor: "black",
  "@media (max-width: 500px)": {},
};
