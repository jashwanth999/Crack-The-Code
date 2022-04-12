import * as React from "react";
import { Button, Divider, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function FieldCard() {
  const navigate = useNavigate();
  return (
    <div style={rootDiv}>
      <div style={headDiv}>
        <img
          style={image}
          alt=""
          src="https://leetcode.com/_next/static/images/logo-dark-c96c407d175e36c81e236fcfdd682a0b.png"
        />
        <h3> Leetcode solutions</h3>
      </div>
      <Typography style={{ }}>
        LeetCode is one of the most well-known online judge platforms that you
        can use to practice your programming skills by solving coding questions.
        LeetCode is one of the most well-known online judge platforms that you
        can use to practice your programming skills by solving coding questions.
      </Typography>
      <Button
        onClick={() => {
          navigate("/leetcode-solutions/1-Two-Sum");
        }}
        style={{
          color: "#2ECC71",
          fontWeight: "bold",
        }}
        variant="text"
      >
        {" "}
        Click here
      </Button>
      <Divider style={{ color: "grey", height: 4 }} />
    </div>
  );
}

const rootDiv = {
  margin:10
};
const headDiv = {
  display: "flex",
  flex: 1,
  alignItems: "center",
};

const image = {
  heigth: 20,
  width: 25,
  objectFit: "contain",
  borderRadius: 5,
  padding: 4,
  marginRight: 3,
  backgroundColor: "black",
};
