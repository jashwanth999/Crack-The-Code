import React from "react";
import { Button, Divider, Typography } from "@mui/material";
export default function Footer() {
  return (
    <div style={footerRoot}>
      <Typography
        style={{ textAlign: "left", color: "black", margin: 0, fontSize: 16 }}
      >
      
      </Typography>
    </div>
  );
}

const footerRoot = {
  width: "100%",
  backgroundColor: "white",
  height: "auto",
  padding: 10,
  marginTop: 10,
};
